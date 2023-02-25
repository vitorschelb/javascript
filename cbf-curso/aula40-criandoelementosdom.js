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

cursos.map((el, chave) => { //Chave vai me mostrar a chave de cada, relacionada a posição
    console.log(chave)
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" +chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  caixa1.appendChild(novoElemento);
});
