export class Colaborador {

    constructor(
        readonly nome: string,
        readonly sobrenome?: string
    ) {
        //Ação desejada dentro do construtor

    }


}

export class Empresa {

    readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    setColaborador(...colaborador: Colaborador[]) {
        this.colaboradores.push(...colaborador);
    }

    getColaboradores() {
        this.colaboradores.forEach(element => {
            console.log("Colaborador", element.nome);
        });
    }
}

const empresa1 = new Empresa('Udemy', 'cnpj ficticio');


const colab1 = new Colaborador('Joao');
const colab2 = new Colaborador('Maria');
const colab3 = new Colaborador('Jose');

empresa1.setColaborador(colab1, colab1, colab3);

//console.log(empresa1);
empresa1.getColaboradores()
