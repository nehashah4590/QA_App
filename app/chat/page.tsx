"use client"
import { useState, FormEvent, useEffect } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useSession } from 'next-auth/react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import Image from 'next/image';
import icon from "../icon.png";

const ChatPage = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [firstLetter , setFirstLetter] = useState<string>('');
  const [questionSent, setQuestionSent] =  useState<string>('');
  const [data, setData] =  useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  

  const { data: session } = useSession();
  const token: string | undefined = session?.user?.access_token ;
  const chat_id: string | undefined = session?.user?.chat_id;
  const username = session?.user?.name;
  // console.log("id",chat_id)

  useEffect(() => {

    const fullName = username;
    if (fullName) {
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0];
      setName(firstName);
      setFirstLetter(fullName.charAt(0)); 
      console.log(firstLetter)
    }
  }, [username,firstLetter]);

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
      setData(response.data);
      
    })
    .catch((error: any ) => {
      console.log(error);
    });

  },[token]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setQuestionSent(question);
    setQuestion('');
    setIsSubmitting(true);
    setShowHistory(true);
    e.preventDefault();

    const axios = require('axios');
    let data = JSON.stringify({
      question: question,
      chat_id: chat_id
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/chat/`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        console.log('Submitted question:', questionSent);
        setAnswer(response.data.answer)
        setIsSubmitting(false);
        
      })
      .catch((error: any) => {
        console.log(error);
        setIsSubmitting(false);
      });

  };

  if(showHistory === false){
    return(
      <div className=" h-full text-white">
      <div className='bg-gray-900 h-full  text-center text-gray-200 flex justify-center'>  
        <div className='w-[80vw] h-[90vh] px-[10vw] py-[10vh] mt-10  overflow-y-auto box'> 
          <h1 className='text-5xl py-1'>Hello, {name}</h1>
          <h1 className='text-3xl'>How can you help you today?</h1>
        </div>
        <form onSubmit={handleSubmit} className="absolute bottom-14 mt-4 ">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Message NepalGPT..."
            className="border  w-[50vw] h-[50px] flex justify-center border-gray-400 bg-gray-900 px-4 py-2 rounded-xl focus:outline-none focus:border-white"
          />
          {(question || questionSent )&&
            <motion.div animate={{ x: -10 }} className=' absolute top-2 right-1 '>
              <button type="submit"
               className={`rounded-lg p-2 bg-gray-900 text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
               disabled={isSubmitting}>
                <IoSendSharp />
              </button>
            </motion.div>}
        </form>
        <div className=' absolute bottom-8 text-xs text-center opacity-50'>GPTNepal can make mistakes. Consider checking important information.</div>
      </div>
    </div>
    )
  }else{
  return (
    <div className=" h-full">
      <div className='bg-gray-900 h-full  text-center text-gray-200 flex justify-center'>    
        <div className='w-[80vw] h-[90vh] px-[10vw] py-[10vh]  overflow-y-auto box'>
        <div className='flex flex-col text-left  px-12'>
         {/* {data.map((item) => (
          <>
          <div className='flex items-center'>
          <p className='pt-[4px] mx-4 rounded-lg bg-green-500 h-[30px] w-[30px] text-center font-semibold '>{firstLetter}</p>
          <p className='text-sm py-4'>{item.question}</p>
         </div>
          <div className='flex items-start mt-4'>
          <Image className='pt-[4px] mx-4 mt-1 rounded-lg bg-white p-1 h-[30px] w-[30px] text-center font-semibold ' src={icon} alt='icon'/>
          <p className='text-sm'>{item.answer}</p>
          </div>
          </>
        ))} */}

         {questionSent && (<>
         <div className='flex items-center'>
          <p className='pt-[4px] mx-4 rounded-lg bg-green-500 h-[30px] w-[30px] text-center font-semibold '>{firstLetter}</p>
          <p className='text-sm py-4'>{questionSent}</p>
         </div>
         </>
         )}
  
        <div className='flex items-start mt-4'>
          <Image className='pt-[4px] mx-4 mt-1 rounded-lg bg-white p-1 h-[30px] w-[30px] text-center font-semibold ' src={icon} alt='icon'/>    
          <SkeletonTheme baseColor="#202020" highlightColor="#444"> 
            {isSubmitting ? <p className='w-full'><Skeleton count={10}/></p>:<p className='text-sm'>{answer}</p> }
          </SkeletonTheme> 
         </div>
        
         </div>     
        </div>

        <form onSubmit={handleSubmit} className="absolute bottom-14 mt-4 ">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Message NepalGPT..."
            className="border  w-[50vw] h-[50px] flex justify-center border-gray-400 bg-gray-900 px-4 py-2 rounded-xl focus:outline-none focus:border-white"

          />
          {(question || questionSent ) &&
            <motion.div animate={{ x: -10 }} className=' absolute top-2 right-1 '>
              <button type="submit"
               className={`rounded-lg p-2 bg-gray-900 text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
               disabled={isSubmitting}>
                <IoSendSharp />
              </button>
            </motion.div>}

        </form>
        <div className=' absolute bottom-8 text-xs text-center opacity-50'>GPTNepal can make mistakes. Consider checking important information.</div>
      </div>
    </div>
  )};
};

export default ChatPage;
