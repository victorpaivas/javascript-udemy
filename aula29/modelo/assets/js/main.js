const textEscrito = document.querySelector('#text');
const data = new Date();


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


const dia = zeroAEsquerda(data.getDate());
const mes = getMesEscrito(data.getMonth());
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const semana = getSemanaEscrita(data.getDay());
const sec = zeroAEsquerda(data.getSeconds());

function getMesEscrito (mes){
    let mesEscrito 
    switch (mes) {
        case 0:
            mesEscrito = 'Janeiro'
            return mesEscrito
    }
    switch (mes) {
        case 1:
            mesEscrito = 'Fevereiro'
            return mesEscrito
    }
    switch (mes) {
        case 2:
            mesEscrito = 'Março'
            return mesEscrito
    }
    switch (mes) {
        case 3:
            mesEscrito = 'Abril'
            return mesEscrito
    }
    switch (mes) {
        case 4:
            mesEscrito = 'Maio'
            return mesEscrito
    }
    switch (mes) {
        case 5:
            mesEscrito = 'Junho'
            return mesEscrito
    }
    switch (mes) {
        case 6:
            mesEscrito = 'Julho'
            return mesEscrito
    }
    switch (mes) {
        case 7:
            mesEscrito = 'Agosto'
            return mesEscrito
    }
    switch (mes) {
        case 8:
            mesEscrito = 'Setembro'
            return mesEscrito
    }
    switch (mes) {
        case 9:
            mesEscrito = 'Outubro'
            return mesEscrito
    }
    switch (mes) {
        case 10:
            mesEscrito = 'Novembro'
            return mesEscrito
    }
    switch (mes) {
        case 11:
            mesEscrito = 'Dezembro'
            return mesEscrito
    }
}
function getSemanaEscrita(semana){
    let semanaEscrita
    switch (semana) {
        case 0:
            semanaEscrita = 'Domingo'
            return semanaEscrita;
    }
    switch (semana) {
        case 1:
            semanaEscrita = 'segunda-feira'
            return semanaEscrita;
    }
    switch (semana) {
        case 2:
            semanaEscrita = 'terça-feira'
            return semanaEscrita;
    }
    switch (semana) {
        case 3:
            semanaEscrita = 'quarta-feira'
            return semanaEscrita;
    }
    switch (semana) {
        case 4:
            semanaEscrita = 'quinta-feira'
            return semanaEscrita;
    }
    switch (semana) {
        case 5:
            semanaEscrita = 'sexta-feira'
            return semanaEscrita;
    }
    switch (semana) {
        case 6:
            semanaEscrita = 'Sábado'
            return semanaEscrita;
    }

}

textEscrito.innerHTML = `${semana}, ${dia} de ${mes} de ${ano} <br>${hora}:${min}:${sec}`






