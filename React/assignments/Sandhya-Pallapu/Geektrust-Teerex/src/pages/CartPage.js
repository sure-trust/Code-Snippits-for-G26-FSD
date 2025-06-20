import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartPage() {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
   
    <div style={{ padding: "20px", width:"700px",height:"700px" }}>
       <h1 style={{color: "red"}}>YOUR CART</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                paddingBottom: "10px",
              }}
            >
              
              <img src={item.imageURL} alt={item.type}   style={{width: "300px",height:"300px", borderRadius:"5px"}}/>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>
                Quantity: {item.quantity}{" "}
                {item.quantity >= 5 && (
                  <span style={{ color: "red" }}>(Out of stock)</span>
                )}
              </p>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                disabled={item.quantity >= 5}
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.id, -1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Amount: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default CartPage;
