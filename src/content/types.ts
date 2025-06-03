
//ENUM
enum cores {

    vermelho,
    verde,
    violeta,
    corQualquer,
}

console.log("Estrutura do enum:", cores);



//UNKNOWN
export function utilizandoUnknown() {
    let numero: unknown;

    let numero2 = 200
    numero = 'Antonio Gabriel';

    if (typeof numero === 'string') {

        let array = (numero.split(' '));
        let newString = array.join('...');
        console.log("String nova", newString);
        console.log("Array antigo", array);


    }

    //Ao tentar fazer operação com unknown é preciso checar 
    if (typeof numero === 'number') {
        console.log(numero + numero2);
    }
}

utilizandoUnknown();


