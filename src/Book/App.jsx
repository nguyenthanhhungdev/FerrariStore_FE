import useFetchProducts from './hooks/useFetchBook.js';
import ProductList from './service/ProductList.jsx';

const App = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="root" className="m-0 flex place-items-center min-w-[320px] min-h-screen font-pop">
      <ProductList products={products} />
    </div>
  );
};

export default App;
