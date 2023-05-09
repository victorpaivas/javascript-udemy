function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

  function recebeEventoForm (evento) {
     evento.preventDefault();

     const nome = form.querySelector('.nome');
     const sobrenome = form.querySelector('.sobrenome');
     const peso = form.querySelector('.peso');
     const altura = form.querySelector('.altura');
    
     const obj = {nome, sobrenome, peso, altura};
     pessoas.push(obj);
     console.log(pessoas);
  }   
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

