// Validador de CPF

//  546.522.618-88

/*
CONTA PARA VALIDAR O CPF
5x 4x 6x 5x 2x 2x 6x 1x 8x
10 9  8  7  6  5  4  3  2
50 36 48 35 12 10 24 3 16 = 234

5x 4x 6x 5x 2x 2x 6x 1x 8x 8x
11 10 9  8  7  6  5  4  3  2
55 40 54 40 14 12 30 4  24 16 = 289


se o digito for maior que 9 consideramos 0
11 - (234 % 11) = 8
11 - (289 % 11) = 8

*/

// let cpf = '546.522.618-88';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// cpfArray = Array.from(cpfLimpo);

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })

}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'underfined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
};


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        console.log(regressivo, val, regressivo * val)
        regressivo--;
        return ac;
    }, 0)
};

const cpf = new ValidaCPF('546.522.618-88');
console.log(cpf.valida());