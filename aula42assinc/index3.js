// Async / Await

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

esperaAi('Fase 1', rand(0, 3))
    .then(valor => console.log(valor))