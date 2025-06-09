import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const CartItemName = styled.h3`
  margin: 0 0 10px 0;
`;

const CartItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #007bff;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: right;
`;

const TotalAmount = styled.h2`
  margin: 0;
  color: #28a745;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 40px;
  color: #6c757d;
`;

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const increaseQuantity = (itemId) => {
    const newCart = cartItems.map(item => {
      if (item.id === itemId) {
        const originalProduct = JSON.parse(localStorage.getItem('products'))?.find(p => p.id === itemId);
        if (item.quantity >= (originalProduct?.quantity || 0)) {
          alert('Sorry, this item is out of stock!');
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(newCart);
  };

  const decreaseQuantity = (itemId) => {
    const newCart = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(newCart);
  };

  const removeItem = (itemId) => {
    const newCart = cartItems.filter(item => item.id !== itemId);
    updateCart(newCart);
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here!</p>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <CartItemImage src={item.imageURL} alt={item.name} />
          <CartItemDetails>
            <CartItemName>{item.name}</CartItemName>
            <p>Type: {item.type}</p>
            <p>Color: {item.color}</p>
            <p>Gender: {item.gender}</p>
            <CartItemPrice>₹{item.price}</CartItemPrice>
            <QuantityContainer>
              <QuantityButton
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity <= 1}
              >
                -
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton onClick={() => increaseQuantity(item.id)}>
                +
              </QuantityButton>
              <RemoveButton onClick={() => removeItem(item.id)}>
                Remove
              </RemoveButton>
            </QuantityContainer>
          </CartItemDetails>
        </CartItem>
      ))}
      <TotalContainer>
        <TotalAmount>Total: ₹{total}</TotalAmount>
      </TotalContainer>
    </CartContainer>
  );
}

export default Cart; 