let form = document.querySelector(`#registerForm`)
let email = document.querySelector(`#email`);
let password = document.querySelector(`#password`);
let confirmPassword = document.querySelector(`#confirmPassword`);
let submitBtn = document.querySelector(`button`);
let massg = document.querySelector(`#massg`)

submitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (!validEmail()) {
    email.style.outline = `1px solid #f00`;
    massg.textContent = `Invalid Email`;
    massg.style.color = `#f00`;
    return
  } else if (!checkConfirmPassword()) {
    confirmPassword.style.outline = `1px solid #f00`;
    password.style.outline = `1px solid #f00`;
    massg.textContent = `Confirm password must equal password`;
    massg.style.color = `#f00`;
    return
  } else {
    massg.textContent = ``
  }
});

// Validate Email
function validEmail () {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email.value)) {
    return true;
  } else {
    return false;
  }
}

function checkConfirmPassword () {
  if (password.value === confirmPassword.value && password.value !== `` && confirmPassword.value !== ``) {
    return true;
  } else {
    return false;
  }
}




email.addEventListener(`input`, () => {
  if (validEmail()) {
    email.style.outline = `1px solid #0f0`;
  } else {
    email.style.outline = `1px solid #f00`;
  }
});

confirmPassword.addEventListener(`input`, () => {
  if (checkConfirmPassword()) {
    password.style.outline = `1px solid #0f0`;
    confirmPassword.style.outline = `1px solid #0f0`;
  } else {
    password.style.outline = `1px solid #333`;
    confirmPassword.style.outline = `1px solid #000`;
  }
})