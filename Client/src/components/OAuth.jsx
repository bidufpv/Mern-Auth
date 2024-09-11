import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { App } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

function OAuth() {
  // For Google authentication
  const dispatch = useDispatch();
  const handleGoogleClick = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(App);
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);

        const res = fetch('/api/auth/google',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:result.user.displayName,
            email:result.user.email,
            images:result.user.photoURL
          })
          
        })
        const data = res.json();
        dispatch(signInSuccess(data))
      })
      .catch((error) => {
        console.log('Google OAuth Error', error);
      });
  };

  

  // For GitHub authentication
  const handleGithubClick = () => {
    const githubProvider = new GithubAuthProvider();
    const auth2 = getAuth(App);
    
    signInWithPopup(auth2, githubProvider)
      .then((result2) => {
        console.log(result2);
      })
      .catch((error) => {
        console.log('GitHub Authentication Error', error);
      });
  };


  

  return (
    <div className='flex gap-2 mt-5'>
      <button 
        onClick={handleGithubClick} 
        type='button' 
        className='bg-slate-900 text-blue-300 p-3 rounded-full w-14 h-14 flex items-center justify-center hover:opacity-95'
      >
        <img 
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" 
          alt="GitHub Logo" 
          className="w-10 h-10" 
        />
      </button>

      <button 
        onClick={handleGoogleClick} 
        type='button' 
        className='bg-red-500 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center hover:opacity-95 disabled:opacity-80'
      >
        <img 
          src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" 
          alt="" 
          className="w-10 h-10" 
        />
      </button>
    </div>
  );
}

export default OAuth;
