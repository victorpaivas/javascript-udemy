function global() {

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getHourToSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getHourToSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    
    if(el.classList.contains('iniciar')) {
        relogio.classList.add('start');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    }
    
    if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }
    
    if(el.classList.contains('zerar')) {
        relogio.classList.add('zerado');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = `00:00:00`
        segundos = 0;
    }
})



iniciar.addEventListener('click', function(event){
  
    
});

pausar.addEventListener('click', function(event){

});


zerar.addEventListener('click', function(event){

});

}

global()