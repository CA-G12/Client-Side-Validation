const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmedPass = document.getElementById("confirmed-password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const validation = () => {
  //remove spaces from ends
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmedPassValue = confirmedPass.value.trim();

  // checking email
  if (emailValue === "") {
    setError(email, "You must fill this field by your email!");
  } else if (!validateEmail(emailValue)) {
    setError(email, "Please enter a valid email address");
  } else {
    succeed(email);
  }
  // checking password
  if (passwordValue === "") {
    setError(password, "You must fill this field by your password!");
  } else if (!validatePassword(passwordValue)) {
    setError(
      password,
      "Must contain at least a digit,an uppercase,a lowercase letter,and 6 charctars"
    );
  } else {
    succeed(password);
    // checking confirmed password
    if (confirmedPassValue === "") {
      setError(confirmedPass, "You must confirm your password in this field!");
    } else if (passwordValue !== confirmedPassValue) {
      setError(confirmedPass, "Passwords don't match");
    } else {
      succeed(confirmedPass);
    }
  }
};

const setError = (input, message) => {
  const requirment = input.parentElement;
  const h6 = requirment.querySelector("h6");
  requirment.className = "requirment error";
  h6.textContent = message;
};

const succeed = (input) => {
  const requirment = input.parentElement;
  requirment.className = "requirment success";
};

const validateEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
const validatePassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
};
