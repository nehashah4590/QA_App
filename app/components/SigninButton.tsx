"use client"
import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import NextAuth from "next-auth"
import { IoIosLogOut } from "react-icons/io";


const SigninButton = () => {

    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div >
                <div className='flex w-full rounded-lg hover:bg-gray-700  m-1 py-1'>
                    <p  className='pt-[4px] mx-1 mt-1 ml-2 rounded-lg bg-green-500 h-[30px] w-[30px] text-center font-semibold '>{(session.user.name)?.charAt(0)}</p>
                    <p className='flex items-center pl-1 text-sm py-2'>{session.user.name}</p>
                </div>
                <button
                    className=' w-full flex  hover:bg-gray-700 py-3 px-4 text-sm rounded-md m-1'
                    onClick={() => signOut()}><IoIosLogOut className='mt-[2px] mr-1 ml-2 text-lg' />Sign out</button>
            </div>
        )
    }

}

export default SigninButton;
