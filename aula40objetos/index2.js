// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave através do Object.keys() ou for in
        value: estoque,  // valor da chave
        writable: false,  // valor alterável
        configurable: false // pode apagar a chave ou reconfigurar?
    });

    Object.defineProperties(this, {
       nome: {
        enumerable: true,
        value: nome, 
        writable: false,  
        configurable: false 
       },
       preco: {
        enumerable: true,
        value: preco, 
        writable: false, 
        configurable: false 
       }
    })
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);