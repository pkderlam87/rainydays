const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postNumber = document.querySelector("#postNumber");
const postError = document.querySelector("#postError");
const gift = document.querySelector("#gift:checked");
const giftAddress = document.querySelector("#giftAddress");
const giftAddressError = document.querySelector("#giftAddressError");
const giftName = document.querySelector("#giftName");
const giftNameError = document.querySelector("#giftNameError");
//Validation of address
function validateAddress() {
    event.preventDefault();
    if (checkLength(address.value, 5) === true) {
        addressError.style.display = "none";
        return true;
    } else {
        addressError.style.display = "block";
        address.invalid = true;
    }
};
address.addEventListener("keyup", validateAddress);
//Validation of postNumber
function validatepostNumber() {
    event.preventDefault();
    if (checkLength(postNumber.value, 4) === true) {
        postError.style.display = "none";
        return true;
    } else {
        postError.style.display = "block";
        postNumber.invalid = true;
    }
};
postNumber.addEventListener("keyup", validatepostNumber);
//Validation of GiftAddress
function validateGiftAddress() {
    event.preventDefault();
    if (checkLength(giftAddress.value, 5) === true) {
        giftAddressError.style.display = "none";
        return true;
    } else {
        giftAddressError.style.display = "block";
        giftAddress.invalid = true;
    }
};
giftAddress.addEventListener("keyup", validateGiftAddress);
//Validation of GiftName
function validateGiftName() {
    event.preventDefault();
    if (checkLength(giftName.value, 1) === true) {
        giftNameError.style.display = "none";
        return true;
    } else {
        giftNameError.style.display = "block";
        giftName.invalid = true;
    }
};
giftName.addEventListener("keyup", validateGiftName);

const bycard = document.querySelector(".by_card");
const wrap_payment = document.querySelector(".wrap_payment-by-card");
const byvipps = document.querySelector(".by_vipps");
const buyer_phone = document.querySelector(".buyer_phone");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");
const credit_card = document.querySelector("#credit_card");
//show payment by card option
wrap_payment.style.display = "none";
let clickCountCard = 0;
function showByCard() {
    clickCountCard++;
    wrap_payment.style.display = "block";
    if (clickCountCard % 2 === 0) {
        wrap_payment.style.display = "none";
    }
}
bycard.addEventListener("click", showByCard);
//Validation Credit card number
credit_card.oninput = function () {
    if (credit_card.value.length !== 16) {
        credit_card.value = credit_card.value.slice(0, 16);
    }
}
// function to check the VISA pattern
function validateVisaCreditCard(credit_card) {
    const regEx = /^ 4[0 - 9]{ 12 } (?: [0 - 9]{ 3 })?$/;
    const patternMatchesVisa = regEx.test(credit_card);
    return patternMatchesVisa;
};
// function to check the Mastercard pattern
function validateMasterCreditCard(credit_card) {
    const regEx = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    const patternMatchesMaster = regEx.test(credit_card);
    return patternMatchesMaster;
};



//Validation CVV
function validationCvv() {
    if (validateCvv(cvv.value) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display = "block";
        cvv.invalid = true;
    }
};
cvv.addEventListener("keyup", validationCvv);
// function to allow only 3 numbers on input
cvv.oninput = function () {
    if (cvv.value.length !== 3) {
        cvv.value = cvv.value.slice(0, 3);
    }
}
// function to check the cvv pattern
function validateCvv(cvv) {
    const regEx = /^[0-9]{3}$/;
    const patternMatches = regEx.test(cvv);
    return patternMatches;
}
//show payment by vipps option
buyer_phone.style.display = "none";
let clickCountVipps = 0;
function showByVipps() {
    clickCountVipps++;
    buyer_phone.style.display = "block";
    if (clickCountVipps % 2 === 0) {
        buyer_phone.style.display = "none";
    }
}
byvipps.addEventListener("click", showByVipps);