"use client"
import { useState, FormEvent, useEffect } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useSession } from 'next-auth/react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSearchParams } from 'next/navigation';
import "react-loading-skeleton/dist/skeleton.css";
import Image from 'next/image';
import icon from "../icon.png";

const ChatPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [firstLetter , setFirstLetter] = useState('');
  const [questionSent, setQuestionSent] =  useState('');
  const [historyData, setHistoryData] =  useState(null);
  const [historyinChat, setShowHistoryinChat]  = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [id, setId] = useState("Hello");
  
  const { data: session } = useSession();
  const token = session?.user?.access_token ;
  const chat_id = session?.user?.chat_id;
  const username = session?.user?.name;

  // const searchParams = useSearchParams();
  // const id = searchParams.get("value");


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
    if(id  === "0"){
      setShowChat(false);
    }else{
      const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/chatid/history/?chatid=${id}`,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
    .then((response) => {
      console.log("idj",JSON.stringify(response.data));
      setHistoryData(response.data);
      setShowChat(true);
      setShowHistoryinChat(true);
      
    })
    .catch((error ) => {
      console.log(error);
    });

    }
  },[token, id]);

  console.log("asdfew",historyData)

  const handleSubmit = (e) => {
    setShowHistoryinChat(false);
    setHistoryData(null);
    setQuestionSent(question);
    setQuestion('');
    setIsSubmitting(true);
    setShowChat(true);
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
      .then((response) => {
        console.log(JSON.stringify("heloifjwe",response.data));
        console.log('Submitted question:', questionSent);
        setAnswer(response.data.answer)
        setIsSubmitting(false);
        
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });

  };

  if(showChat === false){
    return(
      <div className="absolute h-[100vh] w-[100vw]">
      <div className=' h-full  text-center flex justify-center'>  
        <div className='w-[80vw] h-[90vh] px-[10vw] py-[10vh] mt-10  overflow-y-auto box'> 
          <h1 className='text-5xl py-1'>Hello, {name}</h1>
          <h1 className='text-3xl'>How can I help you today?</h1>
        </div>
        <form onSubmit={handleSubmit} className="absolute bottom-14 mt-4 ">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Message NepalGPT..."
            className="border  w-[50vw] h-[50px] flex justify-center border-gray-400 bg-transparent px-4 py-2 rounded-xl focus:outline-none focus:border-gray-600"
          />
          {(question || questionSent )&&
            <motion.div animate={{ x: -10 }} className=' absolute top-2 right-1 '>
              <button type="submit"
               className={`rounded-lg p-2  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
    <div className="absolute h-[100vh] w-[100vw]">
      <div className='h-full  text-center flex justify-center'>    
        <div className='w-[80vw] h-[90vh] px-[10vw] py-[10vh]  overflow-y-auto box'>
        <div className='flex flex-col text-left  px-12'>
         {historyinChat ?
          <>
          <div className='flex items-center'>
          <p className='pt-[4px] mx-4 rounded-lg bg-green-500 h-[30px] w-[30px] text-center font-semibold '>{firstLetter}</p>
          <p className='text-md py-4'>{historyData?.question}</p>
         </div>
          <div className='flex items-start mt-4'>
          <Image className='pt-[4px] mx-4 mt-1 rounded-lg bg-white p-1 h-[30px] w-[30px] text-center font-semibold ' src={icon} alt='icon'/>
          <p className='text-md'>{historyData?.answer}</p>
          </div>
          </>:<></>
        }

         {(questionSent && !historyinChat)&& (<>
         <div className='flex items-center'>
          <p className='pt-[4px] mx-4 rounded-lg bg-green-500 h-[30px] w-[30px] text-center font-semibold '>{firstLetter}</p>
          <p className='text-md py-4'>{questionSent}</p>
         </div>
         </>
         )}
  
        {!historyinChat &&<div className='flex items-start mt-4'>
          {(!historyinChat || questionSent)&&<Image className='pt-[4px] mx-4 mt-1 rounded-lg bg-white p-1 h-[30px] w-[30px] text-center font-semibold ' src={icon} alt='icon'/> }
          <SkeletonTheme baseColor="#202020" highlightColor="#444"> 
            {isSubmitting ? <p className='w-full'><Skeleton count={10}/></p>:<p className='text-md'>{answer}</p> }
          </SkeletonTheme> 
         </div>}
        
         </div>     
        </div>

        <form onSubmit={handleSubmit} className="absolute bottom-14 mt-4 ">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Message NepalGPT..."
            className="border  w-[50vw] h-[50px] flex justify-center border-gray-400 bg-transparent px-4 py-2 rounded-xl focus:outline-none focus:border-gray-600"

          />
          {(question || questionSent ) &&
            <motion.div animate={{ x: -10 }} className=' absolute top-2 right-1 '>
              <button type="submit"
               className={`rounded-lg p-2  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
