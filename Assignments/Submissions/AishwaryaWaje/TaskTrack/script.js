document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  let inputTask = document.getElementById('InputTask');
  let taskText = inputTask.value.trim();

  if (taskText === '') return;

  let li = document.createElement('li');
  let taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  li.appendChild(taskSpan);

  taskSpan.addEventListener('click', function () {
    this.classList.add('completed');
    editButton.remove();
    saveTasks();
  });

  let buttonContainer = document.createElement('div');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Done';
  deleteButton.onclick = function () {
    li.remove();
    saveTasks();
  };

  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = function () {
    let newText = prompt('Edit task', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskSpan.textContent = newText.trim();
      saveTasks();
    }
  };

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  li.appendChild(buttonContainer);
  document.getElementById('taskList').appendChild(li);

  saveTasks();
  inputTask.value = '';
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    let text = li.querySelector('span').textContent;
    let completed = li.querySelector('span').classList.contains('completed');
    tasks.push({ text, completed });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
    let li = document.createElement('li');
    let taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;

    if (task.completed) {
      taskSpan.classList.add('completed');
    }

    li.appendChild(taskSpan);

    taskSpan.addEventListener('click', function () {
      this.classList.add('completed');
      editButton.remove();
      saveTasks();
    });

    let buttonContainer = document.createElement('div');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Done';
    deleteButton.onclick = function () {
      li.remove();
      saveTasks();
    };

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
      let newText = prompt('Edit task', taskSpan.textContent);
      if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText.trim();
        saveTasks();
      }
    };

    if (!task.completed) {
      buttonContainer.appendChild(editButton);
    }

    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);
    document.getElementById('taskList').appendChild(li);
  });
}
