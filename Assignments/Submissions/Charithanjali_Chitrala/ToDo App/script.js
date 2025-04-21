<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => { 
    
    const fetchButton = document.getElementById('fetchButton');
    const todoList = document.getElementById('todoList');
    
    fetchButton.addEventListener('click',() =>{
        fetch('https://dummyjson.com/todos')
        .then(response =>response.json())
        .then(data => {
            todoList.innerHTML = "";
    
            data.todos.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.classList.add(
                    'flex','items-center','bg-pink-200','p-3','rounded','shadow-md','text-gray-800'
                );
    
                const checkbox = document.createElement('input');
                checkbox.type ='checkbox';
                checkbox.classList.add('mr-3');
    
                checkbox.checked = false;
                todoItem.classList.remove('line-through','text-gray-500');
    
    
                checkbox.addEventListener('change',() => {
                    todoItem.classList.toggle('line-through');
                    todoItem.classList.toggle('text-red-500');
                });
    
                const todoText = document.createElement('span');
                todoText.textContent = todo.todo;
    
                todoItem.appendChild(checkbox);
                todoItem.appendChild(todoText);
                todoList.appendChild(todoItem);
            });
        })
        .catch(error =>{
            console.error("Error fetching data:",error);
            todoList.innerHTML = "<p class = 'text-red-500 text-center'>Failed to load todos.</p>";
        });
    });
=======
document.addEventListener("DOMContentLoaded", () => { 
    
    const fetchButton = document.getElementById('fetchButton');
    const todoList = document.getElementById('todoList');
    
    fetchButton.addEventListener('click',() =>{
        fetch('https://dummyjson.com/todos')
        .then(response =>response.json())
        .then(data => {
            todoList.innerHTML = "";
    
            data.todos.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.classList.add(
                    'flex','items-center','bg-pink-200','p-3','rounded','shadow-md','text-gray-800'
                );
    
                const checkbox = document.createElement('input');
                checkbox.type ='checkbox';
                checkbox.classList.add('mr-3');
    
                checkbox.checked = false;
                todoItem.classList.remove('line-through','text-gray-500');
    
    
                checkbox.addEventListener('change',() => {
                    todoItem.classList.toggle('line-through');
                    todoItem.classList.toggle('text-red-500');
                });
    
                const todoText = document.createElement('span');
                todoText.textContent = todo.todo;
    
                todoItem.appendChild(checkbox);
                todoItem.appendChild(todoText);
                todoList.appendChild(todoItem);
            });
        })
        .catch(error =>{
            console.error("Error fetching data:",error);
            todoList.innerHTML = "<p class = 'text-red-500 text-center'>Failed to load todos.</p>";
        });
    });
>>>>>>> upstream/main
    });