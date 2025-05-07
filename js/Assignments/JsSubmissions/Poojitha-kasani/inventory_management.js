let inventory=[
    {itemName:"dress",stock:10,price:500},
    {itemName:"bag",stock:20,price:300}
];
let newItem={itemName:"watch",stock:30,price:1000};
inventory.push(newItem);

let itemUpdate="dress";
let newStock=25;
for(let item of inventory)
{
    if(item.itemName===itemUpdate)
    {
        item.stock=newStock;
        break;
    }
}
let itemRemove="bag";
inventory=inventory.filter(item=>item.itemName !== itemRemove);
//console.log(inventory);//it shows output like this Array [ {...} {...} ]
console.log("Final Inventory: ", JSON.stringify(inventory, null, 2));
