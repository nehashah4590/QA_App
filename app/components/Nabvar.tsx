"use client"
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCaretLeft  } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" h-full flex w-[20vw]">
        {/* Navbar */}
     {isOpen && 
     <div className='bg-gray-100 w-[96%]'>

    </div>}

    {/* Toggle Button */}

     <div className='mt-[45vh]  text-2xl'>
        {isOpen &&
        <button 
        className="relative duration-300" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onClick={toggleNavbar}>
            {showText && 
            <div className='absolute left-6 '>
                <FaCaretLeft />
                <p
                 className='bg-gray-900 text-white text-xs rounded-md absolute py-3 px-2 -top-2 left-3 w-[100px] h-[40px] text-center'>
                    close sidebar
                </p>

            </div>}
            <FaAngleLeft/>
        </button> }
        {!isOpen &&
         <button
            className="relative" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={toggleNavbar}>
            {showText && 
            <div className='absolute left-6 '>
                <FaCaretLeft />
                <p
                 className='bg-gray-900 text-white text-xs rounded-md absolute py-3 px-2 -top-2 left-3 w-[100px] h-[40px] text-center'>
                    open sidebar
                </p>

            </div>}
            <FaAngleRight/> </button>}
     </div>
    </nav>
  );
};

export default Navbar;

