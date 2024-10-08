import React, { useState } from "react";
import AuthForm from "./AuthForm";
import {Link, useNavigate} from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";


export default function Signin() {
  const [formData, SetFormData] = useState({});
  const {loading, error} = useSelector((state)=>state.user);
  console.log(loading, error);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      
      console.log(res.ok);
      
      if (res.ok === true) {
        
        dispatch(signInSuccess());
        navigate('/')
        
      }else{
        // for navigating to the dashboard
        //  navigate('/');
          dispatch(signInFailure(data.message));
                

      }
      
    } catch (error) {
      dispatch(signInFailure());
      
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center text-blue-400 font-semibold my-10">
        SIGN IN
      </h1>

      <AuthForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleFormSubmit}
        loading={loading}
        buttonText="Sign In"
        
      />
      
      <OAuth/>

{/*       
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
         </div> */}
    

<div className="flex gap-2 mt-5">
<p>Dont have an account?</p>
<Link to='/Signup'>
<span className="text-blue-500">SignUp</span>
<p className="text-red-600 mt-5">
  {error ? error || 'Something went wrong!' : "" }
</p>
</Link>
</div>
</div>
  );
}



