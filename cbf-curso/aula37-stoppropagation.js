const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]


caixa1.addEventListener("click",(evt)=>{
    console.log(evt.target) //O que acontece aqui, é que como a função foi criada com a variavel caixa1 que indica todas as div com a ID caixa 1, ele clica em qualquer lugar. Quando coloca o parametro EVT na ARROW FUNCTION, é possível passar a função target. Que vai indicar no console onde foi o click que disparou o evento. 
    console.log("Clicou")
})

btn_c1.addEventListener("click",(evt)=>{
    evt.stopPropagation()
}) //Aqui criou uma função especifica, que PARA O EVENTO APENAS NA VARIAVEL QUE INDICA C1, no caso o texto HTML, por que ALI na arrow function esta imprimido EVT, então ele entende que é aquele EVENTO que tem de parar.

cursos.map((el)=>{ //Aqui agora como quer parar em TODOS os que recebem a classe curso, foi feito um selector ALL, Spread, MAP. São transformados em EL na ARROW, que recebem a outra função que é STOP PROPAGATION. É preciso criar uma ANINHADA, por que A PRIMEIRA RECEBE MAP, e A SEGUNDA O STOP PROPAGATION
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})