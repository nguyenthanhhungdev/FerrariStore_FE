import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5024/api/Book');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id="root" className="max-w-7xl mx-auto p-8 text-center">
      <ProductList products={products} />
    </div>
  );
};

export default App;
