// iife --> immediately invoked function expression

(function (idade, peso, altura){
    const sobrenome = 'Silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Victor'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 113, 1.74);
