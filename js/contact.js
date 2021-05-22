const form = document.querySelector("form");
const myname = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("button");
const checked = document.querySelector(".checked");

button.disabled = true;
//error message for name problem 
function validateName() {
    event.preventDefault();
    if (checkLength(myname.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        myname.invalid = true;
    }
};
myname.addEventListener("keyup", validateName);
//error message for email problem 
function validationEmail() {
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        email.invalid = true;
    }
};
email.addEventListener("keyup", validationEmail);
//error message for message problem 
function validateMessage() {
    event.preventDefault();
    if (checkLength(message.value, 5) === true) {
        messageError.style.display = "none";
        return true;
    } else {
        messageError.style.display = "block";
        message.invalid = true;
    }
};
message.addEventListener("keyup", validateMessage);
//enable the button
function checkIfButtonIsDisabled() {
    // if all inputs pass validation enable the button
    if (checkLength(myname.value, 1) && checkLength(message.value, 5) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        // clear the checked message
        checked.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}
myname.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    checked.innerHTML = createMessage("Success", "Your message has been sent!");
    form.reset();
    button.disabled = true;
}
form.addEventListener("submit", submitForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
// function to check the email pattern
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}