// we are making an object card

let cart = {
    itemName:"Shirt",
    quantity:2,
    price:500,

}
// now we have update the quanity of the item 
cart.quantity = 4;
let totalCost = cart.quantity*cart.price;
console.log("The Total cost of the item before discount is "+totalCost);

// now we have to apply the discountig on the item 
// let us assume the discount is 10% on the item or int the card
let discount = 0.1*totalCost;

totalCost = totalCost - discount;
// now the total cost after the  discount on the product is

console.log("The total cost after the discount is "+totalCost);
