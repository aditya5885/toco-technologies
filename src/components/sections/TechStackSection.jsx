import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Smartphone, Database, Cpu } from 'lucide-react';
import './TechStackSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slide in the diagonal bars on scroll
      gsap.fromTo('.bar-yellow, .bar-sky-left',
        { x: -150, opacity: 0, skewX: -10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.bar-sky-right',
        { x: 150, opacity: 0, skewX: 10 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // 2. Animate the left column content elements
      const contentChildren = contentRef.current.children;
      gsap.fromTo(contentChildren,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          }
        }
      );

      // 3. Animate the right column (orbits and orb container)
      gsap.fromTo('.orbit-ring',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 0.8,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.glass-orb-container',
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 75%',
          }
        }
      );

      // 4. Staggered fade and zoom in for orbit floating icons
      gsap.fromTo('.orb-floating-icon',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 70%',
          }
        }
      );

      // 5. Infinite floating animation for the glass orb
      gsap.to('.glass-orb-container', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 6. Drift/Float animations for orbit tech icons
      gsap.to('.icon-web', { y: -8, x: 5, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.icon-mobile', { y: 8, x: -6, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.icon-db', { y: -6, x: -8, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.icon-cpu', { y: 7, x: 7, duration: 4.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      // 7. Infinite spinning of orbital rings inside the SVG core graphic
      gsap.to('.orb-ring-1', {
        rotation: 360,
        transformOrigin: 'center',
        duration: 9,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.orb-ring-2', {
        rotation: -360,
        transformOrigin: 'center',
        duration: 14,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.orb-ring-3', {
        rotation: 180,
        transformOrigin: 'center',
        duration: 11,
        repeat: -1,
        ease: 'none'
      });
    }, sectionRef);

    // 8. Mousemove interactive cursor glow animation
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(glowRef.current, {
        x: x,
        y: y,
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => {
      ctx.revert();
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="tech-section" ref={sectionRef} id="tech-stack">
      {/* Interactive mouse-following cursor glow */}
      <div className="tech-cursor-glow" ref={glowRef}></div>

      {/* Premium fading dot-grid background overlay */}
      <div className="tech-bg-grid"></div>

      {/* Blueprint grid intersection markers (+) */}
      <div className="grid-marker top-left-marker">+</div>
      <div className="grid-marker top-right-marker">+</div>
      <div className="grid-marker bottom-left-marker">+</div>
      <div className="grid-marker bottom-right-marker">+</div>

      {/* Diagonal Decorative Color Pills from Reference Image */}
      <div className="tech-diagonal-bar bar-yellow"></div>
      <div className="tech-diagonal-bar bar-sky-left"></div>
      <div className="tech-diagonal-bar bar-sky-right"></div>

      <div className="tech-split-container">
        
        {/* Left Column: Heading, description & tags */}
        <div className="tech-content-col" ref={contentRef}>
          <div className="tech-badge">
            <span className="tech-badge-dot"></span>
            our expertise
          </div>
          
          <h2 className="tech-split-title section-title section-title-light-bg">
            Engineering Excellence with <span className="section-title-highlight">Modern Technologies</span>
          </h2>
          
          <p className="tech-split-desc">
            We leverage cutting-edge frameworks, robust databases, and scalable cloud infrastructure to build enterprise-grade applications tailored for your digital transformation.
          </p>

          <div className="tech-split-tags">
            <span className="tech-chip">React / Next.js</span>
            <span className="tech-chip">Node.js</span>
            <span className="tech-chip">Cloud Scaling</span>
            <span className="tech-chip">API Architectures</span>
          </div>
        </div>

        {/* Right Column: Faint Orbits and Interactive Glassmorphic Sphere */}
        <div className="tech-visual-col" ref={visualRef}>
          
          {/* Concentric Circular Orbit Rings in Background */}
          <div className="orbit-ring ring-inner"></div>
          <div className="orbit-ring ring-middle"></div>
          <div className="orbit-ring ring-outer"></div>

          {/* Floating Tech Icons positioned along the concentric orbits */}
          <div className="orb-floating-icon icon-web" title="Web Development">
            <Globe size={18} />
          </div>
          <div className="orb-floating-icon icon-mobile" title="Mobile Applications">
            <Smartphone size={18} />
          </div>
          <div className="orb-floating-icon icon-db" title="Database & Cloud">
            <Database size={18} />
          </div>
          <div className="orb-floating-icon icon-cpu" title="System Performance">
            <Cpu size={18} />
          </div>

          {/* Floating Glassmorphic Orb */}
          <div className="glass-orb-container">
            <div className="glass-orb">
              <div className="glass-orb-glare"></div>
              
              {/* Tech Icon Core Graphic inside the Orb */}
              <div className="orb-core-graphic">
                <svg viewBox="0 0 100 100" className="orb-svg-icon">
                  <ellipse cx="50" cy="50" rx="36" ry="12" fill="none" stroke="url(#orb-blue-cyan)" strokeWidth="2" className="orb-ring-1" />
                  <ellipse cx="50" cy="50" rx="36" ry="12" fill="none" stroke="url(#orb-blue-cyan)" strokeWidth="2" className="orb-ring-2" />
                  <ellipse cx="50" cy="50" rx="36" ry="12" fill="none" stroke="url(#orb-blue-cyan)" strokeWidth="2" className="orb-ring-3" />
                  <circle cx="50" cy="50" r="12" fill="url(#orb-core-blue-gradient)" />
                  
                  <defs>
                    <linearGradient id="orb-blue-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A3FF" />
                      <stop offset="50%" stopColor="#0052FF" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                    <radialGradient id="orb-core-blue-gradient" cx="40%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="65%" stopColor="#00A3FF" />
                      <stop offset="100%" stopColor="#0052FF" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


