// element selection
const myForm = document.forms['myform'];
const firstName = myForm.firstname;
const lastName = myForm.lastname;
const password = myForm.password;
const cPassword = myForm.cpassword;
const submitBtn = document.querySelector('#btnSubmit');



function validateForm (event) {
	event.preventDefault();
	if (firstName.value === '' || firstName.value === null) {
		alert("Do not leave field empty")
		firstName.focus();
		if (lastName.value === '' || lastName.value === null) {
			alert("Do not leave field empty")
			lastName.focus();
		} 
	}

	if (password.value === '' || password.value === null) {
		if (cPassword.value === '' || cPassword.value === null) {
			alert("Do not leave field empty")
			password.focus();
		} 
	}
}
submitBtn.addEventListener('click', validateForm);


document.querySelector('#btnToggle').addEventListener('click', function(e) {
	e.preventDefault();
	const passType = document.forms['myform'][2].type;
	if (passType === 'password') {
		document.forms['myform'][2].type = 'text'
	} else if (passType === 'text') {
		document.forms['myform'][2].type = 'password'
	} else {
		return;
	}
})

console.log(document.forms['myform'][2].type)