const Cart = ({ cart, setCart }) => {
  
  const handleQuantityChange = (id, quantity) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(newCart);
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <img
                src={item.imageURL}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "20px",
                  border: "1px solid #ddd",
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: "0" }}>{item.name}</h4>
                <p style={{ margin: "5px 0" }}>₹{item.price}</p>
              </div>
              <div>
                <label>Qunatity:</label>{" "}
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <button onClick={() => handleRemove(item.id)}>Delete</button>
              </div>
            </div>
          ))}

          <hr />
          <h3>Total amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
