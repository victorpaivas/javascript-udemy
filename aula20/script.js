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
    
     const obj = {
      nome: nome.value, 
      sobrenome: sobrenome.value, 
      peso: peso.value, 
      altura: altura.value
    };

     pessoas.push(obj);
     console.log(pessoas);

     resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value}<br> <strong>Sobrenome:</strong> ${sobrenome.value} <br><strong>Peso:</strong> ${peso.value}<br> <strong>Altura:</strong> ${altura.value}<br></p>`;
  }   
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

