import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  ShoppingCart, 
  Database, 
  Cpu, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  X, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';
import './ProjectsPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const nodes = [
    {
      id: 'ecommerce',
      title: 'E-commerce',
      category: 'E-commerce',
      icon: ShoppingCart,
      techs: 'React • Shopify • Stripe'
    },
    {
      id: 'erp',
      title: 'ERP Systems',
      category: 'Custom Cloud Systems',
      icon: Database,
      techs: 'SAP • PostgreSQL • AWS'
    },
    {
      id: 'custom',
      title: 'Custom Software',
      category: 'AI Integration & Automation',
      icon: Cpu,
      techs: 'Go • Kubernetes • Python'
    },
    {
      id: 'web',
      title: 'Web Apps',
      category: 'Web Applications',
      icon: Monitor,
      techs: 'Next.js • Node • GraphQL'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      category: 'Mobile App Development',
      icon: Smartphone,
      techs: 'Flutter • iOS • Android'
    }
  ];

  const deliverySteps = [
    {
      num: '01',
      icon: Zap,
      title: 'Discovery & Roadmap',
      desc: 'We analyze requirements, model database schemas, and select cloud stacks for 10X growth.'
    },
    {
      num: '02',
      icon: Layers,
      title: 'Agile Sprint Execution',
      desc: 'Rapid 2-week development sprints with automated CI/CD and transparent staging preview builds.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Automated QA & Security',
      desc: 'Rigorous unit testing, integration flows, and security vulnerability audits before release.'
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Zero-Downtime Launch',
      desc: 'Seamless production deployment backed by 24/7 telemetry monitoring and 99.99% SLAs.'
    }
  ];

  // Auto-rotation loop
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveCardIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % 5;
        setActiveCategory(nodes[nextIdx].category);
        return nextIdx;
      });
    }, 1600);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // Intro headers animation
      gsap.fromTo('.projects-hero-left *', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.12, 
          ease: 'power3.out' 
        }
      );

      // Deck visual elements animation
      gsap.fromTo('.projects-deck-wrapper', 
        { opacity: 0, scale: 0.9, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      // Methodology timeline cards reveal
      gsap.fromTo('.pipeline-step-node',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-methodology-section',
            start: 'top 80%'
          }
        }
      );

      // Success stories reveal on scroll
      gsap.fromTo('.stories-grid-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-stories-section',
            start: 'top 80%'
          }
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleCardSelect = (idx, category) => {
    setActiveCardIdx(idx);
    setActiveCategory(category);
  };

  const handleNextCard = () => {
    const nextIdx = (activeCardIdx + 1) % 5;
    setActiveCardIdx(nextIdx);
    setActiveCategory(nodes[nextIdx].category);
  };

  const handlePrevCard = () => {
    const prevIdx = (activeCardIdx - 1 + 5) % 5;
    setActiveCardIdx(prevIdx);
    setActiveCategory(nodes[prevIdx].category);
  };

  return (
    <div className="projects-page-wrapper" ref={pageRef}>
      
      {/* Top Hero Section Wrapper (Strictly bounds background animations) */}
      <section className="projects-hero-section">
        
        {/* Simple Clean Graph Background Layer */}
        <div className="projects-hero-bg-ambient">
          <div className="bg-glow-orb orb-1"></div>
          <div className="bg-glow-orb orb-2"></div>
          <div className="projects-graph-grid"></div>
        </div>

        <div className="projects-page-container">
          
          {/* Split Hero Header Block */}
          <div className="projects-hero-split">
            
            {/* Left Column: Headline & Paragraph */}
            <div className="projects-hero-left">
              <div className="projects-hero-badge">
                <Sparkles size={14} className="badge-sparkle" />
                <span>Interactive Portfolio Navigator</span>
              </div>
              
              <h1 className="projects-hero-title">
                Transform your business with{' '}
                <span className="projects-hero-gradient-text">
                  intelligent and scalable solutions
                </span>
              </h1>
              <p className="projects-hero-desc">
                Automate infrastructure setup, deployments, and scaling across web, mobile, e-commerce, and ERP without writing endless scripts.
              </p>
            </div>

            {/* Right Column: 3D Fan Deck Slider */}
            <div className="projects-hero-right">
              <div 
                className="projects-deck-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                
                {/* The Card Stack */}
                <div className="projects-card-deck">
                  {nodes.map((node, idx) => {
                    const NodeIcon = node.icon;
                    const pos = (idx - activeCardIdx + 5) % 5;
                    
                    const zIndex = 10 - pos;
                    const translateX = pos * 20;
                    const translateY = pos * -16;
                    const scale = 1 - pos * 0.05;
                    const opacity = pos === 4 ? 0 : 1;
                    
                    return (
                      <div
                        key={node.id}
                        className={`deck-card-item ${pos === 0 ? 'active-front' : ''}`}
                        style={{
                          zIndex,
                          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                          opacity,
                          pointerEvents: pos === 0 ? 'auto' : 'none'
                        }}
                        onClick={() => handleCardSelect(idx, node.category)}
                      >
                        <div className="deck-card-inner">
                          <div className="deck-card-badge-row">
                            <div className="deck-card-icon-box">
                              <NodeIcon size={24} />
                            </div>
                            <span className="deck-card-label">{node.techs}</span>
                          </div>
                          
                          <div className="deck-card-main">
                            <h3 className="deck-card-title">{node.title}</h3>
                            <span className="deck-card-tag">Elite Solution</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Slider Controls */}
                <div className="deck-controls">
                  <button className="deck-control-btn prev" onClick={handlePrevCard} aria-label="Previous card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  
                  <div className="deck-dots">
                    {nodes.map((_, idx) => (
                      <span 
                        key={idx} 
                        className={`deck-dot ${idx === activeCardIdx ? 'active' : ''}`}
                        onClick={() => handleCardSelect(idx, nodes[idx].category)}
                      ></span>
                    ))}
                  </div>
                  
                  <button className="deck-control-btn next" onClick={handleNextCard} aria-label="Next card">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Modern High-End Engineering Methodology Section (Full-Bleed Glass & Neon Beam) */}
      <div className="projects-methodology-section">
        <div className="methodology-container">

          <div className="methodology-header">
            <div className="methodology-pill-badge">
              <span className="pulse-dot"></span>
              <span>ENGINEERING METHODOLOGY</span>
            </div>
            <h2 className="methodology-title">
              How We Deliver <span className="title-gradient-beam">Production-Ready Software</span>
            </h2>
            <p className="methodology-subtitle">
              A battle-tested 4-phase deployment pipeline designed for high performance and zero downtime.
            </p>
          </div>

          {/* Animated Interactive Pipeline Cards */}
          <div className="pipeline-cards-wrapper">
            
            {/* Animated Connecting Glowing Beam Line */}
            <div className="pipeline-beam-line">
              <div className="beam-pulse-head"></div>
            </div>

            <div className="pipeline-steps-grid">
              {deliverySteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    className={`pipeline-step-node ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    <div className="node-glow-backdrop"></div>
                    
                    <div className="node-top-bar">
                      <span className="node-number">{step.num}</span>
                      <div className="node-icon-wrapper">
                        <StepIcon size={22} />
                      </div>
                    </div>

                    <h3 className="node-title">{step.title}</h3>
                    <p className="node-desc">{step.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* High-Impact Full-Bleed Video Showcase Section */}
      <div className="projects-video-showcase-section">
        <video 
          className="projects-showcase-video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/proj.mp4" type="video/mp4" />
        </video>

        <div className="projects-video-overlay"></div>

        <div className="projects-video-content">
          <div className="projects-video-badge">
            <Sparkles size={14} />
            <span>EXCELLENCE IN ENGINEERING</span>
          </div>

          <h2 className="projects-video-title">
            Empowering an <br />
            <span className="projects-video-title-highlight">Exceptional Development Team</span>
          </h2>

          <p className="projects-video-subtitle">
            Building robust, scalable, and innovative solutions for the future.
          </p>

          <div className="projects-video-actions">
            <a href="/contact" className="btn-video-primary">
              <span>Start Your Project</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
