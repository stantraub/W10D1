let todoUl = document.querySelector(".todos");
let todoForm = document.querySelector(".add-todo-form");

myStorage = window.localStorage;

let todos;

if (myStorage.getItem("todos")) {
  todos = JSON.parse(myStorage.getItem("todos"));
} else {
  todos = [];
}

const addTodo = (e) => {
  e.preventDefault();
  let todoValue = document.getElementsByName("add-todo")[0].value;
  let todo = { todo: todoValue, done: false };
  todos.push(todo);

  myStorage.setItem("todos", JSON.stringify(todos));

  document.getElementsByName("add-todo")[0].value = "";
  populateList(todos);

}

function populateList(todos) {
  let children = Array.from(todoUl.childNodes);
  if(todos.length > 0) {
    todoUl.removeChild(children[0]);
    let lastOne = todos[todos.length-1];
    todos = [lastOne];
  } 

  for(let todo of todos) {
    let liTag = document.createElement("li");
    let labelTag = document.createElement("label");
    let inputTag = document.createElement("input");
    inputTag.setAttribute("type", "checkbox");
    liTag.innerHTML = todo.todo;
    labelTag.appendChild(inputTag);
    liTag.appendChild(labelTag);
    todoUl.appendChild(liTag);
  }

}

todoForm.addEventListener("submit", addTodo);
populateList(todos);