// src/Book/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance.js';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/Book');
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); 
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;


/* 


products:

Vai trò: Lưu trữ danh sách các sản phẩm (hoặc sách) được fetch từ API.
Khởi tạo: useState([]) - Khởi tạo với một mảng rỗng.
Cập nhật: Khi dữ liệu được fetch thành công từ API, state này sẽ được cập nhật với dữ liệu nhận được (setProducts(response.data)).
loading:

Vai trò: Theo dõi trạng thái loading, cho biết liệu dữ liệu đang được fetch hay không.
Khởi tạo: useState(true) - Khởi tạo với giá trị true, nghĩa là ban đầu dữ liệu đang được fetch.
Cập nhật: Khi quá trình fetch dữ liệu hoàn tất (dù thành công hay thất bại), state này sẽ được cập nhật thành false (setLoading(false)).
error:

Vai trò: Lưu trữ thông tin lỗi nếu có lỗi xảy ra trong quá trình fetch dữ liệu.
Khởi tạo: useState(null) - Khởi tạo với giá trị null, nghĩa là ban đầu không có lỗi.
Cập nhật: Nếu có lỗi xảy ra trong quá trình fetch dữ liệu, state này sẽ được cập nhật với thông tin lỗi (setError(err)).


*/