const bycard = document.querySelector(".by_card");
const wrap_payment = document.querySelector(".wrap_payment-by-card");
const byvipps = document.querySelector(".by_vipps");
const buyer_phone = document.querySelector(".buyer_phone");
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