import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
`;

const CartLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Title>T-Rex Store</Title>
          <CartLink href="/cart">
            🛒 Cart
          </CartLink>
        </Header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;