let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmedPass = document.querySelector('#confirmPassword');
let submit = document.querySelector('button');
let message = document.querySelector('.message');

////

const emailValidation = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) return new TypeError('please enter an email address');

  return re.test(email);
};

const passwordValidation = (pass1, pass2) => {
  if (!pass1 || !pass2) return new TypeError('please enter a password');
  if (pass1.length < 8)
    return new TypeError('password must be at least 8 characters');

  return pass1 === pass2;
};

const displayMessage = (msg) => {
  message.textContent = msg;
  message.style.display = 'block';
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const emailAddress = email.value;
  const pass1 = password.value;
  const pass2 = confirmedPass.value;

  const emailCheck = emailValidation(emailAddress);
  const passwordCheck = passwordValidation(pass1, pass2);

  if (emailCheck instanceof Error) {
    displayMessage(emailCheck.message);
  } else if (!emailCheck) {
    displayMessage('please enter a valid email');
  } else if (passwordCheck instanceof Error) {
    displayMessage(passwordCheck.message);
  } else if (!passwordCheck) {
    displayMessage("passwords don't match");
  } else {
    message.style.display = 'none';
  }
});
