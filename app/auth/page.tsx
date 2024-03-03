"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import logo from '../../public/images/logo.png';
import mountaion from "../../public/images/mountain-yellow.png"

const Cursor: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return <span style={{ opacity: isVisible ? 1 : 0 }}>|</span>;
};

const Typewriter: React.FC<{ texts: string[]; onTypingComplete: () => void }> = ({ texts, onTypingComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < texts[currentTextIndex].length) {
        setDisplayText((prevText) => prevText + texts[currentTextIndex][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setIsCursorVisible(false); // Hide the cursor when typing completes
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText('');
          setCurrentIndex(0);
          setIsCursorVisible(true); // Show the cursor for the next sentence
          onTypingComplete(); // Notify the parent component when typing completes
        }, 2000); // Change this delay according to your preference
      }
    }, 30);

    return () => clearInterval(timer);
  }, [currentIndex, texts, currentTextIndex, onTypingComplete]);

  return (
    <>
      <span>{displayText}</span>
      <Cursor isVisible={isCursorVisible} />
    </>
  );
};

const thirdSet = {
  heading: 'Suggest adventurous activities',
  applicationNames: ['that is popular in Nepal.'],
};

const firstSet = {
  heading: 'Recommend',
  applicationNames: ['places to visit in Nepal.'],
};

const secondSet = {
  heading: 'How to',
  applicationNames: ['make hotel reservations?'],
};

const Page: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(firstSet);
  const [isFirstSetComplete, setIsFirstSetComplete] = useState(true);
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    if (isFirstSetComplete) {
      const timeoutId = setTimeout(() => {
        if (currentSet === firstSet) {
          setCurrentSet(secondSet);
        } else if (currentSet === secondSet) {
          setCurrentSet(thirdSet);
        } else {
          // If it's the third set, loop back to the first set
          setCurrentSet(firstSet);
        }
        setIsFirstSetComplete(false); // Reset the completion flag
        setTypewriterKey((prevKey) => prevKey + 1); // Change the key to reset the Typewriter state
      }, 2000); // Adjust the delay before the next set appears

      return () => clearTimeout(timeoutId);
    }
  }, [isFirstSetComplete, currentSet]);

  const handleTypingComplete = () => {
    setIsFirstSetComplete(true);
  };

  return (
    <>
       <div
        className='flex h-screen w-full relative'
        style={{
          backgroundImage: 'url("/images/stupa.jpg")', // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Overlay with Image */}
        <div
          className='absolute top-0 left-0 w-full h-full bg-black opacity-50'
        ></div>

        <div className='lg:w-[60%] relative z-10'>
          <div className='h-200 px-9 py-4'>
            
            <Image src={logo} alt='logo' height={130} width={130} />
            
          </div>
          
            {currentSet === firstSet && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className='px-10 h-[80%] flex flex-col justify-center items-start'
              >
                <h1 className='font-extrabold text-[40px]  text-[#da123c]'>
                  {currentSet.heading}
                  <p>
                    <span className='font-normal text-[40px] text-[#fbcc1c]'>
                      <Typewriter key={typewriterKey} texts={currentSet.applicationNames} onTypingComplete={handleTypingComplete} />
                    </span>
                  </p>
                </h1>
              </motion.div>
            )}
           {currentSet === secondSet && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className='px-10 h-[80%] flex flex-col justify-center items-start'
            >
              <h1 className='font-extrabold text-[40px]  text-[#da123c]'>
                {currentSet.heading}
                <p>
                  <span className='font-normal text-[40px] text-[#fbcc1c]'>
                    <Typewriter key={typewriterKey} texts={currentSet.applicationNames} onTypingComplete={handleTypingComplete} />
                  </span>
                </p>
              </h1>
            </motion.div>
          )}
         {currentSet === thirdSet && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className='px-10 h-[80%] flex flex-col justify-center items-start'
            >
              <h1 className='font-extrabold text-[40px]  text-[#da123c]'>
                {currentSet.heading}
                <p>
                  <span className='font-normal text-[40px] text-[#fbcc1c]'>
                    <Typewriter key={typewriterKey} texts={currentSet.applicationNames} onTypingComplete={handleTypingComplete} />
                  </span>
                </p>
              </h1>
            </motion.div>
          )}
          
        </div>

        <div className='w-[40%] relative z-10 bg-black'>
          <div className='p-5 h-[46%] flex justify-center items-end'>
            <h1 className='font-bold text-[32px] text-white'>Get started</h1>
          </div>
          <div className='text-white flex justify-center'>
            <Link href='../auth/signin'>
              <button className='bg-[#3c46ff] px-16 py-3 rounded-md mr-1 hover:bg-[#0101ff]'>Log in</button>
            </Link>
            <Link href='./signup'>
              <button className='bg-[#3c46ff] px-16 py-3 rounded-md ml-1 hover:bg-[#0101ff]'>Sign up</button>
            </Link>
          </div>
          <div className='absolute bottom-0'>
        <Image src={mountaion} alt='mountain' className='h-full '/>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Page;

