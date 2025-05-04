<<<<<<< HEAD
// START
// DECLARE products as a list of objects (productName, price)
// DECLARE filteredProducts as an empty list
// FOR each product in products
//     IF product.price > 50
//         ADD product to filteredProducts
// PRINT filteredProducts
// END




let products =[
    { productName: "Laptop", price: 80000 },
    { productName: "Mouse", price: 800 },
    { productName: "Keyboard", price: 8000 },
    { productName: "Monitor", price: 85000 },
    { productName: "USB Cable", price: 850 }
];
let filteredProducts = products.filter(product => product.price > 1000);
=======
// START
// DECLARE products as a list of objects (productName, price)
// DECLARE filteredProducts as an empty list
// FOR each product in products
//     IF product.price > 50
//         ADD product to filteredProducts
// PRINT filteredProducts
// END




let products =[
    { productName: "Laptop", price: 80000 },
    { productName: "Mouse", price: 800 },
    { productName: "Keyboard", price: 8000 },
    { productName: "Monitor", price: 85000 },
    { productName: "USB Cable", price: 850 }
];
let filteredProducts = products.filter(product => product.price > 1000);
>>>>>>> upstream/main
console.log(filteredProducts);