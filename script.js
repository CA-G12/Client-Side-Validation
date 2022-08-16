// ? Targeting elements start.
const form = document.querySelector("#signup");
const textInput = document.querySelector(".text-cont input");
const emailInput = document.querySelector(".email-cont input");
const passwordInput = document.querySelector(".password-cont input");
const confirmPasswordInput = document.querySelector(
  ".confirm-password-cont input"
);

// ? Creating the function which is responsible for validating the username input.
const validateUsername = (username) => {
  const textApprove = document.querySelectorAll(".text-cont img")[0];
  const textClose = document.querySelectorAll(".text-cont img")[1];
  const usernameRegex = /^[a-zA-z]+.+$/g;
  if (usernameRegex.test(username)) {
    textApprove.style.display = "block";
    textClose.style.display = "none";
  } else {
    textApprove.style.display = "none";
    textClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for validating the email input.
const validateEmail = (email) => {
  const emailApprove = document.querySelectorAll(".email-cont img")[0];
  const emailClose = document.querySelectorAll(".email-cont img")[1];
  const emailRegex = /^[a-zA-z0-9]?.*\@[a-zA-z0-9]{1,}\.[a-zA-Z]{1,}$/;
  if (emailRegex.test(email)) {
    emailApprove.style.display = "block";
    emailClose.style.display = "none";
  } else {
    emailApprove.style.display = "none";
    emailClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for validating the password input in case of strength.
const validatePassword = (password) => {
  const passwordApprove = document.querySelectorAll(".password-cont img")[0];
  const passwordClose = document.querySelectorAll(".password-cont img")[1];
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
  // ! Eight Characters long, 
  // ! contains a low case letter, 
  // ! contains a capital case letter, and contains a number.
  if (passwordRegex.test(password)) {
    passwordApprove.style.display = "block";
    passwordClose.style.display = "none";
  } else {
    passwordApprove.style.display = "none";
    passwordClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for confirming the match of the two passwords.
const confirmPasswords = (pass1, pass2) => {
  const confirmPasswordApprove = document.querySelectorAll(".confirm-password-cont img")[0];
  const confirmPasswordClose = document.querySelectorAll(".confirm-password-cont img")[1];
  if (pass1 === pass2) {
    confirmPasswordApprove.style.display = "block";
    confirmPasswordClose.style.display = "none";
  } else {
    confirmPasswordApprove.style.display = "none";
    confirmPasswordClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for showing the level of strength in the span.
const checkStrength = (password) =>  {
  const strengthLevelSpan = document.querySelector(".strength .level");
  const strengthSpan = document.querySelector(".strength");
  const submitBtn = document.querySelector(".signup-btn");
  const firstCheck = /[a-z]+/.test(password);
  const secondCheck = /[A-Z]+/.test(password);
  const thirdCheck = /[0-9]+/.test(password);
  const fourthCheck = /[a-zA-Z0-9]{6,}/.test(password);
  const checksArr = [firstCheck, secondCheck, thirdCheck, fourthCheck];
  const test = checksArr.filter((bool) => bool === true);
  if (test.length > 0) {
    strengthSpan.style.display = "block";
    if (test.length === 1) {
      strengthLevelSpan.textContent = "very weak";
      strengthLevelSpan.style.color = "red";
    } else if (test.length === 2) {
      strengthLevelSpan.textContent = "weak";
      strengthLevelSpan.style.color = "orange";
    } else if (test.length === 3) {
      strengthLevelSpan.textContent = "intermediate";
      strengthLevelSpan.style.color = "blue";
    } else if (test.length === 4) {
      strengthLevelSpan.textContent = "strong";
      strengthLevelSpan.style.color = "green";
    }
  } else {
    strengthSpan.style.display = "none";
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

textInput.addEventListener("input", () => {
  validateUsername(textInput.value);
});


emailInput.addEventListener("input", () => {
  validateEmail(emailInput.value);
});

passwordInput.addEventListener("input", () => {
  validatePassword(passwordInput.value);
  checkStrength(passwordInput.value);
});

confirmPasswordInput.addEventListener("input", () => {
  confirmPasswords(passwordInput.value, confirmPasswordInput.value);
});

