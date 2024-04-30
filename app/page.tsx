import About from './components/About';
import Footer from './components/Footer';
import Research from './components/Research';
import Mentors from './components/Mentors';
import Team from './components/Team';
import LandingPageNav from './components/LandingPageNav';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

export default function Home() {

  return (
    <>
      <main className=" absolute">
        <div className="absolute w-full h-full bg-black opacity-40"></div>
        <div className='fixed right-0 z-50'>
          <LandingPageNav section1Id="section1" section2Id="section2" section3Id="section3" section4Id="section4" section5Id="section5" />
        </div>
        <div className='text-white absolute top-[40vh] md:top-[60vh] left-[10vw]'>
          <h1 className='text-4xl font-extrabold tracking-[1px]'>Introducing GPT Nepal: Your Personal <br /> Guide To Visit Nepal</h1>
        </div>
        <div className='absolute bottom-[12vh] left-[10vw] z-10'>
          <button className='flex border cursor-pointer border-white text-white rounded-md px-8 py-2 font-bold hover:text-black hover:bg-white'>
          <Link href="/auth">
            <span className="flex items-center">
              Try GPTNepal
            <span className="text-2xl pl-1"><MdArrowOutward /></span>
            </span>
          </Link>
          </button>
        </div>
        <video className="object-cover w-[100vw] h-[100vh]" src='/images/bgvideo.mp4' autoPlay muted loop />
       

      <div id="section1">
        <About />
      </div>
      <div id="section2">
        <Research />
      </div>
      <div id="section3">
        <Mentors />
      </div>
      <div id="section4">
        <Team />
      </div>
      <div id="section5">
        <Footer />
      </div>
      </main>
      
    </>
  )
}
