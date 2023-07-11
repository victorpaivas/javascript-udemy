/*
Métodos Úteis Para Objetos

Object.values (retorna os valores)
Object.entries (retorna chaves e valores)
Object.assign(destino, qualquer outro) (copiar objeto)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread) (copiar objeto)
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Objeto original
const produto = { nome: 'Caneca 1', preco: 1.8} ;

// ... (spread) (copiar objeto)
// const produto2 = { ...produto, material: 'porcelana'};

// Object.assign(destino, qualquer outro)  (copiar objeto)
// const produto2 = Object.assign({}, produto, { material: 'porcelana'});

// copiar objeto somente algumas chaves
const produto2 = { nome: produto.nome, preco: produto.preco}


// Object.getOwnPropertyDescriptor(objeto, 'propriedade ou chave')
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//Object.values (retorna somente os valores)
// console.log(Object.values(produto));

//Object.entries (retorna chaves e valores)
// console.log(Object.entries(produto));
            //posso iterar
for (let entry of Object.entries(produto2)) {
    console.log(entry)
}


// produto2.nome = 'Caneca 2';
// produto2.preco = 2.5;
// console.log(produto);
// console.log(produto2);
// console.log(Object.keys(produto))


