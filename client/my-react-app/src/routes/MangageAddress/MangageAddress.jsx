import React, { useContext, useEffect, useState } from 'react';
import './manageAddress.scss';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../components/Context/Context';


const MangageAddress = () => {
  const [error, setError] = useState()
  const[isLoading, setIsLoading] = useState(false)
  const {currentUser} = useContext(AuthContext)
  const [data, setData] = useState()
  useEffect(()=>{
    if (!currentUser?.addressIDs) return;
      const result =  async()=>{
      
      const res = await apiRequest.get(`/address/${currentUser.addressIDs}`)
      
      setData(res.data)
     
    }
   result()
  }, [currentUser])
  const user = data?.[0]
  console.log(user?.firstName)
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
      setError('')
      setIsLoading(true)
      const formData = new FormData(e.target)
     
      const firstName = formData.get('firstName')
      const lastName = formData.get('lastName')
      const shippingAddress = formData.get('shippingAddress')
      const zipCode = formData.get('zipCode')
      const city    = formData.get('city')
      const state   = formData.get('state')
      const  landMark = formData.get('landMark')
      const phoneNumber = formData.get('phoneNumber')
      const res = await apiRequest.post('/address', {
        firstName,
        lastName,
        shippingAddress,
        zipCode,
        state,
        city,
        phoneNumber,
        landMark
       })
       
    } catch (error) {
      setError(error.response.data.message)
      
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className="manageAddress">
      <h1>ADDRESSES</h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <div className="firstname">
              <label htmlFor="firstname">First Name</label>
              <input name='firstName' defaultValue={user?.firstName}  placeholder='Enter your first name' required type='text'/>
            </div>
            <div className="lastname">
              <label htmlFor="lastname">Last Name</label>
              <input name='lastName' defaultValue={user?.lastName} placeholder='Enter your last name' required type='text'/>
            </div>
          </div>
          <div className="shipping">
            <label htmlFor="shipping">Shipping</label>
            <input name='shippingAddress'  defaultValue={user?.shippingAddress} placeholder='Enter your shipping address' required type='text'/>
          </div>
          <div className="adr">
            <div className="city">
              <label htmlFor='city'>City</label>
              <input name='city'  defaultValue={user?.city} placeholder='Enter your city' required type='text'/>
            </div>
            <div className="state">
              <label htmlFor="states">state</label>
              <input name='state' defaultValue={user?.state} placeholder='Enter your state' required type='text'/>
            </div>
            
          </div>
          <div className="number">
          <div className="code">
              <label htmlFor='code'>Zip code⁎</label>
              <input name='zipCode'  defaultValue={user?.zipCode}  placeholder='Enter your zip code' required type='text'/>
            </div>
          <div className="phone">
            <label htmlFor="phone">Phone number:</label>
            <input name='phoneNumber' defaultValue={user?.phoneNumber} placeholder='Enter your phone number'  required type='number'/>
          </div>
          </div>
          <div className="land">
            <label htmlFor="land">Land mark (option)⁎</label>
            <input name='landMark' defaultValue={user?.landMark } placeholder='Enter any land mark' type='tex'/>
          </div>
         <div className="btn"><button type='submit' disabled ={isLoading} >Continue &nbsp; &nbsp;  →</button></div>
         
        </form>
      </div>
    </div>
  );
};

export default MangageAddress;