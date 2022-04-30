const productContainer = document.querySelector(".product-container"); 
const activeBreadcrumbs = document.querySelector(".active-breadcrumbs"); 

const queryString = document.location.search;
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 

const detailsUrl = "http://rainydays.local/wp-json/wc/store/products/" + id;

async function fetchProduct() {
    const response = await fetch(detailsUrl); 
    const details = await response.json(); 
    console.log();
    createHtml(details); 
}

fetchProduct(); 

function createHtml(details) {
    productContainer.innerHTML += `
    <div class="product-image">
        <img src="${details.images[0].src}">
    </div>
    <div class="product-text">
        <h1>${details.name}</h1>
        <p>€${details.prices.price}</p>
        <div class="size">
            <select>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>
            <button class="btn">Add to cart</button>
        </div>
        <div class="product-text">
            <p class="lead">Description</p>
            <p>Black Fishtail Parka for men by Rainydays</p>
            <p class="lead">Material</p>
            <p>64% polyester, 36% polyurethane</p>
            <p class="lead">Shipping</p>
            <p>Shipping 3-5 workdays</p>
        </div>
    </div>
    `; 

    activeBreadcrumbs.innerHTML = "";

    activeBreadcrumbs.innerHTML += `
    <p class="active-breadcrumbs">${details.name}</p>
    `
}