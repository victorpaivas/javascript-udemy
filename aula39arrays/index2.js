// Concatenção de Arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 8], 'Victor');
const a3 = [...a1, 'Victor', ...a2]
console.log(a3);

