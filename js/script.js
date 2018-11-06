const app = document.querySelector('.container');
const tasks = document.querySelectorAll('.task');

app.addEventListener('dragover', function(e) {
    e.preventDefault();
});

app.addEventListener('drop', function(e) {
    e.preventDefault();
    
    let targetBox = e.target; //box do którego przerzucamy
    let taskId = e.dataTransfer.getData('taskId'); //id taska
    
    let droppable = targetBox.classList.contains("box");
    
    let taskToMove = document.getElementById(taskId);
     
    if(droppable) {
        targetBox.appendChild(taskToMove);
    };
        
    localStorage.setItem('newTasksList', app.innerHTML);
});


//get local storage after page will load

window.addEventListener('load', function(e) {
    
    const newPage = localStorage.getItem('newTasksList');
    if(newPage) {
        app.innerHTML = newPage;
    } 
            
});

app.addEventListener('dragstart', function(e) {
    
    if(e.target.className === "task") {
        let task = e.target;
        e.dataTransfer.setData('taskId', e.target.id);
    };
});















