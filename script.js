const email = document.querySelector("input[name='email']");
const form = document.querySelector("form");
const msg = document.querySelector(".msg");
const password = document.querySelector("#pass");
const confirmedPassword = document.querySelector("#confirmPass");


const validateEmail = (e) => {
    const  value  = email.value;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(value) || email.length === 0) {
      msg.textContent = "Enter a right email!";
      msg.className = "msg";
      form.appendChild(msg);
      return false;
    } else if (email.length <= 8) {
      return false;
    } else {
      msg.textContent = "";
      return true;
    }
  };

  const validatePassword = () => {
    const  value  = password.value;
    const regexPassword =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
    if (!regexPassword.test(value) || password.length === 0) {
      msg.textContent = "Enter a right password";
      form.appendChild(msg);
      return false;
    } else {
      msg.textContent = "";
      return true;
    }
  };
  const validateConfirmed = () => {
    const confirmed = confirmedPassword.value;
    const originPass = password.value;
    if (confirmed !== originPass) {
      msg.textContent = "Your password does not match with confirmed password";
      form.appendChild(msg);
      return false;
    } else {
      msg.textContent = ''
      return true;
    }
  };


  const submitFrom = (e) => {
    e.preventDefault()
    if (validateEmail() && validatePassword() && validateConfirmed()) {
        email.value = ''
        password.value = ''
        confirmedPassword.value = ''
        alert('Password passed successfully')
      } else {
        alert('Please check your input')
      }
  }


  form.addEventListener('submit',submitFrom)
  email.addEventListener('focusout',validateEmail)
  password.addEventListener('focusout',validatePassword)
  confirmedPassword.addEventListener('focusout',validateConfirmed)