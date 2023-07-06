const person1 = {
	name: 'Prashray',
	age: 16,
	address: 'Kumaripati',
	hobbies: ['Games', 'Cooking', 'Slack']
}

console.log(person1);
console.log(typeof person1);

// accessing object values
console.log(person1.name); // dot notation
console.log(person1["age"]); //bracket notation
console.log(person1["address"]); 
console.log(person1.hobbies); 
console.log(person1.hobbies[person1.hobbies.length - 1]); 

// object methods
const person2 = {
	name: `Sunil`,
	birthYear: 2007,
	calcAge: function() {
		let age = 2023 - this.birthYear;
		// console.log("This keyword",this);
		return age;
	}

}
console.log(person2);

console.log(person2.calcAge());
console.log(person2["calcAge"]());

const person3 = {
	name: `Krishna`,
	birthYear: 2007,
	calcAge: () => {
		// let age = 2023 - this.birthYear;
		console.log("This keyword",this);
		// return age;
	}

}

person3.calcAge();
// console.log(person3.calcAge());

const person4 = {
	name: 'Bipasbi',
	birthYear: 2008,
	hobbies: ['Draw', 'Sleep', 'Games'],
	details: function () {
		console.log(`${this.name} is ${2023 - this.birthYear} years old and loves to ${this.hobbies[0]}, ${this.hobbies[1]} and play ${this.hobbies[2]}.`)
	}
}

person4.details();