import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VisionSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
  const sectionRef = useRef(null);
  const logoContainerRef = useRef(null);

  const text = "We build powerful, user-focused digital solutions that inspire and perform. With creativity and precision, our team designs, develops, and delivers results that help brands grow smarter every day.";
  
  // Split text into words
  const words = text.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger fade-in of words on scroll (Apple-style reveal)
      gsap.fromTo('.vision-word',
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.04,
          duration: 0.35,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 1.2,
          }
        }
      );

      // Logo backdrop subtle fade and scale on scroll
      gsap.fromTo(logoContainerRef.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1.05,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      
      {/* Toco Logo backdrop - Slowly floating with a soft glow, replacing the circle */}
      <div className="vision-logo-container" ref={logoContainerRef}>
        <div className="vision-bg-logo-wrapper">
          <img src="/logo.jpeg" alt="Toco logo watermark" className="vision-bg-logo" />
        </div>
        <div className="vision-logo-glow"></div>
      </div>

      {/* Focus Statement overlay with word-by-word scroll reveal */}
      <div className="vision-container">
        <p className="vision-text">
          {words.map((word, idx) => (
            <span key={idx} className="vision-word">
              {word}{' '}
            </span>
          ))}
        </p>
      </div>

    </section>
  );
}
