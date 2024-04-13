"use client"
import React, { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import { RiErrorWarningFill } from "react-icons/ri";


const SignInPage:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(()=>{
    
    if(session.status==="authenticated"){
      setLoading(false);
      router.push('../chat')
    }
    
  },[session.status])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
      callbackUrl: `${window.location.origin}/chat`,
    })

    if (result?.ok === false) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      setLoading(false);
      router.push('./chat');
    }

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className='absolute top-8'>
        <Image height={100} width={100} src={logo} loading="eager" alt="logo"></Image>
        </div>
      <h1 className='font-bold text-3xl mb-4'>Welcome back</h1>
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
                <label htmlFor="floating_email" className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8
                 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
              </div>
              <div className={`mb-6 relative ${error ? 'border-red-500' : ''}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="floating_password"
                name="floating_password"
                placeholder=""
                required
                minLength={6}
                className={`border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500 z-0 peer rounded-md ${
                  error ? 'border-red-500' : ''
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="floating_password"
                className={`pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ${
                  error ? 'text-red-500' : ''
                }`}
              >
                Password
              </label>
              {error && <p className="text-red-500 pt-1 text-[12px] flex">
              <RiErrorWarningFill size={16} /> Wrong username or password
                </p>}
              <div className="absolute right-4 top-[11px]">
                {!showPassword && (
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    <AiFillEyeInvisible color='gray'/>
                  </button>
                )}
                {showPassword && (
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    <AiFillEye color='gray'/>
                  </button>
                )}
              </div>
            </div>
              <div className="mb-6">
              <Link href="./forgot-password">
                <div className="text-blue-500">Forgot Password?</div>
              </Link>
            </div>
            
            <button
              type="submit"
              className="bg-blue-950 w-full rounded-md hover:bg-blue-900  text-white font-medium tracking-wider py-2  px-4 border border-transparent"
            >
              Login
            </button>
          </form>
        </div>
        <div>
          {loading && <p>Loading....</p>}
        </div>
        <div className='p-2'>
            <p className='text-center pb-4'>Don't have an account? <Link href='./signup' className='text-blue-500'>Sign up</Link></p>
          </div>
      </div>
    
    </>
  );
};

export default SignInPage;