import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, cutPrice, discount, rating, image }) {
  const handleAddToCart = () => {
    alert(`Added "${name}" to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-subtitle">Bewakoof X Collection</p>
        <div className="price-details">
          <span className="price">₹{price}</span>
          <span className="cut-price">₹{cutPrice}</span>
          <span className="discount">{discount}% off</span>
        </div>
        <div className="bottom-row">
          <div className="rating">⭐ {rating}</div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
