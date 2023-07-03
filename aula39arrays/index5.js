// Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne um array com o dobro dos valores (Map)
const total = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2)
 return acumulador;
}, []);
// console.log(total);

// Some todos os números (reduce)
const total1 = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
 return acumulador;
}, []);
// console.log(total1);

// Retorne um array com pares (Filter)
const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 ===0) acumulador.push(valor);
 return acumulador;
}, []);
// console.log(total2);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);