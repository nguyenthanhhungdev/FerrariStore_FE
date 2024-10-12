// src/ProductList.jsx
import ProductCard from './ProductCard';

// eslint-disable-next-line react/prop-types
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;