function addTask() {
  let inputTask = document.getElementById('InputTask');
  let taskText = inputTask.value.trim();
  if (taskText === '') {
    return;
  }
  let li = document.createElement('li');
  let taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  taskSpan.addEventListener('click', function () {
    this.classList.add('completed');
    editButton.remove();
  });

  let buttonContainer = document.createElement('div');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Done';
  deleteButton.onclick = function () {
    li.remove();
  };

  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = function () {
    let newText = prompt('Edit task', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskSpan.textContent = newText.trim();
    }
  };
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  li.appendChild(buttonContainer);

  document.getElementById('taskList').appendChild(li);
  inputTask.value = '';
}
