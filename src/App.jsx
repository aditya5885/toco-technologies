import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Phone } from 'lucide-react';
import Preloader from './components/Preloader';
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
import TechStackSection from './components/sections/TechStackSection';
import SlantedPressShowcase from './components/sections/SlantedPressShowcase';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import VisionSection from './components/sections/VisionSection';
import RadialServicesSection from './components/sections/RadialServicesSection';
import HighlightBannerSection from './components/sections/HighlightBannerSection';
import ContactPage from './components/pages/ContactPage';
import CareersPage from './components/pages/CareersPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ProjectsPage from './components/pages/ProjectsPage';
import './App.css';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const lenisRef = useRef(null);

  // Monitor routing changes in URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Let the DOM render then refresh GSAP triggers
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 50);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

    lenisRef.current = lenis;

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

  // Handle auto-scroll to hash on load after preloader completes (only for homepage anchors)
  useEffect(() => {
    if (!isLoading && window.location.hash && 
        window.location.hash !== '#contact' && 
        window.location.hash !== '#careers' &&
        window.location.hash !== '#about' &&
        window.location.hash !== '#services' &&
        window.location.hash !== '#projects') {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target && lenisRef.current) {
        setTimeout(() => {
          lenisRef.current.scrollTo(target, { 
            duration: 1.6,
            offset: 0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }, 400);
      }
    }
  }, [isLoading]);

  // Global click listener to intercept all hash navigation clicks and trigger smooth scrolling
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          // Allow subpage hash routing to function naturally without smooth scroll interception
          const mainRoutes = ['#about', '#services', '#projects', '#careers', '#contact'];
          if (mainRoutes.includes(href)) {
            return;
          }

          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            if (lenisRef.current) {
              lenisRef.current.scrollTo(targetEl, {
                duration: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
              });
            }
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    if (!isLoading) {
      document.addEventListener('click', handleGlobalClick);
    }
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isLoading]);

  const isContactPage = currentHash === '#contact';
  const isCareersPage = currentHash === '#careers';
  const isAboutPage = currentHash === '#about';
  const isServicesPage = currentHash === '#services';
  const isProjectsPage = currentHash === '#projects';

  const isFullPage = isContactPage || isCareersPage || isAboutPage || isServicesPage || isProjectsPage;

  return (
    <>
      {/* Preloader Screen */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Precision Trailing Cursor */}
      <CustomCursor />
      
      {/* Universal Floating Header */}
      <Header isContactPage={isFullPage} />
      
      {isContactPage ? (
        /* Separate Full Page Contact View */
        <ContactPage />
      ) : isCareersPage ? (
        /* Separate Full Page Careers View */
        <CareersPage />
      ) : isAboutPage ? (
        /* Separate Full Page About View */
        <AboutPage />
      ) : isServicesPage ? (
        /* Separate Full Page Services View */
        <ServicesPage />
      ) : isProjectsPage ? (
        /* Separate Full Page Projects View */
        <ProjectsPage />
      ) : (
        /* Main Home Page Sections */
        <>
          {/* Fullscreen Video Hero */}
          <VideoHero isLoading={isLoading} />
          
          {/* Technology Stack / Engineering Excellence Section */}
          <TechStackSection />
          
          {/* About Us Scroll Reveal Section */}
          <AboutUsReveal />
          
          {/* Why Choose Us Timeline Section */}
          <WhyChooseUsSection />
          
          {/* Expertise Section (Oak & Grid style) */}
          <ExpertiseSection />
          
          {/* Interactive Radial Services Mind-Map Section */}
          <RadialServicesSection />
          
          {/* Mixed-media Display Title Section */}
          <MixedMediaHero />
          
          {/* Truus-inspired Client logo marquee section */}
          <ClientShowcase />
          
          {/* Slanted press/publication marquee section */}
          <SlantedPressShowcase />
          
          {/* Joy Rush style capabilities section */}
          <CapabilityShowcase />

          {/* Centered Focus / Vision Statement Section */}
          <VisionSection />
          
          {/* Testimonials Section */}
          <TestimonialSection />
          
          {/* FAQ Accordion Section */}
          <FaqSection />

          {/* Sky Blue Contact Banner Section (Bottom CTA) */}
          <HighlightBannerSection />
        </>
      )}
      
      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons for quick support */}
      <div className="floating-contact-container">
        <a 
          href="https://wa.me/971500000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="whatsapp-svg" fill="currentColor">
            <path d="M12.031 2c-5.514 0-10 4.486-10 10 0 1.83.493 3.549 1.353 5.034L2.012 22l5.093-1.332A9.92 9.92 0 0 0 12.03 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm-.008 18c-1.653 0-3.202-.435-4.542-1.199l-.326-.188-3.01.786.804-2.936-.208-.329A7.95 7.95 0 0 1 4.022 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.586-6.19c-.25-.125-1.478-.73-1.706-.81-.228-.08-.393-.125-.558.125-.165.25-.638.81-.783.973-.145.163-.29.183-.54.059-.25-.125-1.056-.389-2.011-1.242-.743-.662-1.245-1.48-1.39-1.73-.145-.25-.015-.385.11-.51.113-.11.25-.29.375-.435.125-.145.166-.25.25-.415.083-.17.042-.32-.02-.445-.063-.125-.558-1.345-.765-1.843-.2-.49-.403-.423-.558-.43-.145-.008-.31-.008-.475-.008-.165 0-.435.063-.663.313-.228.25-.87 8.5-1.055 2.013 0 1.188.865 2.33 1.053 2.5.19.17 1.703 2.6 4.125 3.645.578.25 1.03.398 1.38.51.58.185 1.11.158 1.528.095.467-.07 1.478-.605 1.685-1.19.208-.585.208-1.085.145-1.19-.063-.105-.228-.165-.478-.29z" />
          </svg>
        </a>
        <a 
          href="tel:+971500000000" 
          className="floating-btn phone-btn"
          aria-label="Call Us"
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  );
}

export default App;

