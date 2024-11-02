import React, { useEffect, useRef } from 'react';
import '../styles/Background.css';

const Background = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r110/three.min.js'); 
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.net.min.js');

        if (window.VANTA && vantaRef.current) {
          const vantaEffect = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 80.00,
            minWidth: 80.00,
            scale: 1.00,
            scaleMobile: 1.00,
            points: 15.00,
            color: 0x059669,
            backgroundColor: 0x202025,
            maxDistance: 20.00,
            spacing: 13.00
          });

          return () => {
            if (vantaEffect) {
              vantaEffect.destroy();
            }
          };
        } else {
          console.log("VANTA is not defined or element not found");
        }
      } catch (error) {
        console.error("Failed to load scripts:", error);
      }
    };
    
    initVanta();
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        console.log(`${src} loaded successfully`);
        resolve();
      };
      script.onerror = (error) => {
        console.error(`Failed to load ${src}`, error);
        reject(error);
      };
      document.head.appendChild(script);
    });
  };

  return (
    <div ref={vantaRef} className="background"></div>
  );
};

export default Background;
