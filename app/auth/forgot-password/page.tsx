"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add logic to verify the entered code and email on the backend
      const response =  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/reset/code/?email=${email}`
          
      );
      
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setSuccess(true);
      setLoading(true);
    }
  };

  return (
    <div className="absolute flex flex-col items-center justify-center min-h-screen">
       {success ? (
      <>
        <p className="text-green-500">Verification code sent to your Gmail account!</p>
        {/* Add the button here */}
        <Link href='./reset-password'>
        <button
          className="bg-blue-950  hover:bg-white hover:text-black text-white font-medium tracking-wider py-2 rounded-md px-4 border border-blue-950 mt-2"
          onClick={() => {
            // Handle the button click event if needed
            // For example, you might want to redirect the user to another page
            console.log('Button clicked');
          }}
        >
          Reset Password
        </button>
        </Link>
      </>
  
      
    
        ) : (
        
        <form onSubmit={handleSubmit} className="w-[400px] py-5 px-6">
          <h1 className="font-bold text-2xl mb-4 text-center">Reset Password
        <p className='font-light text-[14px] leading-4 mt-4'>Enter your email address and we will send you instructions to reset your password.</p>
      </h1>
          <div className="mb-6 relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              required
              className="border-blue-200 border-2 px-4 py-2 w-full rounded-md tracking-wider focus:outline-none focus:border-blue-500 peer z-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8
               scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-950 w-full hover:bg-white hover:text-black text-white font-medium tracking-wider py-2 rounded-md px-4 border border-blue-950"
            disabled={loading}
          >
            {loading ? 'Sending Email...' : 'continue'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
