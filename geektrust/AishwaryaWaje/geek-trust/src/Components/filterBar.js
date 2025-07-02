import { useState, useEffect, useContext } from 'react';
import { ProductDomain } from '../domain/productDomain';

const priceRanges = {
  All: [0, Infinity],
  '0-250': [0, 250],
  '251-450': [251, 450],
  'Above 450': [451, 1000],
};

export default function FilterBar() {
  const { products, setFilteredProducts } = useContext(ProductDomain);

  const [filters, setFilters] = useState({
    color: 'All',
    gender: 'All',
    price: 'All',
    type: 'All',
  });

  const getUniqueOptions = key => {
    const unique = Array.from(new Set(products.map(p => p[key])));
    return ['All', ...unique];
  };

  useEffect(() => {
    let filtered = products;

    if (filters.color !== 'All') {
      filtered = filtered.filter(p => p.color === filters.color);
    }
    if (filters.gender !== 'All') {
      filtered = filtered.filter(p => p.gender === filters.gender);
    }
    if (filters.type !== 'All') {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    if (filters.price !== 'All') {
      const [min, max] = priceRanges[filters.price];
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    setFilteredProducts(filtered);
  }, [filters, products, setFilteredProducts]);

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <select
        onChange={e => setFilters({ ...filters, color: e.target.value })}
        value={filters.color}
      >
        {getUniqueOptions('color').map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select
        onChange={e => setFilters({ ...filters, gender: e.target.value })}
        value={filters.gender}
      >
        {getUniqueOptions('gender').map(gender => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>

      <select onChange={e => setFilters({ ...filters, type: e.target.value })} value={filters.type}>
        {getUniqueOptions('type').map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        onChange={e => setFilters({ ...filters, price: e.target.value })}
        value={filters.price}
      >
        {Object.keys(priceRanges).map(range => (
          <option key={range} value={range}>
            {range === 'All' ? 'All Prices' : range}
          </option>
        ))}
      </select>
    </div>
  );
}
