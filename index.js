const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    
    


    if(
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    passwordValidation()
    ){
        form.submit();
    }

}

function  nameValidation(){
    const userNameValue = userName.value.trim();

    if(userNameValue == ''){
        document.querySelector('#nameErr').textContent = 'You must Enter the name';
        return false;
    }else return true;

}

function emailValidation(){
    const emailValue = email.value.trim();
    const valid = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

    if (emailValue.match(valid)){
        return true;
    }else{
        document.querySelector('#emailErr').textContent = 'You must Enter a valid email';
        return false;
    }
}

function phoneValidation(){
    const phoneValue = phone.value.trim();
    var format = '/^\d{10}$/';

    if (! phoneValue.match(format)){
        document.querySelector('#phoneErr').textContent = 'You must Enter a valid phone number';
        return false;
    }else{
        return true;
        

    }

}



function passwordValidation(){
    const passwordValue = password.value.trim();
    const re1 = /[a-z]/;
    const re2 = /[A-Z]/;
    const re3 = /[0-9]/;

    if (passwordValue < 8 || !re1.test(passwordValue)  || !re2.test(passwordValue)  || !re3.test(passwordValue)){

        document.querySelector('#passwordErr').textContent = 'password must contain [0-9][aA-zZ], length >8 ';

        return false;
    }else{
        return true;
    }

}