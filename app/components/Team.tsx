import React from 'react'
import Image from 'next/image';
import suraj from "../../public/images/suraj.jpg"
import neha from "../../public/images/Neha.jpg"
import rikesh from "../../public/images/Rikesh.jpg"
import puspa from "../../public/images/puspa.jpg"

const Team = () => {
  return (
    <div className='h-[100vh] w-full p-8'>
        <h1 className='text-3xl font-bold p-4 pb-6'>Our Team</h1>
    <div className=' flex justify-center gap-4 h-[80%]'>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={suraj} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Supervisor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er. Manoj Kumar Guragai</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={neha} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Mentor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er. Pravin Sangroula</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={rikesh} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Mentor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er.Pukar Karki</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={puspa} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Mentor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er.Pukar Karki</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Team

