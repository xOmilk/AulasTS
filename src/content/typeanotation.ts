
let nome: string = 'Antonio';
let idade: number = 21;
let adulto: boolean = true;

let linguagensArray: string[] = [

    "java",
    'C',
    'javascript',
    'typescript',
    'php'

]

let pessoa: { nome: string, idade: number, adulto?: boolean } = {

    nome,
    idade,
    adulto,
}

function soma(valor1: number, valor2: number) {
    return valor1 + valor2;
}

const result = soma(1, 2);




export default 1;