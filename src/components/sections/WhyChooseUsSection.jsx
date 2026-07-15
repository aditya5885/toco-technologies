import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Sliders, Users, Lightbulb } from 'lucide-react';
import './WhyChooseUsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line progress
      gsap.fromTo('.why-choose-dashed-path',
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.why-choose-timeline-svg',
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1.5,
          }
        }
      );

      // Animate cards fading in
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, x: idx % 2 === 0 ? -40 : 40, y: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const steps = [
    {
      title: "Expertise",
      desc: "We leverage our years of engineering experience to deliver high-quality, tailored digital solutions for every client.",
      icon: <Award size={22} />,
      theme: "yellow-card",
      dotTheme: "yellow-dot",
    },
    {
      title: "Custom Solutions",
      desc: "Each solution is personalized, ensuring that your business gets the exact tools it needs to succeed.",
      icon: <Sliders size={22} />,
      theme: "purple-card",
      dotTheme: "purple-dot",
    },
    {
      title: "Customer-Focused",
      desc: "We prioritize your satisfaction and aim to exceed your expectations in every project we take on.",
      icon: <Users size={22} />,
      theme: "pink-card",
      dotTheme: "pink-dot",
    },
    {
      title: "Innovation",
      desc: "We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.",
      icon: <Lightbulb size={22} />,
      theme: "blue-card",
      dotTheme: "blue-dot",
    }
  ];

  return (
    <section className="why-choose-section" ref={sectionRef} id="why-choose-us">
      <div className="why-choose-container">
        
        {/* Header */}
        <div className="why-choose-header">
          <span className="why-choose-badge">Why Choose Us?</span>
          <h2 className="why-choose-title">Empowering your business with excellence.</h2>
        </div>

        {/* Timeline Grid */}
        <div className="why-choose-timeline-grid">
          
          {/* SVG Dashed Curve Line in center */}
          <div className="why-choose-line-wrapper">
            <svg viewBox="0 0 100 800" preserveAspectRatio="none" className="why-choose-timeline-svg">
              <path 
                d="M 50 0 C 50 150, 20 200, 20 350 C 20 500, 80 500, 80 650 C 80 750, 50 780, 50 800" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="4" 
              />
              <path 
                d="M 50 0 C 50 150, 20 200, 20 350 C 20 500, 80 500, 80 650 C 80 750, 50 780, 50 800" 
                fill="none" 
                stroke="#2F9EE4" 
                strokeWidth="4" 
                strokeDasharray="12,12" 
                className="why-choose-dashed-path"
              />
            </svg>
          </div>

          {/* Cards & Nodes */}
          {steps.map((step, idx) => (
            <div key={idx} className={`why-choose-row ${idx % 2 === 0 ? 'left-row' : 'right-row'}`}>
              
              {/* Card column */}
              <div className="why-choose-card-col" ref={addToRefs}>
                <div className={`why-choose-card ${step.theme}`}>
                  <div className="why-choose-card-icon-box">
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>

              {/* Node Column (SVG placement helper) */}
              <div className="why-choose-node-col">
                <div className={`why-choose-timeline-node ${step.dotTheme}`}>
                  <div className="node-inner-dot"></div>
                </div>
              </div>

              {/* Empty Spacer Column */}
              <div className="why-choose-spacer-col"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
