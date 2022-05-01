const menProducts = document.querySelector(".men-products"); 
const womenProducts = document.querySelector(".women-products"); 

const url = "http://rainydays.local/wp-json/wc/store/products"; 

async function getProduct() {
    const response = await fetch(url); 
    const results = await response.json(); 

    for (let i = 0; i < results.length; i++) {
        
        menProducts.innerHTML += `
        <a href="details.html?id=${results[i].id}"><div class="product-card">
            <img src="${results[i].images[0].src}">
            <h2>${results[i].name}</h2>
            <p>€${results[i].prices.price}</p>
        </div></a>
        `;
    }

    console.log(results);
}

getProduct();