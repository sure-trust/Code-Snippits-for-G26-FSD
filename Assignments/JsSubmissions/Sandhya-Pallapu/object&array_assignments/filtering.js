let products = [
    { productName: "bingo", price: 40 },
    { productName: "bottle", price: 75 },
    { productName: "hide&seek", price: 55 },
    { productName: "lays", price: 30 }
];
console.log("the actual product is" ,products)

// Filter products with price greater than 50
let filteredProducts = products.filter(product => product.price > 50);
console.log("Filtered Products:", filteredProducts);
