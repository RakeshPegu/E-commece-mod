import React from 'react';
import './manageAddress.scss';

const MangageAddress = () => {
  return (
    <div className="manageAddress">
      <h1>ADDRESSES</h1>
      <div className="content">
        <form>
          <div className="name">
            <div className="firstname">
              <label htmlFor="firstname">First Name</label>
              <input type='text'/>
            </div>
            <div className="lastname">
              <label htmlFor="lastname">Last Name</label>
              <input type='text'/>
            </div>
          </div>
          <div className="shipping">
            <label htmlFor="shipping">Shipping</label>
            <input type='text'/>
          </div>
          <div className="adr">
            <div className="city">
              <label htmlFor='city'>City</label>
              <input type='text'/>
            </div>
            <div className="state">
              <label htmlFor="states">state</label>
              <input type='text'/>
            </div>
            
          </div>
          <div className="number">
          <div className="code">
              <label htmlFor='code'>Zip code⁎</label>
              <input type='text'/>
            </div>
          <div className="phone">
            <label htmlFor="phone">Phone number:</label>
            <input type='number'/>
          </div>
          </div>
          <div className="land">
            <label htmlFor="land">Land mark (option)⁎</label>
            <input type='tex'/>
          </div>
         <div className="btn"><button type='submit'>Continue &nbsp; &nbsp;  →</button></div>
         
        </form>
      </div>
    </div>
  );
};

export default MangageAddress;