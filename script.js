// // Add validation for empty inpute field
// document.querySelector('#push').onclick = function(){
//      if(document.querySelector('#newtask input').ariaValueMax.length === 0)
//      {
//         alert('Please Enter a Task')
//      } else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="tasks">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                 <i class="fa-solid fa-trash-can"></i>
//                 </div>
//             `;
//             var current_tasks = document.querySelectorAll(".delete");
//             for(var i=0; i<current_tasks.length; i++){
//                 current_tasks[i].onclick = function(){
//                     this.parentNode.remove();
//                 }
//             }
    
//             var tasks = document.querySelectorAll(".tasks");
//             for(var i=0; i<tasks.length; i++){
//                 tasks[i].onclick = function(){
//                     this.classList.toggle('completed');
//                 }
//             }
    
//             document.querySelector("#newtask input").value = "";
//         }
//      }

const todoInput = document.querySelector('#todo_input');
const todoButton = document.querySelector('#push');
const todoList = document.querySelector('#todo_list');

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }

    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn') // Change button
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}