"use client"
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight,   } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" h-full flex">
        {/* Navbar */}
     {isOpen && 
     <div className='bg-gray-100 w-[96%]'>

    </div>}

    {/* Toggle Button */}

     <div className='mt-[45vh]  text-2xl'>
        {isOpen &&
        <button onClick={toggleNavbar}><FaAngleLeft/></button> }
        {!isOpen &&
         <button onClick={toggleNavbar}> <FaAngleRight/> </button>}
     </div>
    </nav>
  );
};

export default Navbar;

