import  { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
      />
      {showCart ? (
        <Cart cart={cart} setCart={setCart} />
      ) : (
        <ProductList onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default App;
