import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;
