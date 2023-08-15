// Promise métodos úteis

// Promise.all  |  Promise.race  |  Promise.resolve  | Promise.reject

function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string')
            reject('ERROR:') // parametro unico
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise'); // parametro unico
        }, tempo);      
    });
}

const promises = [
    esperaAi('PROMISE 1 - PASSEI NA PROMISE.', rand(1, 5)),
    esperaAi('PROMISE 2 - PASSEI NA PROMISE.', rand(1,5)),
    esperaAi('PROMISE 3 - PASSEI NA PROMISE.', 1000),
    // esperaAi(1000, 1000),
];

// Promise.all -> retorna todas as promessas
Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(err => {
    console.log(err)
})

// Promise.race -> a primeira que for resolvida irá retornar
Promise.race(promises)
.then(valor => {
    console.log(valor)
})
.catch(err => {
    console.log(err)
})

// Promise.resolve -> resolve diretamente caso contrário ele cai no reject
function baixaPagina1() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina1()
.then(dadosPagina =>{
    console.log(dadosPagina)
}) 
.catch(err => console.log(err))

// Promise.reject -> rejeita diretamente
function baixaPagina2() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina2()
.then(dadosPagina =>{
    console.log(dadosPagina)
}) 
.catch(err => console.log(err))