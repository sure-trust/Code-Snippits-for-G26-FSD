<<<<<<< HEAD
async function getData() {
     const response = await fetch("https://dummyjson.com/todos");
     const data = await response.json();
     return data.todos;
}

function display(todos) {
     const todoList = document.getElementById("item");
     todoList.innerHTML = "";
     todos.forEach((todo) => {
          const listItem = document.createElement("li");
          listItem.id = `${todo.id}-count`;
          listItem.innerHTML = `
         <span>${todo.todo}</span>
         <button onclick="deleteTask(this)">Delete</button>
       `;
          todoList.appendChild(listItem);
     });
}

function addNewTodo() {
     document.getElementById("add").addEventListener("click", () => {
         let inputField = document.getElementById("IE");
         let list = document.getElementById("item");
         list.innerHTML += `<li id="${list.childElementCount + 1}-count">${inputField.value} <button onclick="deleteTask(this)">Delete</button></li>`;
         inputField.value = "";
     });
}

function deleteTask(button) {
     button.parentElement.remove();
}
document.getElementById("Fetch").addEventListener("click", () => {
     getData().then(display).then(addNewTodo);
 });
 
=======
async function getData() {
     const response = await fetch("https://dummyjson.com/todos");
     const data = await response.json();
     return data.todos;
}

function display(todos) {
     const todoList = document.getElementById("item");
     todoList.innerHTML = "";
     todos.forEach((todo) => {
          const listItem = document.createElement("li");
          listItem.id = `${todo.id}-count`;
          listItem.innerHTML = `
         <span>${todo.todo}</span>
         <button onclick="deleteTask(this)">Delete</button>
       `;
          todoList.appendChild(listItem);
     });
}

function addNewTodo() {
     document.getElementById("add").addEventListener("click", () => {
         let inputField = document.getElementById("IE");
         let list = document.getElementById("item");
         list.innerHTML += `<li id="${list.childElementCount + 1}-count">${inputField.value} <button onclick="deleteTask(this)">Delete</button></li>`;
         inputField.value = "";
     });
}

function deleteTask(button) {
     button.parentElement.remove();
}
document.getElementById("Fetch").addEventListener("click", () => {
     getData().then(display).then(addNewTodo);
 });
 
>>>>>>> upstream/main
