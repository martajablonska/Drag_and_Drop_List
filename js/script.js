const app = document.querySelector('.container');
const tasks = document.querySelectorAll('.task');

function dragTransfer(e) {
    e.dataTransfer.setData('srcId', e.target.id);
}

tasks.forEach(function(task) {
   task.addEventListener('dragstart', dragTransfer) 
});

app.addEventListener('dragover', function(e) {
    e.preventDefault();
});

app.addEventListener('drop', function(e) {
    e.preventDefault();
    
    let target = e.target;
    let srcId = e.dataTransfer.getData('srcId');
    
    let droppable = target.classList.contains("box");
     
    if(droppable) {
         target.appendChild(document.getElementById(srcId));
     };
});