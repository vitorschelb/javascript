//ABORDAGAEM
//1-Obter os elementos que se deseja trabalhar: Caixa1 Botão e Caixa2

const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]

const btnVolta=document.querySelector("#btn_voltar")

//2- Adicionar os eventos de click agora para todos os cursos. A escolha foi o loop, então precisa dar spread na variável todosCursos, para transformar de HTML Collection em Array. E o MAP, para que possa percorrer todos.

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{ //3.Passa para todos os elementos indicados o click, que vai receber o evento declarado na função aninhada em EL.
        const curso=evt.target // 4. Cria a variavel curso, que recebe EVT com a função target. 
        curso.classList.toggle("selecionado")// 5. Agora que curso ja dá o target no elemento desejado, adiciona função toggle. Toggle se o elemento tiver a classe selecionada ele remove, se não tiver, ele adiciona.
    })
})
// 6. Agora que já posso selecionar os elementos e indica-los para o usuário, eu criou a função do botão.
btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")] //7. Cria a constante que vai indicar os elementos que vão interagir com o botão, no caso, todos que eu passei pela outra função, a classe de selecionado.
    cursosSelecionados.map((el)=>{ //8. Agora dou o .map para poder percorrer esse novo array que é criado pela interação do botão e cria a arrow function que vai indicar a função de appendChild, para el, que vai append(anexar) aos child(filhos) que eu quiser
        caixa2.appendChild(el)
    })
})

btnVolta.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa1.appendChild(el) 
    })
})

//Outra solução para o retorno com apenas 1 botão

// bt_transferir.addEventListener("click", ()=>{
//     const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
//     const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado")]
//     cursosSelecionados.map((el)=>{
//         caixa2.appendChild(el)
//     })
//     cursosNaoSelecionados.map((el)=>{
//         caixa1.appendChild(el)
//     })
// })



