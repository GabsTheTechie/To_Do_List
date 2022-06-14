window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('complete');
		task_edit_el.innerText = 'Complete';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "complete") {
				task_edit_el.innerText = "Complete";
                list_el.sttle.textDecoration = "line-through";
				//task_input_el.removeAttribute("readonly");
				//task_input_el.focus();
			} else {
				task_edit_el.innerText = "Complete";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});


// const todoInput = document.querySelector('#newtask input');
// const todoButton = document.querySelector('#push');
// const todoList = document.querySelector('#todo_list');

// todoButton.addEventListener("click", addTodo)
// todoList.addEventListener("click", deleteCheck)

// function addTodo(event) {
//     event.preventDefault();
//     //todo DIV
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     //todo LI 
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo_item');
//     todoDiv.appendChild(newTodo);
//     if(todoInput.value === ""){
//         return null
//     }

//     //check mark BUTTON
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add('complete_btn') // edit button name
//     todoDiv.appendChild(completedButton);
//     //delete BUTTON
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.classList.add('delete_btn')
//     todoDiv.appendChild(deleteButton);
//     //Append to Actual LIST
//     todoList.appendChild(todoDiv);
//     //Clear todo input VALUE
//     todoInput.value = ""
// }

// //DELETE & CHECK
// function deleteCheck(e) {
//     const item = e.target;
//     //DELETE ITEM
//     if (item.classList[0] === "delete_btn") {
//         const todo = item.parentElement;
//         //ANIMATION TRANSITION
//         todo.classList.add("fall")
//         todo.addEventListener('transitionend', function () {
//             todo.remove()
//         })
//     }
//     //COMPLETE ITEM
//     if (item.classList[0] === "complete_btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completedItem")
//     }
// }

// // Add validation for empty inpute field
// document.querySelector('#push').onclick = function(){
//      if(document.querySelector('#newtask input').ariaValueMax.length ==0)
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
