// Shopping Cart
const cart = {
    itemName: "Laptop",
    quantity: 1,
    price: 999.99,
    
    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    },
    
    calculateTotal() {
        return this.quantity * this.price;
    }
};

// Update quantity
cart.updateQuantity(2);

// Add discount property
cart.discount = 10; // 10% discount

// Calculate final price with discount
const finalPrice = cart.calculateTotal() * (1 - cart.discount/100);

console.log("Cart details:", cart);
console.log("Final price after discount: $" + finalPrice.toFixed(2)); 