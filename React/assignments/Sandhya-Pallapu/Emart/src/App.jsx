
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
        
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
