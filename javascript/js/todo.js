const addInput = document.getElementById('addTodo');
const addBtn = document.getElementById('btnTodo');
const todoList = document.getElementById('todoList');



// function to create elements 
function creatingElement (text) {
	// element creation
	const todoDiv = document.createElement('div');
	const todoItem = document.createElement('input');
	const delTodoBtn = document.createElement('button');

	// adding to todo item
	todoItem.value = text;

	// setting button text
	delTodoBtn.textContent = 'Delete'

	delTodoBtn.addEventListener('click', function() {
	delTodoBtn.parentElement.remove();
})

	todoDiv.appendChild(todoItem);
	todoDiv.appendChild(delTodoBtn);

	return todoDiv;
}


addBtn.addEventListener('click', function() {
	const newTask = creatingElement(addInput.value);
	todoList.appendChild(newTask)
	addInput.value = ''
})




	


// // appending child to parent element
// const todoDiv = document.createElement('div');
// const todoItem = document.createElement('input');
// const delTodoBtn = document.createElement('button');
// // adding to todo item
// 	todoItem.value = 'TOdo';

// 	// setting button text
// 	delTodoBtn.textContent = 'Delete'
// console.log(delTodoBtn)
// delTodoBtn.addEventListener('click', function() {
// 	delTodoBtn.parentElement.remove();
// })
// todoDiv.appendChild(todoItem);
// 	todoDiv.appendChild(delTodoBtn);

// todoList.appendChild(todoDiv);