import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Terminal, ShieldCheck, Check } from 'lucide-react';
import './PillarsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function PillarsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo('.pillars-badge', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo('.pillars-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.pillars-connector-wrapper',
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut', transformOrigin: 'left center' },
        '-=0.3'
      )
      .fromTo('.pillars-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.pillars-card-list li',
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pillars-section" ref={sectionRef} id="careers">
      <div className="pillars-container">
        
        {/* Header */}
        <div className="pillars-header">
          <span className="pillars-badge">Our Engagement Model</span>
          <h2 className="pillars-title section-title section-title-light-bg">
            How We Partner &amp; <span className="section-title-highlight">Deliver Success</span>
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="pillars-content-wrapper">
          {/* Desktop/Tablet Connector Line */}
          <div className="pillars-connector-wrapper">
            <svg className="pillars-connector-svg" width="100%" height="4" viewBox="0 0 1000 4" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 2 L 1000 2" stroke="url(#pillars-line-grad)" strokeWidth="3" strokeDasharray="16, 12" />
              <defs>
                <linearGradient id="pillars-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3 Cards Wrapper */}
          <div className="pillars-grid">
            
            {/* Card 1: Discovery */}
            <div className="pillars-card card-orange">
              <div className="pillars-card-bg-glow"></div>
              <div className="pillars-card-number">01</div>
              <div className="pillars-card-watermark">DISCOVER</div>
              
              <div className="pillars-card-icon-box">
                <Compass size={24} className="icon-pulse-hover" />
              </div>
              <h3 className="pillars-card-title">Strategy &amp; Discovery</h3>
              <span className="pillars-card-subtitle">ALIGNING GOALS</span>
              
              <ul className="pillars-card-list">
                <li><Check size={14} className="check-icon" /> Map user journeys &amp; wireframes</li>
                <li><Check size={14} className="check-icon" /> Tech stack selection &amp; architecture</li>
                <li><Check size={14} className="check-icon" /> Project scope &amp; milestone roadmap</li>
              </ul>
              <div className="pillars-card-footer">
                <span>consult@toco.tech</span>
              </div>
            </div>

            {/* Card 2: Agile */}
            <div className="pillars-card card-blue">
              <div className="pillars-card-bg-glow"></div>
              <div className="pillars-card-number">02</div>
              <div className="pillars-card-watermark">BUILD</div>
              
              <div className="pillars-card-icon-box">
                <Terminal size={24} className="icon-pulse-hover" />
              </div>
              <h3 className="pillars-card-title">Agile Execution</h3>
              <span className="pillars-card-subtitle">CREATING THE PRODUCT</span>
              
              <ul className="pillars-card-list">
                <li><Check size={14} className="check-icon" /> Iterative frontend &amp; backend code</li>
                <li><Check size={14} className="check-icon" /> Multi-device compatibility testing</li>
                <li><Check size={14} className="check-icon" /> Continuous delivery &amp; weekly demos</li>
              </ul>
              <div className="pillars-card-footer">
                <span>sprint cadence: 2-week intervals</span>
              </div>
            </div>

            {/* Card 3: Support */}
            <div className="pillars-card card-green">
              <div className="pillars-card-bg-glow"></div>
              <div className="pillars-card-number">03</div>
              <div className="pillars-card-watermark">SCALE</div>
              
              <div className="pillars-card-icon-box">
                <ShieldCheck size={24} className="icon-pulse-hover" />
              </div>
              <h3 className="pillars-card-title">Support &amp; Scale</h3>
              <span className="pillars-card-subtitle">GUARANTEEING UPTIME</span>
              
              <ul className="pillars-card-list">
                <li><Check size={14} className="check-icon" /> Automated security updates &amp; patches</li>
                <li><Check size={14} className="check-icon" /> Real-time page performance audits</li>
                <li><Check size={14} className="check-icon" /> Dedicated 24/7 developer assistance</li>
              </ul>
              <div className="pillars-card-footer">
                <span>response time: under 2 hours</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
