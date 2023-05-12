//Objeto Date
const tresHrs = 60 * 60 * 3 * 1000;
const data = new Date(0 + tresHrs);


const data = new Date('2019-04-20 20:20:59'); // formato mais visto de Date
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa contar do zero no JS.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // contado do marco zero até a data que pedi