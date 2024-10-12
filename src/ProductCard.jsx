// src/ProductCard.jsx
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center m-4">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <img className="w-full h-auto rounded-lg" src={product.cover_image} alt={product.title} />
      <p className="text-gray-500">Published Year: {product.published_year}</p>
      <p className="text-gray-500">Language: {product.language}</p>
      <p className="text-gray-500">Authors: {product.authors.join(', ')}</p>
    </div>
  );
};

export default ProductCard;