// src/ProductList.jsx
import ProductCard from './ProductCard';

// Danh sách sản phẩm với thuộc tính số lượng
const products = [
  {
    image: 'https://img.perlego.com/book-covers/4087766/9781804710074_300_450.webp',
    name: 'Sản phẩm 1',
    price: 100000,
    quantity: 10,
  },
  {
    image: 'https://img.perlego.com/book-covers/3392544/9780861542512_300_450.webp',
    name: 'Sản phẩm 2',
    price: 200000,
    quantity: 10,
  },
  {
    image: 'https://img.perlego.com/book-covers/4323090/9780861545902_300_450.webp',
    name: 'Sản phẩm 3',
    price: 150000,
    quantity: 10,
  },
];

// eslint-disable-next-line react/prop-types
function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onAddToCart={onAddToCart} // Truyền hàm onAddToCart
        />
      ))}
    </div>
  );
}

export default ProductList;