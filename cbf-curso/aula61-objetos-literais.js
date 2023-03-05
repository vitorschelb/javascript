const Pessoa = {
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome: function (nome) {
    this.nome = nome;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

addPessoa = () => {
  const nome = document.querySelector("#f_nome");
  const idade = document.querySelector("#f_idade");

  Pessoa.setNome(nome.value);
  Pessoa.setIdade(idade.value);

  const itemAdicionado = document.createElement("p");
  itemAdicionado.textContent = `Nome: ${Pessoa.getNome()}, Idade: ${Pessoa.getIdade()}`;
  res.appendChild(itemAdicionado);
};

btn_add.addEventListener("click", () => {
  addPessoa();
  nome.value = "";
  idade.value = "";
  nome.focus();
});

// const p2=Pessoa
// const p3=Pessoa

// p3.nome="Claudio"
// p2["nome"]="Bruno"
// Pessoa.setNome("Antonio")

// console.log(pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)
