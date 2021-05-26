const title = document.querySelector("title");
const titlePage = document.querySelector("#titleOfPage");
const specificMenu = document.querySelector(".wrap_products-menu-option");
const photosSpecificProduct = document.querySelector(".photos_specific-product");
const detailsBuying = document.querySelector(".details_buying");
const best_seller = document.querySelector(".best_seller");
const form = document.querySelector("form");
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
    <h4 class ="unit">Only remain ${productsStok[id].units} units</h4></div>`
    if ((productsStok[id].bestseller) === true) {
        best_seller.innerHTML = `<img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest">`;
    }
}
details(id);