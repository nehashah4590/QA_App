"use client"
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";
import { CiDark } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

// import NewChat from './NewChat';
import SigninButton from '../components/SigninButton';
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const [open, setOpen] = useState(true);
  const [showText, setShowText] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [clearHistory, setClearHistory] = useState(false);

  const router = useRouter();
  const currentPage = usePathname();
  const { data: session } = useSession();
  const token = session?.user?.access_token;


  useEffect(() => {
    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/history/`,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
    .then((response: any) => {
      console.log(JSON.stringify(response.data));
      setHistoryData(response.data);
      
    })
    .catch((error: any ) => {
      console.log(error);
    });

  },[token, clearHistory]);

  const handleClearChat =()=>{

    const axios = require('axios');
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_HOST}/clear/`,
        headers: { 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${token}`
        }
      };

      axios.request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        setClearHistory(true);
      })
      .catch((error: any) => {
        console.log(error);
      });

        }

  return (
    <main className={`${lightMode ? ' text-black': "text-white"}`}>
      <div className="flex">
        <div className={` h-screen ${open ? "w-72 bg-gray-950" : "w-0 bg-gray-900"}  duration-300 relative`}>
          <IoMenu
            className={`text-white  text-4xl rounded-full absolute  top-5 p-2 left-2  hover:bg-gray-700 cursor-pointer ${open ? "" : "bg-gray-800"}`}
            onMouseEnter={() => setShowText(!showText)}
            onMouseLeave={() => setShowText(!showText)}
            onClick={() => setOpen(!open)} />
          {(showText && open) &&
            <p className="text-xs text-center bg-black text-gray-50 absolute left-4 top-[60px] w-[100px] rounded-md p-1">
              Collapse menu
            </p>}
          {(showText && !open) &&
            (<p
              className="text-xs text-center bg-black text-gray-50 absolute left-4 top-[60px] w-[100px] rounded-md p-1">
              Expand menu
            </p>)}
          {open &&
            (<nav className={` h-screen flex flex-col w-full p-1 pl-2 ${lightMode ? ' text-black bg-gray-200': "text-white bg-gray-950"}`}>

                {/* New Chat */}
              <div className='flex  w-full h-[50px] py-2 mt-[72px] mb-2  '>
                <button
                  onClick={()=>{router.push(`${currentPage}?value=${0}`)}}
                  className='flex items-center justify-center rounded-lg text-start hover:bg-gray-700  text-sm px-4 pl-2 py-6 border border-white w-[85%] ml-3'>
                  <FaPlus className='mx-2' /> New Chat
                </button>
              </div>

              {/* History */}
              <div className='p-2 w-full h-[50vh] overflow-y-auto mb-4'>
              {historyData?.map((item) => (
                <button 
                onClick={()=>{router.push(`${currentPage}?value=${(item?.chat_id)}`)}}
                  key={item?.chat_id} className="flex hover:bg-gray-70 border text-center items-center justify-center border-white py-2 px-4 m-1 w-[96%] h-[50px] rounded overflow-y-hidden">
                  {item?.question}
                </button>
              ))}
              </div>
            
            {/* clear chat */}
            <hr></hr>
              <div className="mt-2">
              <button
              onClick={handleClearChat}
               className='flex rounded-lg text-start hover:bg-gray-700  text-sm px-4 pl-2 py-3 w-[80%] ml-2 mt-2'> 
                <ImBin className='mx-2 mt-[1px]'/> Clear Chats
              </button>
              </div>

                {/* toggle mode */}
              <div>
                {!lightMode &&
                  (<button
                    className='flex rounded-lg text-start hover:bg-gray-700  text-sm px-4 pl-2 py-3 w-[80%] ml-2'
                    onClick={() => { setLightMode(!lightMode) }}>
                    <MdOutlineLightMode className='mx-2 mt-[2px]' /> Light Mode
                  </button>)}
                {lightMode &&
                  (<button className='flex rounded-lg text-start hover:bg-gray-700  text-sm px-4 pl-2 py-3 w-[80%] ml-2'
                    onClick={() => { setLightMode(!lightMode) }}>
                    <CiDark className='mx-2 mt-[2px]' /> Dark Mode
                  </button>)}
              </div>

              <div className='absolute bottom-4  w-[190px] h-[100px] p-1'>
                <SigninButton />
              </div>
            </nav>)}
        </div>
        <div className={` w-full ${lightMode ? ' text-black bg-white': "text-gray-200 bg-gray-900"}`}>  
          {children } 
        </div>
      </div>
    </main>

  )
}
