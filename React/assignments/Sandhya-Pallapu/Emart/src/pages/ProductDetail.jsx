import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductDetail;
