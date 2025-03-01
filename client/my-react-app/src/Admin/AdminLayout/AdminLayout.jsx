import React from 'react';
import './adminLayout.scss';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="adminLayout">
        <div className="navbar">
        <AdminNavbar/>
        </div>
       <div className="content">
        <Outlet/>
      </div>
    </div>   
  );
};

export default AdminLayout;