"use client"
import ClearChat from './ClearChat';
import History from './History';
import LightMode from './LightMode';
import NewChat from './NewChat';
import SigninButton from './SigninButton';


const Navbar = () => {
  return (
    <nav className=" h-full flex flex-col w-full p-1 pl-2 ml-2">
   
      <div className='flex  w-full h-[50px] py-2 mt-10 mb-2  '>
        <NewChat/>
      </div>
      
      <div className='p-2 w-full h-[50vh] overflow-y-auto '>
        <History/>
      </div>
    
      <div>
        <ClearChat />
      </div>

      <div>
        <LightMode/>
      </div>
  
      <div className='absolute bottom-4  w-[190px] h-[100px] p-1'>
        <SigninButton/>
      </div>
    </nav>
  );
};

export default Navbar;

