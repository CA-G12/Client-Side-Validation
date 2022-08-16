let register = document.querySelector("#register");


let nameInput = document.querySelector("#nameInput");
let errorNameInput = document.querySelector("#errorNameInput");



let nameCheck = /^[a-z0-9_.]+$/;

register.addEventListener("click", ()=>{
    if (!nameCheck.test(nameInput.value)) {
        errorNameInput.textContent="you can not have a space or uppercase letter in your name";
    }else{
        console.log('name Check done');
        errorNameInput.textContent ='';
    }
    })



// email 
let emailInput = document.querySelector("#emailInput");
let errorEmailInput = document.querySelector("#errorEmailInput");


let emailCheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

register.addEventListener("click", ()=>{
    if (!emailCheck.test(emailInput.value)) {
        errorEmailInput.textContent = "Email is not valid";
    }else{
        console.log('emailCheck done');
        errorEmailInput.textContent ='';
    }
})


// password check
let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let passInput = document.querySelector("#passInput");
let errorPassInput = document.querySelector("#errorPassInput");

register.addEventListener("click", ()=>{
    console.log(passInput.value);
if (passwordCheck.test(passInput.value)){
    console.log('pass Check done');
    errorPassInput.textContent ="";
}else{
    errorPassInput.textContent = "Password is not valid";
}
}) 

