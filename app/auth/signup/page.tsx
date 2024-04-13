"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import axios from 'axios';

const  SignuPage:React.FC  = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const session = useSession();
  console.log(session);
  
  useEffect(()=>{
   
    if(session.status==="authenticated"){
      setLoading(false);
      router.push('../chat')
    }
    
  },[session.status])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send registration data to the backend API
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/register/`, {
        email:email,
        name:name,
        password:password,
      });

      console.log(response.data);
      setLoading(false);
      router.push('./enter-code')
    } catch (error: any) {
      console.error('Registration failed:', error);
      setLoading(false);
      setError(error.response.data.detail);
    }

  }

  return (
    <>
        <div className="absolute flex flex-col items-center justify-center min-h-screen">
        <div className='absolute top-8'>
        <Image height={100} width={100} src={logo} loading="eager" alt="logo"></Image>
        </div>
          <h1 className='font-bold text-3xl mb-4'>Create your account</h1>
          <div className="w-[400px] py-5 px-6 ">
            <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  placeholder=''
                  required
                  className="border-blue-200 border-2  px-4 py-2 w-full rounded-md tracking-wider focus:outline-none focus:border-blue-500 peer z-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floating_email" className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400
                 duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0]  
                  peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                   peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
              </div>
              <div className="mb-6 relative">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  placeholder=''
                  required
                  className="border-blue-200 border-2  px-4 py-2 w-full rounded-md tracking-wider focus:outline-none focus:border-blue-500 peer z-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                 htmlFor="floating_name" 
                 className="pl-4  peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8
                  scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                 >Full Name
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
                   scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                <div className='absolute right-4 top-[11px]'>
                  {!showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEyeInvisible color='gray' /></button>}
                  {showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEye  /></button>}
                </div>
              </div>
              {error && <p className='text-red-500 pb-3 '> {error} </p>}
              <button
                type="submit"
                className="bg-blue-950 w-full hover:bg-blue-900  text-white font-medium tracking-wider py-2 rounded-md px-4 border border-transparent"
              >
                Register
              </button>
            </form>
          </div>
          <div>
            {loading && <p>Loading....</p>}
          </div>
          <div className=' p-2'>
            <p className='text-center pb-4'>Already Have an account? <Link href='./signin' className='text-blue-500'>Log in</Link></p>
          </div>
        </div>
    </>
  );
};

export default SignuPage;