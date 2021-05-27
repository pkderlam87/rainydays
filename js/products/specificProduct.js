import { productsStok } from "../constants/stok.js";

const title = document.querySelector("title");
const titlePage = document.querySelector("#titleOfPage");
const specificMenu = document.querySelector(".wrap_products-menu-option");
const photosSpecificProduct = document.querySelector(".photos_specific-product");
const detailsBuying = document.querySelector(".details_buying");
const best_seller = document.querySelector(".best_seller");
const form = document.querySelector("form");
var radios = document.getElementsByName("color");
var size = document.querySelector("#size");
const messageError = document.querySelector(".messageError");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    location.href = "/";
}
function titleOfPage() {
    title.innerHTML = `Rainydays | ${productsStok[id].type}`;
    titlePage.innerHTML = `<h1 class="title-page">${productsStok[id].type}</h1>`;
    specificMenu.innerHTML = `<li class="products-menu-option specific">${productsStok[id].type}</li>`;
}
titleOfPage(id);
function photos() {
    photosSpecificProduct.innerHTML = `${productsStok[id].photo}`;
}
photos(id);
function details() {
    detailsBuying.innerHTML = `<div>
    <h4>${productsStok[id].type}</h4>
    <h4>${productsStok[id].price}-, Nok</h4>
    <h4>Watterproof: ${productsStok[id].waterproof}</h4>
    <h4>Hours outside: until ${productsStok[id].hoursOut} hours</h4>
    <h4>Suitable for until ${productsStok[id].minTemp}°C</h4>
    <h4 class ="unit">Only remain ${productsStok[id].units} units</h4>
    </div>`
    if ((productsStok[id].bestseller) === true) {
        best_seller.innerHTML = `<img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest">`;
    }
}
details(id);
//----------------Cart
let cartArray = [];
function submitForm(event) {
    event.preventDefault();
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            const color = radios[i].value;
            const sizeChoice = size.value;
            const product = productsStok[id];
            cartArray.push(color, sizeChoice, product);
            break;
        } else {
            messageError.innerHTML = "Please select one option of size and color";
        }
    }
    console.log(cartArray);
    showCart(cartArray);
    form.reset();
}
form.addEventListener("submit", submitForm);

function showCart(cartItems) {
    cart.style.display = "block";
    cartList.innerHTML = "";
    cartItems.forEach(function () {
        cartList.innerHTML +=
            `<div class="cart-item">
        <h5>${cartArray[2].type}</h5>
        <h5>Color: ${cartArray[0]}</h5>
        <h5>Size: ${cartArray[1]}</h5> </div>`;
    });
}
