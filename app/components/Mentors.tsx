import React from 'react'
import Image from 'next/image';
import sir1 from "../../public/images/MKGsir.jpg"
import sir2 from "../../public/images/PSsir.jpg"
import sir3 from "../../public/images/pukarsir.jpg"

const Mentors = () => {
  return (
    <div className='h-[100vh] w-full bg-blue-300 p-8'>
        <h1 className='text-3xl font-bold p-4 pb-6'>Our Mentors</h1>
    <div className=' flex justify-center gap-4 h-[80%]'>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={sir1} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Supervisor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er. Manoj Kumar Guragai</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={sir2} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Mentor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er. Pravin Sangroula</h2>
        <h2 className="text-xs font-bold mb-1">Head of Department, Department of Electronics and Computer Engineering</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
       <div className="bg-white border rounded-lg overflow-hidden shadow-md">
      <Image className="w-full h-[325px] object-cover" src={sir3} alt="Card Image" />
      <div className="p-4">
      <h2 className="text-xl font-bold mb-1">Mentor</h2>
        <h2 className="text-xs font-bold ">Asst. Professor</h2>
        <h2 className="text-xs font-bold mb-1">Er.Pukar Karki</h2>
        <h2 className="text-xs font-bold mb-1">Deputy Head of Department, Department of Electronics and Computer Engineering</h2>
        <p className="text-gray-700 text-xs">Purwanchal Campus, Institute of Engineering, Dharan</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Mentors
