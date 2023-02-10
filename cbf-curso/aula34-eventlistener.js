 function msg() {
     alert('clicou')
  }

// const c1=document.getElementById("c1")
// const c1=document.querySelector("#c1")

//  c1.addEventListener("click", msg) //adiciona um listener, proprio para tratar eventos dentro de c1. Não precisa colocar onclick no HTML. Chama a função do proprio JS.

// c1.addEventListener("click", ()=>{
//      alert("clicou")
//  })

//Tambem aceita uma arrow function dentro dele próprio ou se quiser chamar a propria função declarada externamente, como abaixo.

// c1.addEventListener("click", ()=>{
//     msg()
// })

const cursos=[...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })

})


