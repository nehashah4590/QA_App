import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex h-screen  w-full'>
        <div className='lg:w-[60%] bg-gradient-to-t from-red-200 via-red-100  to-red-50'>
          <div className='h-200 p-5'>
            <Image src={logo} alt='logo' height={150} width={150} />
          </div>
        </div>

        <div className='w-[40%] '>
          <div className='p-5 h-[40%] flex justify-center items-end'>
            <h1 className=' font-bold text-2xl'> Get Started </h1>
          </div>
          <div className=' text-white flex justify-center'>
            <Link href='./signin'><button className='bg-blue-800 px-16 py-2 rounded-md mr-1 hover:bg-blue-700'>Log in</button></Link>
            <Link href='./signup'><button className='bg-blue-800 px-16 py-2 rounded-md ml-1 hover:bg-blue-700'>Sign up</button></Link>

          </div>
        </div>
      </div>

    </>
  )
}
