"use client"
import React from 'react'
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFollowPointer } from "../use-follow-pointer";
import Image from 'next/image';
import Lumbini from "../../public/images/lumbini.jpg"
import kathmandu from "../../public/images/kathmandu_oy_lt2-1624431334.jpeg"
import map from "../../public/images/nepal-55265453.png"
import Chitwan from "../../public/images/chitwan.jpg"
import Annapurna from "../../public/images/annapurna.jpeg"
import Everest from "../../public/images/Everest.jpg"


const About = () => {
    const ref = useRef(null);
    const [selectedId, setSelectedId] = useState(null)
    const { x, y } = useFollowPointer(ref);
  return (
    <div className='flex flex-col justify-center  items-center'>
         {/* <motion.div
        ref={ref}
        className="bg-pink-800 h-[20px] w-[20px] rounded-full absolute"
        animate={{ x, y }}
        /> */}
    {/* About GPT Nepal */}
 
    <div className='h-[80vh] w-[80vw]  p-4  m-4 flex  justify-center'>
       <div className='w-[40vw]  p-4'>
       <h1 className='text-2xl font-bold text-center py-6 pt-14'>GPT Nepal</h1>
        <p className='px-8 text-justify text-sm'>
            We are excited to introduce GPT Nepal, a pioneering AI companion designed to serve as your personal guide during your journey through Nepal. Our mission is to provide comprehensive assistance to travelers by offering a wealth of knowledge about Nepal's attractions and amenities.

            With the advent of GPT Nepal, tourists can now confidently embark on solo adventures and significantly reduce expenses typically associated with hiring traditional tour guides.
        </p>
        <div className='bg-gray-100 h-[200px] w-full m-2 p-4'>
            Facts
        </div>
       </div>
       <div className=' w-[40vw] p-4 py-12'>
        <Image src={Lumbini} alt='lumbini' className='h-[400px] w-[500px] '/>
       </div>
   
    </div>

            {/* About Nepal */}
    <div className="bg-cover bg-center h-[150vh] w-[100vw] relative -z-10" style={{backgroundImage: "url('https://ntb.gov.np/storage/website/landscape2-44237cb6.jpeg')"}}>
        <div className="absolute w-full h-full bg-white opacity-70"></div>
        <div className='absolute right-4 top-[50vh] m-4'>
            <Image src={map} alt='lumbini' className=' h-[400px] w-[45vw]  object-fill  '/>
        </div>
      
         <div className='absolute border border-green-400 h-[120vh] w-[45vw] top-[20vh] m-10 lg:ml-16'>
            <h1 className='text-2xl text-center font-bold py-4 m-4'>Top Destinations in Nepal</h1>
            <div className="grid grid-cols-3  h-[80vh] gap-4 ">
                <div className="bg-gray-200 p-4  rounded-md">
                    <Image src={Everest} alt='lumbini' className='h-full  object-cover  '/>
                </div>
                <div className="bg-gray-200 p-4 col-span-2  rounded-md">
                    <Image src={kathmandu} alt='lumbini' className='  object-cover  '/>
                </div>
                <div className="bg-gray-200 p-4 col-span-2 rounded-md">
                    <Image src={Chitwan} alt='lumbini' className='  object-cover '/>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                    <Image src={Annapurna} alt='lumbini' className=' h-full object-cover  '/>
                </div>

            </div>

         </div>
    </div>
     
    </div>
  )
}

export default About
