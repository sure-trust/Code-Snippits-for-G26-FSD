import React, { useState, useEffect } from 'react';

export default function ProductList({ onAddToCart, searchTerm, filters }) {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setVisible(data);
      });
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(p =>
        (p.name + p.color + p.type).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    Object.keys(filters).forEach(key => {
      const val = filters[key];
      if (val) {
        filtered = filtered.filter(p => p.gender === key.slice(6)); // e.g., filterMen => "Men"
      }
    });

    setVisible(filtered);
  }, [searchTerm, filters, products]);

  const handleAdd = product => {
    onAddToCart(product);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {visible.map(p => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={p.imageURL}
              alt={p.name}
              style={{
                height: '130px',
                objectFit: 'contain',
                marginBottom: '1rem',
              }}
            />
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{p.name}</h4>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>₹{p.price}</p>
            <button
              onClick={() => handleAdd(p)}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
