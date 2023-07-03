//for loop
for (let i = 0; i < 10; i++) {
	console.log("Hello World");
}

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// while loop
let i = 1;
while(i <= 5) {
	console.log(`Value of i: ${i}`);
	i++;
}

// do while loop
let j = 1;
do {
	console.log(`Value of j ${j}`);
	j++;
} while(j <= 5);


let k = 10;
do {
	console.log(`Value of k: ${k}`);
	k++;
} while(k <= 5);

let x = 11;
do {
	console.log(`value of x: ${x}`);
	x--;
} while(x > 15);

// multiplication table
const num = Number(prompt("Enter number:"));
for (let i = 1; i <= 10; i++) {
	document.write(`${num} x ${i} = ${num * i}`);
	document.write("<br>");
}

// palindrome number 
let number = Number(prompt("Enter number to check:"));
let remainder;
let reverse = 0;
let original_num = number;

while (number != 0) {
	remainder = number % 10;
	reverse = reverse * 10 + remainder;
	number = Math.floor(number / 10);
}

if(reverse === original_num) {
	console.log("Number is palindrome")
} else {
	console.log("Number is not palindrome");
}

// use for loop from 1 - 100
// if number % 2 === 0, print even
// else print the number