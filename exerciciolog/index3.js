// Escreve uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÂO é divisível por 3 e 5 = Retorna o própio número
// Checar se o número é realmente um número
// Use a função com número de 0 a 100


function getNumber(num){
    if (num / 3){
        return 'Fizz';
    }else if (num / 5){
        return 'Buzz';
    }else if (num / 3 && num / 5){
        return 'FizzBuzz';
    }
}

console.log(getNumber(25))