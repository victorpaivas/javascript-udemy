     // While
let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}

    // Do While
let i = 0;

do {
    console.log(i);
    i++;
} while (i <= 10);


function random(min, max)  {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

const nome = 'Victor';
let i = 0;

while ( i <= nome.length){
    console.log(nome[i]);
    i++;
}

