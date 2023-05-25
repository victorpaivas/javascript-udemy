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