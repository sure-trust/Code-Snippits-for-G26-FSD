let product=[
     { productName: "Shoes", price: 40 },
     { productName: "Watch", price: 60 },
     { productName: "Bag", price: 30 },
     { productName: "Perfume", price: 75 }
]

product=product.filter(a=>a.price>50)
console.log(product);