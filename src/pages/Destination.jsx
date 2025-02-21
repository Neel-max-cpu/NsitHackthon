import React from 'react'
import "../style.css"
import Destinations from '@/components/Destinations'

const Destination  = () => {
  return (
    <div className='bg-space min-h-screen w-full p-15 space-y-20'>
      <div className="text-center pt-12 text-white">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-blue-500">Explore the Galaxy</h1>
        <p className="mt-4 text-2xl"><i>Book your journey to the most exciting destinations in the universe!</i></p>
      </div>
      <Destinations/>
    </div>
  )
}

export default Destination 
