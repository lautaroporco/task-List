// selecciono los  botones e input
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const filterAll = document.getElementById('filterAll');
const filterCompleted = document.getElementById('filterCompleted');
const filterPending = document.getElementById('filterPending');
const taskList = document.getElementById('taskList');
const completedCount = document.getElementById('completedCount');

let tasks = []; // Aqui iran los nuevos arrays

// Ahora escuchamos el evento de addTask
addTaskBtn.addEventListener('click', () => {
    let textInput = taskInput.value.trim();

    if (textInput !== ""){
        tasks.push( {id: Date.now(), text, completed: false })
        taskInput.value = "";

        renderTask(); // Para mostrar la nueva tarea inmediatamente en la pantalla
    }
});

// Renderizar tareas en la IU
function renderTask(filter = "all") {
    taskList.innerHTML = "";
    let filteredTask = tasks.filter(task => {
        if (filter === "completed" ) return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    filteredTask.forEach(task => {
        const div = document.createElement('DIV');
        div.innerHTML = `
        <span class = "${task.completed ? "completed" : "" }">${textInput}</span>
        <button onclick="toggleTask(${task.id})">OK</button>;
        <button onclik="deleteTask(${task.id})">X</button>;
        `;

        task.appendChild(div);
    });

    updateCompletedCount(); //La creo mas adelante
};

// Alternar estado completado
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task
    );

    renderTask();
};

// Eliminar tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTask();
};

// Contar Tareas Completadas
function updateCompletedCount() {
    const completedTask = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
    completedCount.textContent = completedTask;
};

// Filtros
filterAll.addEventListener('click', () => renderTask("all"));
filterCompleted.addEventListener('click', () => renderTask("completed"));
filterPending.addEventListener('click', renderTask("pending"));

renderTask();


