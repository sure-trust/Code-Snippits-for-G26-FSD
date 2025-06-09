import React from 'react';
import ProductCard from './ProductCard';
import data from '../Data.json';
import './MenPage.css';

function WomenPage() {
  const womenProducts = data.womenProducts;

  return (
    <div className="women-page-container">
      <h2 className="section-title">Women's Fashion Collection</h2>
      <div className="product-grid">
        {womenProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            cutPrice={product.cutPrice}
            discount={product.discount}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default WomenPage;
