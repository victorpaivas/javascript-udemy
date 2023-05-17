const objs = [
    {
        "nome": "Victor",
        "idade": 27,
        "esta_trabalhando": true,
        "detalhes_profissão": {
            "profissão": "Avaliador",
            "empresa": "Iremoc Guarujá"
        },
        "hobbies": ["Progamar", "Surfar", "Tocar"]
    },
    {
        "nome": "João",
        "idade": 33,
        "esta_trabalhando": false,
        "detalhes_profissão": {
            "profissão": null,
            "empresa": null
        },
        "hobbies": ["Andar de Skate", "Tocar Bateria", "Correr"]
    },
]

// JSON
//converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})