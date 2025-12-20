const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


let tasks = [];


function addTask(){
    if (taskInput.value === "") {
        window.alert("pls add a task");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskInput.value,
        isCompleted: false
    }

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}


function renderTasks(){
    taskList.innerHTML = "";
    tasks.forEach(task => {
        let listItem = document.createElement("li");
        

        listItem.innerHTML = `
            <p>${task.text}</p>
            <div class = btn>
            <button class = "toggle-btn" data-id = "${task.id}">${task.isCompleted ? "Undo" : "Done"}</button>
            <button class = "delete-btn" data-id = "${task.id}">Delete</button>
            </div>
        `

        if(task.isCompleted){
            listItem.classList.add("done");
        }

        taskList.appendChild(listItem)

        
        listItem.querySelector(".toggle-btn")
                .addEventListener("click", done);

        listItem.querySelector(".delete-btn")
                .addEventListener("click", deleteTask);
    });
}


addBtn.addEventListener("click", addTask)


function done(e){
    const taskId = Number(e.target.dataset.id);
    const task = tasks.find(task => task.id === taskId);

    if(task) {
        task.isCompleted = !task.isCompleted;
    }
    
    renderTasks();
    
}


function deleteTask(e){
    const taskId = Number(e.target.dataset.id);
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}