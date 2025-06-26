import React, { useState, useEffect, useContext } from "react";
import productData from "../data/products.json";
import SearchBar from "../Components/Searchbar";
import Filters from "../Components/Filters";
import ProductCard from "../Components/ProductCard";
import "./Home.css";
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext"; 

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ color: [], gender: [], price: [], type: [] });

  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    setProducts(productData);
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchColor = filters.color.length ? filters.color.includes(product.color) : true;
    const matchGender = filters.gender.length ? filters.gender.includes(product.gender) : true;
    const matchType = filters.type.length ? filters.type.includes(product.type) : true;
    const matchPrice = filters.price.length ? filters.price.some((range) => {
      const price = product.price;
      if (range === "0-250") return price <= 250;
      if (range === "251-450") return price >= 251 && price <= 450;
      if (range === "451+") return price > 450;
      return false;
    }) : true;

    return matchSearch && matchColor && matchGender && matchType && matchPrice;
  });

  return (
    <div className="home-container">
      <h2 className="head">TeeRex Store</h2>
     <Link 
  to="/cart" 
  style={{ fontSize: "20px", color: "grey", paddingTop: "0px", paddingLeft: "1000px", textDecoration: "none" }}
>
  🛒 Cart
</Link>

      <Filters handleFilterChange={handleFilterChange} />
      <main className="product-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
