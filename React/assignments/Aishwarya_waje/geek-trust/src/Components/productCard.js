import { useContext } from 'react';
import { CartDomain } from '../domain/cartDomain';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartDomain);
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h4>{product.name}</h4>
      <img src={product.imageURL} alt={product.name} width="150" />
      <p>{product.price} ₹</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
