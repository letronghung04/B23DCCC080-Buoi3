import React from "react";
import { useDispatch } from "react-redux"; // Đảm bảo thư viện redux đã được cài đặt
import { Link } from "react-router-dom"; // Đảm bảo react-router-dom đã được cài đặt
import { deleteProduct } from "./ProductSlice"; // Đảm bảo file productSlice tồn tại và được cấu hình đúng

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <Link to={`/edit-product/${product.id}`}>
                <button>Sửa</button>
              </Link>
              <button
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable; // Đảm bảo tệp này được xuất khẩu dưới dạng một mô-đun
