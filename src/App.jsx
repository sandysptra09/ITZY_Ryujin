import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Index from './pages/Index';

function App() {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Index />
    </>
  );
}

export default App;
