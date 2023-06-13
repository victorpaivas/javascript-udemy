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

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('mundo!'));