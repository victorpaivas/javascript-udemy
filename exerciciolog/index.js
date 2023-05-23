// Crie uma função que receba 2 números e retorno o maior deles

// primeira opção
function getTwoNumber() {
    const a = 128;
    const b = 56;

    const maiorNumero = Math.max(a, b);

    return maiorNumero
}

console.log(getTwoNumber())

// segunda opção
const max2 = (x, y) => x > y ? x : y;
console.log(max2(20, 50));

// terceira opção
function maiorNumero() {
    const array = [50, 18];
    var max = Math.max(...array)
    return max
}

console.log(maiorNumero())
