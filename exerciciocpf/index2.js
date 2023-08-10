// Validador de CPF usando Class

class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;

    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        let total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);

    }
}

const validacpf = new ValidaCpf('070.987.720-03');
// const validacpf = new ValidaCpf('111.111.111-11 ');

if (validacpf.valida()) {
    console.log('CPF Válido.')
} else {
    console.log('CPF Inválido.')
}