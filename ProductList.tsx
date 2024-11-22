import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import './ProductManagement.css';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductManagement: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items) as Product[];

  const totalValue = useMemo(() => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }, [products]);

  return (
    <div className="product-management">
      <h1>Quản lý hàng hóa</h1>
      <ProductForm />
      <ProductTable products={products} />
      <p className="total-value">Tổng giá trị hàng hóa: {totalValue} VND</p>
    </div>
  );
};

export default ProductManagement;