function mostraHora() {
    let data = new Date();
    // função para mostrar hora
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
// mostra a hora de tempo em tempo de acordo com o parâmetro que eu colocar
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000); // primeiro vem a função depois o parâmetro do intervalo em milesimo de segundos.
//função para parar o setInterval
setTimeout(function () {
    clearInterval(timer);
}, 3000);  // primeiro vem a função depois o parâmetro da parada em milesimo de segundos igual ao setinterval.