let products = [
    { productName: "Notebook", price: 30 },
    { productName: "Pen", price: 10 },
    { productName: "Backpack", price: 100 },
    { productName: "Headphones", price: 150 },
    { productName: "Mouse", price: 60 }
  ];
  
  let filteredProducts = products.filter(product => product.price > 50);
  
  console.log(filteredProducts);
  