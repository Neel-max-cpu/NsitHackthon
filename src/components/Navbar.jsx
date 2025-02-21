import React from 'react'
import { LogOut, MessageSquare, Settings, User } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, Router } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="fixed w-full h-[50px] bg-transparent flex justify-between items-center p-3">
      <div className='flex'>
        {/* left side */}
        <div className='flex items-center p-3 space-x-4'>
          <p onClick={()=> navigate('/destination')} className='hover:cursor-pointer hover:scale-110 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white via-red-500 to-blue-500'>CosmicVoyage</p>
          <Button onClick={() => navigate('/destination')} className="border-none hover:scale-110 shadow-none bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-[#a5a44c]">Destination</Button>
          <Button onClick={() => navigate('/booking')} className="border-none hover:scale-110 shadow-none bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-[#a5a44c]">Booking</Button>
          <Button onClick={() => navigate('/spacecraft')} className="border-none hover:scale-110 shadow-none bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-[#a5a44c]">SpaceCraft</Button>
        </div>

        {/* right side */}
        {/* <Button className="border-none bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-[#a5a44c]">Logout</Button> */}

      </div>
    </div>
  )
}

export default Navbar
