import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VisionSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
  const sectionRef = useRef(null);
  const bubbleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and scale in the bubble
      gsap.fromTo(bubbleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Fade in text lines
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      
      {/* 3D Glass Bubble backdrop */}
      <div className="vision-bubble-container" ref={bubbleRef}>
        <div className="vision-bubble"></div>
        <div className="vision-bubble-glow"></div>
      </div>

      {/* Focus Statement overlay */}
      <div className="vision-container">
        <p className="vision-text" ref={textRef}>
          We build powerful, user-focused digital solutions that inspire and perform. 
          With creativity and precision, our team designs, develops, and delivers results 
          that help brands grow smarter every day.
        </p>
      </div>

    </section>
  );
}
