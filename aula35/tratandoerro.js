function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.')
    }
    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma(1, 'três'));
} catch(error){
   // console.log(error); => não utilizar para exibir o erro para o usuário.
   console.log('Alerta!! Erro dectado.')
}

try {
    console.log(naoExisto);
} catch(erro){
    console.log('naoExisto não existe.')
}