import React from 'react';
import { ImBin } from "react-icons/im";

const ClearChat = () => {
  return (
    <div>
        <button className='flex rounded-lg text-start hover:bg-gray-700  text-xs px-4 py-3 w-[185px] mt-2'> 
           <ImBin className='mx-2 mt-[1px]'/> Clear Chats
        </button>
    </div>
  )
}

export default ClearChat

