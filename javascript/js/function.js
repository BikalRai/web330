// general function

function greet() {
	console.log("Greetings...");
}

greet();

console.log(Math.floor(Math.random() * 6) + 1);

function diceRoll() {
	console.log(Math.floor(Math.random() * 6) + 1);
}

diceRoll();

function sum() {
	let a = 5;
	let b = 5;
	let result = a + b;
	console.log(`${a} + ${b} = ${result}`);
	diceRoll();
}

sum();

diceRoll();

function something() {
	sum();
}

something();

// function expression
const greet2 = function () {
	console.log('Greet2');
}

greet2();

// ES6, we have arrow function

const greet3 = () => {
	console.log("Greet 3")
}

greet3();

// function with parameters

function add (x, y, z) {
	let result;
	result = x + y + z;
	console.log("Result:", result);
}

add(25, 25, 22);
add(2, 25, 4);
add(3, 11, 2);

function add2(a, b) {
	let result = a + b;
	console.log("Result:", result);
}

add2(2, 3);

// function with return statement
function subtract() {
	let a = 5;
	let b = 6;
	let result = a - b;
	return result;
	console.log("After return statement");
}

const value = subtract();
console.log(value)
console.log(subtract());

const greet4 = function(greet) {
	if (typeof greet === 'string'){
		return `${greet} guys!!`;
	} else {
		return `Enter a string`;
	}
	
}

const greetWithName = greet4('Welcome');
console.log(greetWithName);
console.log(greet4("Ganbatte!!"));

add(5,5,5);


{
	var a = 5;
}

console.log(a);

let b = 99; // global variable
function print() {
	let b = 20; // local variable
	let d = 22;
	console.log(b);

	function some() { // local function inside print function
		let c = 55;
		let b = 11;
		console.log(b);
	}

	// console.log(c);

	some();
}

// some();

print();
// console.log(d);