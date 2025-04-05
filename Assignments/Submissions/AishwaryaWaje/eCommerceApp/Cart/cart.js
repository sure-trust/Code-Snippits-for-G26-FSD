async function fetchCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    document.getElementById('cartItems').innerHTML = '<p>Cart is empty</p>';
    return;
  }

  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  const cartProducts = products.filter(product => cart.includes(product.id));

  displayCartItems(cartProducts);
}

function displayCartItems(cartProducts) {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  cartProducts.forEach(product => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price}₹</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;

    cartItemsContainer.appendChild(cartItem);
  });
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(id => id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  fetchCartItems();
}

document.getElementById('homeButton').addEventListener('click', () => {
  window.location.href = '../index.html';
});
document.getElementById('wishlistButton').addEventListener('click', () => {
  window.location.href = '../wishlist/wishlist.html';
});

fetchCartItems();
