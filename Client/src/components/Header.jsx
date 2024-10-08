import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className='bg-slate-900 '>
        <div className='flex justify-between items-center 
        max-w-7xl mx-auto p-3 text-blue-300'>

            <Link to='/'>
            <h1 className='font-bold'>Mern-Auth</h1>            
            </Link>
            
            <ul className='flex gap-8 '>
            
            <Link to='/'>
            <li>Home</li>
            </Link>

            <Link to='/About'>
            <li>About</li>
            </Link>

            <Link to='/Profile'>
            <li>Profile</li>
            </Link>
            
            <Link to='/Signin'>
            {currentUser ? (
              <img src={currentUser.photoURL} alt="" />
            ) : (

            <li>Sign-In</li>

            ) }
            </Link>

            <Link  to='./Signup'>
            <li>Sign-Up</li>
            </Link>
          </ul>
        </div>
      
    </div>
  );
};

export default Header
