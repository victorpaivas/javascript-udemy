/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.9259259258925925 Victor Rodrigues nasceu em ano*/
const nome = 'Victor';
const sobrenome = 'Rodrigues de Paiva';
const idade = 28;
const peso = 118;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade; 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é ${imc.toFixed(2)} e nasceu no ano de ${anoNascimento}.`); //template Strings

console.log(nome, sobrenome,'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é', imc.toFixed(2), 'e nasceu no ano de',anoNascimento,'.'); //sem template string