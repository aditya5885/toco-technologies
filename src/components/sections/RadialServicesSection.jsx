import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RadialServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function RadialServicesSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in header elements
      gsap.fromTo('.radial-header-item',
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

      // Radial map entry sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 70%',
        }
      });

      // 1. Center node expands
      tl.fromTo('.radial-center-node-wrapper',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }
      );

      // 2. Lines draw out
      tl.fromTo('.radial-curve-path',
        { strokeDashoffset: 400 },
        { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 },
        '-=0.4'
      );

      // 3. Outer nodes pop in
      tl.fromTo('.radial-outer-node',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.2)', stagger: 0.06 },
        '-=0.6'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Custom Software", class: "node-top" },
    { title: "Web App Development", class: "node-top-right" },
    { title: "Mobile App Development", class: "node-bottom-right" },
    { title: "Cloud Solutions", class: "node-bottom" },
    { title: "UI/UX Design", class: "node-bottom-left" },
    { title: "AI Integration", class: "node-top-left" }
  ];

  return (
    <section className="radial-section" ref={sectionRef} id="services-map">
      <div className="radial-container">
        
        {/* Header */}
        <div className="radial-header">
          <span className="radial-badge radial-header-item">Our Capabilities</span>
          <h2 className="radial-title radial-header-item">Empowering your business with intelligent solutions.</h2>
        </div>

        {/* Node Map Area */}
        <div className="radial-map-viewport" ref={mapRef}>
          
          {/* SVG Connector Lines (outside the track to prevent double-rotation) */}
          <svg className="radial-connectors-svg" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2F9EE4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ba68c8" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2F9EE4" />
                <stop offset="100%" stopColor="#ba68c8" />
              </linearGradient>
            </defs>

            {/* Static background lines */}
            <path className="radial-curve-path" d="M 500 500 Q 500 300 500 100" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
            <path className="radial-curve-path" d="M 500 500 Q 660 380 820 300" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
            <path className="radial-curve-path" d="M 500 500 Q 660 620 820 700" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
            <path className="radial-curve-path" d="M 500 500 Q 500 700 500 900" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
            <path className="radial-curve-path" d="M 500 500 Q 340 620 180 700" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
            <path className="radial-curve-path" d="M 500 500 Q 340 380 180 300" fill="none" stroke="url(#curveGradient)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />

            {/* Animated glowing pulses flowing outward */}
            <path className="radial-pulse-path" d="M 500 500 Q 500 300 500 100" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
            <path className="radial-pulse-path" d="M 500 500 Q 660 380 820 300" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
            <path className="radial-pulse-path" d="M 500 500 Q 660 620 820 700" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
            <path className="radial-pulse-path" d="M 500 500 Q 500 700 500 900" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
            <path className="radial-pulse-path" d="M 500 500 Q 340 620 180 700" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
            <path className="radial-pulse-path" d="M 500 500 Q 340 380 180 300" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" />
          </svg>

          {/* Orbiting track (holds outer circles for rotation) */}
          <div className="radial-orbit-track">
            {/* Orbiting Outer Nodes */}
            {services.map((svc, idx) => (
              <div key={idx} className={`radial-outer-node ${svc.class}`}>
                <div className="radial-node-content">
                  <span>{svc.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Central Logo Node (outside track so it remains static) */}
          <div className="radial-center-node-wrapper">
            <div className="radial-center-node">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="radial-center-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="radial-center-glow"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
