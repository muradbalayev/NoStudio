import React, { useState } from "react";
import { motion } from "framer-motion";
import mascot from '../assets/mascot.png'
import member from '../assets/profile.jpeg'

// Animation constants
const DURATION = 0.2;
const STAGGER = 0.02;

// FlipText component for the letter animation
const FlipText = ({ children, isHovered, className = "" }) => {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            animate={{ y: isHovered ? "-100%" : 0 }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            animate={{ y: isHovered ? 0 : "100%" }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-green"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Sample team member data - you can replace with your actual team members
const teamMembers = [
  {
    id: 1,
    name: "MURAD",
    role: "DEVELOPER",
    image: member, // Placeholder image
    social: "@alexj",
    mascotImg: mascot
  },
  {
    id: 2,
    name: "MURAD",
    role: "PIXEL ARTIST",
    image: member, // Placeholder image
    social: "@sarahc",
    mascotImg: mascot
  },
  {
    id: 3,
    name: "MURAD",
    role: "SOUND DESIGNER",
    image: member, // Placeholder image
    social: "@marcusl",
    mascotImg: mascot
  },
  {
    id: 4,
    name: "MURAD",
    role: "GAME DESIGNER",
    image: member, // Placeholder image
    social: "@emmaw",
    mascotImg: mascot
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, rotate: -5 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const TeamMembers = () => {
  // Create state to track which team member card is being hovered
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <section className="py-20 px-4 relative min-h-screen bg-[#17181a] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pixel-shadow">
            Our <span className="text-green">Team</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Meet the talented individuals behind NoStudio's pixel perfect gaming experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
              animate="visible"
              onHoverStart={() => setHoveredId(member.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group bg-white p-3 relative shadow-xl transform rotate-0 hover:rotate-0"
              style={{ 
                willChange: "transform",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Social icon */}
              <div className="absolute top-5 right-5 z-10">
                <motion.div 
                  className="w-7 h-7 rounded-full bg-[#17181a] flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Image container with pixel transition effect */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-black mb-3 relative">
                {/* Original image - always visible until hover */}
                <div className="w-full h-full absolute top-0 left-0 z-10 group-hover:opacity-0 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{willChange: "filter"}}
                    className={`w-full h-full object-cover transition-all duration-300 ${hoveredId && hoveredId !== member.id ? 'grayscale' : ''}`}
                  />
                </div>
                
                {/* Pixelated transition effect */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full relative">
                    {/* Mascot image */}
                    <img 
                      src={member.mascotImg} 
                      alt="Mascot" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    
                    {/* Pixel grid overlay */}
                    <div className="absolute inset-0 grid grid-cols-12" 
                         style={{ 
                           opacity: 1,
                           mixBlendMode: "difference"
                         }}>
                      {[...Array(144)].map((_, i) => (
                        <div 
                          key={i}
                          className="bg-white aspect-square group-hover:bg-transparent" 
                          style={{
                            transitionProperty: "background-color",
                            transitionDelay: `${Math.random() * 700}ms`,
                            transitionDuration: '100ms',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text content with flip animation */}
              <div className="right-0">
                <div className="font-bold mb-0">
                  <FlipText 
                    isHovered={hoveredId === member.id}
                    className="text-black sm:text-lg text-base"
                  >
                    {member.name}
                  </FlipText>
                </div>
                <div className="font-medium">
                  <FlipText 
                    isHovered={hoveredId === member.id}
                    className="text-black sm:text-sm text-xs"
                  >
                    {member.role}
                  </FlipText>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;
