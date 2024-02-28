"use client"
import { useState } from "react";
import Navbar from "../components/Nabvar";
import { BsArrowLeftShort } from "react-icons/bs";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
 const [open, setOpen] = useState(true);

  return (
    <main>
        <div className="flex">
          <div className={`bg-gray-500 h-screen p-5 pt-8 ${open? "w-72":"w-0"} duration-300 relative`}>
            <BsArrowLeftShort
             className={`bg-white text-gray-900 text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${!open && "rotate-180"}`} 
             onClick={() => setOpen(!open)}/>
          </div> 
          <div className="p-7 w-full">
            {children}
          </div> 
        </div>
    </main>  

  )
}
