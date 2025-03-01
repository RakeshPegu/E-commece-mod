import React, { useContext } from 'react';
import './navbar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fas, faS } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

library.add(fas)
const Navbar = () => {
  const {currentUser} =useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/Shop')
    
  }
  
  return (
    <nav>
        <div className='right'>
         <Link> <h1 >PIONEER</h1> </Link>          
            
            
        </div>
        <div className="center">
            <a href='/'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </div>
        <div className="left">
           <div className="first"> 
            <form  role='search'  onSubmit={handleClick}>
            <input type='search'  id='q' name='q'  placeholder='Enter the item'/>
          <button type='submit'  ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
            </form>
            
           </div>
           <div className="second">
            <Link to= {currentUser ? `/profile/${currentUser.id}`:"/login"}>
            <FontAwesomeIcon icon="fa-solid fa-user" style={{fontSize:"25px", cursor: 'pointer', color:"rgb(9, 9, 9)"}} />
            </Link>
          
           <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{fontSize:"25px", cursor:'pointer', color:"rgb(9, 9, 9)"}} />
           </div>
           
        </div>
    </nav>
  );
};

export default Navbar;