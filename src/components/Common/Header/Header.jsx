// import React from 'react'
import {useState} from 'react'
import { motion } from 'framer-motion';
import logo from '../../../assets/images/devHub-logo.png';  // Logo from assets

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d1117] border-b px-14 py-3 flex justify-between items-center">
      <motion.div 
        className="logo flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* DevHub Engineers logo that dynamically changes size */}
        <img 
          src={logo} 
          alt="DevHub Engineers Logo" 
          className="w-44 sm:w-24 md:w-44 h-auto rounded-sm"
        />
        {/* <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 ml-2">
          DEVHUB ENGINEER'S
        </span> */}
      </motion.div>

      {/* Toggle button for small screens */}
      <button 
        className="md:hidden text-gray-800 hover:text-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <nav className='text-white'>
        <ul className="flex flex-col md:flex-row gap-8">
          {['Home', 'Resources', 'Interview', 'Compiler', 'Login'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
            >
              <a href="#" className="text-sm sm:text-base md:text-lg  hover:text-[#cad1e1] transition">{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header