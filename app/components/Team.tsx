import React from 'react'
import Image from 'next/image';
import suraj from "../../public/images/suraj.jpg"
import neha from "../../public/images/Neha.jpg"
import rikesh from "../../public/images/Rikesh.jpg"
import puspa from "../../public/images/puspa.jpg"

const Team = () => {
  return (
    <div className='h-[100vh] w-full p-8'>
      <h1 className='text-3xl font-extrabold p-4 pb-6 text-[#fcce1c] tracking-[1px]'>Our Team</h1>
      <div className=' flex justify-center gap-4 h-[80%]'>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[325px] object-cover" src={neha} alt="Card Image" />
          <div className="p-4 pt-8">
            <h2 className="text-xl font-bold mb-1">Frontend Developer</h2>
            <h2 className="text-xs font-bold mb-1 ">Neha Shah</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[325px] object-cover" src={puspa} alt="Card Image" />
          <div className="p-4 pt-8">
            <h2 className="text-xl font-bold mb-1">Frontend Developer</h2>
            <h2 className="text-xs font-bold mb-1">Puspa Limbu</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[325px] object-cover" src={rikesh} alt="Card Image" />
          <div className="p-4 pt-8">
            <h2 className="text-xl font-bold mb-1">AI Developer</h2>
            <h2 className="text-xs font-bold mb-1">Rikesh Shah</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md">
          <Image className="w-full h-[325px] object-cover" src={suraj} alt="Card Image" />
          <div className="p-4 pt-8">
            <h2 className="text-xl font-bold mb-1">Backend Developer</h2>
            <h2 className="text-xs font-bold mb-1">Suraj Sharma</h2>
            <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team

