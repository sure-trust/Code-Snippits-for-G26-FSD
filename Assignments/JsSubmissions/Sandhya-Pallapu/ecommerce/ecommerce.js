document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product");

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                    <button onclick="addToCart('${product.title}', ${product.price})">Add to Cart</button>
                `;

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});


function addToCart(title, price) {
    alert(`Added "${title}" to cart for $${price}`);

}
