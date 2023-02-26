const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];

cursos.map((el, chave) => {
  //Chave vai me mostrar a chave de cada, relacionada a posição
  console.log(chave);
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;
  const btnLixeira = document.createElement("img");
  btnLixeira.setAttribute("src", "./lixeira.png"); //Perceba que novamente o setattribute foi usado, dessa fez, setado o tipo e o caminho pra imagem
  btnLixeira.setAttribute("class", "btnLixeira"); // Como ele vem GIGANTE, adiciona uma classe para editar e colocar width
  btnLixeira.addEventListener("click", (rem) => {
    caixa1.removeChild(rem.target.parentNode); //Sem o parentNode ele dá erro, pois btnlixeira não é filho de caixa1. Então colocando o parentNode ele remove o PAI de BTNLXEIRA. Se o filho direto, btn_c com o metodo remove child tbm não aceita, pq ele remove os FILHOS de caixa1.
  });

  novoElemento.appendChild(btnLixeira);

  // novoElemento.addEventListener("click",(rem)=>{ //Sempre vai do elemento selecionado pros siblings, nunca do child do parent
  //   caixa1.removeChild(rem.target) //Sem o target ele não acha o elemento
  // })
  caixa1.appendChild(novoElemento);
});
