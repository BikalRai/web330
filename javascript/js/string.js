console.log("Let's take a walk");
console.log('Don"t Give up!!');
console.log("1)option12)option2")
console.log(`
1)option1
2)option2
`)
console.log(`Let's Don"t`);

// Template Literal
console.log(`The sum of 2 + 3 is ${2 + 3}`);
let sum = 30 + 30;

console.log(`The sum is ${sum} and it is greater than 50`);

console.log("The sum is " + sum + " and it is greater than 50");

// String methods
let str = "Hello World";
let str2 = "This is some random sentence to display something"
console.log(str.length);
console.log(str[0]);
console.log(str[7]);
console.log(str[10]);
console.log(str2[str2.length - 1])
console.log(str[str.length - 1]);

console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(str.concat(str2));
console.log("      Hi        ");
console.log("      Hi        ".trim());
console.log("      Hi        ".trimStart());
console.log(str2.charAt(10));
console.log(str.replace("World", "Tom"));
const str3 = str.replace("World", "Mike");
console.log(str3);

console.log(str.split());
// const splitedStr = str.split('');
const splitedStr = str.split(' ');
console.log(splitedStr);
const joinedSplitedStr = splitedStr.join(' | ');
console.log(joinedSplitedStr);

console.log(str.slice())
console.log(str.slice(1))
console.log(str.slice(6))
console.log(str.slice(6, 8))
console.log(str.slice(1, 5))
console.log(str.slice(-5, -1))
console.log(str.slice(-1))

const firstName = prompt("Enter first name:");
const firstChar = firstName[0].toUpperCase();
const restOfFirstName = firstName.slice(1).toLowerCase();
alert(`Welcome ${firstChar}${restOfFirstName}`);

