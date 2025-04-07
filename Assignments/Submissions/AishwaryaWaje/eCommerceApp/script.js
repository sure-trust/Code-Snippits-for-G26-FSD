async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description.substring(0, 50)}...</p>
            <p class="price">${product.price}₹</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="add-to-wishlist" onclick="addToWishlist(${
              product.id
            })">Add to Wishlist</button>
        `;

    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  } else {
    alert('Product is already in the cart!');
  }
}

function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Product added to wishlist!');
  } else {
    alert('Product is already in the wishlist!');
  }
}

document.getElementById('cartButton').addEventListener('click', () => {
  window.location.href = 'cart/cart.html';
});

document.getElementById('wishlistButton').addEventListener('click', () => {
  window.location.href = 'wishlist/wishlist.html';
});

fetchProducts();
