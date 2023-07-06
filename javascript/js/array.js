//array
const arr = [1, 3.1, true, 'Some string'];
console.log("Array:", arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const arr2 = [1, 3.1, true, 'Some string', [2, 3, [4, 5]]];
console.log(arr2[4]);
console.log(arr2[4][1]);
console.log(arr2[4][2]);
console.log(arr2[4][2][0]);

const numbers = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	console.log("Number array elemet:", numbers[i]);
	sum += numbers[i];
}

console.log("Total value:", sum);

// array methods
numbers.push(15);
console.log(numbers);
numbers.push('five');
console.log(numbers);
numbers.pop();
console.log(numbers);

const poppedValue = numbers.pop();
console.log(poppedValue);

numbers.shift();
console.log(numbers);

numbers.unshift(11);
console.log(numbers);

console.log(numbers.includes(20));
console.log(numbers.includes(4));

console.log(numbers.indexOf(4));
console.log(numbers.indexOf(11));

console.log(numbers.slice(2));

const arrOfChar = "Hello World".split('');
console.log(arrOfChar);
console.log(arrOfChar.join(''));
console.log(arrOfChar.join(' '));

numbers.forEach(function(element, index) {
	console.log(element, index);
})

numbers.forEach(function(ele, i) {
	console.log(i, ele);
})

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		break;
	}
	console.log("Value of i", i);
}
console.log('------------divider------------');

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		continue;
	}
	console.log("Value of i", i);
}

console.log('------------divider------------');
// numbers.forEach(function(element, index) {
// 	if (element === 5) {
// 		continue;
// 	}
// 	console.log(element);
// })


const oddEven = [];
for (let i = 1; i <= 10; i++) {
	if(i % 2 === 0) {
		oddEven.push("Even");
	} else {
		oddEven.push(i);
	}
}

console.log(oddEven);

// fizzbuzz
const fizzBuzz = [];

for (let i = 1; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		fizzBuzz.push('FizzBuzz');
	} else if (i % 3 === 0) {
		fizzBuzz.push('Fizz');
	} else if (i % 5 === 0) {
		fizzBuzz.push('Buzz');
	}else {
		fizzBuzz.push(i);
	}
}

console.log(fizzBuzz);
console.log('-------exercise-------')
fizzBuzz.forEach((ele) => {
	console.log(ele);
})