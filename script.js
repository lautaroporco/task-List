// Seleccionamos los elementos: input, btn agregar, btn todas, btn completadas, btn pendientes, contador
let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTask');
let filterCompleted = document.getElementById('filterCompleted');
let filterAll = document.getElementById('filterAll');
let filterPending = document.getElementById('filterPending');
let completedCount = document.getElementById('completedCount');

let tasks = []; //sera un array que almacene tareas

// Agrega las tareas
addTaskBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText !== "") { //Significa si no esta vacio
        tasks.push({ id: Date.now(), text, completed: false }); //lo {} es un objeto con 3 propiedades. El id: Date.now() genera un id basado en la fecha y hora actual en milisegundos. text: guarda el texto de la tarea. Completed: false indica que la tarea empieza como "no completada"
        taskInput.value = ""; // limpia el campo del input dp de agregar la tarea 
        renderTasks(); // llama a la funcion renderTasks() para actualizar la lista de tareas en la interfaz. Lo que permite que la nueva tarea se muestre inmediatamente en pantalla
    }
});

// Renderizar las tareas en la UI
function renderTasks(filter = "all") {                          // Definimos la funcion llamada renderTasks. Recibe un parametro opcional "filter" con valor por defecto "all"
                                                                // fiter se usara para mostrar que tareas mostrar: "all", "completed", "pending"
    taskInput.innerHTML = "";                                    // borra el contenido del div antes de volver a mostrar las tareas

    const filteredTasks = tasks.filter(task => {                // Filtrar tareas con .filter(), para seleccionar solo las tareas que cumplen con la condicion de "filter"
        if (filter === "completed") return task.completed;      // tasks.filter(...) filtra el array tasks, devolviendo un nuevo array con solo las tareas que cumplan la condicion
        if (filter === "pending") return !task.completed;       // si el filtro es"completed" o "pending" devuelve uno u otro valor. !task.completed significa "tareas que no estan completadas"
        return true;                                            // si el filtro es all o cualq otro valor no filtra nada y devuelve todas las tareas
    });

}

function renderTasks(filter = "all") {
    taskInput.innerHTML = ""; 
    const filteredTask = tasks.filter(task)
}