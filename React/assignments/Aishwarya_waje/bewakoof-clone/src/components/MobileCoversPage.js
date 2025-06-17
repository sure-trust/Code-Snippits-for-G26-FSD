import React, { useState } from 'react';
import ProductCard from './ProductCard';
import data from '../Data.json';
import './MobileCoversPage.css';

function MobileCoversPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const coversArray = Array.isArray(data.Covers) ? data.Covers : [];

  const brands = ['All', ...new Set(coversArray.map(product => product.brand))];

  const filteredCovers =
    selectedBrand === 'All'
      ? coversArray
      : coversArray.filter(product => product.brand === selectedBrand);

  return (
    <div className="mobile-covers-container">
      <aside className="sidebar">
        <h2>Select Brand</h2>
        <ul>
          {brands.map(brand => (
            <li key={brand}>
              <button
                className={selectedBrand === brand ? 'selected' : ''}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="cover-grid">
        {filteredCovers.length > 0 ? (
          filteredCovers.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              cutPrice={product.price + 100}
              discount={Math.floor(
                ((product.price + 100 - product.price) * 100) / (product.price + 100)
              )}
              rating={(4 + Math.random()).toFixed(1)}
              image={product.image}
            />
          ))
        ) : (
          <p>No covers available.</p>
        )}
      </main>
    </div>
  );
}

export default MobileCoversPage;
