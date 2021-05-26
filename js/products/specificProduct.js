
const titlePage = document.querySelector("#titleOfPage");
const specificMenu = document.querySelector(".wrap_products-menu-option");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    location.href = "/";
}
function titleOfPage() {
    titlePage.innerHTML = `<h1 class="title-page">${productsStok[id].type}</h1>`;
    specificMenu.innerHTML = `<li class="products-menu-option specific">${productsStok[id].type}</li>`;
}
titleOfPage(id);
