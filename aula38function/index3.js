//return
// retorna um valor
// termina a função

// function soma(a, b) {
//     return a + b;
// }

// function soma2(a,b){
//     console.log(a + b);
// }

// soma2(5, 2);

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa('Victor', 'Silva');

// console.log(typeof p1);
// console.log(p1);

// function falaFrase(comeco) {
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('comeco');
// const resto = fala('resto!');
// console.log(resto);
//Retorno da função

function criaMultiplicador(multiplicador) {
    // multiplicador  => escopo
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(5));
console.log(quadriplica(10));