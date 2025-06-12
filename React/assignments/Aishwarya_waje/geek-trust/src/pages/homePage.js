import { useContext } from 'react';
import ProductCard from '../Components/productCard';
import SearchBar from '../Components/searchBar';
import FilterBar from '../Components/filterBar';
import { ProductDomain } from '../domain/productDomain';

export default function Home() {
  const { filteredProducts } = useContext(ProductDomain);

  return (
    <div>
      <h3>Product List</h3>
      <SearchBar />
      <FilterBar />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
