import { useEffect, useState } from 'react';
// import './App.css';
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
    <div id="root" className="m-0 flex place-items-center min-w-[320px] min-h-screen font-pop">
      <ProductList products={products} />
    </div>
  );
};

export default App;
