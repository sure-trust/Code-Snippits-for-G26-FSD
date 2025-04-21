const products = [
    { id: 1, name: "women's Watch", price: 2500, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSOtKnzqNbmOUn0s704JKFfsQzjt2NzFDXd07eYex7Ww495tdz-egU4pI_h6aPsb0CJjE-oMtLJH0rM0zJVe1xlRKRwVrHOeisRsHYfVmz" },
    { id: 2, name: "Women's Bangles", price: 350, image: "https://leshya.com/cdn/shop/products/1_5_7c161c26-fd1f-4818-b91b-829d20864084_480x480@2x.jpg?v=1663151286" },
    { id: 3, name: "Men's Shirts", price: 450, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTp7dePeLxZkjV6JknWYMZ1T39NouA-TdYGkSYa6aCQPVSGRm_bME2TiB4fozcDS-QZXDlRRfGAAb5fJbBgsaNv5rE8nc_n" },
    { id: 4, name: "Women's Saree", price: 2500, image: "https://images.meesho.com/images/products/349226858/17scl_1200.jpg" },
    { id: 5, name: "Women's Top", price: 350, image: "https://images.meesho.com/images/products/402196009/ldhxl_1200.jpg" },
    { id: 6, name: "Women's Handbag", price: 450, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhZJdlUK34HC2fS8n7_xrZn4KnHiuJCnjt9Ch4EQj9roG7ZzhLSG05QNADQomMuPnxrcBfYGfiGnhT8dBmZKRObWUidG7IwGkGKVotYn9nHfdI3XwABuaEug" },
    { id: 7, name: "Kidsware", price: 250, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxoiYpX9gJj7WpKYnU5NGlhAC0FhtBk-N6SWO_EB4M06oZ1abd5lDtrJOvId_21PM6rIEPfP8azCCUKlRScXTHQY8LeD1tzPTx_QxRgVr-Df84VukUssu6Yw" },
    { id: 8, name: "Women's Kurtha", price: 350, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZvN3-QhGRWt9QbPq2degx19RbKW1ml226Ry7UcGbM7THYehm2S1IH6uFY9b29l11W7YhCzoWTbLVh8Y9OCYXjL42YAR9NEZA3meDH5AP7g79UagQ2HftJiw" },
    { id: 9, name: "Men's Hoodie", price: 450, image: "https://images.meesho.com/images/products/328304303/mgnxo_1200.jpg" },
    { id: 10, name: "Lehenga", price: 2500, image: "https://www.jiomart.com/images/product/original/rvkvo19iyp/halfsaree-studio-pink-party-wear-simple-lehenga-choli-in-net-product-images-rvkvo19iyp-0-202311271905.jpg?im=Resize=(500,630)" },
    { id: 11, name: "Women's Top", price: 350, image: "https://5.imimg.com/data5/FR/GL/HW/SELLER-14825813/womens-blue-tops.jpg" },
    { id: 12, name: "Girlware", price: 450, image: "https://i.pinimg.com/736x/6e/80/f1/6e80f139356a38f0ad6fdf1f84b15de4.jpg" },
    { id: 13, name: "Plane Saree", price: 2500, image: "https://www.textileinfomedia.com/img/btau/new-designer-plain-georgette-saree-with-lace-borde-full.jpeg" },
    { id: 14, name: "Cotton Saree", price: 3500, image: "https://sudathi.com/cdn/shop/files/3583S346_1.jpg?v=1709815867&width=1500" },
    { id: 15, name: "Men's Pancha", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIU0CX-TDfJyiaaD1LnZD9zPtR3ZzEqRyW7WQKItwgW2OadWiH21P5nbzM_IL1M8iijY&usqp=CAU" },
    { id: 16, name: "Men's Watch", price: 2500, image: "https://m.media-amazon.com/images/I/71wygcy5OmL._AC_UY1000_.jpg" },
    { id: 17, name: "Couple's Rings", price: 3500, image: "https://assets.ajio.com/medias/sys_master/root/20230628/Gfle/649bf3d6a9b42d15c90f0d94/-473Wx593H-465834695-rosegold-MODEL.jpg" },
    { id: 18, name: "Men's Shoes", price: 4500, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29507574/2024/5/15/12707cf4-e140-45c9-aaa3-077dc15b6bf81715772380505RedTapeMenColourblockedPUSneakers1.jpg" },
  ];
  
  let cart = [];
  let currentOrder = {};
  
  function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Products</h2>';
  
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <label for="qty-${product.id}">Qty:</label>
        <select id="qty-${product.id}">
          ${[1, 2, 3, 4, 5].map(qty => `<option value="${qty}">${qty}</option>`).join('')}
        </select><br>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-btn" onclick="buyItemNow('${product.name}', null, ${product.id})">Buy Now</button>
      `;
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
      div.innerHTML = `
        <span><strong>${item.name}</strong> - $${item.price} (x${item.quantity})</span>
        <div>
          <button onclick="removeFromCart(${index})">Remove</button>
          <button class="buy-btn" onclick="buyItemNow('${item.name}', ${index})">Buy Now</button>
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
    let price = 0;
    let qty = 1;
  
    if (index !== null) {
      price = cart[index].price;
      qty = cart[index].quantity;
      cart.splice(index, 1);
      updateCartCount();
      showCart();
    } else if (productId !== null) {
      const product = products.find(p => p.id === productId);
      qty = parseInt(document.getElementById(`qty-${productId}`).value);
      price = product.price * qty;
    }
  
    currentOrder = { name, qty, price };
    document.getElementById('order-summary').innerText = `You are purchasing ${name} x${qty} for $${price}`;
    document.getElementById('payment-dialog').style.display = 'flex';
  }
  
  function completePurchase() {
    alert('Payment Successful!');
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
  
  showHome();
  