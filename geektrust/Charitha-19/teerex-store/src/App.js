import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';



export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ filterMen: false, filterWomen: false });

  const handleAddToCart = product => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        if (existing.qty < product.quantity) {
          return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
        } else {
          alert('Exceeded available quantity!');
          return prev;
        }
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    const prod = cart.find(i => i.id === id);
    if (qty > prod.quantity) {
      alert('Exceeded available quantity!');
      return;
    }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeItem = id => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.qty, 0)}
        onSearch={setSearchTerm}
        onFilter={(name, value) => setFilters(prev => ({ ...prev, [name]: value }))}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              onAddToCart={handleAddToCart}
              searchTerm={searchTerm}
              filters={filters}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              onUpdateQty={updateQty}
              onRemove={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}
