// if statement

let age = 64;
if(age >= 18) {
	console.log("Eligible to vote");
}

let fruit = "apple";
if(fruit === "apple") {
	console.log("An Apple");
}


// if else statement
if(age >= 18) {
	console.log("Eligible to vote");
} else {
	console.log("Not Eligible to vote");
}

// if else if statement
if(age >= 65) {
	console.log("Senior Citizen");
} else if(age >= 18) {
	console.log('Young Adult')
} else {
	console.log("Child");
}

// examples
// let num = Number(prompt("Enter number"));

// if (num % 2 === 0) {
// 	console.log("Even number");
// } else {
// 	console.log("Odd Number");
// }

const weight = Number(prompt("Enter weight in kg"));
const height = Number(prompt("Enter height in meters"));

const bmi = weight / height ** 2;

if (bmi < 18.9) {
	console.log("Underweight");
} else if (bmi >= 18.9 && bmi < 23.9) {
	console.log("Healthy");
} else if (bmi >= 23.9 && bmi < 29.9) {
	console.log("Overweight");
} else {
	console.log("Obese");
}