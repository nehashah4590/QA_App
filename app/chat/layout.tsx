"use client"
import { useState } from "react";
import Navbar from "../components/Nabvar";
import { IoMenu } from "react-icons/io5";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
 const [open, setOpen] = useState(true);
 const [showText, setShowText] = useState(false);

  return (
    <main>
        <div className="flex text-white">
          <div className={` h-screen pt-8 ${open? "w-72 bg-gray-950":"w-0 bg-gray-900"} duration-300 relative`}>
            <IoMenu
              className={`text-white text-4xl rounded-full absolute  top-5 p-2  hover:bg-gray-700 cursor-pointer ${open ? "":"bg-gray-700"}`} 
              onMouseEnter={()=>setShowText(!showText)} 
              onMouseLeave={()=>setShowText(!showText)}
              onClick={() => setOpen(!open)}/>
              {(showText && open) && 
              <p className="text-xs text-center bg-black text-gray-50 absolute left-4 top-[60px] w-[100px] rounded-md p-1">
                Collapse menu
              </p>}
              {(showText && !open) &&
              (<p 
              className="text-xs text-center bg-black text-gray-50 absolute left-4 top-[60px] w-[100px] rounded-md p-1">
                Expand menu
              </p>)}
              {open && <Navbar/>}
          </div> 
          <div className=" w-full">
            {children}
          </div> 
        </div>
    </main>  

  )
}
