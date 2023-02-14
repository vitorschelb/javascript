const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#task-list");

const createItem = (task) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.innerHTML = task;

  createDeleteBtn(taskDiv);

  taskList.appendChild(taskDiv);
};

const createDeleteBtn = (taskDiv) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Excluir";
  deleteButton.addEventListener("click", () => {
    taskDiv.remove();
  });

  taskDiv.appendChild(deleteButton);
};

addTaskButton.addEventListener("click", () => {
  if (taskInput.value) {
    createItem(taskInput.value);
    taskInput.value = "";
  } else {
    alert("Por favor, insira uma tarefa antes de adicioná-la à lista");
  }
});