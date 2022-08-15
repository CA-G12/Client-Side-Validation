const form = document.querySelector('#submit');
const fullName = document.querySelector('#fullName');
const errFullName = document.querySelector('#error_fullName');

const username = document.querySelector('#username');
const errorUsername = document.querySelector('#error_username');

const password = document.querySelector('#password'); 
const error_password = document.querySelector('#error_password');

fullName.addEventListener('blur', checkFullName);
username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (checkFullName() && checkUsername()&&checkPassword()) {
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
        return true ; 
    } else {
        errorUsername.textContent = 'Username must be at least three characters and starts with a letter'
    return false;
    }
}

function checkPassword() {
    let pattern = /[\w]{1,}[\W]{1,}[\w]*/;
    let text = password.value;
    console.log(text);
    if(pattern.test(text)){
        error_password.textContent = ''; 
        return true ;

    }else {
        error_password.textContent = 'Password must be at least 6 characters and must starts with letters,digits or underscore , and must contains a spacial letter';
return false ; 
    }
}