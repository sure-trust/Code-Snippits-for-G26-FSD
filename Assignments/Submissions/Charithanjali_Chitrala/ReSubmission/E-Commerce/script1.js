<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const productsEl = document.getElementById('products');
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItemsEl = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const overlay = document.getElementById('overlay');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    async function loadProducts() {
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=8');
            const products = await res.json();

            productsEl.innerHTML = products.map(product => `
                <div class="bg-white p-4 rounded shadow">
                    <img src="${product.image}" alt="${product.title}" class="h-32 mx-auto object-contain">
                    <h3 class="font-bold mt-2 text-sm line-clamp-2">${product.title}</h3>
                    <p class="text-blue-600 font-semibold">$${product.price.toFixed(2)}</p>
                    <button class="mt-2 w-full bg-blue-500 text-white py-1 rounded add-btn" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            `).join('');
            document.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    const product = products.find(p => p.id === id);
                    addToCart(product);
                });
            });
        } catch (error) {
            productsEl.innerHTML = '<p class="text-red-500">Failed to load products.</p>';
        }
    }
    function addToCart(product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
    }
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
    }
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
    function updateCartUI() {
        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<p class="text-gray-500">Cart is empty</p>';
            cartCount.textContent = '0';
            cartTotal.textContent = '$0.00';
            return;
        }
        let totalItems = 0;
        let totalPrice = 0;
        cartItemsEl.innerHTML = cart.map(item => {
            totalItems += item.quantity;
            totalPrice += item.quantity * item.price;
            return `
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h4 class="font-semibold text-sm">${item.title}</h4>
                        <p class="text-xs text-gray-600">Qty: ${item.quantity}</p>
                        <p class="text-blue-600 font-bold text-sm">$${(item.quantity * item.price).toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('pointer-events-none');
    });
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        overlay.classList.add('pointer-events-none');
    });
    overlay.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        overlay.classList.add('pointer-events-none');
    });
    window.removeFromCart = removeFromCart;
    loadProducts();
    updateCartUI();
});
=======
document.addEventListener('DOMContentLoaded', () => {
    const productsEl = document.getElementById('products');
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItemsEl = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const overlay = document.getElementById('overlay');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    async function loadProducts() {
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=8');
            const products = await res.json();

            productsEl.innerHTML = products.map(product => `
                <div class="bg-white p-4 rounded shadow">
                    <img src="${product.image}" alt="${product.title}" class="h-32 mx-auto object-contain">
                    <h3 class="font-bold mt-2 text-sm line-clamp-2">${product.title}</h3>
                    <p class="text-blue-600 font-semibold">$${product.price.toFixed(2)}</p>
                    <button class="mt-2 w-full bg-blue-500 text-white py-1 rounded add-btn" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            `).join('');
            document.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    const product = products.find(p => p.id === id);
                    addToCart(product);
                });
            });
        } catch (error) {
            productsEl.innerHTML = '<p class="text-red-500">Failed to load products.</p>';
        }
    }
    function addToCart(product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
    }
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
    }
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
    function updateCartUI() {
        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<p class="text-gray-500">Cart is empty</p>';
            cartCount.textContent = '0';
            cartTotal.textContent = '$0.00';
            return;
        }
        let totalItems = 0;
        let totalPrice = 0;
        cartItemsEl.innerHTML = cart.map(item => {
            totalItems += item.quantity;
            totalPrice += item.quantity * item.price;
            return `
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h4 class="font-semibold text-sm">${item.title}</h4>
                        <p class="text-xs text-gray-600">Qty: ${item.quantity}</p>
                        <p class="text-blue-600 font-bold text-sm">$${(item.quantity * item.price).toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('pointer-events-none');
    });
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        overlay.classList.add('pointer-events-none');
    });
    overlay.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        overlay.classList.add('pointer-events-none');
    });
    window.removeFromCart = removeFromCart;
    loadProducts();
    updateCartUI();
});
>>>>>>> upstream/main
