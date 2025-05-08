import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.image}
      alt={product.name}
      className="product-card__image"
    />
    <div className="product-card__info">
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="product-card__link">
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
