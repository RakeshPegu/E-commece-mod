import React, { useContext, useState } from 'react';
import './profile.scss';
import { AuthContext } from '../../components/Context/Context';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
import swal from 'sweetalert2'
import apiRequest from '../../lib/apiRequest';

library.add(fas)

const Profile = () => {
    
    const navigate = useNavigate()
    const {update} = useContext(AuthContext)
    
    const handleLogout = async()=>{
       const result = await swal.fire( {
            title: "Log out",
            text:"are you sure to logout ?",
            icon:'question',
            iconColor:"red",
            showConfirmButton:true,
            confirmButtonColor:'red',
            confirmButtonText:'Confirm',
            showCancelButton:true,
            cancelButtonColor:'green',
            

        });
        if(result.isConfirmed){
            await apiRequest.post('/auth/logout')
            update(null)
            await swal.fire({
                title:"Log Out",
                text:"Logged out successfully",
                icon:"success"
                
            }).then(()=>{
                navigate('/login')
            })
        }else{
            swal.fire({
                title: "Cancelled",
                text:"Log out cancelled",
                icon:"error"
            })
        }
        
         
        
        
    }
    const {currentUser} = useContext(AuthContext);
    
    console.log(currentUser.role)
    console.log(currentUser._id)
    
  return (
    <div className="profile">
      <div className="left">
         <div className="top">
            <div className="imgContainer">
                <img src='../shopping.jpg'  width="70px"/>
            </div>
            <div className="text">               
                <h2>{currentUser.username}</h2>
                
            </div>
         </div>
         <div className="bottom">
            <div className="box1">
                <Link to='#'><h3 className='order'>MY ORDERS</h3>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right"  /> </Link>
            </div>
            <div className="box2">
            <div className="icon"> <FontAwesomeIcon icon="fa-solid fa-user" /><h3> ACCOUNT SETTINGS</h3></div>
                <ul>
                    <li><Link to={`/profile/${currentUser._id}`}>profile information</Link></li>
                     <li><Link to={`/profile/${currentUser._id}/manage_address`}>manage address</Link></li>
                    <li ><Link >Other information</Link></li>
                </ul>
            </div>
            <div className="box3" onClick={handleLogout}>
            <FontAwesomeIcon icon="fa-solid fa-power-off" style={{color:' hsl(230, 100.00%, 50.00%)'}} /><h3>LOG OUT</h3>
            </div>
         </div>
      </div>
    <div className="right">
        <Outlet/>
    </div>
    </div>
  );
};

export default Profile;