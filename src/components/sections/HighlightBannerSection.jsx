import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './HighlightBannerSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function HighlightBannerSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hb-banner-content *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hb-section" ref={sectionRef} id="contact-banner">
      <div className="hb-radial-glow"></div>
      
      <div className="hb-banner-content">
        <h2 className="hb-banner-title">
          Let's make your software vision a reality
        </h2>
        
        <p className="hb-banner-desc">
          Trusted by forward-thinking brands to deliver high-impact custom web & mobile apps. Get in touch to schedule a discovery call.
        </p>
        
        <div className="hb-banner-actions">
          <a href="#contact" className="hb-btn-dark">
            <span>Talk to sales</span>
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="hb-btn-white">
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}
