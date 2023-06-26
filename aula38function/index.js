//diferentes formas de declarar as funções

// Funções são First-class objects (objetos de primeira classe)
// declaração de função (function hoisting)

function falaOi() {
    console.log('Oi!')
}

falaOi();

// Function expression
const souUmDado = function (){
    console.log('Sou um dado.');
};


function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo');
    funcao();
}
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto posso ter uma function

const obj = {
    falar1: function(){
        console.log('Estou falando...')
    }, // posso declarar direto a function e vai se tornar um método dentro do objeto.
    falar2() {
        console.log('Estou falando 2')
    }
};

obj.falar1();
obj.falar2();