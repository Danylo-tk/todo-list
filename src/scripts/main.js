let tasksList = [];
const inputEl = document.getElementById("inputField");
const addBtn = document.getElementById("submitBtn");
const ulEl = document.getElementById("ulElement");


addBtn.addEventListener("click", addTask);
ulEl.addEventListener("click", doneTask);

function addTask () {
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  const liEl = document.createElement("li");
  liEl.innerText = inputEl.value;
  todoDiv.appendChild(liEl)

  const doneBtn = document.createElement("button")
  doneBtn.innerText = 'done'
  todoDiv.appendChild(doneBtn)

  ulEl.appendChild(todoDiv)

  inputEl.value = ''
}

function doneTask (e) {
  const item = e.target
  const todo = item.parentElement
  todo.remove()
}
