// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const ResetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
function validname(name) {
  return name.value != "";
}
function validpassword(password) {
  return password.value.length >= 6;
}
function validconfirm(passwordconfirm, password) {
  return passwordconfirm == password;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isemailok = false;
  isPasswordok = false;
  isconfirmok = false;

  // validate first name
  if (validname(firstNameInput)) {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  } else {
    firstNameInput.classList.add("is-invalid");
  }

  // validate last name
  if (validname(lastNameInput)) {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }
  // validate email
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isemailok = true;
  } else {
    emailInput.classList.add("is-invalid");
  }
  // validate password
  if (validpassword(passwordInput)) {
    passwordInput.classList.add("is-valid");
    isPasswordok = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }
  // validate confirm password
  if (
    validconfirm(confirmPasswordInput.value, passwordInput.value) &&
    validpassword(passwordInput)
  ) {
    confirmPasswordInput.classList.add("is-valid");
    isconfirmok = true;
  } else {
    confirmPasswordInput.classList.add("is-invalid");
  }
  if (isFirstNameOk && isLastNameOk && isemailok && isPasswordok && isconfirmok)
    alert("Registered successfully");
};

ResetBtn.onclick = () => {
  reset(firstNameInput);
  reset(lastNameInput);
  reset(emailInput);
  reset(passwordInput);
  reset(confirmPasswordInput);
};
function reset(block) {
  block.value = "";
  block.classList.remove("is-valid");
  block.classList.remove("is-invalid");
}
