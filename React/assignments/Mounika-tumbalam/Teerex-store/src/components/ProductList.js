import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterPanel from "./FilterPanel";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      
  }, []);

  const applyFilters = (product) => {
    const { color, gender, price, type } = filters;

    const matchColor = color.length ? color.includes(product.color) : true;
    const matchGender = gender.length ? gender.includes(product.gender) : true;
    const matchType = type.length ? type.includes(product.type) : true;

    let matchPrice = true;
    if (price.length) {
      matchPrice = price.some((range) => {
        if (range === "0-250")
          return product.price >= 0 && product.price <= 250;
        if (range === "251-450")
          return product.price >= 251 && product.price <= 450;
        if (range === "451-above") return product.price > 450;
        return false;
      });
    }

    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchColor && matchGender && matchType && matchPrice && matchSearch;
  };

  const containerStyle = {
    display: "flex",
    padding: "20px",
  };

  const sidebarStyle = {
    width: "250px",
    marginRight: "20px",
  };

  const contentAreaStyle = {
    flex: 1,
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "8px",
    width: "250px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    marginLeft: "8px",
  };

  const productGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  };

  const filteredProducts = products.filter(applyFilters);

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>
      <div style={contentAreaStyle}>
        <div style={searchBarStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              alt="search"
              style={iconStyle}
            />
          </div>
        </div>

        <div style={productGridStyle}>
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))
          ) : (
            <p>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
