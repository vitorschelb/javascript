const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
cursos.map((e,i)=> {  //Indiferente da variavel no parametro, ele volta o conteudo of aquilo, e a posição. Ele percorrer valores.
    console.log("Curso: " + e + " - Posição do curso: " + i)

})

let el=document.getElementsByTagName("div")
el=[...el]
el.map((e,i)=>{
    console.log(e.innerHTML)
})
