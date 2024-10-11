// src/CartIcon.jsx
import './CartIcon.css';

// eslint-disable-next-line react/prop-types
function CartIcon({ cartCount }) {
  return (
    <div className="cart-icon">
      <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;

/* 


<span>: Đây là một thẻ HTML tiêu chuẩn được sử dụng để nhóm các phần tử trong một dòng. Nó thường được sử dụng để áp dụng các kiểu CSS hoặc để chứa văn bản hoặc các phần tử khác.

className="cart-count": Trong React, thuộc tính class của HTML được thay thế bằng className để tránh xung đột với từ khóa class trong JavaScript. className="cart-count" áp dụng một lớp CSS có tên là cart-count cho thẻ <span>. Lớp này có thể được định nghĩa trong một file CSS để áp dụng các kiểu dáng cụ thể cho thẻ <span> này.

{cartCount}: Đây là cú pháp JSX để nhúng một biến JavaScript vào trong HTML. cartCount là một biến hoặc một giá trị được định nghĩa trong component React. Giá trị của cartCount sẽ được hiển thị bên trong thẻ <span>.

Nếu cartCount là một số, nó sẽ hiển thị số đó.
Nếu cartCount là một chuỗi, nó sẽ hiển thị chuỗi đó.
Nếu cartCount là một biểu thức, kết quả của biểu thức sẽ được hiển thị.


*/