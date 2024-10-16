// src/Book/utils/propTypes.js
import PropTypes from 'prop-types';

export const productPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  published_year: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
});


/* 


Đoạn mã ProductList.propTypes dùng để xác định kiểu dữ liệu và các thuộc tính bắt buộc của prop products trong component ProductList. Điều này giúp đảm bảo rằng component nhận được dữ liệu đúng định dạng và đầy đủ các thuộc tính cần thiết. Cụ thể:

products: Là một mảng (arrayOf) các đối tượng (shape).
Mỗi đối tượng trong mảng products phải có các thuộc tính sau:
id: Số nguyên (number) và bắt buộc (isRequired).
title: Chuỗi (string) và bắt buộc (isRequired).
description: Chuỗi (string) và bắt buộc (isRequired).
price: Chuỗi (string) và bắt buộc (isRequired).
cover_image: Chuỗi (string) và bắt buộc (isRequired).
published_year: Số nguyên (number) và bắt buộc (isRequired).
language: Chuỗi (string) và bắt buộc (isRequired).
authors: Mảng các chuỗi (arrayOf(PropTypes.string)) và bắt buộc (isRequired).
Điều này giúp phát hiện sớm các lỗi liên quan đến dữ liệu không hợp lệ khi truyền vào component ProductList.


*/