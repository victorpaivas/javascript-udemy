// Retorne a soma do dobro de todos os pares
// --> Filtrar pares
// --> Dobrar os valores
// --> Reduzir (somar tudo)

// Retorna
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor) {
    if (valor % 2 === 0) {
        return valor;
    }
});

console.log(numerosPares);

const dobraValores = numeros.map(function(valor) {
    return valor * 2;
})

// console.log(dobraValores);


const somarTudo = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);

// console.log(somarTudo);
