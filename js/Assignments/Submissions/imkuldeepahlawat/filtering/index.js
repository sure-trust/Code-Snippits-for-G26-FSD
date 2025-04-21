// Filtering Products
const products = [
    { productName: "Laptop", price: 999.99 },
    { productName: "Mouse", price: 29.99 },
    { productName: "Keyboard", price: 79.99 },
    { productName: "Monitor", price: 299.99 },
    { productName: "Headphones", price: 149.99 }
];

// Filter products with price > 50
const expensiveProducts = products.filter(product => product.price > 50);

console.log("All products:", products);
console.log("\nProducts over $50:", expensiveProducts); 