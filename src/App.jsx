import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import About from './components/About'
import Lenis from 'lenis';
function App() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    checkMobile();
  
    window.addEventListener("resize", checkMobile);
  
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
    useEffect( () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
        direction: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      })
  
      // Make lenis available globally
      window.lenis = lenis;
  
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
      
      return () => {
        // Clean up
        window.lenis = null;
      };
    }, [])

  return (
    <>
    <HomePage/>
    </>
  )
}

export default App
