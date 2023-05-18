let a = 'A';  //B
let b = 'B';  // C
let c = 'C';  // A

const letras = [b, c, a];
 [a, b, c] = letras;

 console.log(a, b, c);


      //OPERADOR REST ... (pegar o resto de algo), quando usa no sinal de espalhar ou distribuir algo se chama o spread
//     indice    0  1  2  3  4  5  6  7  8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

 

   // posso pular os arrays que quero atribuir
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , dois, , tres, , seis, , oito] = numeros;
console.log(um, dois, tres, seis, oito);


//array dentro de array
// array principal    0          1        2
// array dentro    0  1  2    0  1  2   0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6],[7, 8, 9] ];

console.log(numeros[1][2]);  // resultado 6
//atribuição via destuturação por arrays (dentro do array)
const [,[,, seis]] = numeros;
console.log(seis) // resultado 6

