// Manipulando Prototypes

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);
const p1 = new Produto ('Camiseta', 50);

p2.desconto(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100       
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

p3.aumento(10);
console.log(p3)






// const objA = {
//     chaveA: 'A'

//     // _proto_: Object.protype
// };

// const objB = {
//     chaveB: 'B'

//     // _proto_: objA
// };

// const objC = new Object;
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);
// console.log(objC.chaveB);