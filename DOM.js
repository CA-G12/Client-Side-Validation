const form = document.querySelector('.form');
const submit = document.querySelector('button');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

message.style.display = 'none';

submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const Emailregex = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/;
    if (!Emailregex.test(email.value)) {
        message.textContent = "Please enter a valid email."
        message.style.display = 'block';
        email.style.border = "2px solid crimson";

    } else if (password1 !== password2) {
        email.style.border = '1px solid black';
        message.textContent = "Passwords do not match.";
        message.style.display = 'block';
        password1.style.border = "2px solid crimson";
        password2.style.border = "2px solid crimson";
    } else {
        email.style.border = '1px solid black';
        password1.style.border = "1px solid black";
        password2.style.border = "1px solid black";
        message.style.display = 'none';
    }


}

