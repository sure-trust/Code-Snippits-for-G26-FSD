let products=[
    {productName:"bag",price:500},
    {productName:"flower",price:30},
    {productName:"bangles",price:100},
    {productName:"color",price:10}
    
    
];
let filteredProducts=products.filter(product=>product.price>50);
//console.log("products with price greater than 50:",filteredProducts);
console.log("products with price greater than 50:", JSON.stringify(filteredProducts, null, 2));