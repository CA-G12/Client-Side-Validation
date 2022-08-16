

const form = document.querySelector('#submit');
const fullName = document.querySelector('#fullName');
const errFullName = document.querySelector('#error_fullName');

const username = document.querySelector('#username');
const errorUsername = document.querySelector('#error_username');

const password = document.querySelector('#password');
const error_password = document.querySelector('#error_password');

const email = document.querySelector('#email');
const error_email = document.querySelector('#error_email');

fullName.addEventListener('blur', checkFullName);
username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(checkFullName(), checkUsername() ,checkPassword())
    if (checkFullName() && checkUsername() && checkPassword()) {
        
        form.submit();
    }
})



function checkFullName() {
    let pattern = /[a-z]{4,8}/i;
    let text = fullName.value;
    if (pattern.test(text)) {
        errFullName.textContent = '';
        return true;
    } else {
        errFullName.textContent = 'Full name must be at least four characters,and you must use valid letters'
        return false;
    }
}

function checkUsername() {
    let pattern = /^[a-z]{3,}\d?/i;
    let text = username.value;
    if (pattern.test(text)) {
        errorUsername.textContent = '';
        return true
    } else {
        errorUsername.textContent = 'Username must be at least three characters and starts with a letter'
    }
}

function checkEmail(){



}

function checkPassword() {
    
    let text = password.value;
    let letters = text.split('');
    let isLetter = false;
    let isDigit = false;
    let lowerCase = false;
    let isUpperCase = false;
    letters.forEach(letter => {
        if (isNaN(letter)) {
            isLetter = true;
            if (letter >= 'a' && letter <= 'z') {
                lowerCase = true;


            }
            if (letter >= 'A' && letter <= 'Z') {
                isUpperCase = true;


            }

        } else if (typeof parseInt(letter) == 'number') {
            isDigit = true
        } })
        ;

       console.log(letters.length>=6,isDigit,isLetter,isUpperCase,lowerCase)
        if(letters.length>=6&& isDigit&&isLetter&&isUpperCase&&lowerCase){
            return true;
        }else{
            error_password.textContent = 'Password must be at least 6 characters and must contains digits and uppercase and lower case letters';
            return false;
        }
}