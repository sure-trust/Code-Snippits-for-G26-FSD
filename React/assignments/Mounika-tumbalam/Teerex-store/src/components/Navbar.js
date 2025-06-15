const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav style={{ padding: "10px", display: "flex", justifyContent: "space-between", background: "#333", color: "#fff" }}>
      <h2>TeeRex Store</h2>
      <button onClick={onCartClick} style={{ background: "#fff", color: "#333", border: "none", padding: "5px 10px", cursor: "pointer" }}>
        Cart 🛒({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
