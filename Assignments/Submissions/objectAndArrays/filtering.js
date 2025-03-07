// Filtering

// Create an array of objects, where each object contains productName and price.
// Write code to filter products with a price greater than 50 and print the result.

const products = [
    {productName: 'biscuit', price:20},
    {productName: 'snacks', price:30},
    {productName: 'mixture', price:70},
    {productName: 'bucket', price:100},
    {productName: 'fan', price:200},
    {productName: 'air conditioner', price:5000},
    {productName: 'pictures', price:300}
]
console.log("\n Products with price greater than 50");
for (const product of products) {
    if (product.price > 50 ){
        console.log(product);
    }
}