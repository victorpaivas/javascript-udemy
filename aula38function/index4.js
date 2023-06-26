// escopo léxico

// const nome = 'Victor';

// function falaNome() {
    
//     console.log(nome);
// }

// function usaFalaNome() {
//     const nome = 'Silva';
//     falaNome();
// }

// usaFalaNome();

// Function closures


function retornaFuncao() {
    const nome = 'Victor';
    return function () {
        return nome;
    };
}


const funcao = retornaFuncao();
console.dir(funcao);