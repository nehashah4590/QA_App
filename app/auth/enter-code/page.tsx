"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const EnterCodeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add logic to verify the entered code and email on the backend
      const response =  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/verify/`,{
        email:email,
        code:code,
      });

      console.log(response.data);
      setLoading(false);
      router.push('./user-verified')
    } catch (error) {
      console.error('Verification failed:', error);
      setLoading(false);
      setError(true);
    }

  }


  return (
    <div className="absolute flex flex-col items-center justify-center w-[100vw]  h-[100vh] ">
    <h1 className='font-bold text-3xl text-center mb-4'>User Created!
    <p className='font-light text-[18px] leading-4 mt-4'>Check your email for verification code</p>
     </h1>
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
              <label htmlFor="floating_email" className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
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
              className="pl-4 peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Verification Code
            </label>
          </div>
          {error && <p className="text-red-500 pb-3">Code verification failed</p>}
          <button
            type="submit"
            className="bg-blue-950 w-full hover:bg-blue-900 text-white font-medium tracking-wider py-2 rounded-md px-4 border border-transparent"
          >
            Submit Code
          </button>
        </form>
      </div>
      <div>
        {loading && <p>Loading....</p>}
      </div>
    </div>
  );
};

export default EnterCodeForm;
