// Contact Form Validation

const form = document.querySelector(".contact__form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

function checkIsEmptyValue(inputValue) {
  if (inputValue.trim() === "") {
    return "This field can’t be empty";
  }

  return false;
}

function validateName() {
  const result = checkIsEmptyValue(nameInput.value);

  if (result) {
    nameError.textContent = result;
    nameInput.classList.add("contact__input--invalid");
    return false;
  }

  if (nameInput.value.length > 100) {
    nameError.textContent = "Name must be under 100 characters";
    nameInput.classList.add("contact__input--invalid");
    return false;
  }

  nameError.textContent = "";
  nameInput.classList.remove("contact__input--invalid");
  return true;
}

function validateEmail() {
  const result = checkIsEmptyValue(emailInput.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputValue = emailInput.value.trim();

  if (result) {
    emailError.textContent = result;
    emailInput.classList.add("contact__input--invalid");
    return false;
  }

  if (!emailRegex.test(inputValue)) {
    emailError.textContent = "Please enter valid email address";
    emailInput.classList.add("contact__input--invalid");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("contact__input--invalid");
  return true;
}

form.addEventListener("submit", (e) => {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (!isNameValid || !isEmailValid) {
    e.preventDefault();
    console.log(isNameValid, isEmailValid);
  }
});
