import React from 'react'
import profile from "../../assets/profile.png"
import { FaAnglesDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='py-4 lg:py-6'>
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
            <h1 className='text-3xl mx-2 lg:text-4xl font-semibold text-green-500'>FOOD<span className='text-red-700'>EAT</span></h1>
        </div>
        {/* Menu Section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul>
          {/* login section */}
            <div className='flex gap-4 items-center py-2'>
              <img src={profile} alt="" className='w-10 rounded-full ' />
              < FaAnglesDown/>
            </div>
        </div>
   

      </div>
    </div>
  )
}

export default Navbar
