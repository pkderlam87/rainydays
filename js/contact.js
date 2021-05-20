const button = document.querySelector(".cta-contact_send");
const form = document.querySelector("form");
const myname = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");

function validateForm() {
    event.preventDefault();
    if (checkLength(myname.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        myname.invalid = true;
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        email.invalid = true;
    }
};
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
button.addEventListener("click", validateForm);

function sendForm(event) {
    event.preventDefault();
    if ((checkLength(myname.value, 1) && (validateEmail(email.value)))) {
        checked.innerHTML = createMessage("Success", "Your message has been sent!");
        form.reset();
    }
}
button.addEventListener("click", sendForm);