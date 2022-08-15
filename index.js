const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const confirmEmailMsg = document.querySelector(".confirm-email-msg");
const passwordMsg = document.querySelector(".password-msg");
const confirmMsg = document.querySelector(".confirm-msg");

emailInput.addEventListener("input", (email) => {
  const emailChecker = validateEmail(email.target.value);
  if (!emailChecker) {
    emailInput.style.borderColor = "red";
    confirmEmailMsg.textContent = "Not a valid email";
  } else {
    emailInput.style.borderColor = "green";
    confirmEmailMsg.textContent = "";
  }
});

passwordInput.addEventListener("input", (password) => {
  const emailChecker = validatePassword(password.target.value);
  if (!emailChecker) {
    passwordInput.style.borderColor = "red";
    passwordMsg.textContent = "Make a strong password";
  } else {
    passwordInput.style.borderColor = "green";
    passwordMsg.textContent = "";
  }
});

confirmPasswordInput.addEventListener("input", (e) => {
  const password = passwordInput.value;
  const confirmPassword = e.target.value;
  if (password !== confirmPassword) {
    confirmPasswordInput.style.borderColor = "red";
    confirmMsg.textContent = "The password doesn't match";
  } else {
    confirmPasswordInput.style.borderColor = "green";
    confirmMsg.textContent = "";
  }
});

function validateEmail(email) {
  const check = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  return check.test(email);
}

function validatePassword(password) {
  var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return check.test(password);
}
