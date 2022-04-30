/* const url = "http://rainydays.local/wp-json/wc/store/products"; 

const menProducts = document.querySelector(".men-products"); 
const womenProducts = document.querySelector(".women-products"); 

async function getProducts() {

    const response = await fetch(url); 
    const results = await response.json(); 
    
     for (let i = 0; i < results.length; i++) {
         if (results[i].categories[0].name === "men") {
            menProducts.innerHTML += `
            <a href="details.html?id=${results[i].id}"><div class="product-card">
                <img src="${results[i].images[0].src}">
                <h2>${results[i].name}</h2>
                <p>€${results[i].prices.price}</p>
            </div></a>
            `;
        } */

        /* if (results[i].categories[0].name === "women") {
            womenProducts.innerHTML += `
            <a href="details.html?id=${results[i].id}"><div class="product-card">
                <img src="${results[i].images[0].src}">
                <h2>${results[i].name}</h2>
                <p>€${results[i].prices.price}</p>
            </div></a>
            `;
        } 



    } 
} 

getProducts(); */

const menProducts = document.querySelector(".men-products"); 
const womenProducts = document.querySelector(".women-products"); 

const url = "http://rainydays.local/wp-json/wc/store/products?categories"; 

async function getProduct() {
    const response = await fetch(url); 
    const results = await response.json(); 

    for (let i = 0; i < results.length; i++) {
        if (results[i].categories[0].id === 16) {
            womenProducts.innerHTML += `
            <a href="details.html?id=${results[i].id}"><div class="product-card">
                <img src="${results[i].images[0].src}">
                <h2>${results[i].name}</h2>
                <p>€${results[i].prices.price}</p>
            </div></a>
            `;
        } else if (results[i].categories[0].id === 17) {
            menProducts.innerHTML += `
            <a href="details.html?id=${results[i].id}"><div class="product-card">
                <img src="${results[i].images[0].src}">
                <h2>${results[i].name}</h2>
                <p>€${results[i].prices.price}</p>
            </div></a>
            `;
        }
    }

    console.log(results[0].categories[0].id);
}

getProduct();