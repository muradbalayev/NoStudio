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
  
  useEffect(() => {
    let lenis = null;
    
    // Only initialize Lenis if not on mobile
    if (!isMobile) {
      lenis = new Lenis({
        duration: 0.8, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Daha yumşaq easing (eksponent dəyər -8 əvəzinə -10)
        direction: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1, // Wheel multiplier azaldıldı, sürətli scroll zamanı yük azalsın
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true, // AutoResize söndürülür, bəzən əlavə reflow-lar performansı aşağı sala bilər
      });
  
      window.lenis = lenis;
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  
    return () => {
      if (lenis) {
        lenis.destroy();
        window.lenis = null;
      }
    };
  }, [isMobile]); 
  
  return (
    <>
    <HomePage/>
    </>
  )
}

export default App
