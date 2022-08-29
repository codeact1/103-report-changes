let x=0; 

function addTask(){
    let task=document.getElementById("taskList").value;
    console.log("Adding task..." + task);
    displayTask(task);
    clearInput();
}

function displayTask(newTask){
    document.getElementById("task-list").innerHTML += `<li id="${x}" class="task-list-item">${newTask}<button onclick="deleteTask(${x})">Delete </button> </li>`;
    x++;
}

function clearInput(){
    document.getElementById("taskList").value="";
    document.getElementById("taskList").focus();
    
}
function deleteTask(taskID){
    console.log("Deleting task" +taskID);
    document.getElementById(taskID).remove();
}