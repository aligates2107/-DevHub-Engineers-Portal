// import React from 'react';
import { motion } from 'framer-motion';
import navbarlogo from '../../../assets/images/devHub-logo.png';

function Footer() {
  return (
    <div className="bg-[#0a192f] border-b font-inter font-normal">
      <footer className=" text-white py-8">
        <div className="relative left-4 sm:left-8 md:left-12 lg:left-12 xl:left-20 flex items-start">
          <div className='flex-row'>
            <a href="#home">
              <img src={navbarlogo} alt="DevHubEngineers Logo" className="lg:w-36 sm:w-20 md:w-24" />
            </a>
            <p className='pt-2 pl-4 w-[16rem]'>
              The DevHub Engineer Portal is a comprehensive platform designed to empower developers across various fields, including Web Development, AI/ML, and Android.
            </p>
          </div>
          
          {/*  */} 
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
              <div className="space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold hover:text-[#cad1e1] transition">Home</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#home" className="hover:text-yellow-500">Content</a></li>
                </ul>
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold hover:text-[#cad1e1] transition">Resources</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#resources" className="hover:text-yellow-500">Roadmap</a></li>
                  <li><a href="#resources" className="hover:text-yellow-500">Resources</a></li>
                </ul>
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold hover:text-[#cad1e1] transition">Interview</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#interview" className="hover:text-yellow-500">Interview</a></li>
                </ul>
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold">Compiler</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#compiler" className="hover:text-yellow-500">Compiler</a></li>
                </ul>
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold hover:text-[#cad1e1] transition">About Us</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#about" className="hover:text-yellow-500">What We Provide</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Bottom Section for both Mobile and Desktop */}
          <div className="text-center mt-8 border-t border-gray-400 pt-4">
            <p className="text-xs">&copy; {new Date().getFullYear()} DevHub Engineer. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
