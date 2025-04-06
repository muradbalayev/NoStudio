import React from "react";
import heroImg from "../assets/hero2.gif";
import { motion, useSpring, useTransform } from "framer-motion";
import PixelButton from "./common/PixelButton";

// Animation variants for staggered text reveals
const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Letter animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = ({ scrollYProgress }) => {
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothScrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(smoothScrollYProgress, [0, 0.7], [0, -5]);
  const textY = useTransform(smoothScrollYProgress, [0.2, 0.6], [0, -120]);
  const opacity = useTransform(smoothScrollYProgress, [0.6, 1], [1, 0.4]);
  const rotateButton = useTransform(smoothScrollYProgress, [0.2, 1], [0, 90]);
  const ButtonX = useTransform(smoothScrollYProgress, [0.2, 1], [0, 110]);
  const ButtonY = useTransform(smoothScrollYProgress, [0.2, 1], [0, -300]);
  
  // Split text for letter-by-letter animation
  const titleText = "NOSTUDIO";
  const titleLetters = Array.from(titleText);
  


  return (
    <motion.div
    //   style={{ scale, rotate }}
      className="sticky top-0 h-screen mx-auto overflow-hidden"
    >
      <motion.header
        className="w-full h-full mx-auto overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "pixelated",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.div 
            style={{ y: textY, opacity }}
            className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start justify-center"
          >
            {/* Main title with letter animations */}
            <div className="mb-4 overflow-hidden">
              <motion.div 
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center md:justify-start"
              >
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    className="text-4xl sm:text-7xl md:text-9xl font-bold text-green pixel-shadow inline-block"
                    style={{ 
                      textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                      transform: "skew(-5deg)",
                      willChange: "transform, text-shadow"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            {/* Tagline with reveal animation */}
            <motion.p 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-white sm:text-start text-center max-w-2xl mb-12 font-light tracking-wider"
            >
              Creating Pixel Perfect Gaming Experiences
            </motion.p>

            {/* Button with animation */}
            <motion.div
            // style={{ rotate: rotateButton, x: ButtonX, y: ButtonY }}
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-4"
            >
              <PixelButton
                className="px-6 py-3 bg-green-600 text-white text-sm border-b-4 border-r-4 border-green-800 hover:bg-[#1e941e] transition-colors"
                particleColors={["#1e941e", "#156415", "#0f4c0f", "#ffffff"]}
              >
                EXPLORE OUR GAMES
              </PixelButton>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </motion.div>
  );
};

export default Hero;
