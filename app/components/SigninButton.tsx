"use client"
import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import NextAuth from "next-auth"
import { IoIosLogOut } from "react-icons/io";


const SigninButton =() => {
 
    const {data: session} = useSession();

    if (session && session.user){
        return(
            <div >
                <div className='flex w-[185px] rounded-lg hover:bg-gray-700 text-white m-1 '>
                    {/* {<img className="w-[40px] h-[40px] rounded-full border-none" 
                    src={session?.user?.picture}/>} */}
                    <p className='flex items-center pl-1 text-sm py-2'>{session.user.name}</p>
                </div>
                <button
                className='bg-gray-100 w-[185px] flex text-black hover:bg-red-500 hover:text-white py-2 px-4 text-sm rounded-md m-1' 
                 onClick={()=> signOut()}><IoIosLogOut className='mt-[3px] mr-1 text-sm' />Sign out</button>
            </div>
        )
    }
 
}

export default SigninButton;
