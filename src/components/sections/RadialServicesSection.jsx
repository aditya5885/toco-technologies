import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RadialServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function RadialServicesSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  // 6 radial services with elegant curved Bezier paths (1000x1000 viewport space, center at 500,500)
  const services = [
    { 
      title: "Web Application Development", 
      class: "node-top", 
      pathD: "M 500 500 C 520 370, 480 240, 500 110" 
    },
    { 
      title: "Mobile App Development", 
      class: "node-top-right", 
      pathD: "M 500 500 C 560 410, 700 310, 835 260" 
    },
    { 
      title: "E-Commerce Solutions", 
      class: "node-bottom-right", 
      pathD: "M 500 500 C 560 590, 700 690, 835 740" 
    },
    { 
      title: "ERP Solutions", 
      class: "node-bottom", 
      pathD: "M 500 500 C 480 630, 520 760, 500 890" 
    },
    { 
      title: "Custom Software Development", 
      class: "node-bottom-left", 
      pathD: "M 500 500 C 440 590, 300 690, 165 740" 
    },
    { 
      title: "Digital Marketing", 
      class: "node-top-left", 
      pathD: "M 500 500 C 440 410, 300 310, 165 260" 
    }
  ];

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

      // Entry sequence for center node, curved paths, and outer nodes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      // 1. Center logo & glowing nebula cloud pop in
      tl.fromTo('.radial-center-node-wrapper',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }
      );

      // 2. Animate each curved connector line & outer node sequentially
      services.forEach((svc, idx) => {
        const pathClass = `.path-${idx}`;
        const pulseClass = `.pulse-${idx}`;
        const nodeClass = `.node-index-${idx} .radial-node-content`;

        // Curved Bezier line draws out smoothly from center
        tl.fromTo(pathClass,
          { strokeDashoffset: 500 },
          { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.1'
        );

        // Outer circular node pops in when line reaches target
        tl.fromTo(nodeClass,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.3)' },
          '-=0.1'
        );

        // Continuous energy pulse fades in
        tl.fromTo(pulseClass,
          { opacity: 0 },
          { opacity: 1, duration: 0.2 },
          '-=0.3'
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="radial-section" ref={sectionRef} id="services-map">
      {/* Background dot grid pattern overlay */}
      <div className="radial-bg-grid"></div>

      <div className="radial-container">
        
        {/* Header */}
        <div className="radial-header">
          <span className="radial-badge radial-header-item">Our Capabilities</span>
          <h2 className="radial-title radial-header-item section-title section-title-light-bg">
            Empowering your business with <span className="section-title-highlight">intelligent solutions.</span>
          </h2>
        </div>

        {/* Mind Map Area */}
        <div className="radial-map-viewport" ref={mapRef}>
          
          {/* Orbiting track container */}
          <div className="radial-orbit-track">
            {/* SVG Curved Bezier Connector Lines */}
            <svg className="radial-connectors-svg" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="tocoCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#0052FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="tocoPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A3FF" />
                  <stop offset="50%" stopColor="#0052FF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>

              {/* Curved background SVG paths */}
              {services.map((svc, idx) => (
                <path 
                  key={`line-${idx}`}
                  className={`radial-curve-path path-${idx}`} 
                  d={svc.pathD} 
                  fill="none" 
                  stroke="url(#tocoCurveGrad)" 
                  strokeWidth="2.5" 
                  strokeDasharray="500" 
                  strokeDashoffset="500" 
                />
              ))}

              {/* Animated glowing pulses flowing outward along curved paths */}
              {services.map((svc, idx) => (
                <path 
                  key={`pulse-${idx}`}
                  className={`radial-pulse-path pulse-${idx}`} 
                  d={svc.pathD} 
                  fill="none" 
                  stroke="url(#tocoPulseGrad)" 
                  strokeWidth="3.5" 
                  style={{ opacity: 0 }}
                />
              ))}
            </svg>

            {/* Orbiting Outer Circular Nodes */}
            {services.map((svc, idx) => (
              <div key={idx} className={`radial-outer-node ${svc.class} node-index-${idx}`}>
                <div className="radial-node-content">
                  <span>{svc.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Central Logo Node & Vibrant Toco Theme Cloud Glow */}
          <div className="radial-center-node-wrapper">
            {/* Multi-layered organic gradient cloud nebula behind logo circle */}
            <div className="radial-cloud-glow-container">
              <div className="radial-cloud-layer cloud-layer-1"></div>
              <div className="radial-cloud-layer cloud-layer-2"></div>
              <div className="radial-cloud-layer cloud-layer-3"></div>
            </div>

            {/* Central White Node with Toco Logo */}
            <div className="radial-center-node">
              <img src="/logo.jpeg" alt="Toco Technologies Logo" className="radial-center-logo" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

