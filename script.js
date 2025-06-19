// Get from list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

//handle form subs
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from reloading

    // Get input value
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        addTask(taskText);
        taskInput.value = ''; // Clear the input field
    }
});

// Func to create a new task and add it to the list
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    taskList.appendChild(li);
}