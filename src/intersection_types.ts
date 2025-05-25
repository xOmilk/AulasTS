type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade


let pessoaQualquer: Pessoa = {
    nome: 'Antonio',
    sobrenome: 'julio',
    idade: 21
}

console.log(pessoaQualquer);







export default 1;