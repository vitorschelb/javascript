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
const btnAdicionarNovoCursoAntes = document.getElementById(
  "btnAdicionarNovoCursoAntes"
);
const btnAdicionarNovoCursoDepois = document.getElementById(
  "btnAdicionarNovoCursoDepois"
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);

  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el); //Indica o elemento da função, no caso o elemento da função Criar Novo Curso, o elemento criado
  caixaCursos.appendChild(novoElemento);
  indice++;
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

btnRemoverCurso.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  if (rs != undefined) {
    rs.parentElement.parentNode.remove();
  } else {
    alert("Selecione um Curso");
  }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  if (nomeCurso.value != "" && rs != null) {
    const cursoSelecionado = rs.parentNode.parentNode;
    const novoCurso = criarNovoCurso(nomeCurso.value);
    caixaCursos.insertBefore(novoCurso, cursoSelecionado);
  } else {
    alert("Digite o curso a ser inserido e selecione sua ordem na lista");
  }
  nomeCurso.value = "";
});

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  const check = [...document.querySelectorAll("input[type=radio]")]

  if (nomeCurso.value != "" && rs != null) { 

    const cursoSelecionado = rs.parentNode.parentNode;
    const novoCurso = criarNovoCurso(nomeCurso.value);
    caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
    } else {
    alert("Digite o curso a ser inserido e selecione sua ordem na lista");
    nomeCurso.value = "";
  }
});

// btnAdicionarNovoCurso.addEventListener("click", () => {
//   const cursoInput = document.getElementById("nomeCurso");
//   cursoInput.textContent = cursoInput.value;
//   caixaCursos.appendChild(cursoInput);
// //Arrumar a info
// //fazer o css por dom
//   cursoInput.value= "";
// });

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
