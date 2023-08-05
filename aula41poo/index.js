// Classes


// formas de declarar classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

// const Pessoa5 = class  {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
//     falar() {
//         console.log(`${this.nome} está falando.`)
//     }
// }

    // precisa declarar a palavra new da mesma forma que Constructor Function
const p1 = new Pessoa('Victor', 'Silva');


// Constuctor Function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p2 = new Pessoa2('José', 'Santos');