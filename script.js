const form = document.querySelector(".form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conPassword = document.getElementById("con-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputsValidation();
})

function checkInputsValidation() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conPasswordValue = conPassword.value.trim();
    if (emailValue === '' || !isEmail(emailValue)) {
        setError(email, "Invalid Email ");
    }else {
        setValid(email);
    }

    if(passwordValue === '') {
		setError(password, 'Password cannot be blank');
	} else {
		setValid(password);
	}
	
	if(conPasswordValue === '') {
		setError(conPassword, 'Password cannot be blank');
	} else if(passwordValue !== conPasswordValue) {
		setError(conPassword, 'Passwords does not match');
	} else{
		setValid(conPassword);
	}

}


function setError(input, message) {
    const inputParent = input.parentElement;
    const smallText = inputParent.querySelector("small");
    smallText.innerHTML = message;

    inputParent.className = "form-control error"
}

function setValid(input) {
    const inputParent = input.parentElement;
    inputParent.className = "form-control success"
}



function isEmail(email) {
    // copy paste
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
