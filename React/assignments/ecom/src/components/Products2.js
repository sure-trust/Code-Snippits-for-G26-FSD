import React, { useEffect, useState } from 'react';
import './Products2.css'; // We'll style it separately

const Products2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data.products); 
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="product-image" 
            />
            <a 
              href={`index2.html/?id=${product.id}`} 
              className="product-title"
            >
              {product.title}
            </a>
            <p className="product-price">₹{product.price}</p>
            <p className="product-category">{product.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products2;
