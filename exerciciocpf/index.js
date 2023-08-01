// Validador de CPF

//  546.522.618-88  ...   070.987.720-03

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

// Função Construtora retornando com replace para substituir pontos e traços por espaços vazios.
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })

}

// Área que identifica se o CPF é válido ou não 
ValidaCPF.prototype.valida = function () {
    // se o campo cpf tiver vázio retornará cpf inválido
    if (typeof this.cpfLimpo === 'underfined') return false;
    // se o cpf tiver menos que 11 carácteries retornará cpf inválido
    if (this.cpfLimpo.length !== 11) return false;
    // se o cpf tiver sequência de números iguais retornará cpf inválido 
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};
 // Código para não permitir sequência no CPF exemplo 111.111.111-11
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('546.522.618-88');

// Área que exibe para o usuário se o CPF é válido ou não.
if(cpf.valida()) {
    console.log('CPF Válido')
} else {
    console.log('CPF inválido')
}