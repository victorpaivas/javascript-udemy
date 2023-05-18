const pessoa = {

 nome: 'Victor',
 sobrenome: 'Silva',
 idade: 27,
 endereco:  {
    rua: 'Avenida São Paulo',
    numero: 475
 }

};

// Atribuição via desestruturação
const {nome, sobrenome, endereco} = pessoa;
console.log(nome, sobrenome, endereco);

//posso pegar somente algo dentro do objeto
const { endereco: {rua , numero}, endereco} = pessoa;
console.log(rua, numero, endereco);

           //também posso fazer
const {nome = 'João', sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);
         ou assim
const { nome: test = '', sobrenome, idade} = pessoa;
console.log(test, sobrenome, idade);

    //também posso pegar somente o resto com operador ...
const {nome, ...resto} = pessoa;
console.log(resto);