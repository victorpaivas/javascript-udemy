/*
Tipos de dados primitivos são (imutáveis)
string, number, boolean, underfined, null (bigint, symbol) - Valores Copiados

Referência (mutável) - array, objetc, function - Passados por referência
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b)

b.pop();
console.log(a, b);

a.push('Victor');

console.log(a, c);


let pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Silva'
};

const pessoa2 = {...pessoa1};

pessoa1.nome = 'João';
console.log(pessoa1, pessoa2);
