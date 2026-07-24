import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // 1. Hero text reveal
      gsap.fromTo('.premium-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.premium-hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo('.premium-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      );

      // 2. Glass Dashboard Mockup floating entry
      gsap.fromTo('.premium-visual-glass-card',
        { opacity: 0, y: 60, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          delay: 0.3, 
          ease: 'power3.out'
        }
      );

      // 3. Floating Badge Badges stagger entrance
      gsap.fromTo('.floating-badge',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.6,
          ease: 'back.out(1.7)'
        }
      );

      // 4. Partnership Section reveal
      gsap.fromTo('.about-partnership-section',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-partnership-section',
            start: 'top 80%'
          }
        }
      );

      // 5. Five Pillars section reveal
      gsap.fromTo('.about-pillars-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-pillars-section',
            start: 'top 85%'
          }
        }
      );

      // 6. Operating System cards stagger
      gsap.fromTo('.os-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-os-section',
            start: 'top 80%'
          }
        }
      );

      // 7. Why Choose Us cards stagger
      gsap.fromTo('.why-masonry-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-why-section',
            start: 'top 80%'
          }
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page-wrapper" ref={pageRef}>
      
      {/* Subtle Background Grid Pattern */}
      <div className="about-bg-grid"></div>

      <div className="about-page-container">
        
        {/* Section 1: Hero Section */}
        <div className="about-header-section premium-hero-layout">
          
          <div className="satisfaction-badge premium-pill">
            <span className="satisfaction-badge-target">✨</span>
            <span>Engineered for Software & Digital Excellence</span>
          </div>
          
          {/* Main Hero Heading */}
          <h1 className="about-hero-title premium-title">
            Building High-Impact <br />
            <span className="title-gradient-highlight">Digital Products</span>
          </h1>
          
          <p className="premium-hero-subtitle">
            We are Toco Technologies — an ambitious technology startup engineering scalable web applications, mobile apps, e-commerce platforms, ERP systems, custom software, and digital marketing strategies.
          </p>
          
          {/* Start Your Project CTA Button */}
          <div className="about-hero-actions premium-actions">
            <a href="#contact" className="about-hero-cta premium-cta-btn">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>

          {/* Singular Premium Visual Showcase */}
          <div className="premium-hero-visual-wrapper">
            
            {/* Floating Service Badges matching Toco's 6 core services */}
            <div className="floating-badge badge-1">
              <span className="service-dot"></span>Web App Development
            </div>
            <div className="floating-badge badge-2">
              <span className="service-dot"></span>Mobile App Development
            </div>
            <div className="floating-badge badge-3">
              <span className="service-dot"></span>E-Commerce Solutions
            </div>
            <div className="floating-badge badge-4">
              <span className="service-dot"></span>ERP Solutions
            </div>
            <div className="floating-badge badge-5">
              <span className="service-dot"></span>Custom Software
            </div>
            <div className="floating-badge badge-6">
              <span className="service-dot"></span>Digital Marketing & AI
            </div>

            <div className="premium-visual-glass-card">
              <div className="glass-card-header">
                <div className="window-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="glass-card-body">
                <img src="/project_analytics.png" alt="Toco Analytics & Engineering Dashboard" className="premium-dashboard-img" />
              </div>
              <div className="visual-gradient-orb"></div>
            </div>
          </div>
        </div>

        {/* Section 2: Who We Are & Partnership Story Section */}
        <div className="about-partnership-section">
          
          <div className="about-partnership-header">
            <h2 className="partnership-title">
              We partner with ambitious founders & growing enterprises to build high-performance web & mobile platforms, streamline enterprise ERP workflows, and accelerate <span className="title-gradient-highlight">digital growth.</span>
            </h2>
          </div>

          <div className="about-partnership-grid">
            
            {/* Card 1: Experience / Intuitive Design */}
            <div className="partner-card card-gradient-design">
              <div className="partner-card-content">
                <p>We build custom web & mobile experiences engineered for high performance, intuitive UX, and conversion.</p>
              </div>
            </div>

            {/* Card 2: Strategy / Image 2.webp */}
            <div className="partner-card card-abstract-strategy">
              <img src="/2.webp" alt="Strategy-Led Engineering" className="partner-card-image" />
              <div className="partner-card-content">
                <p className="caption-text">AI & Strategy-Led Engineering</p>
              </div>
            </div>

            {/* Card 3: Metrics / Client Growth */}
            <div className="partner-card card-white-metrics">
              <div className="metrics-top">
                <span className="metrics-big-number">+65%</span>
                <span className="metrics-sub-label">Efficiency Boost</span>
              </div>
              
              <div className="metrics-bottom">
                <span className="metrics-delivered-title">Growth Delivered</span>
                <div className="avatar-bubbles-row">
                  <div className="avatar-bubble av-1">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80" alt="Avatar 1" />
                  </div>
                  <div className="avatar-bubble av-2">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&fit=crop&q=80" alt="Avatar 2" />
                  </div>
                  <div className="avatar-bubble av-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80" alt="Avatar 3" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Section 3: Five Pillars Section (Full Bleed Dark Layout) */}
      <div className="about-pillars-section">
        <div className="pillars-section-header">
          <span className="pillars-section-tag">Five Pillars. One Technology Partner.</span>
          <h2 className="pillars-section-title">Comprehensive Engineering & <span className="title-gradient-highlight">Growth Capabilities</span></h2>
        </div>

        <div 
          className="pillars-accordion-container"
          onMouseLeave={() => setHoveredPillar(null)}
        >
          {[
            {
              num: "01",
              title: "Web & Mobile App Engineering",
              subtitle: "Turning Product Vision Into Scalable Web & Native Apps",
              bullets: [
                "High-performance React, Next.js, and Node architectures",
                "Fluid iOS & Android mobile apps via Flutter and React Native",
                "Responsive designs built for 120Hz scrolling and fast load times"
              ],
              paragraph: "We engineer resilient web platforms and mobile apps built to scale gracefully and deliver exceptional user experiences.",
              className: "pillar-prod-eng"
            },
            {
              num: "02",
              title: "E-Commerce & Digital Storefronts",
              subtitle: "Bespoke Shopping Experiences Built for Conversion",
              bullets: [
                "Custom Shopify Plus & headless e-commerce storefronts",
                "Secure Stripe, PayPal, and multi-currency checkout integrations",
                "Conversion rate optimization and AI product recommendations"
              ],
              paragraph: "We build modern e-commerce storefronts designed to engage shoppers and maximize online sales revenue.",
              className: "pillar-exp-design"
            },
            {
              num: "03",
              title: "ERP & Custom Software",
              subtitle: "Streamlining Operations with Intelligent ERP Systems",
              bullets: [
                "Bespoke Enterprise Resource Planning (ERP) software",
                "Automated inventory, billing, and supply chain management",
                "Custom SaaS portals, REST APIs, and database automation"
              ],
              paragraph: "We replace manual business processes with custom software solutions that drive efficiency and data clarity.",
              className: "pillar-data-ai"
            },
            {
              num: "04",
              title: "Digital Marketing & Growth",
              subtitle: "Data-Driven SEO and High-ROI Performance Campaigns",
              bullets: [
                "Comprehensive technical SEO & organic search optimization",
                "Targeted Google, Meta, and LinkedIn performance marketing",
                "AI-assisted content creation and conversion funnel analysis"
              ],
              paragraph: "We help your business reach target audiences, capture qualified leads, and establish a dominant brand presence.",
              className: "pillar-dig-trans"
            },
            {
              num: "05",
              title: "AI Integration & Quality",
              subtitle: "Enhancing Applications with Smart AI Capabilities",
              bullets: [
                "Embedding machine learning, chatbots, and smart automation",
                "Automated end-to-end testing and performance audits",
                "Robust security, data protection, and continuous system updates"
              ],
              paragraph: "We empower your software with cutting-edge AI features while ensuring top-tier code quality, speed, and safety.",
              className: "pillar-qual-eng"
            }
          ].map((pillar, idx) => {
            const isExpanded = hoveredPillar === idx;
            const isAnyExpanded = hoveredPillar !== null;
            
            return (
              <div
                key={idx}
                className={`pillar-accordion-card ${pillar.className} ${
                  isExpanded ? 'is-expanded' : isAnyExpanded ? 'is-collapsed' : 'is-default'
                }`}
                onMouseEnter={() => setHoveredPillar(idx)}
              >
                <div className="pillar-background-overlay"></div>
                
                {/* Expanded Content View */}
                <div className="pillar-expanded-content">
                  <div className="pillar-header-row">
                    <span className="pillar-expanded-num">{pillar.num}</span>
                    <h3 className="pillar-expanded-title">{pillar.title}</h3>
                  </div>
                  
                  <div className="pillar-body-content">
                    <h4 className="pillar-subtitle">{pillar.subtitle}</h4>
                    <ul className="pillar-bullets-list">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pillar-bullet-item">
                          <span className="bullet-dot"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="pillar-summary-text">{pillar.paragraph}</p>
                  </div>

                  <div className="pillar-footer-row">
                    <svg className="pillar-arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Collapsed / Default Content View */}
                <div className="pillar-collapsed-content">
                  <span className="pillar-collapsed-num">{pillar.num}</span>
                  <h3 className="pillar-collapsed-title">{pillar.title}</h3>
                  <div className="pillar-collapsed-footer">
                    <svg className="pillar-arrow-icon-small" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <div className="about-page-container">



        {/* Section 5: Our Philosophy & Digital Growth Section (Screenshot Spec) */}
        <div className="about-philosophy-section">
          <div className="philosophy-container-grid">
            
            {/* Left Image Column with Floating Stat Badge */}
            <div className="philosophy-visual-column">
              <div className="philosophy-image-frame">
                <img 
                  src="/team_office.png" 
                  alt="Toco Engineering Team Office" 
                  className="philosophy-main-img" 
                />
                
                {/* Floating Years of Excellence Badge */}
                <div className="philosophy-stat-badge">
                  <span className="stat-badge-number">10+</span>
                  <span className="stat-badge-label">YEARS OF<br />EXCELLENCE</span>
                </div>
              </div>
            </div>

            {/* Right Text Content Column */}
            <div className="philosophy-content-column">
              <div className="philosophy-pill-tag">
                <span>Our Philosophy</span>
              </div>

              <h2 className="philosophy-main-title section-title">
                We think about your <br />
                <span className="title-gradient-highlight">digital growth.</span>
              </h2>

              <p className="philosophy-desc-p1">
                Toco Technologies was founded with the vision to provide innovative web applications, mobile apps, e-commerce platforms, ERP systems, custom software, and digital marketing solutions that help businesses thrive in the modern digital landscape. From the start, our focus has been on turning great ideas into impactful results for our clients.
              </p>

              <p className="philosophy-desc-p2">
                Our approach combines creativity, technology, AI integration, and strategy to build solutions that are not only visually appealing but also highly functional and results-driven.
              </p>

              <div className="philosophy-footer-divider"></div>

              <div className="philosophy-team-footer">
                <h4 className="team-footer-title">The Toco Team</h4>
                <span className="team-footer-tagline">Passion. Innovation. Excellence.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 6: Why Work With Toco */}
        <div className="about-why-section">
          
          <div className="about-why-header">
            <span className="why-section-tag">WHY CHOOSE TOCO</span>
            <h2 className="why-section-title">Why Ambitious Brands <span className="title-gradient-highlight">Partner With Toco</span></h2>
            <p className="why-section-subtitle">
              Engineered for velocity, reliability, and measurable digital growth at every stage.
            </p>
          </div>

          <div className="about-why-masonry">
            {/* Column 1 */}
            <div className="why-masonry-col">
              
              <div className="why-masonry-card why-theme-sky why-card-short">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M12 12c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z" />
                    <polyline points="7 6 5 8 7 10" />
                    <polyline points="11 10 13 8 11 6" />
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>Senior Engineering Team</h3>
                  <p>Experienced developers specializing in React, Next.js, Flutter, Node, Python, and AI integrations.</p>
                </div>
              </div>

              <div className="why-masonry-card why-theme-amber why-card-tall">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2H3z" />
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>Full-Spectrum Digital Services</h3>
                  <p>From web and mobile app development to enterprise ERP software and high-ROI digital marketing.</p>
                </div>
              </div>

            </div>

            {/* Column 2 */}
            <div className="why-masonry-col">

              <div className="why-masonry-card why-theme-emerald why-card-tall">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polygon points="12 8 13.5 11.5 17 11.5 14 13.5 15 17 12 15 9 17 10 13.5 7 11.5 10.5 11.5" />
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>AI-Powered Speed & Precision</h3>
                  <p>Leveraging state-of-the-art AI development tools to accelerate delivery cycles and lower time-to-market.</p>
                </div>
              </div>

              <div className="why-masonry-card why-theme-teal why-card-short">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>Transparent Project Pricing</h3>
                  <p>Clear milestones, flat-rate options, and transparent scope roadmaps with zero surprise costs.</p>
                </div>
              </div>

            </div>

            {/* Column 3 */}
            <div className="why-masonry-col">

              <div className="why-masonry-card why-theme-indigo why-card-short">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                    <circle cx="17" cy="7" r="5" />
                    <path d="M17 5v2h2" />
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>Dedicated Support & Safety</h3>
                  <p>Ongoing software support, regular security updates, and performance monitoring for peace of mind.</p>
                </div>
              </div>

              <div className="why-masonry-card why-theme-coral why-card-tall">
                <div className="why-card-icon-box">
                  <svg viewBox="0 0 24 24" className="why-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="why-card-text">
                  <h3>Scalable Startup Mindset</h3>
                  <p>We build agile, future-proof software architectures designed to grow alongside your expanding business.</p>
                </div>
              </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  );
}
