// Contact Form Validation

const form = document.querySelector(".contact__form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkIsEmptyValue(inputValue) {
  return inputValue.trim() === "" ? "This field can’t be empty" : false;
}

function validateName() {
  const inputValue = nameInput.value.trim();
  const result = checkIsEmptyValue(inputValue);

  if (result) {
    nameError.textContent = result;
    nameInput.classList.add("contact__input--invalid");
    nameInput.setAttribute("aria-invalid", "true");
    return false;
  }

  if (inputValue.length > 100) {
    nameError.textContent = "Name must be under 100 characters";
    nameInput.classList.add("contact__input--invalid");
    nameInput.setAttribute("aria-invalid", "true");
    return false;
  }

  nameError.textContent = "";
  nameInput.classList.remove("contact__input--invalid");
  nameInput.removeAttribute("aria-invalid");
  return true;
}

function validateEmail() {
  const inputValue = emailInput.value.trim();
  const result = checkIsEmptyValue(inputValue);

  if (result) {
    emailError.textContent = result;
    emailInput.classList.add("contact__input--invalid");
    emailInput.setAttribute("aria-invalid", "true");
    return false;
  }

  if (!EMAIL_REGEX.test(inputValue)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("contact__input--invalid");
    emailInput.setAttribute("aria-invalid", "true");
    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("contact__input--invalid");
  emailInput.removeAttribute("aria-invalid");
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
