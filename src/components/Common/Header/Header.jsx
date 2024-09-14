// import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import logo from '../../../assets/images/devHub-logo.png';

import { Link as RouterLink} from 'react-router-dom'; // Logo from assets

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <header className="bg-[#0a192f] border-b px-14 py-3 flex justify-between items-center">
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
          className="lg:w-32 sm:w-24 md:w-44 h-auto rounded-sm"
        />
      </motion.div>

      <ul className='cust-hidden text-white relative flex items-center justify-between mx-auto gap-12 font-semibold transition'>
        <RouterLink to='/' onClick={scrollToTop}>
          <li
            className={`nav-link ${hoveredItem === 'Home' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('Home')}
            onMouseLeave={handleMouseLeave}>
            Home
          </li>
        </RouterLink>

        
          <RouterLink to='/resources'>
            <li
              className={`nav-link ${hoveredItem === 'Resources' ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter('Resources')}
              onMouseLeave={handleMouseLeave}>
              Resources
            </li>
          </RouterLink>
      
        
        <RouterLink to='/interviews'>                
        <li
          className={`nav-link ${hoveredItem === 'Interviews' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('Interviews')}
          onMouseLeave={handleMouseLeave}>
          Interviews
        </li>
        </RouterLink>
        
        <RouterLink to='/compiler'>                
        <li
          className={`nav-link ${hoveredItem === 'Compiler' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('Compiler')}
          onMouseLeave={handleMouseLeave}>
          Compiler
        </li>
        </RouterLink>
      </ul>
      <div className='text-white font-semibold cursor-pointer'>
        <RouterLink to='/log-in'>Login</RouterLink>  /
        <RouterLink to='/sign-up'>SignUp</RouterLink>
      </div>
    </header>
  );
}

export default Header