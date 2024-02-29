"use client"
import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import NextAuth from "next-auth"
import { IoIosLogOut } from "react-icons/io";

interface Session {
    user: {
      /** The user's postal address. */
      picture: string
    }
  }


const SigninButton =() => {

    const {data: session} = useSession();
    console.log(session)

    if (session && session.user){
        return(
            <div>
                <div className='flex bg-red-500'>
                    {<img className="w-[40px] h-[40px] rounded-full" 
                    src={session.user.picture}/>}
                    <p className='flex items-center pl-1 text-sm'>{session.user.name}</p>
                </div>
                <button
                className='bg-gray-100 flex hover:bg-red-500 py-1 px-2 text-[15px] rounded-md m-2' 
                 onClick={()=> signOut()}><IoIosLogOut className='mt-[3px] mr-1' />Sign out</button>
            </div>
        )
    }
  return (
    <div>
        <button onClick={()=> signIn()}>Sign In</button>

    </div>
  )
}

export default SigninButton;
