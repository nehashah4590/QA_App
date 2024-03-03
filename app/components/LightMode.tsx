"use client"
import React, {useState} from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const LightMode = () => {
    const [lightMode, setLightMode] = useState(true);
  return (
    <div>
       {lightMode &&
       ( <button
        className='flex rounded-lg text-start hover:bg-gray-700  text-xs px-4 py-3 w-[185px]'
        onClick={()=>{setLightMode(!lightMode)}}> 
       <MdOutlineLightMode className='mx-2 mt-[2px]'/> Light Mode
        </button>)}
       {!lightMode &&
       ( <button className='flex rounded-lg text-start hover:bg-gray-700  text-xs px-4 py-3 w-[185px]'
       onClick={()=>{setLightMode(!lightMode)}}> 
       <CiDark className='mx-2 mt-[2px]'/> Dark Mode
        </button>)}
    </div>
  )
}

export default LightMode
