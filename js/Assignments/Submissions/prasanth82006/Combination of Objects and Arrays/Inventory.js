<<<<<<< HEAD
let inventory=[
     { itemName: "Laptop", stock: 10, price: 800 },
    { itemName: "Phone", stock: 20, price: 500 },
    { itemName: "Tablet", stock: 15, price: 300 }
]

inventory.push({itemName: "AC",stock:25,price:25000})
inventory.find(a=>a.itemName==="AC").stock=0
inventory=inventory.filter(a=>a.itemName!=="AC")
=======
let inventory=[
     { itemName: "Laptop", stock: 10, price: 800 },
    { itemName: "Phone", stock: 20, price: 500 },
    { itemName: "Tablet", stock: 15, price: 300 }
]

inventory.push({itemName: "AC",stock:25,price:25000})
inventory.find(a=>a.itemName==="AC").stock=0
inventory=inventory.filter(a=>a.itemName!=="AC")
>>>>>>> upstream/main
console.log(inventory);