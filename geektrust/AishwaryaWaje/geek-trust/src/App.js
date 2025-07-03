import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header.js';
import Home from './pages/homePage.js';
import ProductDetails from './pages/productDetails.js';
import Cart from './pages/cart.js';
import ProductProvider from './domain/productDomain.js';
import CartProvider from './domain/cartDomain.js';

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
