import { useContext } from 'react';
import { CartDomain } from '../domain/cartDomain';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartDomain);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
          <h4>{item.name}</h4>
          <img src={item.imageURL} alt={item.name} width="200" />
          <p>₹{item.price}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
