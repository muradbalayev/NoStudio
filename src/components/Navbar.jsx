import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PixelButton from "./common/PixelButton";
import Links from "./common/Links";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
    
      checkMobile();
    
      window.addEventListener("resize", checkMobile);
    
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform" }}
    >
      <div className={`mx-auto sm:px-10 px-4 transition-all duration-300 ${
        scrolled || isMobile ? "py-6 bg-white shadow-md" : "py-8 bg-transparent"
      }`}>
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            <span
              className={`${
                scrolled || isMobile ? "text-[#1e941e]" : "text-white"
              } pixel-shadow`}
            >
              NOSTUDIO
            </span>
          </motion.div>

          {/* Center Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:flex hidden space-x-8">
            {/* <NavLink text="HOME" active={true} scrolled={scrolled} />
            <NavLink text="BLOG" active={false} scrolled={scrolled} /> */}
            <Links
              className={` transition-all duration-300 rounded-full ${!scrolled ? "text-white" : "text-[#1e941e]"}`}
              text="HOME"
            />
            <Links
              className={` transition-all duration-300 rounded-full ${!scrolled ? "text-white" : "text-[#1e941e]"}`}
              text="BLOG"
            />
          </div>

          {/* Right Side - Contact Button */}
          <PixelButton
            className={`px-4 py-2 ${
              scrolled ? "bg-green-600 text-white" : "bg-white text-[#179a5b]"
            } sm:block hidden text-xs border-b-2 border-r-2 border-green-800 hover:bg-green-600 hover:text-white transition-colors`}
            particleCount={8}
            particleSize={3}
          >
            CONTACT
          </PixelButton>
        </div>
      </div>
    </motion.nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ text, active, scrolled }) => {
  return (
    <motion.a
      href="#"
      className={`relative px-1 py-2 font-medium text-sm ${
        scrolled ? (active ? "text-[#1e941e]" : "text-gray-700") : "text-white"
      } hover:text-[#1e941e] transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#1e941e]"
          layoutId="navbar-underline"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  );
};

export default Navbar;
