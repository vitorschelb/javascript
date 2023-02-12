const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
  // Obtenha o valor da tarefa digitada pelo usuário
  const task = taskInput.value;

  // Crie um elemento div para a nova tarefa
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.innerHTML = task;

  // Adicione um botão de exclusão à tarefa
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Excluir";
  deleteButton.addEventListener("click", function() {
    taskDiv.remove();
  });
  taskDiv.appendChild(deleteButton);

  // Adicione a nova tarefa à lista
  taskList.appendChild(taskDiv);

  // Limpe o input de tarefa
  taskInput.value = "";
});


//Impedimento alinhar o botão gerado