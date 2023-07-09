// Selecting Elements
const countValue = document.querySelector('.countValue');
const increaseBtn = document.getElementById('btn1');
const decreaseBtn = document.getElementById('btn2');
const saveBtn = document.getElementById('btn3');
const resetBtn = document.getElementById('btn4');
const prevValue = document.querySelector('#prev-count');

// count value state
let count = 0;

// function to increase to count value
function increaseValue () {
	count++;
	countValue.textContent = `Count: ${count}`;
}

increaseBtn.addEventListener('click', increaseValue);

// function to decrease count value
function decreaseValue () {
	if (count === 0) {
		return
	}
	count--;
	
	countValue.textContent = `Count: ${count}`;
}

decreaseBtn.addEventListener('click', decreaseValue);

// function to save previous count
const saveCount = function() {
	prevValue.textContent += ` - ${count}`
	countValue.textContent = `Count: 0`;
	count = 0;
}

saveBtn.addEventListener('click', saveCount);

// function to reset all
const resetCounter = function() {
	prevValue.textContent = `Previous Count: `
	countValue.textContent = `Count: 0`;
	count = 0;
}

resetBtn.addEventListener('click', resetCounter);