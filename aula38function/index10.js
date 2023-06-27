// Funções Geradoras

//exemplo 1
function* geradora1() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

//exemplo 2
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

//exemplo 3

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };


   //mais códigos

   yield function() {
    console.log('Vim do y2')
   }
}

const g5 = geradora5();
const function1 = g5.next().value;
const function2 = g5.next().value;

function1();
function2();