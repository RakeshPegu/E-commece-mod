import React, { useContext, useEffect } from 'react';
import './layout.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../Context/Context';
import AdminNavbar from '../../Admin/AdminNavbar/AdminNavbar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>
  );
};
const RequiredAuthentication = ()=>{
  const {currentUser} = useContext(AuthContext)
  const navigate =useNavigate()
  
  useEffect(()=>{
    if(!currentUser){
      navigate('/login')
    }else if(currentUser.role === 'ADMIN'){
      navigate('/admin')
    }
  },[currentUser, navigate, ])
  if(!currentUser || currentUser.role === 'ADMIN'){   
    return null
  }
    return (<div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>);
    
  
 
}
const RequiredAdmin = ()=>{
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser || currentUser.role !== 'ADMIN'){
      navigate('/')
      
    }
  }, [currentUser,navigate, ])
  if( !currentUser && currentUser.role !== 'ADMIN'){
    return null
  }
  return (
    <div className="layout">
      <div className="navbar">
        <AdminNavbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>

  );
}


  


export {Layout, RequiredAuthentication, RequiredAdmin};