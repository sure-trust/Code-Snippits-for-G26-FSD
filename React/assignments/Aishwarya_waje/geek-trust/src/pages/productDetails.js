import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductDomain } from '../domain/productDomain';
import { CartDomain } from '../domain/cartDomain';

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductDomain);
  const { addToCart } = useContext(CartDomain);

  const product = products.find(p => p.id === id);
  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.imageURL} alt={product.name} width="300" />
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
