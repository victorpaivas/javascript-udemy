/*
Entre 0 - 11 horas -> Bom Dia!
Entre 12 - 17 -> Boa Tarde!
Entre 18 - 23 -> Boa Noite!
*/

// If -> pode ser usado sozinho com a condição dentro dele.
// Else If -> não pode ser usado sozinho, sempre que utilizo a palavra Else preciso de um If anteriormente, posso ter vários Elses Ifs na checagem. E também podemos utlizar condições sem Else If. 
// Else  -> só posso ter 1 na checagem


const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Error')
}


const tenhoDinheiro = false;

if (tenhoDinheiro) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
