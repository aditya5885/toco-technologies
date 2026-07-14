import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { 
  VideoHero,
  AboutUsReveal,
  ExpertiseSection,
  MixedMediaHero,
  ClientShowcase,
  CapabilityShowcase,
  TestimonialSection,
  FaqSection
} from './components/sections/HomeSections';
import './App.css';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sync Lenis scrolls with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    // Hook Lenis into GSAP ticker
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {/* Custom Precision Trailing Cursor */}
      <CustomCursor />
      
      {/* Universal Floating Header */}
      <Header />
      
      {/* Fullscreen Video Hero */}
      <VideoHero />
      
      {/* About Us Scroll Reveal Section */}
      <AboutUsReveal />
      
      {/* Expertise Section (Oak & Grid style) */}
      <ExpertiseSection />
      
      {/* Mixed-media Display Title Section */}
      <MixedMediaHero />
      
      {/* Truus-inspired Client logo marquee section */}
      <ClientShowcase />
      
      {/* Joy Rush style capabilities section */}
      <CapabilityShowcase />
      

      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* FAQ Accordion Section */}
      <FaqSection />
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
