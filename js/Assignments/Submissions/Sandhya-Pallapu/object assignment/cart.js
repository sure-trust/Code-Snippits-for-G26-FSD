
            
          

let cart={item:"black_geans",quantity:"1",price:"2000"}
console.log(cart)
price=parseFloat(cart.price)
quantity=parseInt(cart.quantity) 
let cost=quantity*price
console.log(cost)
cart.cost=cost



let cart_updated={item:"black_geans",quantity:"2",price:"2000"}
//console.log(cart_updated)
quantity=parseFloat(cart_updated.quantity)
price=parseInt(cart_updated.price)
 cost=quantity*price
 console.log(cost)
 cart_updated.cost=cost
 console.log(cart_updated)
 let discount
 cart_updated.discount="5%"
 discount=parseFloat(cart_updated.discount)
 let payment=cost*(5/100)
 cart_updated.payment=payment
console.log(cart_updated)
