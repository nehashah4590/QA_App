"use client"
import React from 'react';
import Image from 'next/image';
import mountaion from "../../public/images/mountain-yellow.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Footer: React.FC = () => { 

const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm('service_aof4b3u', 'template_82hn20i', form.current as any, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
}
  return (
    <div className='bg-gray-100 h-[70vh] w-full relative'>
        <div className='flex '>
            <div className='w-[40vw] '>
                <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-4 px-14 m-2 mt-8  ">
                 <p className='text-2xl font-bold p-4 text-center'>Contact Us</p>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm mb-1">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full text-sm px-4 py-1 border border-gray-300  focus:outline-none focus:border-indigo-500"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm  mb-1">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full text-sm px-4 py-1 border border-gray-300  focus:outline-none focus:border-indigo-500"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm  mb-1">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full text-sm px-4 py-1 border border-gray-300 focus:outline-none focus:border-indigo-500"
                        rows={4}
                        required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" value="send" className="bg-indigo-500 text-white px-6 py-3 rounded-md focus:outline-none hover:bg-indigo-600">Submit</button>
                    </div>
                    </form>
            </div>
            <div className=' w-[60vw] mt-4 px-10 grid md:grid-cols-[1fr,1fr,1fr]'>
                <div className=' h-[300px] w-[200px] mt-6 p-2'>
                    <h2 className='font-bold text-yellow-500'>Email</h2>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'>gptnepal@gmail.com</p>
                </div>
                <div className=' h-[300px] w-[200px] mt-6 p-2'>
                    <h2 className='font-bold text-yellow-500'>Official Links</h2>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'><Link href="https://ntb.gov.np/" target="_blank">Nepal Tourism Board</Link></p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'><Link href="https://www.greathimalayatrails.com/" target="_blank">Great Himalayan Trails</Link></p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'><Link href="https://www.immigration.gov.np/" target="_blank">Department of Immigration</Link></p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'><Link href="https://nepalairlines.com.np/" target="_blank">Nepal Airlines</Link></p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'><Link href="https://photo.ntb.gov.np/" target="_blank">Photo Nepal</Link></p>
                </div>
                <div className=' h-[300px] w-[200px] mt-6 p-2'>
                    <h2 className='font-bold text-yellow-500'>Developers</h2>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'>Neha Shah</p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'>Suraj Sharma</p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'>Rikesh Kumar Shah</p>
                    <p className='text-sm text-gray-600 hover:text-gray-800 font-bold'>Puspa Limbu</p>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0'>
        <Image src={mountaion} alt='mountain' className='h-full'/>
        </div>
      
    </div>
  )
}

export default Footer
