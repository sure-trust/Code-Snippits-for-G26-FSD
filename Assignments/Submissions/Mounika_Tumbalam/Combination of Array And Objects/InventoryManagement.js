//Create and array of objects
//Now for adding new item we should use the push method so that the newly created object is added at the end of the array
//For updated the value at the specific item we need to use the itemName 
//  check the condition if that item is present in the array
// if yes then update the price using item.price = new price
// For removing of an object filter method is used 
//Print the final array

let Inventory = [
    {itemName:"Smart Phone",stock:12,price:5000},
    {itemName:"Laptop",stock:10,price:6000},
    {itemName:"Headphones",stock:5,price:4000},
];
let newitem = Inventory.push({itemName: "Tab",stock : 4,price:4500})
console.log(`Added the new item : ${newitem.itemName}`)
for(let item of Inventory) {
    if(item.itemName === "Laptop"){
        item.price=9000;
        console.log(`${item.price} is updated`);
    }
}
let removed = "Headphones";
Inventory = Inventory.filter(item=>item.itemName !== removed);
console.log(`${removed} is removed`);
console.log("Final Inventory: ",Inventory);