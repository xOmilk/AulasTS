
//Definindo novos tipos criados por mim
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

//Definindo um objeto literal
let pessoaLiteral: Pessoa = {
    nome: "Fulano",
    idade: 21,
    salario: 3_000,
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor }
}
console.log(pessoaLiteral);

pessoaLiteral = setCorPreferida(pessoaLiteral, 'Verde');
console.log(pessoaLiteral);

export default 1;

