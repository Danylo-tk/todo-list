const inputEl = document.getElementById("inputField");
const addBtn = document.getElementById("submitBtn");
const ulEl = document.getElementById("ulElement");

addBtn.addEventListener("click", addTask);

function addTask() {
  //in order not to create empty task, we have to check whether input field isn`t empty
  if (inputEl.value !== "") {
    //creating div for li element and 'done task' button
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    todoDiv.appendChild(liEl);

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "done";
    todoDiv.appendChild(doneBtn);
    doneBtn.addEventListener("click", doneTask);

    ulEl.appendChild(todoDiv);

    inputEl.value = "";
  } else {
    console.log("Enter smth!");
  }
}

function doneTask(e) {
  const item = e.target; //returns button element itself
  const todo = item.parentElement; //returns whole div element
  todo.remove();
}
