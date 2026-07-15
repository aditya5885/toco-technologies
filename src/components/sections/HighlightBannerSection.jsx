import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity } from 'lucide-react';
import './HighlightBannerSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function HighlightBannerSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in texts
      gsap.fromTo('.hb-anim-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Draw hand-drawn stroke underline (length = 320)
      gsap.fromTo(pathRef.current,
        { strokeDashoffset: 320 },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hb-section" ref={sectionRef}>
      
      {/* Background drifting light shapes */}
      <div className="hb-bg-glows">
        <div className="hb-glow-1"></div>
        <div className="hb-glow-2"></div>
      </div>

      <div className="hb-container">
        
        {/* Heartbeat progress badge */}
        <div className="hb-badge-wrapper hb-anim-item">
          <div className="hb-badge-icon-box">
            <Activity size={16} className="hb-heartbeat-icon" />
          </div>
          <span>100% Client-Focused Execution</span>
        </div>

        {/* Heading */}
        <h2 className="hb-title hb-anim-item">
          Maximize speed and performance with our custom 
          <span className="hb-highlight-wrapper">
             software solutions.
            {/* SVG Swoosh/Underline vector */}
            <svg viewBox="0 0 300 20" className="hb-swoosh-svg">
              <path 
                d="M 10 10 Q 150 18 290 10" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeDasharray="320"
                strokeDashoffset="320"
                ref={pathRef}
              />
            </svg>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="hb-subtitle hb-anim-item">
          We engineer responsive websites, fluid web applications, and robust cloud architectures built to scale your business. With us, your project doesn't just launch — it succeeds.
        </p>

        {/* Button */}
        <div className="hb-btn-box hb-anim-item">
          <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="hb-btn">
            Start Your Project
          </a>
        </div>

      </div>

    </section>
  );
}
