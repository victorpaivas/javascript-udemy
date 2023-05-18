(function () {

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
let tagHtml = '';

for (let i = 0; i < elementos.length; i++) {
    //destretuturando o elemento
    let {tag, texto} = elementos[i];

    tagHtml += `<${tag}>${texto}</${tag}>`;
}

container.innerHTML += `<div>${tagHtml}</div>`;

}) ()