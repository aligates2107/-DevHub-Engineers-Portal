import React from 'react';
import { motion } from 'framer-motion';
import navbarlogo from '../../../assets/images/devHub-logo.png';

const Footer = () => {
  return (

    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
    <>
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-md"></div>

      <footer className="bg-[#0d1117] text-white py-8 px-4 relative">
      <div className="absolute top-8 left-20 flex items-center">
          <img src={navbarlogo} alt="DevHubEngineers Logo" className="w-20" />
        </div>

      <motion.div 
  className="bg-[#0d1117]"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>


        
        <div className="hidden md:block ml-80 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-semibold hover:text-[#cad1e1] transition">Home</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#home" className="hover:text-yellow-500">Content</a></li>
              </ul>
            </div>

            <div className="space-y-2 text-left">
              <h3 className="text-xl font-semibold hover:text-[#cad1e1] transition">Resources</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#Resources" className="hover:text-yellow-500">Roadmap</a></li>
                <li><a href="#Resources" className="hover:text-yellow-500">Resources</a></li>
              </ul>
            </div>

            
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-semibold hover:text-[#cad1e1] transition" >Interview</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#Interview" className="hover:text-yellow-500">Interview</a></li>
              </ul>
            </div>

            
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-semibold">Compiler</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#Compiler" className="hover:text-yellow-500">Compiler</a></li> 
              </ul>
            </div>

            
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-semibold hover:text-[#cad1e1] transition">About Us</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#aboutus" className="hover:text-yellow-500">What We Provide</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section for both Mobile and Desktop */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} DevHub Engineer's. All rights reserved.</p>
        </div>
        </motion.div>
      </footer>
    </>
    </div>
    

  );
};

export default Footer;