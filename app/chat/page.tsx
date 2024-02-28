"use client"
import { useState, FormEvent  } from 'react';
import { IoSendSharp } from "react-icons/io5";
import {motion} from "framer-motion";

const ChatPage = () => {
  const [question, setQuestion] = useState<string>('');
  const [showIntro, setShowIntro] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setShowIntro(false);
    e.preventDefault();
    // Here you can handle submitting the question, for example sending it to an API
    console.log('Submitted question:', question);
    // Reset the input field after submitting
    setQuestion('');
  };
  return (
    <div className=" p-4 bg-slate-400 h-full">
      <div className='bg-slate-400 h-full m-8 p-4 text-center text-gray-200 flex justify-center'>
        {showIntro && (<div>
          <h1 className='text-3xl'>Hello, Neha</h1>
          <h1 className='text-3xl'>How can you help you today?</h1>
        </div>)}
        
          <form onSubmit={handleSubmit} className="absolute bottom-10 mt-4 ">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Message NepalGPT..."
              className="border  w-[600px] h-[50px] flex justify-center border-gray-400 bg-black px-4 py-2 rounded-md focus:outline-none focus:border-white"
              
            />  
            {question &&
            <motion.div animate={{ x: -10 }} className=' absolute top-2 right-1 '>
              <button type="submit" className="rounded-md p-2 bg-black text-white">
            <IoSendSharp/>
          </button>
            </motion.div>}
           
          </form>
       
      </div>
    </div>
  );
};

export default ChatPage;
