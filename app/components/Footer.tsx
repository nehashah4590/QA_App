"use client"
import React from 'react';
import Image from 'next/image';
import mountaion from "../../public/images/mountain-yellow.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import logo from "../../public/images/logo.png";

const Footer: React.FC = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked")

   emailjs
        .sendForm('service_wmd5z3d', 'template_dtrnxhj', form.current as any, {
          publicKey: 'NILQEGhMXNzKVtWNN',
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
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white relative p-4 px-14 m-2 mt-8 h-[450px] ">
            <p className='text-2xl font-bold p-4 text-center text-[#fcce1c]'>Contact Us</p>
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
            <div className="text-center ">
              <button type="submit" value="send" className="z-10 absolute bottom-10 left-16 bg-[#da123c] text-white px-6 py-2 rounded-md  hover:bg-white hover:text-[#da123c] border border-[#da123c]">Submit</button>
            </div>
          </form>
        </div>
        <div className=' w-[60vw] mt-4 gap-24 flex'>
          <div className=' h-[300px] w-[200px] m-4 p-4'>
              <Link href="/" prefetch={false}>
                <Image height={150} width={150} src={logo} loading="eager" alt="logo"></Image>
              </Link>
            <h2 className='font-bold tracking-[1px] text-[#da123c] mt-4'>Email</h2>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-2'>gptnepal@gmail.com</p>
          </div>
          <div className=' h-[300px] w-[200px] m-4 p-4'>
            <h2 className='font-bold tracking-[1px] text-[#da123c]'>Official Links</h2>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'><Link className='hover:underline' href="https://ntb.gov.np/" target="_blank">Nepal Tourism Board</Link></p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'><Link className='hover:underline' href="https://www.greathimalayatrails.com/" target="_blank">Great Himalayan Trails</Link></p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'><Link className='hover:underline' href="https://www.immigration.gov.np/" target="_blank">Department of Immigration</Link></p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'><Link className='hover:underline' href="https://nepalairlines.com.np/" target="_blank">Nepal Airlines</Link></p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'><Link className='hover:underline' href="https://photo.ntb.gov.np/" target="_blank">Photo Nepal</Link></p>
          </div>
          <div className=' h-[300px] w-[200px] m-4 p-4'>
            <h2 className='font-bold tracking-[1px] text-[#da123c]'>Developers</h2>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'>Neha Shah</p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'>Suraj Sharma</p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'>Rikesh Kumar Shah</p>
            <p className='text-sm text-gray-600 hover:text-gray-800 font-semibold pb-1'>Puspa Limbu</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0'>
        <Image src={mountaion} alt='mountain' className='h-full' />
      </div>

    </div>
  )
}

export default Footer
