import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faS, fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(fas, faS, faSquareFacebook, faLinkedin, faXTwitter, faSquareInstagram)
const Footer = () => {
  return (
    <div className="footer">
     
     <div className="box1">  
        <h2>ABOUT</h2>
       <p> Our site is constantly working towards  giving out customers the best experience while shopping</p>
      </div>
      <div className="box2">
        <h2>CATOGERIES</h2>
        <ul>
            <li><a href='#'>Clothing</a></li>
            <li><a href='#'>Lingerie</a></li>
            <li><a href='#'>Footwear</a></li>
            <li><a href='#'>Jewellery</a></li>
            <li> <a href='#'>Hand bag</a></li>
            <li><a href='#'>Belt</a></li>
        </ul>
      </div>
      <div className="box3">
        <h2>INFORMATION</h2>
        <ul>
            <li> <a href='#'>About us</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Terms & conditions</a></li>
            <li><a href='#'>Return & Exchange policy</a></li>
            <li><a href='#'>Shipping & Delivery</a></li>
            <li><a href='#'>Private policy</a></li>
        </ul>
      </div>
      <div className="box4">
        <h2>CONTACT </h2>
         <address>
          <p><FontAwesomeIcon icon="fa-solid fa-location-dot" /> Address: XYZ, X, India,</p>
         </address>
         <div className="contact">
         <span><FontAwesomeIcon icon="fa-solid fa-phone" /> Phone : +91 894040200</span>
         <sp><FontAwesomeIcon icon="fa-solid fa-envelope" /> E-mail: rpegu950@gmail.com</sp>
         </div>
       
         <div className="logo">
         <Link to='#'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link> 
         <Link to='#' ><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></Link>
         <Link to='#' ><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></Link>
         <Link to='#'><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></Link>
         

         </div>
         
      </div>
    </div>
    
  );
};

export default Footer;
