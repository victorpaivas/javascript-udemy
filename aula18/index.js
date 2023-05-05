const pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Silva',
    idade: 28,

    fala () {
        console.log(`A minha idade atual é de ${this.idade}.`)
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

//const pessoa1 = {
   // nome: 'Victor',
   // sobrenome: 'Silva',
    idade: 28,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
};

pessoa1.fala();

const pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Silva',
    idade: 28,

    fala () {
        console.log('Olá mundo')
    }
};

pessoa1.fala();

// function factory
function criarPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Victor', 'Silva', 28)
const pessoa2 = criarPessoa('João', 'Santos', 33)
const pessoa3 = criarPessoa('José', 'Rodrigues', 43)
const pessoa4 = criarPessoa('Maria', 'Lira', 31)
const pessoa5 = criarPessoa('Antonia', 'Lima', 66)

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);


//Objeto
const pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Silva',
    idade: 28,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
//ou posso utilizar
console.log(pessoa1);