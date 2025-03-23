
let Cart = [
    { itemName: "TV", stock: 10, price: 50000 },
    { itemName: "Phone", stock: 15, price: 30000 },
    { itemName: "Laptop", stock: 8, price: 20000 }
  ];
  
  
  Cart.push({ itemName: "Headphones", stock: 20, price: 2000 });
  

  Cart.find(item => item.itemName === "Phone").stock += 5; 
  

  Cart = Cart.filter(item => item.itemName !== "Tablet");

  console.log("Final Cart:", Cart);
  