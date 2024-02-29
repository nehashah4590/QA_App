"use client"
import SigninButton from './SigninButton';

const Navbar = () => {
  return (
    <nav className=" h-full flex flex-col w-full p-1 bg-red-100 ">
      {/* new chat button */}
      <div className='bg-gray-200 flex justify-center items-center w-full h-[100px] py-2 mt-10 '>
        <button className='border rounded-md border-black bg-gray-100 hover:bg-gray-200  text-xs px-2 py-1 '> 
        + New Chat
      </button>
      </div>
      {/* History */}
      <div>ge</div>
      {/* settings */}
      <div></div>
      {/* profile */}
      <div className='absolute bottom-4  w-[170px] h-[100px] p-1 border border-red-500 '>
        <SigninButton/>
      </div>
    </nav>
  );
};

export default Navbar;

