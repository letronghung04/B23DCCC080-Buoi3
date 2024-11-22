import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductManagement from './ProductList';
import EditProduct from './EditProduct';
import Sidebar from './Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;