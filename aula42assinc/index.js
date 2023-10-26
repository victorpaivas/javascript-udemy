// Promise

function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string')
            reject('ERROR:')
        setTimeout(() => {
            resolve(msg); // parametro unico
        }, tempo);      
    });
}

esperaAi('Conexão com DB...', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando os dados da DB... ', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando os dados DB, aguarde conexão...', rand(1, 3))
}).then(resposta => {
    console.log(resposta)
}).then(resposta => {
    console.log('Exibindo resp na tela...')
    return esperaAi('22222', rand(1, 3))
})
.catch(err => {
    console.log(err + 'ERROR BAD VALUE')
});
