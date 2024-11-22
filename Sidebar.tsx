import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <h3>Hướng dẫn</h3>
    <ul>
      <li>
        <Link to="/products">Quản lý hàng hóa</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;