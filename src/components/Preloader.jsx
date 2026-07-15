import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const logoWrapperRef = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Unlock scroll and notify parent to unmount loader
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }
      });

      // Initial state
      gsap.set(containerRef.current, { opacity: 1 });
      gsap.set(logoWrapperRef.current, { scale: 0.8, opacity: 0 });
      gsap.set('.preloader-progress-ring', { opacity: 0, scale: 0.8 });

      // 1. Reveal logo and progress ring
      tl.to([logoWrapperRef.current, '.preloader-progress-ring'], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.5)'
      });

      // 2. Pulse / breathing loop for logo (independent infinite tween during loading)
      const pulse = gsap.to(logoWrapperRef.current, {
        scale: 1.05,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 3. Count 0 to 100 and update circle strokeDashoffset (circumference = 477.5)
      const counterVal = { val: 0 };
      const totalLength = 477.5;
      
      tl.to(counterVal, {
        val: 100,
        duration: 2.2,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (ringRef.current) {
            const progressOffset = totalLength - (counterVal.val / 100) * totalLength;
            ringRef.current.style.strokeDashoffset = progressOffset;
          }
        }
      }, '-=0.4');

      // 4. Logo zoom transition (kill the infinite pulse, zoom massively through logo + ring)
      tl.add(() => {
        pulse.kill();
      });

      // Scale logo and ring massively and fade out (optimized for speed and zero paint lag)
      tl.to([logoWrapperRef.current, '.preloader-progress-ring'], {
        scale: 6,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      });

      // Fade out screen overlay
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out'
      }, '-=0.3');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-overlay" ref={containerRef}>
      <div className="preloader-content-wrapper">
        <div className="preloader-logo-container">
          
          {/* Glowing Circular Progress SVG */}
          <svg className="preloader-progress-ring" width="180" height="180">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2F9EE4" />
                <stop offset="100%" stopColor="#ba68c8" />
              </linearGradient>
            </defs>
            <circle 
              className="preloader-ring-track"
              cx="90" 
              cy="90" 
              r="76" 
              stroke="rgba(255, 255, 255, 0.05)" 
              strokeWidth="4" 
              fill="transparent" 
            />
            <circle 
              className="preloader-ring-indicator"
              cx="90" 
              cy="90" 
              r="76" 
              stroke="url(#ringGradient)" 
              strokeWidth="4" 
              fill="transparent" 
              strokeDasharray="477.5"
              strokeDashoffset="477.5"
              ref={ringRef}
            />
          </svg>

          {/* Centered logo */}
          <div className="preloader-logo-wrapper" ref={logoWrapperRef}>
            <img src="/logo.jpeg" alt="Toco Technologies Logo" className="preloader-logo-large" />
            <div className="preloader-logo-glow"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
