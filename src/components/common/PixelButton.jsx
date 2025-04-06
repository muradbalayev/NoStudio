import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Particle component for the Minecraft-style effect
const Particle = ({ color, x, y, size }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: x - 20, 
        y: y - 30,
        opacity: 1,
        scale: 1
      }}
      animate={{ 
        x: x + (Math.random() * 100 - 50), 
        y: y + (Math.random() * 100 - 20),
        opacity: 0,
        scale: 0
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        imageRendering: 'pixelated'
      }}
    />
  );
};

const PixelButton = ({ 
  children, 
  className = "", 
  onClick, 
  particleCount = 15,
  particleColors = ['#1e941e', '#156415', '#0f4c0f', '#ffffff'],
  particleSize = 6,
  ...props 
}) => {
  const [particles, setParticles] = useState([]);
  
  const handleClick = (e) => {
    // Get button position for particle origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create new particles
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: `${Date.now()}-${i}`,
        x,
        y,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        size: Math.max(3, Math.floor(particleSize * Math.random() * 1.5))
      });
    }
    
    // Add new particles to state
    setParticles(newParticles);
    
    // Play pixel sound effect
    const audio = new Audio('/click.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play error:', e));
    
    // Call the original onClick handler if provided
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      className={`pixel-button relative overflow-visible ${className}`}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      
      <AnimatePresence>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            color={particle.color}
            size={particle.size}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default PixelButton;
