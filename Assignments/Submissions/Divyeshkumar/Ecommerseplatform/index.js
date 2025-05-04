const products = [
    { id: 1, name: "Men's Watch", price: 25200, image: " https://m.media-amazon.com/images/I/515ARZHmUDL._SY300_SX300_.jpg", category: "accessories" },
    { id: 2, name: "Men's Hoodie", price: 2000, image: "https://m.media-amazon.com/images/I/51-UKbsxPYL._SX569_.jpg", category: "clothing" },
    { id: 3, name: "Men's Shirts", price: 450, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTp7dePeLxZkjV6JknWYMZ1T39NouA-TdYGkSYa6aCQPVSGRm_bME2TiB4fozcDS-QZXDlRRfGAAb5fJbBgsaNv5rE8nc_n", category: "clothing" },
    { id: 4, name: "Earpods Boult", price: 2500, image: "https://m.media-amazon.com/images/I/614gbl-O98L._SL1500_.jpg", category: "Electronics" },
    { id: 5, name: "Washing Machine ", price: 33350, image: "https://m.media-amazon.com/images/I/71BZCfuDANL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics" },
    { id: 6, name: "Refrigreator", price: 44450, image: "https://m.media-amazon.com/images/I/71RS0KxC7PL._SL1500_.jpg", category: "Electronics" },
    { id: 7, name: "Kidsware", price: 250, image: "https://m.media-amazon.com/images/I/613Yxu4bVsL._SY741_.jpg", category: "kids" },
    { id: 8, name: "Women's Kurtha", price: 350, image: "https://m.media-amazon.com/images/I/51w2daMvIKL._SX569_.jpg", category: "clothing" },
    { id: 9, name: "Men's Suit ", price: 4450, image: "https://m.media-amazon.com/images/I/51gP5igF0QL._AC_UL480_FMwebp_QL65_.jpg", category: "clothing" },
    { id: 10, name: "Lehenga", price: 2500, image: "https://www.jiomart.com/images/product/original/rvkvo19iyp/halfsaree-studio-pink-party-wear-simple-lehenga-choli-in-net-product-images-rvkvo19iyp-0-202311271905.jpg?im=Resize=(500,630)", category: "clothing" },
    { id: 11, name: "Saalwar Suit ", price: 3350, image: "https://m.media-amazon.com/images/I/615WAmCrsBL._AC_UL480_FMwebp_QL65_.jpg", category: "clothing" },
    { id: 12, name: "Makeup set ", price: 4450, image: "https://m.media-amazon.com/images/I/81TBL2l+DmL._AC_UL480_FMwebp_QL65_.jpg", category: "kids" },
    { id: 13, name: "Men's Watch", price: 2500, image: "https://m.media-amazon.com/images/I/71wygcy5OmL._AC_UY1000_.jpg", category: "accessories" },
    { id: 14, name: "Ear Rings", price: 3500, image: "https://m.media-amazon.com/images/I/61KAywPv2YL._AC_UL480_FMwebp_QL65_.jpg", category: "accessories" },
    { id: 15, name: "Men's Shoes", price: 4500, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29507574/2024/5/15/12707cf4-e140-45c9-aaa3-077dc15b6bf81715772380505RedTapeMenColourblockedPUSneakers1.jpg", category: "footwear" },
     { id: 16, name: "Sparke Shoes", price: 500, image:"https://m.media-amazon.com/images/I/71AKeTGV0-L._SY695_.jpg", category: "footwear" },
  ];

  let cart = [];
  let currentOrder = {};

  function filterProducts(category) {
    const filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);
    renderProducts(filtered);
  }

  function renderProducts(productsToRender) {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="category-filters">
        <button onclick="filterProducts('all')">All Products</button>
        <button onclick="filterProducts('clothing')">Clothing</button>
        <button onclick="filterProducts('accessories')">Accessories</button>
        <button onclick="filterProducts('kids')">Kids</button>
         <button onclick="filterProducts('Electronics')">Electronics</button>
        <button onclick="filterProducts('footwear')">Footwear</button>
      </div>
      <h2>Products</h2>
    `;

      productsToRender.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      
      // Escape product name for HTML attributes
      const escapedName = product.name.replace(/'/g, "\\'");
      
      div.innerHTML = `
        <div class="product-content">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Price: ₹${product.price}</p>
        </div>
        <div class="product-actions">
          <div class="quantity-selector">
            <label for="qty-${product.id}">Qty:</label>
            <select id="qty-${product.id}">
              ${[1, 2, 3, 4, 5].map(qty => `<option value="${qty}">${qty}</option>`).join('')}
            </select>
          </div>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-btn" onclick="buyItemNow('${escapedName}', null, ${product.id})">Buy Now</button>
        </div>
      `;
      
      // Verify the quantity selector was created
      const qtySelect = div.querySelector(`#qty-${product.id}`);
      if (!qtySelect) {
        console.error(`Failed to create quantity selector for product ${product.id}`);
      }
      
      content.appendChild(div);
    });
  }

  function showCart() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Cart</h2>';

    if (cart.length === 0) {
      content.innerHTML += '<p>Your cart is empty.</p>';
      return;
    }

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      // Escape item name for HTML attributes
      const escapedName = item.name.replace(/'/g, "\\'");
      
      div.innerHTML = `
        <span><strong>${item.name}</strong> - ₹${item.price} (x${item.quantity})</span>
        <div>
          <button onclick="removeFromCart(${index})">Remove</button>
          <button class="buy-btn" onclick="buyItemNow('${escapedName}', ${index})">Buy Now</button>
        </div>
      `;
      content.appendChild(div);
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qty = parseInt(document.getElementById(`qty-${productId}`).value);
    if (product && qty > 0) {
      cart.push({ ...product, quantity: qty, price: product.price * qty });
      updateCartCount();
      showMessage(`${product.name} (x${qty}) added to cart.`);
    }
  }

  function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    updateCartCount();
    showCart();
    if (removedItem) {
      showMessage(`${removedItem.name} removed from cart.`);
    }
  }

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = count;
  }

  function buyItemNow(name, index = null, productId = null) {
    try {
      let price = 0;
      let qty = 1;
      let itemName = name;

      if (index !== null) {
        // Buying from cart
        if (index >= 0 && index < cart.length) {
          const cartItem = cart[index];
          price = cartItem.price;
          qty = cartItem.quantity;
          itemName = cartItem.name;
          cart.splice(index, 1);
          updateCartCount();
          showCart();
        } else {
          showMessage('Item not found in cart');
          return;
        }
      } else if (productId !== null) {
        // Buying directly from product
        const product = products.find(p => p.id === productId);
        if (!product) {
          showMessage('Product not found');
          return;
        }
        
        const productDiv = document.querySelector(`.product button[onclick="addToCart(${productId})"]`)?.closest('.product');
        if (!productDiv) {
          showMessage('Could not find product details');
          return;
        }
        
        const qtySelect = productDiv.querySelector(`#qty-${productId}`);
        qty = qtySelect ? parseInt(qtySelect.value) || 1 : 1;
        price = product.price * qty;
        itemName = product.name;
      }

      currentOrder = { name: itemName, qty, price };
      const orderSummary = document.getElementById('order-summary');
      const paymentDialog = document.getElementById('payment-dialog');
      
      if (!orderSummary || !paymentDialog) {
        showMessage('Payment system not available');
        return;
      }

      orderSummary.innerText = `You are purchasing ${itemName} x${qty} for ₹${price}`;
      paymentDialog.style.display = 'flex';
    } catch (error) {
      console.error('Error in buyItemNow:', error);
      alert('An error occurred. Please try again.');
    }
  }

  function completePurchase() {
    const paymentSelected = document.querySelector('input[name="payment"]:checked');
    if (!paymentSelected) {
      alert('Please select a payment method');
      return;
    }
    
    const paymentMethod = paymentSelected.parentElement.textContent.trim();
    alert(`Payment Successful via ${paymentMethod}!`);
    closePaymentDialog();
    showHome();
  }

  function closePaymentDialog() {
    document.getElementById('payment-dialog').style.display = 'none';
  }

  function showMessage(message) {
    const content = document.getElementById('content');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message';
    msgDiv.innerText = message;
    content.prepend(msgDiv);

    setTimeout(() => {
      msgDiv.remove();
    }, 3000);
  }

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePaymentDialog();
    }
  });

  function showHome() {
    filterProducts('all');
  }

  showHome();
