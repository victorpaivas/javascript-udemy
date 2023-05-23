//  indices   012345678910
const nome = 'Victor Silva';

// for clássico => geralmente com iteráveis (arrays ou strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

// for in => retorna o indíce ou chave (strings, arrays ou objetos)
for (let i in nome) {
    console.log(nome[i]);
}

// for of => retorna o valor em si iteráveis (arrays ou strings)
for (let valor of nome) {
    console.log(valor);
}

const frutas = ['Pera', 'Uva', 'Maçã'];

for (let valor of frutas) {
    console.log(valor);
}

frutas.forEach(function(valor, indice) {
    console.log(valor, indice);
});