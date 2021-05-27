import { productsStok } from "../js/constants/stok.js";
const indexProducts = document.querySelector(".index-products");
const bestProducts = document.querySelector(".bestProducts");
for (let i = 0; i < 3; i++) {
    indexProducts.innerHTML +=
        `<a href = "/specific_product.html?id=${i}"><div class="productsCards" id="${productsStok[i].class}">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4> 
    <button class="cta_productSpecific">See more</button></div></a>`;
}
//Best Sellers section
for (let i = 0; i < productsStok.length; i++) {
    if ((productsStok[i].bestseller) === true) {
        bestProducts.innerHTML +=
            `<a href = "/specific_product.html?id=${i}"> <div class="productsCards">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4>
    <img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest">
    <button class="cta_productSpecific">See more</button></div></a>`;
    }
}

