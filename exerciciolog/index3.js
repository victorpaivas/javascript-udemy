<<<<<<< HEAD
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
=======
// Escreva uma função que receba um número 
// retorno o seguinte:
// número é divisível por 3 = Fizz
// número é divisível por 5 = Buzz
// número NÂO é divisível por 3 e por 5 = retorna o própio número
// Checar se o número é realmente um número = retorna o própio número
// use a função com números de 0 a 100


const getNumber = (num) => {
    
    return (isNaN(num)) ? `${num}` :
    
    ((num % 3 === 0) && (num % 5 === 0)) ? 'FizzBuzz' :
    (num % 3 === 0) ? 'Fizz' :
    (num % 5 === 0) ? 'Buzz' :
    `${num}`;

}

for (let i = 0; i <= 100; i++) {
    console.log(i, getNumber(i))
}
>>>>>>> ca675faf03c5cc924315e3fcb9092743111fefe0
