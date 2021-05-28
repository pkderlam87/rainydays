const myProduct = document.querySelector("#myProductPurchased");
const cartItems = JSON.parse(localStorage.getItem("cartList"));

cartItems.forEach(function (cartElement) {
    myProduct.innerHTML +=
        `<div class="cart-productChosen">
            ${cartElement.productPhoto}
    <h5 class="cart-item">${cartElement.productType}</h5>
    <h5 class="cart-item">Size: ${cartElement.sizeChoice}</h5>
    <h5 class="cart-item">Color: ${cartElement.color}</h5></div>`;
});
