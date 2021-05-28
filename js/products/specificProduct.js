import { productsStok } from "../constants/stok.js";
import { createMessage } from "../components.js";

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
const totalContainer = document.querySelector(".total");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    window.history.back();
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
let total = 0;
let cartArrayAll = [];
function submitForm(event) {
    event.preventDefault();
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            cartArray = {
                color: radios[i].value,
                sizeChoice: size.value,
                productType: productsStok[id].type,
                productPrice: productsStok[id].price,
                productPhoto: productsStok[id].photo,
            };
            total += (cartArray.productPrice);
        }
        console.log(total);
    }
    saveData(cartArray);
    showCart(cartArray);
    showTotal(total);
    form.reset();
}
form.addEventListener("submit", submitForm);

function showCart() {
    cart.style.display = "block";
    cartList.innerHTML +=
        `<div class="cart-productChosen">
        <figure class = "checkout-modal_photo">${cartArray.productPhoto}</figure>
        <h5 class="cart-item">${cartArray.productType}</h5>
        <h5 class="cart-item">Price: ${cartArray.productPrice},-</h5>
        <h5 class="cart-item">Size: ${cartArray.sizeChoice}</h5>
        <h5 class="cart-item">Color: ${cartArray.color}</h5></div>`;
    //localStorage.setItem("myCart", JSON.parse(cartArray));
};
function showTotal() {
    //if (total === 0) {
    //    messageError.innerHTML = createMessage("Error", `<i class="fas fa-exclamation-triangle"></i> Please select one option of size and color! <i class="fas fa-exclamation-triangle"></i>`);
    //cartList.style.display = "none";
    //}
    totalContainer.innerHTML = `Total: ${total}`;
}
function saveData() {
    cartArrayAll += [cartArray.color, cartArray.sizeChoice, cartArray.productType, cartArray.productPrice, cartArray.productPhoto];
    localStorage.setItem("cartList", JSON.stringify(cartArrayAll));
}
