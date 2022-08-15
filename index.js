let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkEmptyInputs(form)
    validateEmail(form)
    checkPassword(form)
})

function checkEmptyInputs(form) {
    let inputs = form.querySelectorAll('input')
    inputs.forEach(input => {
        let span = input.parentNode.querySelector('span')
        if (input.value === '') {
            setErrorTitle(input, `The ${input.name} is requierd`)
        }
        else {
            removeError(input);
        }
    });
}
function validateEmail(form) {
    let email = getInput(form,'email')
    if (email.value) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.value.match(validRegex)) {
            setErrorTitle(email, 'Enter a valid Email');
        }
    }

}
function checkPassword(form) {
    let pass = getInput(form, 'password')
    let configPass = getInput(form, 'confirmPassword')
    if (pass.value.length > 0) {
        if (pass.value.length >= 8) {
            if (pass.value != configPass.value) {
                setErrorTitle(configPass, 'the password Dose not match')
            }
        }
        else {
            setErrorTitle(pass, 'the password must be longer than 8 ')
        }
    }

}
function setErrorTitle(input, title) {
    input.style.borderColor = 'red';
    input.parentNode.querySelector('span').textContent = title;
}
function removeError(input) {
    input.style.borderColor = 'transparent';
    input.parentNode.querySelector('span').textContent = ``;
}
function getInput(form, name) {
    return form.querySelector(`input[name="${name}"]`)
}