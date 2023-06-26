// Função construra 


function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 12345;

    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Victor', 'Silva');
const p2 = new Pessoa('Maria', 'Santos');

console.log(p1.nome, p1.sobrenome);
p1.metodo();
p2.metodo();
