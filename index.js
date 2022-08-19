const form = document.querySelector('#registerForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

const checkInputs = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if (emailValue === '') {
        setError(email, 'please fill your email')
    } else if (!validateEmail(emailValue)) {
        setError(email, 'email is not valid')
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
		setError(password, 'please fill your password');
	} else {
		setSuccess(password);
	}

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'please fill your password');
    } else if (passwordValue !== confirmPasswordValue){
        setError(confirmPassword, 'Passwords does not confirm');
    } else (
		setSuccess(confirmPassword)
    )
}

const setError = (input, msg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.textContent = msg
    formControl.className = 'form-control error'
}

const setSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};