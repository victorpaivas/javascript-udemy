// Arrow function =>
const raiz = n => n ** 0.5;


console.log(raiz(9))

const raiz2 = function (n) {
    return n ** 0.5;
};

console.log(raiz2(49))


function soma(x =1 , y = 1) {
    const resultado = x + y;
    return resultado;
}

let resultado = soma(10, 10)
console.log(resultado);  // 8 o x passou a valer 4 e o y também.



function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Victor');
console.log(variavel);