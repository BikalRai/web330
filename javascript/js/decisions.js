// switch example

let num = 3;

switch (num) {
case 1:
	console.log("It is one");
	break;
case 2: 
	console.log("It is two");
	break;
default:
	console.log("Invalid number");
}

/*let day = prompt("Enter day");

switch (day) {
	case "m":
		console.log("Monday");
		break;
	case "t":
		console.log("Tuesday");
		break;
	case "w":
		console.log("Wednesday");
		break;
	case "th":
		console.log("Thursday");
		break;
	case "f":
		console.log("Friday");
		break;
	case "s":
		console.log("Saturday");
		break;
	case "su":
		console.log("Sunday");
		break;
	default:
		console.log("Invalid day")
}*/

// ternary example
let name = "tim";

name === "tim" ? console.log("Raised hand") : console.log("No action");

let age = 15;

age >= 18 ? console.log("Can apply for citizenship") : console.log("Not old enough");

let a = 7;
let b = 6;
let sum;

a < b ? sum = a + b : sum = a - b;

console.log(sum);

// Math library
let x = 5.4;
let y = 6
console.log(Math.ceil(x));
console.log(Math.round(x));
console.log(Math.pow(2, y));
console.log(Math.abs(-19.6));
console.log(Math.floor(x));
console.log(Math.floor(21.9213213213123982137));
console.log(Math.random());

let randomNum = Math.floor(Math.random() * 6) + 1;

console.log("Dice value:", randomNum);