import React, { useContext, useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../components/Context/Context';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState('')
        const [loading , setLoading] = useState(false)
        const [message, setMessage] = useState('')
        const navigate = useNavigate()
        const {update} = useContext(AuthContext)
        const handleSubmit = async(e)=>{
            e.preventDefault()
            try {
                setError('')
                setLoading(true)
                const formData= new FormData(e.target)
                const email = formData.get('email')
                const password = formData.get('password')
                
                const res = await apiRequest.post("/auth/login", {
                    email,
                    password
                })
                update(res.data)              

                Swal.fire({
                    title:"Logged in ",
                    text:"logged in successfully",
                    icon:"success"
                }).then(()=>{
                    navigate('/')
                })
              

            } catch (error) {
                setError(error.response.data.message)
                console.log(error)
                
                
            }
            finally{
                setLoading(false)
            }
        }
  return (
    <div className="login">
         <div className="wrapper">
        <h1>Login Form</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
            <input type='email' name='email'  placeholder='Enter your email adddress'/>
            <input type='password' name='password'placeholder='Enter the password'/>
            <button type='submit' disabled={loading}>Login here</button>
            {error || message && <span>{error || message} </span>}
        </form>
        
      </div>
      <span className='comment'> Don't have an account ?<Link to='/register'> Sign up </Link> </span>
        
     
        </div>
     
    </div>
  );
};

export default Login;