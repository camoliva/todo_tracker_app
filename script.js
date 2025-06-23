// get form and list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// handle form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// create and add a new task to list
function addTask(taskText) {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
}

// test func
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // toggles completed on click
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    return li;
}
