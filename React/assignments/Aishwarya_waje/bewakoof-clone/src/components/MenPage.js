import React from 'react';
import ProductCard from './ProductCard';
import data from '../Data.json';
import './MenPage.css';

function MenPage() {
  const menProducts = data.menProducts;

  return (
    <div className="men-page-container">
      <h2 className="section-title">Men's Fashion Collection</h2>
      <div className="product-grid">
        {menProducts.map(product => (
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

export default MenPage;
