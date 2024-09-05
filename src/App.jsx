import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/devhub-logo.png';  // Logo from assets
import animation from './assets/animation.gif';  // GIF from assets
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
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

      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row gap-8">
          {['Home', 'Resources', 'Interview', 'Compiler', 'Login'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
            >
              <a href="#" className="text-sm sm:text-base md:text-lg text-gray-800 hover:text-blue-600 transition">{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-100">
      <motion.div 
        className="content md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Empowering Developers Across All Fields: Web, AI/ML, & Android.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Direct access to top resources like Documentation, roadmap Guidelines, and Interview Guidelines.
          Explore recent blog posts solving common problems or introducing new technologies.
          Highlighting active community members and popular discussion topics.
        </p>
      </motion.div>
      <motion.div 
        className="image md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={animation} 
          alt="Developer working on various technologies" 
          className="w-3/4 sm:w-2/3 md:w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl mx-auto"
        />
      </motion.div>
    </main>
  );
}

export default App;