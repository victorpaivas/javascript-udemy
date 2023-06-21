// factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome =
            console.log(valor)
        },

        fala: function (assunto = 'falando sobre a vida') {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Paiva', 1.75, 113);
const p2 = criaPessoa('José', 'Silva', 1.70, 78);
const p3 = criaPessoa('Maria', 'Rodrigues', 1.65, 58);




