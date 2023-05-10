/*
Operadores Lógicos
&&  -> E (Conjução)
||  -> OU (Disjunção)
!   -> Não (Negação)
*/

const expAnd1 = true && true; // R:Verdadeiro
const expAnd2 = true && false; // R:Falso
const expOr1 = true || false; // R: Verdadeiro
const expOr2 = false || false; // R: Falso


const usario = 'Luiz'; // form usario digitou
const senha = '123456'; // form usario digitou


//                true                 true
const vailogar = usario === 'Luiz' && senha ==='123456';
console.log(vailogar);
