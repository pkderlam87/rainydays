const button = document.querySelector(".cta-contact_send");
const form = document.querySelector("form");
const myname = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const checked = document.querySelector(".checked");

function validateName() {
    event.preventDefault();
    if (checkLength(myname.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        myname.invalid = true;
    }
};
function validationEmail() {
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
myname.addEventListener("keyup", validateName);
email.addEventListener("keyup", validationEmail);


function sendForm(event) {
    event.preventDefault();
    if ((checkLength(myname.value, 1) && (validateEmail(email.value)))) {
        checked.innerHTML = createMessage("success", "Your message has been sent!");
        form.reset();
    }
    setTimeout(function () {
        checked.style.display = "none";
    }, 5000);
};
button.addEventListener("click", sendForm);