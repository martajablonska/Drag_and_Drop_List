const app = document.querySelector('.container');
const tasks = document.querySelectorAll('.task');

app.addEventListener('dragstart', function(e) {
    
    if(e.target.className === "task") {
        let task = e.target;
        e.dataTransfer.setData('taskId', e.target.id);
    };
});

app.addEventListener('dragover', function(e) {
    e.preventDefault();
});

app.addEventListener('drop', function(e) {
    e.preventDefault();
    
    let targetBox = e.target; 
    let taskId = e.dataTransfer.getData('taskId'); 
    let droppable = targetBox.classList.contains('box');
    let taskToMove = document.getElementById(taskId);
     
    if(droppable) {
        targetBox.appendChild(taskToMove);
    };
        
    localStorage.setItem('newTasksList', app.innerHTML);
});

window.addEventListener('load', function(e) {
    
    const newList = localStorage.getItem('newTasksList');
    
    if(newList) {
        app.innerHTML = newList;
    }       
});

















