function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="buttons">
      <button onclick="completeTask(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">✖</button>
    </div>
  `;
  document.getElementById("inProgress").appendChild(li);
  document.getElementById("taskInput").value = "";
}

function completeTask(button) {
  const li = button.closest("li");
  li.querySelector(".buttons").innerHTML = `
    <button class="delete" onclick="deleteTask(this)">✖</button>
  `;
  document.getElementById("completed").appendChild(li);
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}
