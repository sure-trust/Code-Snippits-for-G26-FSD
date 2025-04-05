fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((akash) =>
     products_Details(akash));

const product_data_list = [];


function products_Details(data){
    product_data_list.push(data)
    console.log(data.length)
    console.log(data[0].image)

    for(let i = 0; i < data.length ; i++){

    const card_list = document.querySelector("#card_list")

    const card_1 = document.createElement("div")
    card_1.id = "card_1"

    const card_image_1 = document.createElement("img")
    card_image_1.id = "card_image_1"
    card_image_1.src = `${data[i].image}`

    const card_description = document.createElement("div")
    card_description.id = "card_description"

    const title = document.createElement("div")
    title.id = "title"
    title.textContent = data[i].title

    const price = document.createElement("div")
    price.id = "price"
    price.textContent = `₹ ${data[i].price}`

    card_description.appendChild(title)
    card_description.appendChild(price)

    const add_to_cart_button = document.createElement("button")
    add_to_cart_button.id = "add_to_cart_button"
    add_to_cart_button.textContent = "Add to Cart"

    card_1.appendChild(card_image_1)
    card_1.appendChild(card_description)
    card_1.appendChild(add_to_cart_button)

    card_list.appendChild(card_1)
    // console.log(card_1)

    }

    document.querySelectorAll("#add_to_cart_button").forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

const cartItems = [];
function addToCart(event) {
    const button = event.target;
    const productIndex = button.getAttribute("data-index");
    const product = product_data_list[productIndex];
    console.log(product)

    // Add product to cartItems
    cartItems.push(product);

    // Save to localStorage (optional but useful)
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // // Feedback
    // alert(`${product.title} added to cart!`);
    
    // Optionally update cart count
    updateCartCount();
}

// Optional: Function to update cart count somewhere in UI
function updateCartCount() {
    const cartCountEl = document.getElementById("cart_count");
    if (cartCountEl) {
        cartCountEl.textContent = cartItems.length;
    }
}

