import React, { useContext, useState } from 'react';
import './edit.scss';
import { AuthContext } from '../../components/Context/Context';
import apiRequest from '../../lib/apiRequest';

const EditPage = () => {
    const {currentUser} = useContext(AuthContext)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setIsLoading(true)
            setError('')
            const formData = new FormData(e.target)
            const username = formData.get("name")
            const email    = formData.get('email')
            console.log(username)
            
            const result = await apiRequest.put(`/user/${currentUser.id}`, {
                username, email

            })
            
            console.log(result)
            
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
            
        }finally{
            setIsLoading(true)
        }
    } 
    return (
    <div className="edit">
        <h1>Update Form</h1>
        <form onSubmit={handleSubmit}>
            <label >Username</label>
            <input type='text' id='name'  defaultValue={currentUser.username} name='name' placeholder='Enter your new name'/><br></br>
            <label >Email Address</label>
            <input type='email' id='email' defaultValue={currentUser.email} name='email' placeholder='Enter your new email'/><br></br>
            <label >Phone number</label>
            <input type='number' id='phone' defaultValue={currentUser.email || '585950050'} placeholder='Enter your phone number'/><br></br>
            <button type='submit'>Update</button>
            {error && <span>{error}</span>}
                   
        </form>
      
    </div>
  );
};

export default EditPage;