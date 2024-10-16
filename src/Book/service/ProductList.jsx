// src/Book/service/ProductList.jsx
import PropTypes from 'prop-types';
import ProductCard from '../component/ProductCard.jsx';
import { productPropType } from '../utils/propTypes.js';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired,
};

export default ProductList;

