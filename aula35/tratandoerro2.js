try {
    // É executada quando não há erros.
    console.log(b); // ERRO FORÇADO.
    console.log('Abri um arquivo.');
    console.log('Manipulei um arquivo e gerou erro.');
    console.log('Fechei o arquivo.');
} catch (error) {
    // É executada quando há erros.
    console.log('Tratando o erro.')
} finally {
    // Sempre
    console.log('FINALLY:Eu sempre sou executado.')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
      throw new TypeError ('Esperam instância de Date.'); 
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', // ajusto hora para 2 digitos
        minute: '2-digit', // ajusto minutos para 2 digitos
        second: '2-digit', // ajusto segundos para 2 digitos
        hour12: false // ajusto hora para formato 24hrs
    });
}

try {
    const data = new Date('01-01-1970 12:50:27');
    const hora = retornaHora(11);
    console.log(hora);
} catch(error) {
    // tratar erro
}finally {
    console.log('Tenha um bom dia.')
}
