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
        <div className="flex">
          <div className={`bg-gray-500 h-screen p-5 pt-8 ${open? "w-72":"w-0 bg-slate-400"} duration-300 relative`}>
            <IoMenu
              className={`text-white text-4xl rounded-full absolute  top-5 p-2  hover:bg-gray-700 cursor-pointer ${open ? "":"bg-gray-400"}`} 
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
          </div> 
          <div className="p-7 w-full bg-slate-400">
            {children}
          </div> 
        </div>
    </main>  

  )
}
