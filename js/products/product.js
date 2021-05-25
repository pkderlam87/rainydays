const products_collections = document.querySelector(".products_collections");
const bestSeller = document.querySelector(".bestSeller");
for (let i = 0; i < productsStok.length; i++) {
    products_collections.innerHTML += `<a href = "/products/specific_product.html"> <div class="productsCards">
    ${productsStok[i].photo}
    <h4>${productsStok[i].type}</h4>
    <h4>${productsStok[i].price}, - Nok</h4></div></a>`;
}
//Best Sellers section
for (let i = 0; i < productsStok.length; i++) {
    if ((productsStok[i].bestseller) === true) {
        bestSeller.innerHTML += `<a href = "/products/specific_product.html"> <div class="productsCards">
    ${productsStok[i].photo}
    <h4>${productsStok[i].type}</h4>
    <h4>${productsStok[i].price}, - Nok</h4></div></a>`;
    }
}