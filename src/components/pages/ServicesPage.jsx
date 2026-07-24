import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Smartphone, Code, ShoppingCart, Database, Cpu, Megaphone, 
  Users, ShieldAlert, Sparkles, RefreshCw, PlusCircle, CheckCircle2, X, ArrowUpRight 
} from 'lucide-react';
import RadialServicesSection from '../sections/RadialServicesSection';
import './ServicesPage.css';

export default function ServicesPage() {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);

  const showcaseServices = [
    {
      id: 'web',
      shortTitle: "Web Apps",
      title: "Web Application Development",
      tag: "Sub-Second Speed",
      description: "Scale your business with high-performance React, Next.js, and AI-enhanced web architectures engineered for speed, bank-grade security, and visual excellence.",
      techs: ["React 19", "Next.js 15", "Node.js", "Tailwind CSS"],
      features: [
        "Modern SSR & Static Generation",
        "Sub-second load times & 99+ Lighthouse",
        "Integrated AI Chatbots & Workflows",
        "Bank-Grade API Security & Auth"
      ],
      image: "/bento_web_dev.png",
      highlight: "Lighthouse 99+ Speed"
    },
    {
      id: 'mobile',
      shortTitle: "Mobile Apps",
      title: "Mobile App Development",
      tag: "Cross-Platform",
      description: "High-fidelity native iOS and Android application engineering built via Flutter and React Native for fluid 120Hz performance, offline sync, and push notifications.",
      techs: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin"],
      features: [
        "Native 120Hz Fluid Micro-interactions",
        "Offline Database & Cloud Sync",
        "Real-Time Geolocation & Push Alerts",
        "Biometric Security & Encrypted Auth"
      ],
      image: "/bento_ux_design.png",
      highlight: "120Hz Fluid UX"
    },
    {
      id: 'ecommerce',
      shortTitle: "E-Commerce",
      title: "E-Commerce Solutions",
      tag: "High Conversion",
      description: "Bespoke digital storefronts, Shopify Plus custom builds, Stripe & multi-currency payment pipelines, and AI-driven conversion rate optimization.",
      techs: ["Shopify Plus", "Headless Next.js", "Stripe API", "GraphQL"],
      features: [
        "Custom Headless Checkout Funnels",
        "Multi-Currency & Localized Payments",
        "AI Product Recommendation Engine",
        "Automated Inventory & ERP Sync"
      ],
      image: "/ecommerce_showcase.png",
      highlight: "48% Conversion Boost"
    },
    {
      id: 'erp',
      shortTitle: "ERP Systems",
      title: "Enterprise ERP Solutions",
      tag: "Automation",
      description: "Comprehensive Enterprise Resource Planning software automating inventory management, financial workflows, supply chain operations, and executive reporting.",
      techs: ["Custom Cloud ERP", "PostgreSQL", "Python Engine", "AWS"],
      features: [
        "Real-Time Inventory & Stock Tracking",
        "Automated Invoicing & Payroll Pipelines",
        "Executive Analytics & Role Access",
        "Seamless Legacy System Integration"
      ],
      image: "/project_analytics.png",
      highlight: "Automated Cloud ERP"
    },
    {
      id: 'custom',
      shortTitle: "Custom Software",
      title: "Custom Software Development",
      tag: "Scalable Backend",
      description: "Tailored enterprise software, automated workflow engines, custom SaaS portals, and scalable backend APIs engineered around your exact business goals.",
      techs: ["Go / Golang", "Microservices", "REST & GraphQL", "Docker"],
      features: [
        "Bespoke SaaS Portals & Dashboards",
        "Scalable Microservices Architecture",
        "Automated Business Workflow Engines",
        "24/7 Telemetry & 99.99% Uptime SLAs"
      ],
      image: "/tech_workspace.png",
      highlight: "99.99% Uptime SLA"
    },
    {
      id: 'marketing',
      shortTitle: "Digital Marketing",
      title: "Digital Growth & Marketing",
      tag: "Maximum ROI",
      description: "Data-driven technical SEO, high-ROI performance marketing campaigns, social media growth strategies, and AI-assisted content optimization for maximum brand reach.",
      techs: ["Technical SEO", "Google Ads", "Meta & LinkedIn", "AI Funnels"],
      features: [
        "Technical & Local SEO Ranking Boost",
        "High-ROAS Ad Campaign Management",
        "AI Content Strategy & Lead Gen",
        "Conversion Rate Funnel Optimization"
      ],
      image: "/marketing_showcase.png",
      highlight: "4.8X Campaign ROAS"
    }
  ];

  const activeService = showcaseServices[activeShowcaseIdx] || showcaseServices[0];

  const switcherServices = [
    {
      id: 0,
      icon: <Code size={20} />,
      title: showcaseServices[0].title,
      description: showcaseServices[0].description,
      bullets: showcaseServices[0].features,
      illustration: (
        <div className="preview-illustration preview-codereview">
          <div className="score-card">
            <h5>Web Performance Audit</h5>
            <div className="score-gauge">
              <div className="gauge-outer">
                <div className="gauge-inner">
                  <span className="score-number">99</span>
                  <span className="score-label">/100</span>
                </div>
              </div>
            </div>
            <div className="score-metrics">
              <div className="metric-row"><span>Speed Index</span><span className="text-green">0.6s</span></div>
              <div className="metric-row"><span>SEO & Access</span><span className="text-green">100%</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      icon: <Smartphone size={20} />,
      title: showcaseServices[1].title,
      description: showcaseServices[1].description,
      bullets: showcaseServices[1].features,
      illustration: (
        <div className="preview-illustration preview-mentorship">
          <div className="pair-programming-card">
            <h5>Native Mobile Engine</h5>
            <div className="terminal-mockup">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-body">
                <p className="line-code"><span className="text-blue">const</span> mobileApp = <span className="text-yellow">new FlutterEngine()</span>;</p>
                <p className="line-code"><span className="text-blue">await</span> mobileApp.<span className="text-sky">render120Hz</span>(iOS, Android);</p>
                <p className="line-code text-green">// Output: Native App Published to Stores 🚀</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: <ShoppingCart size={20} />,
      title: showcaseServices[2].title,
      description: showcaseServices[2].description,
      bullets: showcaseServices[2].features,
      illustration: (
        <div className="preview-illustration preview-features">
          <div className="features-card">
            <h5>E-Commerce Engine</h5>
            <div className="sandbox-element">
              <span className="sandbox-icon">💳</span>
              <div className="sandbox-details">
                <span className="element-title">Stripe Checkout</span>
                <span className="element-status text-green">Multi-Currency</span>
              </div>
            </div>
            <div className="sandbox-element">
              <span className="sandbox-icon">🛍️</span>
              <div className="sandbox-details">
                <span className="element-title">Shopify Plus API</span>
                <span className="element-status text-green">Live Sync</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: <Database size={20} />,
      title: showcaseServices[3].title,
      description: showcaseServices[3].description,
      bullets: showcaseServices[3].features,
      illustration: (
        <div className="preview-illustration preview-modernization">
          <div className="migration-card">
            <h5>Enterprise ERP Pipeline</h5>
            <div className="migration-compare">
              <div className="compare-col legacy">
                <span className="compare-tag red">Spreadsheets</span>
                <div className="code-block-mini">Manual Workflows</div>
              </div>
              <div className="compare-arrow">➡️</div>
              <div className="compare-col modern">
                <span className="compare-tag green">Toco ERP</span>
                <div className="code-block-mini">Automated Cloud ERP</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: <Cpu size={20} />,
      title: showcaseServices[4].title,
      description: showcaseServices[4].description,
      bullets: showcaseServices[4].features,
      illustration: (
        <div className="preview-illustration preview-bugfixing">
          <div className="chart-card">
            <h5>Custom Microservices</h5>
            <div className="chart-meta">
              <span className="meta-label">Uptime SLA</span>
              <span className="meta-value text-green">99.99%</span>
            </div>
            <div className="chart-graph">
              <svg viewBox="0 0 300 120" className="chart-svg">
                <path 
                  d="M0,80 Q30,40 60,60 T120,20 T180,40 T240,10 T300,5" 
                  fill="none" 
                  stroke="#1AA5F8" 
                  strokeWidth="3"
                  className="chart-path-main"
                />
                <circle cx="240" cy="10" r="5" fill="#1AA5F8" className="chart-pulse-dot" />
              </svg>
              <div className="graph-axes">
                <span>0</span><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: <Megaphone size={20} />,
      title: showcaseServices[5].title,
      description: showcaseServices[5].description,
      bullets: showcaseServices[5].features,
      illustration: (
        <div className="preview-illustration preview-features">
          <div className="features-card">
            <h5>Marketing ROI Growth</h5>
            <div className="sandbox-element">
              <span className="sandbox-icon">📈</span>
              <div className="sandbox-details">
                <span className="element-title">SEO Organic Traffic</span>
                <span className="element-status text-green">+240% Growth</span>
              </div>
            </div>
            <div className="sandbox-element">
              <span className="sandbox-icon">🎯</span>
              <div className="sandbox-details">
                <span className="element-title">Ad Campaign ROI</span>
                <span className="element-status text-green">4.8X ROAS</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // Intro headers animation
      gsap.fromTo('.services-page-header', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Radial Mindmap section entrance
      gsap.fromTo('.services-interactive-map-box',
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-interactive-map-box',
            start: 'top 80%'
          }
        }
      );

      // Interactive Switcher entrance
      gsap.fromTo('.services-switcher-section',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-switcher-section',
            start: 'top 80%'
          }
        }
      );

      // Gallery Grid animation
      gsap.fromTo('.editorial-gallery-item', 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.12, 
          ease: 'power3.out' 
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="services-page-wrapper" ref={pageRef}>
      
      <div className="services-page-container">
        
        {/* Fanned Cards Masterpiece Hero Section (matching screenshot spec) */}
        <section className="services-fanned-hero-section">
          
          <h1 className="fanned-hero-title">
            A suite of digital solutions <br />
            engineered for growth.
          </h1>

          {/* Fanned Cards Array Container */}
          <div className="fanned-cards-stage">
            
            {/* Floating speech bubble badges */}
            <div className="fanned-speech-tag tag-left">
              <span>@web_dev</span>
            </div>
            <div className="fanned-speech-tag tag-right">
              <span>@growth_marketing</span>
            </div>

            <div className="fanned-cards-deck">
              <div className="fanned-card card-rot-1">
                <img src="/bento_web_dev.png" alt="Web Applications" />
                <span className="card-mini-label">Web Apps</span>
              </div>
              <div className="fanned-card card-rot-2">
                <img src="/bento_ux_design.png" alt="Mobile Apps" />
                <span className="card-mini-label">Mobile Apps</span>
              </div>
              <div className="fanned-card card-rot-3">
                <img src="/ecommerce_showcase.png" alt="E-Commerce" />
                <span className="card-mini-label">E-Commerce</span>
              </div>
              <div className="fanned-card card-rot-4">
                <img src="/project_analytics.png" alt="ERP Systems" />
                <span className="card-mini-label">ERP Systems</span>
              </div>
              <div className="fanned-card card-rot-5">
                <img src="/tech_workspace.png" alt="Custom Software" />
                <span className="card-mini-label">Custom Software</span>
              </div>
              <div className="fanned-card card-rot-6">
                <img src="/marketing_showcase.png" alt="Digital Marketing" />
                <span className="card-mini-label">Marketing</span>
              </div>
            </div>

          </div>

          <p className="fanned-hero-subtitle">
            We build high-performance web applications, native mobile apps, enterprise ERP software, e-commerce platforms, and data-driven marketing funnels.
          </p>

          <div className="fanned-hero-actions">
            <a href="#contact" className="fanned-btn-dark">Start Your Project</a>
            <a href="#capabilities" className="fanned-btn-light">Explore Capabilities</a>
          </div>

        </section>

        {/* Next-Gen Interactive Tabbed Showcase Deck Section */}
        <div className="services-tabbed-showcase-section" id="capabilities">
          
          <div className="showcase-section-header">
            <h2 className="switcher-section-title">
              Empowering Brands With <span className="title-gradient-highlight">Next-Gen Digital Solutions</span>
            </h2>
          </div>

          {/* Interactive Filter Pills Bar */}
          <div className="capabilities-tabs-bar">
            {showcaseServices.map((service, index) => (
              <button
                key={service.id}
                className={`capability-tab-btn ${activeShowcaseIdx === index ? 'active' : ''}`}
                onClick={() => setActiveShowcaseIdx(index)}
              >
                <span className="tab-num">0{index + 1}</span>
                <span className="tab-name">{service.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Featured Stage */}
          <div className="capability-active-stage">
            
            {/* Left Column: Rich Features */}
            <div className="stage-content-col">
              <div className="stage-badge-row">
                <span className="stage-num-badge">0{activeShowcaseIdx + 1}</span>
                <span className="stage-tag-badge">{activeService.tag}</span>
              </div>

              <h3 className="stage-title">{activeService.title}</h3>
              <p className="stage-desc">{activeService.description}</p>

              {/* Tech Stack Pills */}
              <div className="stage-tech-row">
                {activeService.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="stage-tech-pill">{tech}</span>
                ))}
              </div>

              {/* Features Grid */}
              <div className="stage-features-grid">
                {activeService.features.map((feat, fIdx) => (
                  <div key={fIdx} className="stage-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <a href="#contact" className="stage-cta-btn">
                <span>Start Your Project</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Right Column: Visual Deck with Hover Perspective & Glow */}
            <div className="stage-visual-col">
              <div className="stage-visual-card">
                <img src={activeService.image} alt={activeService.title} className="stage-visual-img" />
                
                {/* Floating Status Badge */}
                <div className="stage-floating-badge">
                  <span className="badge-sparkle">✨</span>
                  <span>{activeService.highlight}</span>
                </div>

                <div className="stage-gradient-glow"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2: Interactive Services Switcher (matching image 4) */}
        <div className="services-switcher-section">
          
          <div className="services-switcher-header">
            <div className="services-tag">
              <span className="services-tag-emoji">🎯</span>
              <span>Our Services</span>
            </div>
            <h2 className="switcher-section-title">
              Level up your development game
            </h2>
          </div>

          <div className="services-switcher-body">
            
            {/* Left Column: Interactive Tab Accordion */}
            <div className="switcher-tabs-col">
              {switcherServices.map((service, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div 
                    key={service.id} 
                    className={`switcher-tab-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <div className="tab-header">
                      <div className="tab-icon-box">
                        {service.icon}
                      </div>
                      <h4>{service.title}</h4>
                    </div>

                    {/* Expandable details when active */}
                    <div className="tab-expanded-content">
                      <p className="tab-desc">{service.description}</p>
                      <ul className="tab-bullets-list">
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="bullet-item">
                            <CheckCircle2 size={14} className="bullet-check-icon" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual preview card */}
            <div className="switcher-preview-col">
              <div className="switcher-preview-wrapper">
                {switcherServices[activeTab].illustration}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* High-Impact Full-Bleed Video Showcase Section (matching Image 5) */}
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
            <a href="#contact" className="btn-video-primary">
              <span>Start Your Project</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
