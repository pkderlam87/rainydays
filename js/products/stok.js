const productsStok = {
    type1: {
        model: "waterproof",
        price: 399,
        units: 10,
        photo: `<img src="images/raincoat-1245688_1920.jpg">`,
    },
    type2: {
        model: "waterproof",
        price: 399,
        units: 10,
        photo: `<img src="images/karsten-winegeart-jVT8vo04UT0-unsplash.jpg">`,
    },
    type3: {
        model: "skiSnowboard",
        price: 599,
        units: 5,
        photo: `<img src="images/simon-berger-PcVqr8v4XaA-unsplash.jpg">`,
    },
    type4: {
        model: "windbreaker",
        price: 299,
        units: 15,
        photo: `<img src="images/joshua-earle-ICE__bo2Vws-unsplash.jpg">`,
    },
    type5: {
        model: "accessories",
        price: 99,
        units: 20,
        photo: `<img src="images/roberto-martinez-WBgPMst9toY-unsplash.jpg">`,
    },
}
console.log(productsStok);
const products_collections = document.querySelector(".products_collections");
products_collections.innerHTML = `<div class="productsCards">${productsStok.type1}</div>`;
//for (let i = 0; i < productsStok.length; i++) {

//}