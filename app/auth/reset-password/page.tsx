"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
        // Add logic to verify the entered code and email on the backend
        const response =  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/reset/password/`,{
            email:email,
            code:code,
            password:password,
        });
  
        console.log(response.data);
        
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center w-[100vw]  h-[100vh]">
     {success ? (
        <>
           <IoCheckmarkDoneCircleOutline size={150} color="#68D391"/>

          <p className="text-green-500 text-[30px] text-center">Password has been reset sucessfully.</p>
          <Link href= '../auth'>
          <button
            className="bg-blue-950 hover:bg-blue-900  text-white font-medium tracking-wider py-2 rounded-md px-4 border border-transparent mt-4"
          >
            Go to GptNepal page
          </button>
          </Link>
        </>
      ) : (
      <>
      
        <form onSubmit={handleSubmit} className="w-[400px] py-5 px-6">
        <h1 className="font-bold text-2xl mb-4 text-center">Reset your password
      <p className='font-light text-[14px] leading-3 mt-4'>Enter a new password below to change your <br/>password.</p>
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
          <div className="mb-6 relative">
            <input
              type="text"
              name="verification_code"
              id="verification_code"
              placeholder=""
              required
              className="border-blue-200 border-2 px-4 py-2 w-full rounded-md tracking-wider focus:outline-none focus:border-blue-500 peer z-0"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <label
              htmlFor="verification_code"
              className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8
               scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Verification Code
            </label>
          </div>
          <div className="mb-6 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="floating_password"
                  name="floating_password"
                  placeholder=''
                  required
                  minLength={6}
                  className="border-blue-200 border-2  px-4 py-2 w-full tracking-wider  focus:outline-none focus:border-blue-500 z-0 peer rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <label htmlFor="floating_password" className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8
                   scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                <div className='absolute right-4 top-[11px]'>
                  {!showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEyeInvisible /></button>}
                  {showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEye /></button>}
                </div>
              </div>
          <button
            type="submit"
            className="bg-blue-950 w-full hover:bg-blue-900  text-white font-medium tracking-wider py-2 rounded-md px-4 border border-transparent"
            disabled={loading}
          >
            {loading ? 'Sending Email...' : 'Reset'}
          </button>
        </form>
        </>
        )}
    </div>
  );
};

export default ForgotPasswordPage;
