/*
&&  -> false && true -> false 'o valor mesmo' 
||  -> true || false -> vai retornar true 'o valor mesmo'

VALORES QUE AVALIAM EM FALSE NO JAVASCRIPT
False -> falso literal
Falsy -> falso não literal
0
' '  " "  ` `  -> strings vazias
null/underfined
NaN
*/


function falaOi () {
    return 'Oi';
}

let vaiExec = 'João';

console.log(vaiExec && falaOi());

console.log(0 || false || null || 'Victor' || true ); //retornou o primeiro valor verdadeiro que foi 'Victor'

const corUsuario = 'black';
const corPadrao = corUsuario || 'red';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);


