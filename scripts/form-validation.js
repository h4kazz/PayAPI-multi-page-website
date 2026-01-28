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
    nameInput.classList.add("is-invalid");
    return false;
  }

  if (nameInput.value.length > 100) {
    nameError.textContent = "Name must be under 100 characters";
    return false;
  }

  nameError.textContent = "";
  return true;
}

form.addEventListener("submit", (e) => {
  const isNameValid = validateName();

  if (!isNameValid) {
    e.preventDefault();
    console.log(isNameValid);
  }
});
