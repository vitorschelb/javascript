//O método toString() retorna uma matriz com uma sequência separada por vírgula

var frutas = ["banana", "maça", "laranja", "morango"]
document.getElementById("demo").innerHTML = frutas.toString()

console.log(frutas)

//O método join() retorna uma matriz com uma sequência separada por um separador customizado

var pessoas = ["Marcelo", "Vitor", "Bruno", "Thiago"]
document.getElementById("demo").innerHTML=pessoas.join(" - ")