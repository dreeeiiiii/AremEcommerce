import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function SignInPage () {
  return (
   <div className='flex flex-col items-center justify-center w-full h-screen'>
    <div className='p-4 border-2 border-stone-300 rounded-lg shadow-md w-96'>
    <h1 className={`text-3xl font-bold ${poppins} mb-4`}>Sign In</h1>
        <label>Your email</label><br />
        <input type="email"
               name="email" 
               id="email" 
               placeholder='Email'
               className='p-2 w-full border-1 border-stone-300 rounded-xl mb-2'/>
              <br />
        <label>Your password</label><br />
        <input type="password"
               name="password" 
               id="password" 
               placeholder='*********'
               className='p-2 w-full border-1 border-stone-300 rounded-xl mb-2'/>
              <br />
        <input type="checkbox"
               className='mr-1' />
        <label className=''>Remember me </label><br />

        <button className='bg-sky-800 text-white px-5 py-2 rounded-xl mt-3 hover:bg-sky-600 mb-2'>Sign in</button>
        <br />
        <a href="#"
           className='text-sm mt'>Forgot your password</a>

    </div>
      
   </div>

  )
}

