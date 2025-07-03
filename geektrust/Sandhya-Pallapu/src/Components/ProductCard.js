import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext); 

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;
  const outOfStock = quantity >= 5;

  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      {outOfStock ? (
        <p style={{ color: "red", fontWeight: "bold" }}>Out of Stock</p>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
