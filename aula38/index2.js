// A função declarada com a palavra inicial function ou as function express tem uma váriavel especial que sustena todos os argumentos enviados chamada arguments.
// preciso mandar o valor ´undefined´ para um argumento ir vazio.
const conta = function conta(operador, acumulador,...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 5, 20, 30, 40, 50);


function funcao1({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj =  {nome: 'Victor', sobrenome: 'Silva', idade: 27 }
funcao1(obj)

function funcao({a, b = 2,c = 4}){
    //b = b || 0;  forma antiga 
    console.log(a + b + c);
}
funcao(2, undefined, 20);