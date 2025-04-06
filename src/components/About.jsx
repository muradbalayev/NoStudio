import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import PixelButton from './common/PixelButton'

const About = ({ scrollYProgress }) => {

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    checkMobile();
  
    window.addEventListener("resize", checkMobile);
  
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
      });
      
  const scale = useTransform(smoothScrollYProgress, [0, isMobile ? 0.2 : 0.7], [0.8, 1]);
  const rotate = useTransform(smoothScrollYProgress, [0, isMobile ? 0.2 : 0.7], [-5, 0]);

  return (
    <motion.section className="py-20 px-4 relative min-h-screen bg-[#f5f1f1]" style={{ scale, rotate }}>
   
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-green mb-6 inline-block pixel-shadow">
            <span className="border-b-4 border-green pb-2">ABOUT US</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            NoStudio is an indie game development team passionate about creating pixel art games with memorable gameplay experiences.
          </p>
        </motion.div>
        
        {/* Featured Game Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-green p-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4 pixel-shadow">BLUE DIARY</h3>
                <div className="w-48 h-48 mx-auto bg-blue-900 rounded-lg border-4 border-white shadow-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-blue-800 flex items-center justify-center text-6xl">📔</div>
                </div>
                <p className="text-white text-sm">COMING SOON</p>
              </motion.div>
            </div>
            <div className="md:w-1/2 p-8">
              {/* <h4 className="text-xl font-bold mb-4 text-green ">Our Latest Project</h4> */}
              <h4 className="text-xl font-bold text-green mb-4 inline-block sm:text-start text-center pixel-shadow">
            <span className="pb-2 ">Our Latest Project</span>
          </h4>
              <p className="text-gray-700 sm:text-base text-sm sm:text-start text-center mb-6">
                "Blue Diary" is an emotional journey through time that begins with a forgotten diary of a pensioner Movlud's daughter. As he uncovers the secrets of the past, he strives to restore both himself and his family bonds.
              </p>
              <ul className="space-y-2 mb-6 sm:text-base text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-green">✓</span> Emotional narrative-driven gameplay
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green">✓</span> Beautiful pixel art visuals
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green">✓</span> Atmospheric soundtrack
                </li>
              </ul>
              <PixelButton 
                className="px-4 py-2 bg-green-600 text-white text-xs border-b-2 border-r-2 border-green-800 hover:bg-[#1e941e] transition-colors"
                particleCount={10}
                particleSize={4}
              >
                LEARN MORE
              </PixelButton>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            className="bg-white p-6 border-2 border-green pixel-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-green text-4xl mb-4 pixel-icon">🎮</div>
            <h3 className="text-xl text-black mb-3">Retro Inspired</h3>
            <p className="text-gray-600">We create games that capture the essence of classic gaming with modern twists.</p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white p-6 border-2 border-green pixel-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-green text-4xl mb-4 pixel-icon">🎨</div>
            <h3 className="text-xl text-black mb-3">Pixel Perfect</h3>
            <p className="text-gray-600">Every pixel is carefully crafted to create visually stunning game worlds.</p>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white p-6 border-2 border-green pixel-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-green text-4xl mb-4 pixel-icon">🏆</div>
            <h3 className="text-xl text-black mb-3">Award Winning</h3>
            <p className="text-gray-600">Our games have received recognition for their innovative gameplay and design.</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <PixelButton 
            className="px-6 py-3 bg-[#1e941e] text-white text-sm border-b-4 border-r-4 border-green-800 hover:bg-green-600 transition-colors"
            particleCount={20}
            particleColors={['#1e941e', '#156415', '#0f4c0f', '#ffffff']}
          >
            VIEW OUR PORTFOLIO
          </PixelButton>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
