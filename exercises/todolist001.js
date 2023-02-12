const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value; //Aqui ele vai obter o valor da tarefa do usuário, obtida pelo botão addtask. a const task, vai ser o input declarado já identificado o valor. O .value é usado para elementos capturados de HTML como formulários e inputs, selects e textareas para obter ou definir o valor. Ela permite ler o conteúdo de um elemento de formulário.

  //Agora, quando receber o input, ele deve ser direcionado para a div tasklist e criar o elemento com ele! E o botão de excluir também!

  const taskDiv = document.createElement("div"); // Aqui o create element cria um novo elemento HTML, o parametro que ela recebe se refere ao tipo de elemento criado, como "div", "button", "input". Aqui é criado um elemento div, que pode ser configurado com atributos, classes, texto e outros elementos filhos. O create element é muito bom para ser usado em resposta a eventos dos usuário, como botões e etc.
  taskDiv.classList.add("task"); //Aqui ele vai adicionar todos inputs colocados dentro de taskDiv como um elemento filho. Task se refere ao CSS que ele vai receber, esse elemento novo criado por taskDiv, recebe a CLASS TASK. Associando ao CSS dela.
  taskDiv.innerHTML = task; //Este trecho de código está criando um elemento HTML "div" e adicionando uma classe CSS "task" a ele usando a propriedade classList e o método add. Em seguida, está atribuindo o conteúdo da string task à propriedade innerHTML desse elemento, resultando na adição do conteúdo da string como o conteúdo interno desse elemento HTML.

  //Agora vamos adicionar o botão de exclusão da tarfa

  const deleteButton = document.createElement("button"); //Conforte explicado, ele cria elementos HTML, aqui ele cria o elemento BUTTON. que se chamara no JS deletteButton, ou seja,a deleteButton recebe o Button criado dinamicamente.
  deleteButton.innerHTML = "Excluir"; //Aqui o deletButton recebe o texto Excluir pelo innerHTML, diferente do taskDiv ele recebe uma string e não uma variavel

  //Agora vamos adicionar a função desse botão

  deleteButton.addEventListener("click", function () {
    taskDiv.remove();
  }); //Ou seja, ao clicar no botão remove o elemento HTML taskdiv.

  taskDiv.appendChild(deleteButton); //Aqui ele anexa o deleteButton em taskdiv com o appendChild. Lembrando que o taskdiv é o elemento criado lá em cima.
  taskList.appendChild(taskDiv);  //Agora ele finalment adiciona o taskdiv na tasklist
  taskInput.value = ""; //Aqui finaliza a função, limpando o campo. limpa o taskinput para o proximo
});