export default function Cart({ cartItems, onUpdateQty, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.imageURL} alt={item.name} style={{ width: '80px', marginRight: '1rem' }} />
          <div style={{ flexGrow: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <select
            value={item.qty}
            onChange={e => onUpdateQty(item.id, Number(e.target.value))}
          >
            {Array.from({ length: item.quantity }).map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <button onClick={() => onRemove(item.id)} style={{ marginLeft: '1rem' }}>
            Delete
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h3>Total amount: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}
