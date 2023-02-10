const divTodasClass=[...document.querySelectorAll("div[class]")] //Aqui ele pega todas as as divs que possuem classe.
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursosEspecial=document.getElementById("c1")
const query_divTodas=document.querySelectorAll("div,p") //Aqui ele pega todas a div, ele pode especificar tbm outras tags.
const query_cursosTodos=document.querySelectorAll(".curso, p") //Todos da classe curso, aqui sai todos que usam a classe c1 e todos da tag p. Ele é muito dinâmico.
//Por exemplo também é possível ( div > p ). Todos elementos 'p' que são filhos de div.
const query_cursosID=document.querySelector("#c1")
const query_cursosEspecial=document.querySelectorAll("#c1")[0]



console.log(query_divTodas)
console.log(query_cursosTodos)
console.log(query_cursosID)