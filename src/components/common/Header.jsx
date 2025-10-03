import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ brand, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

        <NavLink to="/" className="font-bold text-2xl">{brand}</NavLink>


        <button className="lg:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="border-b lg:border-none">
              <NavLink
                to={link.to}
                className={({ isActive }) => `block py-2 px-4 lg:p-0 ${isActive ? 'text-blue-400 font-semibold' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
