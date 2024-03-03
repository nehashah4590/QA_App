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
import Typewriter from './Typewritting';


const About = () => {
    const [showText, setShowText] = useState(false);
    const [showTextktm, setShowTextktm] = useState(false);
    const [showTextann, setShowTextann] = useState(false);
    const [showTextchi, setShowTextchi] = useState(false);
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

            <div className='h-[75vh] w-[80vw]  p-4  m-4 flex  justify-center'>
                <div className='w-[40vw]  p-4'>
                    <h1 className='text-2xl text-[#fcce1c] font-extrabold text-center py-6 pt-14'>GPT Nepal</h1>
                    <p className='px-8 text-justify text-sm '>
                        We are excited to introduce GPT Nepal, a pioneering AI companion designed to serve as your personal guide during your journey through Nepal. Our mission is to provide comprehensive assistance to travelers by offering a wealth of knowledge about Nepal's attractions and amenities.

                        With the advent of GPT Nepal, tourists can now confidently embark on solo adventures and significantly reduce expenses typically associated with hiring traditional tour guides.
                    </p>
                    <div className='h-[200px] w-[90%] m-2 mt-0 p-8 py-0 text-[#da123c] font-bold text-justify'>
                    <motion.h1 
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 1 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                    className=' text-[#fcce1c] font-extrabold text-center py-4 pl-10'>Facts About Nepal</motion.h1>
                        <Typewriter />
                    </div>
                </div>
                <div className=' w-[40vw] p-4 py-12'>
                    <Image src={Lumbini} alt='lumbini' className='h-[380px] w-[500px] object-cover' />
                </div>

            </div>

            {/* About Nepal */}
            <div className="bg-cover bg-center h-[140vh] w-[100vw] relative"
                style={{ backgroundImage: "url('https://ntb.gov.np/storage/website/landscape2-44237cb6.jpeg')" }}>
                <div className="absolute w-full h-full bg-white opacity-70"></div>
                <div className='absolute right-4 top-[40vh] m-4'>
                    <Image src={map} alt='lumbini' className=' h-[400px] w-[45vw]  object-fill  ' />
                </div>

                <div className='absolute h-[100vh] w-[45vw] top-[10vh] m-10 lg:ml-16 z-10'>
                    <h1 className='text-2xl text-center font-extrabold py-4 m-4 text-blue-950'>Top Destinations in Nepal</h1>
                    <div className="grid grid-cols-3  h-[80vh] gap-4 ">
                        <div
                            className="bg-gray-200 p-4  rounded-md relative z-10 shadow-md"
                            onMouseEnter={() => setShowText(!showText)}
                            onMouseLeave={() => setShowText(!showText)}>
                            <Image src={Everest} alt='Everest' className='h-full  object-cover ' />
                            {showText && <motion.div
                                animate={{ x: -10 }}
                                className='absolute top-0 bg-black h-full opacity-70 text-center pt-12 px-2 font-extrabold z-10'>
                                <h1 className='text-[#fcce1c] '>Everest</h1>
                                <p className='text-sm text-white'>Climb Everest if you want to stand on top of the world, or
                                    do the extremely popular Everest Base Camp Trek to enter a strange world of ice and snow.</p>
                            </motion.div>}
                        </div>
                        <div className="bg-gray-200 p-4 col-span-2  rounded-md relative shadow-md"
                            onMouseEnter={() => setShowTextktm(!showTextktm)}
                            onMouseLeave={() => setShowTextktm(!showTextktm)}>
                            <Image src={kathmandu} alt='kathmandu' className='h-full  object-cover ' />
                            {showTextktm && <motion.div
                                animate={{ x: -10 }}
                                className='absolute top-0 bg-black h-full opacity-70 text-center pt-12 px-2 font-extrabold z-10'>
                                <h1 className='text-[#fcce1c] pb-2'>Kathmandu</h1>
                                <p className='text-sm text-white'>Kathmandu, the largest city of Nepal, is the political as well as cultural capital of the country.
                                    Kathmandu is a city where ancient traditions rub shoulders with the latest technological advances.</p>
                            </motion.div>}
                        </div>
                        <div className="bg-gray-200 p-4 col-span-2  rounded-md relative shadow-md"
                            onMouseEnter={() => setShowTextchi(!showTextchi)}
                            onMouseLeave={() => setShowTextchi(!showTextchi)}>
                            <Image src={Chitwan} alt='Chitwan' className='  object-cover ' />
                            {showTextchi && <motion.div
                                animate={{ x: -10 }}
                                className='absolute top-0 bg-black h-full opacity-70 text-center pt-12 px-2 font-extrabold z-10'>
                                <h1 className='text-[#fcce1c] pb-2'>Chitwan</h1>
                                <p className='text-sm text-white'>
                                    Nestled in the foothills of the Himalayas, Chitwan National Park is a treasure trove of biodiversity and a jewel in Nepal's crown. Established in 1973, it holds the
                                    distinction of being the country's first national park and was inscribed as a UNESCO World Heritage Site in 1984.</p>
                            </motion.div>}
                        </div>

                        <div
                            className="bg-gray-200 p-4  rounded-md relative z-10 shadow-md"
                            onMouseEnter={() => setShowTextann(!showTextann)}
                            onMouseLeave={() => setShowTextann(!showTextann)}>
                            <Image src={Annapurna} alt='Annapurna' className=' h-full object-cover  ' />
                            {showTextann && <motion.div
                                animate={{ x: -10 }}
                                className='absolute top-0 bg-black h-full opacity-70 text-center pt-8 px-2 font-extrabold z-10'>
                                <h1 className='text-[#fcce1c]'>Annapurna</h1>
                                <p className='text-sm text-white'>
                                Nestled amidst the majestic peaks of the Annapurna range in Nepal, Annapurna Base Camp (ABC) is a trek that beckons adventure seekers 
                                from around the globe. Often referred to as the "gateway to the Himalayas," </p>
                            </motion.div>}
                        </div>

                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default About
