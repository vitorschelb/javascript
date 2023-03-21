const questionBtn = document.querySelectorAll(".question-btn"); //Se pega o botão que inclui os dois icones, por que é apenas um botão, os outros são apenas icones visuais que revezam.

// questionBtn.forEach((btn) => { //Aqui é preciso nomear o parametro por que é diferente, questionBtn são todos, btn é cada um individual que o forEach me entrega.
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement //Se pega o pai do PAI pq a então a classe aplicada vai ser aplicada aos botões e ao texto.
//         question.classList.toggle('show-text')
//     })
// })

const questions = document.querySelectorAll(".question");

// Dessa forma funciona e fica mais limpo, só que ele não fecha o proprio, apenas as outras.

// questions.forEach((btn) => { //Nesse caso, já pega direto a div PAI, sem precisar usar parent element. O forEach me entrega o BTN especifico. Com o BTN especifico eu crio uma função que vai passar para E a funcionalidade, é adicionado a E o current target para especificar que é aquele que estou clicando. Sem o currenttarget ele me devolve o evento de click e não o que eu quero. Sempre que for especificar algo em um conjunto de elemento, especificar currenttarget
//     // console.log(btn)
//     btn.addEventListener('click', (e) => {
//         questions.forEach((btn) => {
//             btn.classList.remove('show-text')
//         })
//         e.currentTarget.classList.toggle('show-text')

//         // console.log(e)
//         // console.log(e.currentTarget)
//     })
// })

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//Aqui eu não entendi, mas funcionou.

//1 - Separa cada question das questions com forEach
//2 - Pega o botão dentro da question, definido em BTN.
//3 - Adiciona ao botão o evento de click
//4 - Separa os itens dentro das questions com forEach
//5 - Se o item for diferente da question clicada ele remove
//6 - Adiciona a classe na question clicada.
