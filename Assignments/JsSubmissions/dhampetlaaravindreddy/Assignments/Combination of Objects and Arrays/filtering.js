// Create an array of objects, where each object contains productName and price. 
// Write code to filter products with a price greater than 50 and print the result

let products = [
    { productName: "Apple", price: 40 },
    { productName: "Banana", price: 60 },
    { productName: "Orange", price: 70 },
    { productName: "Mango", price: 30 }
];
let filteredProducts = products.filter(product => product.price > 50);
console.log(filteredProducts);