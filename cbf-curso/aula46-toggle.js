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

//1 Aqui é criada uma pequena função para retirar a seleção de todos que contem a classe selecionado. O map é sempre utilizado por que os elementos não estão em array, então precisa do map percorrer o array

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")]; // 1.5 Claro que precisa do SPREAD para o MAP funcionar, sem ele, o .map não é reconhecido como uma função.
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};

//2 Deletada a criação do radio, e adicionada a função de click, com toggle, quando da o toggle, ele adiciona a classe no target, que é justamente o novoElemento.

//3 Então a função criada é adicionada antes do próximo selecionado, ela vai rodar e limpar antes de setar com o toggle a nova classe.

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click", (evt) => {
    tirarSelecao();
    evt.target.classList.toggle("selecionado");
  });
  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

//4. A função que indicava o RADIO Selecionado, com a relação de parentesco de siblings e etc. É modificada para uma constrante que apenas indica o primeiro elemento do array criado.

const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];
};

//5. Foi retirada as relações e variáveis para sair do check e jogar na div toda, ele já pega o elemento direto pela função que contém o toggle. Se não adicionar o innerHTML ele retorna a tag do elemento, no caso, não se pode usar o textContent, pois ele vai retornar apenas o texto e precisamos do conteudo com as tags e atributos para manipular. É valido lembrar que o comando innerHTML não é seguro, pois permite ataques maliciosos por terceiros através da inserção de códigos em formulários.

btnCursoSelecionado.addEventListener("click", () => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().innerHTML);
  } catch (ex) {
    alert("Selecione um Curso");
  }
});

//6. Foram feitas todas as alterações igualmente para a indicação da constante da nova função.

btnRemoverCurso.addEventListener("click", (evt) => {
  if (cursoSelecionado() != undefined) {
    cursoSelecionado().remove();
  } else {
    alert("Selecione um Curso");
  }
});

//7. Mesmos ajustes feitos. Diferente do exercício optei por não criar uma variável para a função, mas essa variável pode ser criada globalmente. Preferi usar propria função nas declarações para ve se aceitava.

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
  if (nomeCurso.value != "" && cursoSelecionado() != null) {
    const novoCurso = criarNovoCurso(nomeCurso.value);
    caixaCursos.insertBefore(novoCurso, cursoSelecionado());
  } else {
    alert("Digite o curso a ser inserido e selecione sua ordem na lista");
  }
  nomeCurso.value = "";
});

//8. Mesma coisa.

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
  if (nomeCurso.value != "" && cursoSelecionado() != null) {
    const novoCurso = criarNovoCurso(nomeCurso.value);
    caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
  } else {
    alert("Digite o curso a ser inserido e selecione sua ordem na lista");
    nomeCurso.value = "";
  }
});
