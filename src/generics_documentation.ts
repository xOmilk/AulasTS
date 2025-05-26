export function identity<Type>(arg: Type): Type {
    return arg;
}

//Chamada da função pode ser passando necessariamente o tipo a ser utilizado
let output = identity<string>("myString");

//Chamada pode ser feita deixando a cargo do typescript pra fazer a inferencia de tipos
let output1 = identity("myString");