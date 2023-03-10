const objs = [
  {
    nome: "Vitor",
    idade: 31,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissão: "Programador",
      empresa: "Empresa X",
    },
    hobbies: ["Programar", "Corrida", "Ler"],
  },
  {
    nome: "Zézinho",
    idade: 33,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissão: null,
      empresa: null,
    },
    hobbies: ["Comer Hamburguer", "Desenhar", "Filmes"],
  },
];

console.log(objs);
console.log(typeof objs)

// JSON - Converter objeto para JSON

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//Object - Converter JSON para objeto

const objsData = JSON.parse(jsonData)
console.log(objsData)
console.log(typeof objsData)

objsData.map((pessoa) => {
    console.log(pessoa.nome, pessoa.idade, pessoa.detalhes_profissao)
})