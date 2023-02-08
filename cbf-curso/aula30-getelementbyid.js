const dc1=document.getElementById("c1")
console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML="Vitor Schelb"

const dc2=document.getElementById("c2")
console.log(dc2)
console.log(dc2.id)
console.log(dc2.innerHTML)
dc2.innerHTML="Branquinha"

const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrayMeusElementos=[dc1, dc2, dc3, dc4, dc5, dc6]
for (d of arrayMeusElementos)
d.innerHTML="Vitor Vitor"

arrayMeusElementos.map((e)=>{ //Lembrando que o map pode pegar 3 argumentos, ELEMENTOS, PosiçãoINDICE E ARRAY
    e.innerHTML="Mudei de Novo!"
    console.log(e)
})