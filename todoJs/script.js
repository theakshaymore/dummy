document.addEventListener("DOMContentLoaded", () => {
  let inputText = document.getElementById("input-text");
  let addTaskBtn = document.getElementById("add-btn");
  let ulList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskBtn.addEventListener("click", () => {
    let inputValue = inputText.value.trim();
    if (inputValue == "") return;

    let taskObj = {
      id: Date.now(),
      name: inputValue,
      status: false,
    };

    tasks.push(taskObj);
    saveTaskToLoaclStorage();
    renderTask(taskObj);
    inputText.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    let li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.name}</span>
    <button id='task-del-btn'>Delete</button>
    `;

    if (task.status) {
      li.classList.toggle("completed");
    }

    li.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") return;

      task.status = !task.status;
      li.classList.toggle("completed");
      saveTaskToLoaclStorage();
    });

    li.querySelector("button").addEventListener("click", (event) => {
      event.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTaskToLoaclStorage();
    });

    ulList.appendChild(li);
  }

  function saveTaskToLoaclStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
