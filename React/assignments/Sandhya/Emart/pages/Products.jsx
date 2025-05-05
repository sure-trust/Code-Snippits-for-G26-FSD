import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import './ProductCard.css'; 

function Products() {
  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

