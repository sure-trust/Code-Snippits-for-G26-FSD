let product = [
    {
        productName:"Maggi",
        price:10,
        stock:50,
    },
    {
        productName:"Dell",
        price:40000,
        stock:1000,
    },
    {
        productName:"Samsumg",
        price:10000,
        stock:40000,
    }
];

let obj = {
    productName:"huawei",
    price:40000,
    stock:50,
}

product.push(obj);

console.log(product)

console.log("Before deleting the element from the object")

product.shift();
console.log(product)


product.forEach(pro=> {
   if(pro.price>50){
    console.log(" The product  prices which is greater than 50 is "+pro.price+" name is "+pro.productName)
   }
})