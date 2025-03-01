import React, { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

const Register = () => {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const formData= new FormData(e.target)
            const username = formData.get('username')
            const email = formData.get('email')
            const password = formData.get('password')
           
            const res = await apiRequest.post('/auth/register',{
                email,
                username, 
                password
            })   
            setMessage(res.data.message)
            
            navigate('/login')
            console.log(res.data.message)
        } catch (error) {
            setError(error.response.data.message)
            console.log('this is error',error)
            
            
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <div className="register">
        <div className="wrapper">
        <h1>Register Form</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
            <input type='text' name='username'  placeholder='Enter your username'/>
            <input type='email' name='email'  placeholder='Enter your email adddress'/>
            <input type='password' name='password'placeholder='Enter the password'/>
            <button type='submit' disabled={loading}  >Register here</button>
            {error || message && <span>{error || message} </span>}
        </form>
        
      </div>
      <span className='comment'> Already have an account ? <Link to='/login'> Sign in </Link> </span>
        
     
        </div>
      
    </div>
  );
};

export default Register;