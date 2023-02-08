//Obtem uma coleção de elementos, só que vem em HTMLCOLLECTION. O que limita as funções que podem ser utilizadas. É importante converter em ARRAY.

const colecaoHTML=document.getElementsByTagName("div")
const arrayColecaoHTML=[...document.getElementsByTagName("div")] //Já pega direto como array



console.log(colecaoHTML)
console.log(arrayColecaoHTML)
