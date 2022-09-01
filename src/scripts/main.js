const inputEl = document.getElementById("inputField");
const addBtn = document.getElementById("submitBtn");
const ulEl = document.getElementById("ulElement");
const themeBtn = document.getElementById("themeBtn");

window.addEventListener("load", renderTodoListLocal);
addBtn.addEventListener("click", addTask);
themeBtn.addEventListener("click", changeTheme);

function addTask() {
  inputEl.setAttribute("placeholder", "");
  //in order not to create empty task, we have to check whether input field isn`t empty
  if (inputEl.value !== "") {
    //creating div for li element and 'done task' button
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const doneBox = document.createElement("input");
    doneBox.setAttribute("type", "checkbox");
    todoDiv.appendChild(doneBox);

    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    todoDiv.appendChild(liEl);
    saveTaskLocal(inputEl.value);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    todoDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteTask);
    
    ulEl.appendChild(todoDiv);

    inputEl.value = "";
  } else {
    inputEl.setAttribute("placeholder", "* Enter some value!");
  }
}

function deleteTask(e) {
  const item = e.target; //returns button element itself
  const todo = item.parentElement; //returns whole div element
  removeTaskLocal(todo);
  todo.remove();
}

function saveTaskLocal(task) {
  let todoList;
  if (localStorage.getItem("todoList") === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }

  todoList.push(task);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function renderTodoListLocal() {
  let todoList;
  if (localStorage.getItem("todoList") === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }

  todoList.forEach((task) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const doneBox = document.createElement("input");
    doneBox.setAttribute("type", "checkbox");
    todoDiv.appendChild(doneBox);

    const liEl = document.createElement("li");
    liEl.innerText = task;
    todoDiv.appendChild(liEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    todoDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteTask);

    ulEl.appendChild(todoDiv);
  });
}

function removeTaskLocal(task) {
  let todoList;
  if (localStorage.getItem("todoList") === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }
  const taskIndex = task.children[1].innerText;
  todoList.splice(todoList.indexOf(taskIndex), 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function changeTheme() {
  if (themeBtn.textContent === "L") {
    themeBtn.textContent = "D";
    document.body.classList.add("lightThemeBg");

    const tasks = document.getElementsByClassName("todo");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].classList.add("lightThemeText");
    }
  } else {
    themeBtn.textContent = "L";
    document.body.classList.remove("lightThemeBg");

    const tasks = document.getElementsByClassName("todo");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].classList.remove("lightThemeText");
    }
  }
}
