const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Victor',
    sobrenome: 'Silva',
    idade: 27
};

//para acessar o objeto
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let i in pessoa){
    console.log(pessoa[i]);
    console.log(i);    // conta os indices do objeto 
    console.log(i, pessoa[i]);
}

for (let i in frutas) {
    console.log(i);    // conta os indices da array
    console.log(frutas[i]);
}

//for clássico
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}