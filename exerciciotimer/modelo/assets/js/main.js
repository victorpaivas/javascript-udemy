function global() {

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function getHourToSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarRelogio() {
    const timer = setInterval(function () {
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    segundos = iniciarRelogio();
    relogio.innerHTML = `${segundos}`
});

pausar.addEventListener('click', function(event){

});


zerar.addEventListener('click', function(event){

});

}

global()