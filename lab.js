function criaProduto(marca, altura, largura, peso) {
    return {
        marca,
        altura,
        largura,
        peso
    }
};

const produto1 = criaProduto('DELL', '23cm', '45cm', '3,5kg');

console.log(produto1);