const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');
const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

form.addEventListener('submit', event => {
	event.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const confirmPasswordValue = confirmPassword.value;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be empty');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else if (passwordValue.length <= 7) {
        setErrorFor(password, 'Your Password must be at least 8 characters');
    }else if(!/\d/.test(passwordValue)) {
        setErrorFor(password, 'Your Password must have a number');
    } else if (!format.test(passwordValue)) {
        setErrorFor(password, 'Your Password must have a symbol');
    } else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Password cannot be empty');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmPassword);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
