function meuEscopo() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        const resultado = document.querySelector('#resultado');
        const grau = document.querySelector('#grau');

        let imc = (peso / (altura * altura)).toFixed(2);

        //Cores de acordo com nível de gravidade do IMC
        let nivel

        if (imc < 18.5) {
            nivel = 'Abaixo do peso'
            grau.style.color = '#5b09c5'
        } else if (imc >= 18.5 && imc <= 24.99) {
            nivel = 'Peso normal'
            grau.style.color = '#48df0c'
        } else if (imc >= 25 && imc <= 29.99) {
            nivel = 'Acima do peso'
            grau.style.color = '#ebe708'
        } else if (imc >= 30 && imc <= 34.99) {
            nivel = 'Obesidade I'
            grau.style.color = '#dfae0c'
        } else if (imc >= 35 && imc <= 39.99) {
            nivel = 'Obesidade II (severa)'
            grau.style.color = '#df480c'
        } else if (imc >= 40) {
            nivel = 'Obesidade III (mórbida)'
            grau.style.color = '#a71420'
        }

        //Validando dados
        if (peso == '' || altura == '') {
            resultado.style.color = '#050505'
            resultado.innerHTML = '[ERROR] Formulário não preenchido corretamente. Verifique seus dados e tente novamente.'
        } else {
            grau.innerHTML = `${nivel}`
            resultado.innerHTML = `Seu IMC é de ${imc}`
        }

    });
}
meuEscopo();
