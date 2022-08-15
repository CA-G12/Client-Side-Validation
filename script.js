const registerForm = document.querySelector('#registerForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const message = document.querySelector('#message');

const matchMail = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/

registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (!email.value.match(matchMail)) {
        message.classList.add('message');
        message.textContent = 'Enter a valid email';
    }
    if (password.value.length < 6) {
        message.classList.add('message');
        message.textContent = 'Your password length must be at least 8 characters';
    }
    if (password.value !== confirmPassword.value) {
        message.classList.add('message');
        message.textContent = 'Passwords you entered do not match';
    }
    
    message.textContent = 'You logged in successfully';
})
