async function fetchWishlistItems() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (wishlist.length === 0) {
    document.getElementById('wishlistItems').innerHTML = '<p>Wishlist is empty</p>';
    return;
  }

  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  displayWishlistItems(wishlistProducts);
}

function displayWishlistItems(wishlistProducts) {
  const wishlistItemsContainer = document.getElementById('wishlistItems');
  wishlistItemsContainer.innerHTML = '';

  wishlistProducts.forEach(product => {
    const wishlistItem = document.createElement('div');
    wishlistItem.classList.add('wishlist-item');

    wishlistItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price}₹</p>
            <button onclick="removeFromWishlist(${product.id})">Remove</button>
        `;

    wishlistItemsContainer.appendChild(wishlistItem);
  });
}

function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  fetchWishlistItems();
}

document.getElementById('homeButton').addEventListener('click', () => {
  window.location.href = '../index.html';
});
document.getElementById('cartButton').addEventListener('click', () => {
  window.location.href = '../cart/cart.html';
});

fetchWishlistItems();
