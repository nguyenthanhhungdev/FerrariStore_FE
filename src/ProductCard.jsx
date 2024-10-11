// src/ProductCard.jsx
import { useState } from 'react';
import './ProductCard.css';
import Notification from './Notification';

// eslint-disable-next-line react/prop-types
function ProductCard({ image, name, price, quantity: initialQuantity, onAddToCart }) {
  const [notification, setNotification] = useState('');
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setNotification(`Thêm ${name} vào giỏ hàng!`);
      onAddToCart(); // Gọi hàm onAddToCart để tăng số lượng sản phẩm trong giỏ hàng
    } else {
      setNotification(`Sản phẩm ${name} đã hết hàng!`);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} VND</p>
      <p className="product-quantity">Số lượng còn lại: {quantity}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Thêm vào giỏ hàng
      </button>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} duration={3000} />
      )}
    </div>
  );
}

export default ProductCard;