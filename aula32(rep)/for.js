// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


// i - index
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
                         // posso pular de 10 em 10
for (let i = 0; i <= 50; i+= 10) {
    console.log(i);
}

const frutas = ['Maçã', 'Pera', 'Uva', 'Banana', 'Limão', 'Abacaxi', 'Manga', 'Acerola'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}