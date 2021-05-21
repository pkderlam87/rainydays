const productsStok = [
    {
        type: "waterproof",
        price: 399,
        units: 10,
        photo: `<img src="images/raincoat-1245688_1920.jpg">`,
    },
    {
        type: "waterproof",
        price: 399,
        units: 10,
        photo: `<img src="images/karsten-winegeart-jVT8vo04UT0-unsplash.jpg">`,
    },
    {
        type: "skiSnowboard",
        price: 599,
        units: 5,
        photo: `<img src="images/simon-berger-PcVqr8v4XaA-unsplash.jpg">`,
    },
    {
        type: "windbreaker",
        price: 299,
        units: 15,
        photo: `<img src="images/joshua-earle-ICE__bo2Vws-unsplash.jpg">`,
    },
    {
        type: "accessories",
        price: 99,
        units: 20,
        photo: `<img src="images/roberto-martinez-WBgPMst9toY-unsplash.jpg">`,
    },
];
console.log(productsStok);
const products_collections = document.querySelector(".products_collections");

for (let i = 0; i < productsStok.length; i++) {
    products_collections.innerHTML += `<div class="productsCards">
    ${productsStok[i].photo}
    ${productsStok[i].type}
    ${productsStok[i].price}</div>`;
}