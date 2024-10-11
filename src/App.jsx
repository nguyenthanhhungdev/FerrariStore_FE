import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartIcon from './CartIcon';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <CartIcon cartCount={cartCount} />
      <h1>Danh sách sản phẩm</h1>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
