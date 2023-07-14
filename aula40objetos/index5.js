// Construtora --> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Pessoa.prototype === pessoa1._proto_
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

//instância
const pessoa1 = new Pessoa('Victor', 'Silva.')// <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('André', 'Santos.')// <- Pessoa = Função Construtora
const data = new Date();

console.dir(data)
console.dir(pessoa1);
console.dir(pessoa2);