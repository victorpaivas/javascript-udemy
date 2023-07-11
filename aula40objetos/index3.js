// defineProperty -> Getter e Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave através do Object.keys() ou for in
        configurable: true,// pode apagar a chave ou reconfigurar?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('ERROR')
            }
            estoquePrivado = valor;
        }
    });

};

    function criaProduto(nome) {
        return {
            get nome(){
                return nome
            },
            set nome(valor) {
                valor = valor.replace('coisa.', '') // intercerpitar quando utilizo sinal de atribuição no getter e setter
                nome = valor;
            }
        }
    }


// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'
console.log(p2.nome)