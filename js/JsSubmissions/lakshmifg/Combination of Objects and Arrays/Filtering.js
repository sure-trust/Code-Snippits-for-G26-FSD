<<<<<<< HEAD
function filterProducts(products) {
    if (!products || products.length === 0) {
      return []; // Handle empty or invalid input
    }
  
    const filteredProducts = products.filter(product => product.price > 50);
    return filteredProducts;
  }
  
  // Example usage:
  const productList = [
    { productName: "Laptop", price: 1200 },
    { productName: "Mouse", price: 25 },
    { productName: "Keyboard", price: 60 },
    { productName: "Headphones", price: 80 },
    { productName: "USB Drive", price: 15 },
  ];
  
  const expensiveProducts = filterProducts(productList);
  
  console.log("Products with price greater than 50:");
  if (expensiveProducts.length > 0) {
    expensiveProducts.forEach(product => {
      console.log(`${product.productName}: $${product.price}`);
    });
  } else {
    console.log("No products found with price greater than 50.");
=======
function filterProducts(products) {
    if (!products || products.length === 0) {
      return []; // Handle empty or invalid input
    }
  
    const filteredProducts = products.filter(product => product.price > 50);
    return filteredProducts;
  }
  
  // Example usage:
  const productList = [
    { productName: "Laptop", price: 1200 },
    { productName: "Mouse", price: 25 },
    { productName: "Keyboard", price: 60 },
    { productName: "Headphones", price: 80 },
    { productName: "USB Drive", price: 15 },
  ];
  
  const expensiveProducts = filterProducts(productList);
  
  console.log("Products with price greater than 50:");
  if (expensiveProducts.length > 0) {
    expensiveProducts.forEach(product => {
      console.log(`${product.productName}: $${product.price}`);
    });
  } else {
    console.log("No products found with price greater than 50.");
>>>>>>> upstream/main
  }