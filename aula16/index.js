// ARRAYS SÃO INDEXADOS POR ELEMENTO EXEMPLO!!
//                0          1        2
const alunos = ['Victor', 'Maria', 'João'];

alunos.push('José');
alunos.push('Eduardo');

console.log(alunos.slice(0,3));
console.log(alunos.slice(0,-1));

//Para descobrir se é um Array
console.log(alunos instaceof Array);

//posso deletar um elemento e le ficará vazio e não irá alterar o índice 
delete alunos[1];
console.log(alunos);

//remove o elemento no começo do Array
alunos.shift();
//porém consigo salvar um elemento que removi em uma variável
const removido = alunos.shift();
console.log(alunos);
console.log(removido);

//remove o elemento no final do Array
alunos.pop();
//porém consigo salvar um elemento que removi em uma variável
const removido = alunos.pop();
console.log(alunos);
console.log(removido);


//método para adicionar no começo da Array (MELHOR PRÁTICA)
alunos.unshift('Amós') 

//Métoda para adicionar no fim da Array (MELHOR PRÁTICA)
alunos.push('Amós')
alunos.push('Antonia')
alunos.push('José')
alunos.push('Ana') 
//para descobrir o tamanho da array
console.log(alunos.length);

//alterando o indice dentro da Array
alunos[0] = 'Nathália';
//posso criar mais um indice dentro da Array
alunos[3] = 'Luiza';

//metódos para consultar uma Array
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2])