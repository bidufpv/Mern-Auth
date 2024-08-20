import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    const [formData, SetFormData] = useState({})   
    const [loading, SetLoading] = useState(false)
    const [error, SetError] = useState(false)
  const handleSubmit = (e)=>{
     SetFormData({...formData, [e.target.id]: e.target.value})
  };

console.log(formData);

const handleformSubmit = async (e) => {
  e.preventDefault();
  try {
    SetLoading(true);
    SetError(false);
    const res = await fetch('http://localhost:4000/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
     });
     const data = await res.json();
     console.log(data);
    SetLoading(false);

    if(data.success === false){
      SetError(true);
      return;
    }
      //  SetError(false);  

  } catch (error) {
    SetLoading(false);
    SetError(true);
  }
 
};

    return(
        <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center text-blue-400 font-semibold my-10'>SIGN UP</h1>
        <form onSubmit={handleformSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleSubmit}
        
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleSubmit}
            
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleSubmit}
            
          />
          <button disabled={loading} className='bg-slate-900 text-blue-300 
          p-3 rounded-lg uppercase hover:opacity-90
          disabled:opacity-80'>{loading ? 'Loading...': 'Sign Up'}</button>

         <div className="flex gap-4">
          <button className='bg-slate-900 text-blue-300 
            p-3 rounded-full w-14 h-14 flex items-center justify-center
            hover:opacity-90 '>
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" 
         alt="GitHub Logo" className="w-10 h-10" />
         </button>

         <button className='bg-red-500 text-white 
            p-3 rounded-full w-14 h-14 flex items-center justify-center
            hover:opacity-90 disabled:opacity-80'>
        <img src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" 
         alt="Google Logo" className="w-10 h-10" />
         </button>
         </div>
         </form>

         <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to='/Signin'>
          <span className="text-blue-500">SignIn</span>
          </Link>
         </div>
         <p className="text-red-600 mt-5">{error && "Something wet wrong!"}</p>
         </div>
           
      
    );
}

