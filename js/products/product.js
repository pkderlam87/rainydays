const products_collections = document.querySelector(".products_collections");
const bestSeller = document.querySelector(".bestSeller");
for (let i = 0; i < productsStok.length; i++) {
    products_collections.innerHTML += `<a href = "/products/specific_product.html?id=${i}"> <div class="productsCards" id="${productsStok[i].class}">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4> <button class="cta_productSpecific">See more</button></div></a>`;
}
//Best Sellers section
for (let i = 0; i < productsStok.length; i++) {
    if ((productsStok[i].bestseller) === true) {
        bestSeller.innerHTML += `<a href = "/products/specific_product.html?id=${i}"> <div class="productsCards">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4>
    <button class="cta_productSpecific">See more</button></div></a>`;
    }
}