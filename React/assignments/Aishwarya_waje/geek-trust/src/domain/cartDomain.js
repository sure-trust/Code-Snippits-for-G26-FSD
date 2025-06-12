import React, { createContext, useState, useEffect } from 'react';

export const CartDomain = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = item => {
    const exists = cart.find(c => c.id === item.id);
    alert('Added to cart...');
    if (exists) {
      setCart(cart.map(c => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = id => {
    setCart(cart.filter(c => c.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(c => (c.id === id ? { ...c, quantity: Number(quantity) } : c)));
  };

  return (
    <CartDomain.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartDomain.Provider>
  );
};
export default CartProvider;
