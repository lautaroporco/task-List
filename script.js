// Seleccionamos los elementos: input, btn agregar, btn todas, btn completadas, btn pendientes, contador
let taskInput = document.getElementById('taskInput');
let addTask = document.getElementById('addTask');
let filterCompleted = document.getElementById('filterCompleted');
let filterAll = document.getElementById('filterAll');
let filterPending = document.getElementById('filterPending');

// Creamos la funcion que agrega las tareas

addTask.addEventListener('click', () => {
    let taskText = taskInput.Value.trim();
    if (taskText === "") {
        alert('Inserte una tarea válida');
        return;
    };

    let newTask = document.createElement('DIV');
    newTask.classList.add('newTask');
    newTask.innerHTML = taskText;

    
})
