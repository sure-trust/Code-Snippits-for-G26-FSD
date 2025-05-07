import React, { useEffect, useState } from 'react';
import './Products.css'; // We'll style it separately

const Products = () => {
  const [products, setProducts] = useState([]);
//https://api.escuelajs.co/api/v1/products

/*

*/
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
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
              src={product.image} 
              alt={product.title} 
              className="product-image" 
            />
            <a 
              href={`index2.html/?id=${product.id}`} 
              className="product-title"
            >
              {product.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
