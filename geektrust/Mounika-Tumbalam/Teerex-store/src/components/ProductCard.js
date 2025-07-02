const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "200px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.imageURL}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "10px" }}
      />
      <h3 style={{ fontSize: "16px", margin: "5px 0", textAlign: "center" }}>{product.name}</h3>
      <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          padding: "6px 12px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
