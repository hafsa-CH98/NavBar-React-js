import React from 'react'
import logo from './assest/images.jpeg'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center p-[30px] bg-slate-700'>
        <img src={logo} alt="logoimg" className='h-[70px] ' />
        <ul className='flex gap-[50px] text-xl '>
            <li className='text-white	'> <a href="/">Home</a> </li>
            <li className='text-white'><a href="/">About</a> </li>
            <li className='text-white'> <a href="/">Service</a></li>
            <li className='text-white'> <a href="/">Contact</a></li>

        </ul>
      
    </header>
  )
}

export default Navbar
