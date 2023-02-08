const todosCursos=[...document.getElementsByClassName("curso")]
const cursoC1=[...document.getElementsByClassName("c1")]
const cursoC2=[...document.getElementsByClassName("c2")]

console.log(todosCursos)
console.log(cursoC1)
console.log(cursoC2)

todosCursos.map((el)=> { //O array que é indicado por todosCursos agora é passado para EL, através de uma arrowFunction, que adiciona dretamente pelo JS uma nova classe, que tem seu CSS especifico.
    el.classList.add("destaque")
})