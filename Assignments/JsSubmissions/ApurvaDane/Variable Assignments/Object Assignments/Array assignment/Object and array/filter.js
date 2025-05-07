let products = [
    { productName: "Pen", price: 30 },
    { productName: "Pencil", price: 10 },
    { productName: "Eraser", price: 70 },
    { productName: "Shoes", price: 120 },
    { productName: "Bottle", price: 55 }
  ];
  
  let filteredProducts = products.filter(product => product.price > 50);
  
  console.log("Products with price greater than 50:", filteredProducts);