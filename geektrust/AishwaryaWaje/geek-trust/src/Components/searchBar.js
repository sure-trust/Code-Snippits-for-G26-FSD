import { useContext } from 'react';
import { ProductDomain } from '../domain/productDomain';

export default function SearchBar() {
  const { setSearchTerm } = useContext(ProductDomain);

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => setSearchTerm(e.target.value.toLowerCase())}
      style={{
        padding: '0.5rem',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '1rem',
      }}
    />
  );
}
