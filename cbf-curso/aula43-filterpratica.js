const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");

cursos.map((el, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);
  caixaCursos.appendChild(novoElemento);
});

const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")]; //Ao clicar ele cria uma constante com todos input tipo radio, transforma os elementos em array para se tornarem iteraveis
  let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
    return ele.checked; //ele da retorno apenas no elemento com checked
  });
  return radioSelecionado[0]; //Retorna como resultado da função o primeiro da lista checked
};

btnCursoSelecionado.addEventListener("click", () => {
  const rs = radioSelecionado(); //Importante transformar a função chamada em uma variável dentro da função por questão de escopo, se não ele não consegue ler
  if (rs != undefined) {
    const cursoSelecionado = rs.parentNode.previousSibling.textContent;
    alert("Curso selecionado: " + cursoSelecionado);
  } else {
    alert("Selecione um Curso");
  }
});

btnRemoverCurso.addEventListener("click", () => {
  const rs = radioSelecionado();
  if (rs != undefined) {
    rs.parentElement.parentNode.remove();
  } else {
    alert("Selecione um Curso");
  }
});

// btnRemoverCurso.addEventListener("click", () => {
//   const todosRadios = [...document.querySelectorAll("input[type=radio]")];
//   let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
//     return ele.checked;
//   });
//   radioSelecionado = radioSelecionado[0];
//   radioSelecionado.parentElement.parentNode.remove();
// }); //MINHA SOLUÇÃO para o botão REMOVER

//parentNode
//childNodes[nodenumber]
//firstChild
//lastChild
//nextSibling
//previousSibling
