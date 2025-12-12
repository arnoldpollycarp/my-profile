import { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const glowRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;
  };

  // Smooth animation loop
  useEffect(() => {
    const updateGlow = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${mousePos.current.x - 125}px, ${
          mousePos.current.y - 125
        }px)`;
      }
      rafId.current = requestAnimationFrame(updateGlow);
    };

    rafId.current = requestAnimationFrame(updateGlow);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // aos animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-out-sine',
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative bg-[#050813] min-h-screen overflow-hidden scroll-smooth"
    >
      <Nav />

      <div
        ref={glowRef}
        className="
          absolute
          pointer-events-none
          w-[250px] h-[250px]
          rounded-full
          blur-3xl
          opacity-70
          bg-blue-500/30
          transition-transform
          duration-75
          z-0
        "
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      <Hero />
      <div className='pl-16 pr-16 pt-6 pb-6 divide-y-2 divide-gray-700'>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;