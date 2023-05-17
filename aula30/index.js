const verdadeira = true;

let tem escopo de bloco {... bloco}
Var só tem escopo de função

let nome = 'Victor'; // criando
var nome2= 'Victor'; // criado


//exemplo
if (verdadeira) {
    let nome = 'João'; //criando
    var nome2 = 'Victor' // redeclarando

    if (verdadeira) {
        let nome = 'Outra Coisa';
        var nome2 = 'Ronaldo'; // Redeclarada
       
    }
 } 
console.log(nome,nome2);

var sobrenome = 'Silva';

function falaOi(){
    console.log(sobrenome);
}


falaOi();


 