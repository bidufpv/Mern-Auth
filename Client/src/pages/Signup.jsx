import React from "react";
import { Link } from "react-router-dom";
import Signin from './Signin'

export default function Signup(){
       





    return(
        <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center text-blue-400 font-semibold my-10'>SIGN UP</h1>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            className='bg-slate-100 p-3 rounded-lg'
        
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='bg-slate-100 p-3 rounded-lg'
            
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='bg-slate-100 p-3 rounded-lg'
            
          />
          <button className='bg-slate-900 text-blue-300 
          p-3 rounded-lg uppercase hover:opacity-90
          disabled:opacity-80'>Submit</button>

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

         <div className="flex gap-2">
          <p>Have an account?</p>
          <Link to='/Signin'>
          <span className="text-blue-500">SignIn</span>
          </Link>
         </div>
         </div>
           
      
    );
}

