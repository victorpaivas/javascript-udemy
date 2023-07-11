// Objeto

// Modo Literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Santos'
};
//Formas de acessar chaves e  valores.
//console.log(pessoa['nome']);
//console.log(pessoa.sobrenome);

// Modo Construtor
const pessoa1 = new Object();
pessoa1.nome = 'Victor';
pessoa1.sobrenome = 'Paiva';
pessoa1.idade = 28;
//Formas de acessar chaves e  valores.  
//console.log(pessoa1['nome']);
//console.log(pessoa1.sobrenome);

// delete pessoa1.nome;  // apaga chave 
// console.log(pessoa1)

pessoa1.FalarNome = function () {
    return (`${this.nome} está falando o nome.`)
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.FalarNome());

// Posso Criar um For In
// for (let chave in pessoa1){
//     console.log(pessoa1);
// }

// Factory Function /  Constructor Function / Classes


//Factory Function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Victor', 'Silva');
// console.log(p1.nomeCompleto);

//    M   O   L   D   E  !
// Constructor Function

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // TRAVA O OBJETO
    Object.freeze(this);
}
// Palavra new cria {} <- this ->
const p1 = new Pessoa('Victor', 'Silva');
const p2 = new Pessoa('André', 'Santos');

