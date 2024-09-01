// import React from 'react'
// import {GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider} from 'firebase/auth';
// import { App } from '../firebase';

// function OAuth() {
//     //for google authentication
//     const handlleGoogleClick = async()=>{
//         try {
//             const googleProvider = new GoogleAuthProvider();
//             const auth = getAuth(App);
//             const result = await signInWithPopup(auth, googleProvider);
//             console.log(result);
            
//         } catch (error) {
//             console.log('google OAuth Error', error);
            
//         }
//     }
//     //for github authentication
//     const handleGithubClick = async()=>{
//         try {
//             const githubProvider = new GithubAuthProvider();
//             const auth2 = getAuth(App);
//             const result2 = await signInWithPopup(auth2, githubProvider);
//             console.log(result2);
            
//         } catch (error) {
//             console.log('Github Authentication error', error);
            
//         }
//     }

//   return (
//     <div className='flex gap-2 mt-5'>
//         <button onClick={handleGithubClick} type='button' className='bg-slate-900 text-blue-300 
//             p-3 rounded-full w-14 h-14 flex items-center justify-center
//             hover:opacity-95 '>
//           <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" 
//          alt="GitHub Logo" className="w-10 h-10" />
//          </button>

//       <button onClick={handlleGoogleClick} type='button' className='bg-red-500 text-white 
//             p-3 rounded-full w-14 h-14 flex items-center justify-center
//             hover:opacity-95 disabled:opacity-80'>
//         <img src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" 
//          alt="Google Logo" className="w-10 h-10" />
//          </button>
//     </div>
//   )
// }

// export default OAuth

import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { App } from '../firebase';

function OAuth() {
  // For Google authentication
  const handleGoogleClick = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(App);
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
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
          alt="Google Logo" 
          className="w-10 h-10" 
        />
      </button>
    </div>
  );
}

export default OAuth;
