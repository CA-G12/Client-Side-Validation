console.log('hello');
const email = document.querySelector("#email");
const form  = document.querySelector('form');
const error = form.querySelector('.error');
const password =document.querySelector('#password')
const configPassword =document.querySelector('#confirmPassword')
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
const errorPassword=document.querySelector('.errorPassword')
configPassword.addEventListener('input',()=>{
    if (configPassword.value != password.value) {
        configPassword.className="invalid";
        errorPassword.textContent = "Passwords did not match";
        errorPassword.className="errorPassword active";
      } else {
        configPassword.className = "valid";
        errorPassword.textContent = "";
        errorPassword.className= "errorPassword";
      }
})
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const testEmail = email.value.length === 0 || emailRegExp.test(email.value);
    if (!testEmail) {
      email.className = "invalid";
      error.textContent = "I expect an e-mail, darling!";
      error.className = "error active";
    } else {
      email.className = "valid";
      error.textContent = "";
      error.className = "error";
    }
    const testPassword = password.value.length === 0 || passwordRegExp.test(password.value);
    if (!testPassword) {
      password.className = "invalid";
      error.textContent = "I expect an password, darling!";
      error.className = "error active";
    } else {
      password.className = "valid";
      error.textContent = "";
      error.className = "error";
    }
    
  });
  