import React from 'react';
import './adminNavbar.scss';

const AdminNavbar = () => {
  return (
    <nav>
        <div className="left"> 
          <h1>ADMIN DASHBOARD</h1>
          <div className="content">
            <h4> Users</h4>
            <h4> Products</h4>
            <h4> Orders</h4>
            <h4> Add new item</h4>
          </div>
        </div>
        <div className="right">
            right
        </div>
    </nav>
  );
};

export default AdminNavbar;