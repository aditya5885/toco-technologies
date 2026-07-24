import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressLineRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }
      });

      // Initial state
      gsap.set(containerRef.current, { opacity: 1 });
      gsap.set('.preloader-item', { opacity: 0, y: 20 });
      gsap.set(logoRef.current, { scale: 0.85, opacity: 0 });

      // 1. Reveal brand label, logo & counter
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.4)'
      })
      .to('.preloader-item', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.4');

      // 2. Count 0 to 100%
      const counterVal = { val: 0 };
      tl.to(counterVal, {
        val: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          const currentVal = Math.floor(counterVal.val);
          setPercent(currentVal);
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${currentVal}%`;
          }
        }
      }, '-=0.2');

      // 3. Smooth curtain exit reveal
      tl.to('.preloader-brand, .preloader-counter-box, .preloader-logo-card', {
        opacity: 0,
        y: -30,
        duration: 0.45,
        ease: 'power2.in'
      });

      tl.to(containerRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.65,
        ease: 'power4.inOut'
      }, '-=0.15');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-overlay" ref={containerRef}>
      {/* Background ambient lighting */}
      <div className="preloader-bg-glow"></div>
      <div className="preloader-bg-grid"></div>

      <div className="preloader-content">
        
        {/* Brand label */}
        <div className="preloader-brand preloader-item">
          <span className="preloader-badge-dot"></span>
          <span>TOCO TECHNOLOGIES</span>
        </div>

        {/* Central Logo Card */}
        <div className="preloader-logo-card" ref={logoRef}>
          {/* Orbiting Spinner Ring */}
          <div className="preloader-ring-spinner"></div>
          
          <div className="preloader-logo-disc">
            <img src="/logo.jpeg" alt="Toco Technologies Logo" className="preloader-logo-img" />
          </div>
          <div className="preloader-logo-aura"></div>
        </div>

        {/* Numeric Progress Counter */}
        <div className="preloader-counter-box preloader-item">
          <div className="preloader-number-wrap">
            <span className="preloader-percent-num">{percent < 10 ? `0${percent}` : percent}</span>
            <span className="preloader-percent-symbol">%</span>
          </div>
          
          <div className="preloader-progress-track">
            <div className="preloader-progress-fill" ref={progressLineRef}></div>
          </div>
        </div>

      </div>
    </div>
  );
}

