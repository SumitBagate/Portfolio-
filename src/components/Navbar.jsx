import React from 'react'
import { NavLink } from 'react-router-dom';
import {logo1} from '../assets/images'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <header  className=" header blur-overlay   flex items-center  justify-between p-3  ">
  {/* Left: Logo */}
  <NavLink to="/" >
    <img src={logo1} alt='logo' className='w-18 h-15 object-contain' />  </NavLink>

  {/* Right: Navigation Links */}
  <nav className="flex items-center gap-5 font-medium p-3 te">
    <NavLink to="/about" className="text-gray-900 hover:text-blue-800 font-bold">
      About
    </NavLink>
    <NavLink to="/projects" className="text-gray-900 hover:text-blue-800  font-bold">
      Projects
    </NavLink>
    <NavLink to="/contact" className="text-gray-900 hover:text-blue-800 font-bold ">
      Contact
    </NavLink>
  </nav>
</header>

    
  )
}

export default Navbar
