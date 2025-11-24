import  { useState, useEffect, type ChangeEvent } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Versão estável do Worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface ParagrafoProcessado {
	id: string;
	texto: string;
}

interface ItemCru {
	str: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

export function LeitorPDF() {
	const [paragrafos, setParagrafos] = useState<ParagrafoProcessado[]>([]);
	const [carregando, setCarregando] = useState<boolean>(false);
	const [progresso, setProgresso] = useState<string>("");
	const [blocoFocado, setBlocoFocado] = useState<number>(0);

	// --- NAVEGAÇÃO ---
	useEffect(() => {
		const handleKeyDown = (e: globalThis.KeyboardEvent) => {
			if (paragrafos.length === 0) return;
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setBlocoFocado((prev) =>
					Math.min(prev + 1, paragrafos.length - 1)
				);
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setBlocoFocado((prev) => Math.max(prev - 1, 0));
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [paragrafos]);

	useEffect(() => {
		const elemento = document.getElementById(`bloco-${blocoFocado}`);
		if (elemento) {
			elemento.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}, [blocoFocado]);

	// --- 1. Extração Bruta das Linhas (Como antes) ---
	const extrairLinhasBrutas = (todosItens: ItemCru[]) => {
		const linhasMap = new Map<number, ItemCru[]>();
		const TOLERANCIA_Y = 6; // Reduzi a tolerância para ser mais preciso

		todosItens.forEach((item) => {
			let yEncontrado = -1;
			for (const yExistente of linhasMap.keys()) {
				if (Math.abs(yExistente - item.y) < TOLERANCIA_Y) {
					yEncontrado = yExistente;
					break;
				}
			}
			const chaveY = yEncontrado !== -1 ? yEncontrado : item.y;
			if (!linhasMap.has(chaveY)) linhasMap.set(chaveY, []);
			linhasMap.get(chaveY)?.push(item);
		});

		// Ordena linhas (Topo -> Base)
		const alturasOrdenadas = Array.from(linhasMap.keys()).sort(
			(a, b) => b - a
		);

		const linhasTexto: { texto: string; y: number; height: number }[] = [];

		alturasOrdenadas.forEach((yKey) => {
			const itens = linhasMap.get(yKey) || [];
			itens.sort((a, b) => a.x - b.x); // Ordena esquerda -> direita

			let textoLinha = "";
			let ultimoX = -1000;
			let alturaMedia = 0;

			itens.forEach((item) => {
				alturaMedia = Math.max(alturaMedia, item.height); // Pega maior altura da linha

				// Lógica de Espaço Horizontal
				if (ultimoX > -1) {
					const gap = item.x - ultimoX;
					// Se o gap for muito pequeno (menos que 20% da altura da fonte), é a mesma palavra
					// Se for maior, é um espaço
					if (gap > item.height * 0.3) {
						textoLinha += " ";
					}
				}
				textoLinha += item.str;
				ultimoX = item.x + item.width;
			});

			if (textoLinha.trim()) {
				linhasTexto.push({
					texto: textoLinha.trim(),
					y: yKey,
					height: alturaMedia || 12,
				});
			}
		});

		return linhasTexto;
	};

	// --- 2. Reconstrução Semântica (A Mágica da União) ---
	const reconstruirParagrafos = (
		linhas: { texto: string; y: number; height: number }[]
	): ParagrafoProcessado[] => {
		const resultado: ParagrafoProcessado[] = [];
		if (linhas.length === 0) return [];

		let bufferTexto = linhas[0].texto;
		let yAnterior = linhas[0].y;
		let alturaAnterior = linhas[0].height;

		for (let i = 1; i < linhas.length; i++) {
			const linhaAtual = linhas[i];
			const distY = Math.abs(yAnterior - linhaAtual.y); // Distância vertical

			// Heurística: Se a distância for menor que 2x a altura da letra, é o mesmo parágrafo
			const ehMesmoParagrafo = distY < alturaAnterior * 2.5;

			if (ehMesmoParagrafo) {
				// --- DE-HIFENIZAÇÃO ---
				if (bufferTexto.endsWith("-") || bufferTexto.endsWith("–")) {
					// Remove o hífen e junta direto (ex: "comuni-" + "cação" -> "comunicação")
					bufferTexto = bufferTexto.slice(0, -1) + linhaAtual.texto;
				} else {
					// Junta com espaço normal
					bufferTexto += " " + linhaAtual.texto;
				}
			} else {
				// É um novo parágrafo (distância grande)
				resultado.push({ id: crypto.randomUUID(), texto: bufferTexto });
				bufferTexto = linhaAtual.texto;
			}

			yAnterior = linhaAtual.y;
			alturaAnterior = linhaAtual.height;
		}

		// Empurra o último que sobrou
		resultado.push({ id: crypto.randomUUID(), texto: bufferTexto });

		return resultado;
	};

	const manipuladorArquivo = async (e: ChangeEvent<HTMLInputElement>) => {
		const arquivo = e.target.files?.[0];
		if (!arquivo) return;

		setCarregando(true);
		setParagrafos([]);
		setBlocoFocado(0);

		try {
			const buffer = await arquivo.arrayBuffer();
			const pdf = await pdfjsLib.getDocument(buffer).promise;
			let todosItens: ItemCru[] = [];

			for (let i = 1; i <= pdf.numPages; i++) {
				setProgresso(`Lendo página ${i}/${pdf.numPages}...`);
				const pagina = await pdf.getPage(i);
				const textContent = await pagina.getTextContent();

				// Processa itens crus
				const itensPagina = textContent.items.map((item: any) => ({
					str: item.str,
					x: item.transform ? item.transform[4] : 0,
					y:
						(item.transform ? item.transform[5] : 0) +
						(pdf.numPages - i) * 2000, // Stack vertical
					width: item.width || 0,
					height: item.height || 0, // Importante para calcular espaçamento
				}));
				todosItens = [...todosItens, ...itensPagina];
			}

			setProgresso("Reconstruindo parágrafos...");

			// 1. Linhas Físicas
			const linhasBrutas = extrairLinhasBrutas(todosItens);
			// 2. Parágrafos Semânticos
			const paragrafosFinais = reconstruirParagrafos(linhasBrutas);

			setParagrafos(paragrafosFinais);
		} catch (erro) {
			console.error(erro);
			alert("Erro ao processar PDF.");
		} finally {
			setCarregando(false);
			setProgresso("");
		}
	};

	return (
		<div
			style={{
				maxWidth: "800px",
				margin: "0 auto",
				padding: "20px",
				fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
			}}
		>
			<header style={{ textAlign: "center", marginBottom: "30px" }}>
				<h1>Leitor TCC (Modo Fluido)</h1>
				<p style={{ color: "#666", fontSize: "0.9rem" }}>
					Fusão inteligente de parágrafos e correção de hífens.
				</p>
			</header>

			<div style={{ textAlign: "center", marginBottom: "30px" }}>
				<input
					type="file"
					accept=".pdf"
					onChange={manipuladorArquivo}
				/>
				{carregando && (
					<p style={{ color: "#007bff", marginTop: "10px" }}>
						{progresso}
					</p>
				)}
			</div>

			{paragrafos.length > 0 && (
				<div
					style={{
						background: "#fff",
						padding: "60px",
						borderRadius: "8px",
						boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
						minHeight: "60vh",
					}}
				>
					{paragrafos.map((item, index) => {
						const estaFocado = index === blocoFocado;
						return (
							<p
								key={item.id}
								id={`bloco-${index}`}
								onClick={() => setBlocoFocado(index)}
								style={{
									// AJUSTES VISUAIS IMPORTANTES AQUI
									fontSize: "20px", // Fonte confortável
									lineHeight: "1.6", // Entrelinha padrão de livro
									color: estaFocado ? "#000" : "#888", // Preto absoluto no foco
									marginBottom: "24px", // Margem entre parágrafos (não entre linhas!)
									textAlign: "justify", // Justificado fica mais bonito para blocos grandes

									// Efeitos de Foco
									opacity: estaFocado ? 1 : 0.4,
									transition: "all 0.3s ease",
									borderLeft: estaFocado
										? "4px solid #007bff"
										: "4px solid transparent",
									paddingLeft: estaFocado ? "16px" : "0",
									cursor: "pointer",
								}}
							>
								{item.texto}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default LeitorPDF;
