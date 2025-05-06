
let products = [
    {prodName:"Ice-cream",price:50},
    {prodName:"Choclates",price:60},
    {prodName:"Biscuits",price:40},
    {prodName:"Fruits",price:70},
    {prodName:"vegetables",price:20}
];
let filterprod = products.filter(product => product.price > 50 );
console.log("Products with price greater than 50: ");
filterprod.forEach(product => {
    console.log(`product Name : ${product.prodName} ,price : ${product.price}`);
});
