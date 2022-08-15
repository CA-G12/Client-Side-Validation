const form = document.getElementsByTagName('form')[0];
var error = false;
const RegsTbl = {
    'name': /^[a-zA-Z ]+$/,
    'username': /^[a-zA-Z0-9]+$/,
    'email': /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    'password': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
};

const RegsMatch = (input, reg) => reg.test(input);

const elements = form.elements;
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('keyup', () => {
        const input = elements[i];
        const reg = RegsTbl[input.name];
        if (RegsMatch(input.value, reg)) {
            input.nextElementSibling.innerHTML = "";
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.nextElementSibling.innerHTML = "Invalid";
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
        }

        if (input.name == 'password' && input.value != elements[i + 1].value) {
            elements[i + 1].nextElementSibling.innerHTML = "Password not match";
            elements[i + 1].classList.remove('is-valid');
            elements[i + 1].classList.add('is-invalid');
        }
        else if (input.name == 'password' && input.value == elements[i + 1].value) {
            elements[i + 1].nextElementSibling.innerHTML = "";
            elements[i + 1].classList.remove('is-invalid');
            elements[i + 1].classList.add('is-valid');
        }

        if (input.name == 'confirmpassword' && input.value != elements[i - 1].value) {
            elements[i].nextElementSibling.innerHTML = "Password not match";
            elements[i].classList.remove('is-valid');
            elements[i].classList.add('is-invalid');
        }
        else if (input.name == 'confirmpassword' && input.value == elements[i - 1].value) {
            elements[i].nextElementSibling.innerHTML = "";
            elements[i].classList.remove('is-invalid');
            elements[i].classList.add('is-valid');
        }


    }
    );
}

form.addEventListener('submit', (e) => {
    error = false;
    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i].classList.contains('is-invalid')) {
            error = true;
        }
    }

    if (error) {
        e.preventDefault();
    }
}
);

