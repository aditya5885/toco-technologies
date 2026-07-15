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
      gsap.fromTo('.pillars-card',
        { opacity: 0, y: 50 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pillars-section" ref={sectionRef}>
      <div className="pillars-container">
        
        {/* Header */}
        <div className="pillars-header">
          <span className="pillars-badge">Our Engagement Model</span>
          <h2 className="pillars-title">How We Partner &amp; Deliver Success</h2>
        </div>

        {/* 3 Cards Wrapper */}
        <div className="pillars-grid">
          
          {/* Card 1: Discovery */}
          <div className="pillars-card card-left-tilt">
            <div className="pillars-card-icon-box orange-theme">
              <Compass size={22} />
            </div>
            <h3 className="pillars-card-title">Strategy &amp; Discovery</h3>
            <span className="pillars-card-subtitle">ALIGNING GOALS</span>
            
            <ul className="pillars-card-list">
              <li><Check size={14} /> Map user journeys &amp; wireframes</li>
              <li><Check size={14} /> Tech stack selection &amp; architecture</li>
              <li><Check size={14} /> Project scope &amp; milestone roadmap</li>
            </ul>
            <div className="pillars-card-footer">
              <span>consult@toco.tech</span>
            </div>
          </div>

          {/* Card 2: Agile */}
          <div className="pillars-card card-no-tilt">
            <div className="pillars-card-icon-box blue-theme">
              <Terminal size={22} />
            </div>
            <h3 className="pillars-card-title">Agile Execution</h3>
            <span className="pillars-card-subtitle">CREATING THE PRODUCT</span>
            
            <ul className="pillars-card-list">
              <li><Check size={14} /> Iterative frontend &amp; backend code</li>
              <li><Check size={14} /> Multi-device compatibility testing</li>
              <li><Check size={14} /> Continuous delivery &amp; weekly demos</li>
            </ul>
            <div className="pillars-card-footer">
              <span>sprint cadence: 2-week intervals</span>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="pillars-card card-right-tilt">
            <div className="pillars-card-icon-box green-theme">
              <ShieldCheck size={22} />
            </div>
            <h3 className="pillars-card-title">Support &amp; Scale</h3>
            <span className="pillars-card-subtitle">GUARANTEEING UPTIME</span>
            
            <ul className="pillars-card-list">
              <li><Check size={14} /> Automated security updates &amp; patches</li>
              <li><Check size={14} /> Real-time page performance audits</li>
              <li><Check size={14} /> Dedicated 24/7 developer assistance</li>
            </ul>
            <div className="pillars-card-footer">
              <span>response time: under 2 hours</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
