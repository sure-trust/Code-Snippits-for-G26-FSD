let cart = {
    itemName:'',
    qty:5,
    price:10

}


totalcost = cart.qty*cart.price
cart.discount = '50%'
console.log(totalcost)
console.log(cart)