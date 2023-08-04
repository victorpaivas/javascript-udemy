const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};

const comer = {   
    comer() {
        console.log(`${this.nome} está comendo.`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

// *** copiando o método com spread operator ***
// const pessoaPrototype =  {...falar, ...comer, ...beber}

//  *** copiando o método com object assing ***
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    // linkar o prototype de pessoaPrototype para o criaPessoa para não ficar criando vários métodos e repetidos.
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

};


const p1 = criaPessoa('Victor', 'Silva');
const p2 = criaPessoa('André', 'Santos');
console.log(p1)