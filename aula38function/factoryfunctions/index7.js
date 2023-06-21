function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`
        }
    }
}

const p1 = criaPessoa('Victor', 'Silva');
console.log(p1);