import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import motorGif from '../assets/motor.gif'
const HomePage = () => {
  const container = useRef();
  const wrapper = useRef();

  const { scrollYProgress: scrollYProgressWrapper } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // This effect is for debugging scroll progress if needed
    // You can remove this if not needed
    scrollYProgress.onChange((v) => console.log("Scroll progress:", v));
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={wrapper}
      className="pixel-art-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
         {/* Pixel Art Motor Progress Indicator */}
         <div className="fixed pointer-events-none bottom-0 border-green-800 -left-5 -right-5 sm:h-16 h-12 z-[1000] overflow-hidden">
           <div className="relative w-full h-full bg-transparent">
             <motion.div 
               className="absolute top-0 bottom-0 flex items-center"
               style={{ 
                 x: useTransform(scrollYProgressWrapper, [0, 1], [-20, window.innerWidth]),
               }}
               initial={{ x: -20 }}
             >
               <img 
                 src={motorGif} 
                 alt="Pixel Art Motor" 
                 className="h-12 sm:h-16 w-auto object-contain"
                 style={{ imageRendering: "pixelated" }}
               />
             </motion.div>
           </div>
         </div>
      <Navbar />
      <main ref={container} className="relative">
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </main>
        <TeamMembers />
        <Footer scrollYProgress={scrollYProgressWrapper} />
    </motion.div>
  );
};

export default HomePage;
