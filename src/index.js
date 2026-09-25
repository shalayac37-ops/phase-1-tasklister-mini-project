document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = event.target.querySelector("#new-task-description").value;

    buildToDo(task);
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    document.getElementById("tasks").appendChild(li);
  }
});