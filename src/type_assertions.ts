//Utilizar para mostrar de fato ao typescript que eu tenho
//certeza que o elemento que quero trabalhar no DOM existe


//condicional
let body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Dizer de fato que o elemento NUNCA VAI SER NULO com o '!'
//Non-null Assertion
let body2 = document.querySelector('body')!;
body2.style.background = 'red';

//type assertion
//Dessa forma é garantido que o elemento é do tipo que você especifica
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = 'blue'


const input = document.querySelector("input") as HTMLInputElement;