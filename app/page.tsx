import About from './components/About';
import Footer from './components/Footer';
import Research from './components/Research';
import Mentors from './components/Mentors';
import Team from './components/Team';
import LandingPageNav from './components/LandingPageNav';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <main className="relative">
        <div className="absolute w-full h-full bg-black opacity-40"></div>
        <div className='absolute right-0 z-10'>
          <LandingPageNav section1Id="section1" section2Id="section2" section3Id="section3" section4Id="section4" section5Id="section5" />
        </div>
        <div className='text-white absolute top-[60vh] left-[10vw]'>
          <h1 className='text-4xl font-extrabold tracking-[1px]'>Introducing GPT Nepal: Your Personal <br /> Guide To Visit Nepal</h1>
        </div>
        <div className='absolute bottom-[5vh] left-[10vw] z-10'>
          <button className='border cursor-pointer border-white text-white rounded-md px-8 py-2 font-bold hover:text-black hover:bg-white'>
            <Link href="/auth">Try GPTNepal</Link>
          </button>
        </div>
        <video className="object-cover w-full h-[100vh]" src='/images/bgvideo.mp4' autoPlay muted loop />
      </main>

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

    </>
  )
}
