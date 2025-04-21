const products = [
    { productName: "Shirt", price: 45 },
    { productName: "Shoes", price: 75 },
    { productName: "Cap", price: 30 },
    { productName: "Bag", price: 100 }
];

const expensiveProducts = products.filter(product => product.price > 50);
console.log("Products with price > 50:", expensiveProducts);
