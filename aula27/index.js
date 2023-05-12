//Operadores Ternários  ( ?  : )
//Estrutura (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

//método mais simples
const pontuacaoUser = 1000;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

//fall back (valor padrão)
const corUser = 'Red';
const corDefault = corUser || 'Preta';


console.log(nivelUser, corDefault);




//Metódo mais complexo
/*if (pontuacaoUser >= 1000) {
    console.log('Usuário IP')
} else {
    console.log('Usuário Normal')
}*/