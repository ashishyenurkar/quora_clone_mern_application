import React from 'react'
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from '../../firebase';
function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => { 
        console.log(error);
      })
  }
  return (
      <div className='login-container'>
      <div className='login-content'>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2UzMTQ4M2MzNGRiYTEwZDUwMDJhYTlhZWVjYzE1YzE1NzMzYjNjMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/GZd8nPH3TcNSU/giphy.gif" alt="logo" />
       
        <button onClick={handleSubmit} className='btn-login'>login to continue</button>
      </div>
      
    </div>
  )
};

export default Login