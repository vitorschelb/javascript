class Pessoa {
  constructor(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setIdade(idade) {
    this.idade = idade;
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

let pessoas = [];
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

btn_add.addEventListener("click", (evt) => {
  const nome = document.querySelector("#f_nome");
  const idade = document.querySelector("#f_idade");

  const p = new Pessoa(nome.value, idade.value);
  pessoas.push(p); //O array pessoas vai receber meu novo objeto que é 'p' com as propriedades das classes declaradas em 'Pessoa'
  nome.value = "";
  idade.value = "";
  nome.focus(); //A função nome.focus() está dando o foco (ou seja, selecionando) o elemento do formulário que tem o id "f_nome". Isso significa que, quando o botão "Adicionar" for clicado, o cursor estará posicionado dentro desse elemento, pronto para que o usuário possa digitar um novo nome sem precisar clicar dentro do campo novamente.
  console.log(pessoas);
  mostrasPessoas();

  //******OPÇÃO DE ADICIONAR NO HTML 1******/

  //   const itemAdicionado = document.createElement("p");
  //   itemAdicionado.textContent = `Nome: ${p.getNome()}, Idade: ${p.getIdade()}`;
  //   res.appendChild(itemAdicionado);
});

//******OPÇÃO DE ADICIONAR NO HTML 2******/

const mostrasPessoas = () => {
  res.innerHTML = ""; //O comando res.innerHTML = ""; está definindo o conteúdo do elemento HTML que tem a classe .res como uma string vazia. Ou seja, ele está "limpando" o conteúdo do elemento, removendo todo o HTML que estava anteriormente dentro dele. Isso é útil quando se deseja atualizar o conteúdo de um elemento com novas informações, e não queremos manter nenhum conteúdo anterior.
  for (let p of pessoas) {
    res.innerHTML += `<p>Nome: ${p.getNome()}, Idade: ${p.getIdade()}</p>`;
  }
};
