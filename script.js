let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordErorr');

email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passwordVerify);

function vaildate(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        emailError.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "red";
        passwordError.style.display = "block";
        password.focus();
        return false;
    }
}

function emailVerify(){
    if(email.value.length >=8){
        email.style.border = "silver";
        emailError.style.display = "none";
        return true;
    }
}
function passwordVerify(){
    if(password.value.length >=8){
        password.style.border = "silver";
        passwordError.style.display = "none";
        return true;
    }
}