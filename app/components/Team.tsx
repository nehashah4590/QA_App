"use client"
import React from 'react'
import Image from 'next/image';
import suraj from "../../public/images/suraj.jpg"
import neha from "../../public/images/Neha.jpg"
import rikesh from "../../public/images/Rikesh.jpg"
import puspa from "../../public/images/puspa.jpg"
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Team = () => {
  return (
    <div className='md:h-[100vh] w-full p-1 md:p-8'>
      <h1 className='text-3xl font-extrabold pt-4 pb-6  text-[#fcce1c] tracking-[1px] '>Our Team</h1>
      <div className=' flex flex-col md:flex-row justify-center gap-4 h-[80%]'>

      <motion.div
          whileHover={{ scale: [null, 1.05, 1.05] }}
          transition={{ duration: 0.3 }}
          className="bg-white border rounded-lg overflow-hidden shadow-md"
          >

          <Image className="w-full h-[348px] object-cover" src={neha} alt="Card Image" />
          <div className="p-4">
            
            <h2 className="text-xl font-bold">Neha Shah</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/profile.php?id=100029462823248" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-blue-600 cursor-pointer" />

              </Link>
              <Link href="https://www.linkedin.com/in/neha-shah-a528801b3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-800 cursor-pointer" />

              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.05, 1.05] }}
          transition={{ duration: 0.3 }}
          className="bg-white border rounded-lg overflow-hidden shadow-md"
          >

          <Image className="w-full h-[348px] object-cover" src={puspa} alt="Card Image" />
          <div className="p-4">
            
            <h2 className="text-xl font-bold mb-1">Puspa Limbu</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/puspah.limbu.3" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-blue-600 cursor-pointer"  />
              </Link>
              <Link href="https://www.linkedin.com/in/puspa-limbu-72b82a1b3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-800 cursor-pointer" />
              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.05, 1.05] }}
          transition={{ duration: 0.3 }}
          className="bg-white border rounded-lg overflow-hidden shadow-md"
          >

          <Image className="w-full h-[348px] object-cover" src={rikesh} alt="Card Image" />
          <div className="p-4">
            
            <h2 className="text-xl font-bold mb-1">Rikesh Kumar Shah</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/rikesh.shah.9216" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-blue-600 cursor-pointer"  />
              </Link>
              <Link href="https://www.linkedin.com/in/rikesh-shah-968ba51a3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-800 cursor-pointer" />
              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.05, 1.05] }}
          transition={{ duration: 0.3 }}
          className="bg-white border rounded-lg overflow-hidden shadow-md" 
         >

          <Image className="w-full h-[348px] object-cover" src={suraj} alt="Card Image" />
          <div className="p-4">
           
            <h2 className="text-xl font-bold mb-1">Suraj Sharma</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/profile.php?id=100039008803650" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-blue-600 cursor-pointer"  />
              </Link>
              <Link href="https://www.linkedin.com/in/suraj-sharma-a049a31a8/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-blue-800 cursor-pointer" />
              </Link>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Team

