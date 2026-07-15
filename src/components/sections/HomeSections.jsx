import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomeSections.css';

// 0. Video Hero Section (Zerocircle style)
export function VideoHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo('.video-hero-headline',
      { opacity: 0, y: 45 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.15 }
    );
  }, []);

  useEffect(() => {
    // Swap slide every 7 seconds, resetting if currentSlide changes manually
    const timer = setTimeout(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const headline = document.querySelector('.video-hero-headline');
    if (headline) {
      gsap.to(headline, {
        opacity: 0,
        y: -25,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          if (currentSlide === 0) {
            headline.innerHTML = 'Build Websites & Mobile Apps <br /> That Support Your Business';
          } else {
            headline.innerHTML = 'Custom Web Apps & Mobile Design <br /> Built Around Your Needs';
          }
          gsap.fromTo(headline,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        }
      });
    }
  }, [currentSlide]);

  return (
    <section className="video-hero-section" id="home">
      <video 
        src="/vidoe.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`video-hero-bg ${currentSlide === 0 ? 'active' : ''}`}
      />
      <video 
        src="/video2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`video-hero-bg ${currentSlide === 1 ? 'active' : ''}`}
      />
      <div className="video-hero-overlay"></div>
      <div className="video-hero-content">
        <h1 className="video-hero-headline">
          Build Websites & Mobile Apps <br />
          That Support Your Business
        </h1>
      </div>

      {/* Slide Indicators (with progress bar) */}
      <div className="hero-slide-indicators">
        {[0, 1].map((idx) => (
          <button
            key={idx}
            className={`hero-indicator-btn ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="hero-indicator-label">0{idx + 1}</span>
            <div className="hero-indicator-track">
              <div className="hero-indicator-progress" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// Mixed-media sticker helpers
function MiniDashboardSticker() {
  return (
    <span className="inline-sticker sticker-dashboard">
      <svg viewBox="0 0 40 40" className="sticker-svg-icon" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#1e293b" />
        <rect x="7" y="9" width="11" height="9" rx="3" fill="#2F9EE4" opacity="0.8" />
        <rect x="22" y="9" width="11" height="15" rx="3" fill="#2F9EE4" />
        <rect x="7" y="22" width="11" height="9" rx="3" fill="#64748b" />
      </svg>
    </span>
  );
}

function MiniCodeSticker() {
  return (
    <span className="inline-sticker sticker-code">
      <span className="sticker-code-text">&lt;/&gt;</span>
    </span>
  );
}

function MiniCursorSticker() {
  return (
    <span className="inline-sticker sticker-cursor">
      <svg viewBox="0 0 24 24" className="sticker-svg-icon" fill="#1e293b">
        <path d="m4 3 16 7-7 2-3 7-6-16z" stroke="#ffffff" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function InlineSwirlyArrow() {
  return (
    <svg viewBox="0 0 120 60" className="inline-swirly-arrow" fill="none" stroke="#ff7a59" strokeWidth="4.5" strokeLinecap="round">
      <path d="M10,40 Q45,12 75,32 Q95,45 110,25" />
      <path d="M94,22 L110,24 L104,40" strokeLinejoin="round" />
    </svg>
  );
}

function InlineCollageSticker() {
  return (
    <span className="inline-sticker sticker-collage">
      <svg viewBox="0 0 110 40" className="sticker-svg-collage" fill="none">
        <rect x="6" y="8" width="22" height="38" rx="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.8" transform="rotate(-15 16 27)" />
        <rect x="38" y="5" width="26" height="42" rx="5" fill="#2F9EE4" stroke="#ffffff" strokeWidth="1.8" />
        <rect x="72" y="10" width="22" height="38" rx="5" fill="#ff7a59" stroke="#ffffff" strokeWidth="1.8" transform="rotate(12 83 29)" />
        <circle cx="51" cy="10" r="1.8" fill="#ffffff" />
        <line x1="44" x2="58" y1="38" y2="38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

// 0.5. Mixed Media Hero Section (UpSunday style)
export function MixedMediaHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Animate display text line reveals
      const text = container.querySelector('.mixed-display-text');
      gsap.fromTo(text,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          }
        }
      );

      // Animate the inline stickers
      const stickers = container.querySelectorAll('.inline-sticker');
      const arrow = container.querySelector('.inline-swirly-arrow');
      
      gsap.fromTo(stickers,
        { scale: 0, rotation: -20 },
        {
          scale: 1,
          rotation: (idx) => [ -6, 4, -12, -3 ][idx] || 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          }
        }
      );

      // Animate swirly arrow draw/fade
      gsap.fromTo(arrow,
        { strokeDasharray: 300, strokeDashoffset: 300, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 72%',
          }
        }
      );

      // Animate background fluid blobs slowly
      const blobs = container.querySelectorAll('.mixed-blob');
      blobs.forEach((blob) => {
        gsap.to(blob, {
          x: () => gsap.utils.random(-120, 120),
          y: () => gsap.utils.random(-80, 80),
          duration: () => gsap.utils.random(9, 15),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="mixed-hero-section" ref={containerRef}>
      {/* Animated fluid blob backgrounds */}
      <div className="mixed-hero-bg-blobs">
        <div className="mixed-blob mixed-blob-1"></div>
        <div className="mixed-blob mixed-blob-2"></div>
        <div className="mixed-blob mixed-blob-3"></div>
      </div>
      
      <div className="mixed-hero-container">
        <h2 className="mixed-display-text">
          we <span className="sticker-group"><MiniDashboardSticker /><MiniCodeSticker /><MiniCursorSticker /></span> build reliable <br />
          websites and <InlineSwirlyArrow /> applications <br />
          designed <InlineCollageSticker /> for you.
        </h2>
      </div>
    </section>
  );
}


// 1. Web Dev Sticker
function WebDevSticker() {
  return (
    <svg viewBox="0 0 300 110" className="logo-sticker-svg">
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="5" dy="5" stdDeviation="0" floodColor="#1e293b" />
      </filter>
      <path d="M 15 28 Q 150 10 285 28 C 295 45 295 70 285 85 Q 150 103 15 85 C 5 70 5 45 15 28 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="7" filter="url(#sticker-shadow)" strokeLinejoin="round" />
      <text x="50%" y="67" textAnchor="middle" fill="#081420" fontSize="44" fontWeight="900" fontFamily="'Outfit', 'Inter', sans-serif" letterSpacing="1">WEB DEV</text>
    </svg>
  );
}

// 2. Mobile Sticker
function MobileSticker() {
  return (
    <svg viewBox="0 0 300 110" className="logo-sticker-svg">
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="5" dy="5" stdDeviation="0" floodColor="#1e293b" />
      </filter>
      <path d="M 40 20 L 260 20 C 285 20 285 90 260 90 L 40 90 C 15 90 15 20 40 20 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="7" filter="url(#sticker-shadow)" strokeLinejoin="round" />
      <text x="50%" y="68" textAnchor="middle" fill="#081420" fontSize="42" fontWeight="900" fontFamily="'Outfit', 'Inter', sans-serif" letterSpacing="0">MOBILE</text>
    </svg>
  );
}

// 3. UI/UX Sticker
function UiUxSticker() {
  return (
    <svg viewBox="0 0 300 110" className="logo-sticker-svg">
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="5" dy="5" stdDeviation="0" floodColor="#1e293b" />
      </filter>
      <path d="M 45 15 L 255 15 C 280 15 280 95 255 95 L 45 95 C 20 95 20 15 45 15 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="7" filter="url(#sticker-shadow)" strokeLinejoin="round" />
      <text x="50%" y="69" textAnchor="middle" fill="#081420" fontSize="46" fontWeight="900" fontFamily="'Outfit', 'Inter', sans-serif" letterSpacing="1">UI / UX</text>
    </svg>
  );
}

// 4. Web Apps Sticker
function WebAppsSticker() {
  return (
    <svg viewBox="0 0 300 110" className="logo-sticker-svg">
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="5" dy="5" stdDeviation="0" floodColor="#1e293b" />
      </filter>
      <path d="M 35 22 Q 150 10 265 22 C 285 35 285 75 265 88 Q 150 100 35 88 C 15 75 15 35 35 22 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="7" filter="url(#sticker-shadow)" strokeLinejoin="round" />
      <text x="50%" y="67" textAnchor="middle" fill="#081420" fontSize="40" fontWeight="900" fontFamily="'Outfit', 'Inter', sans-serif" letterSpacing="0.5">WEB APPS</text>
    </svg>
  );
}

// 5. Support Sticker
function SupportSticker() {
  return (
    <svg viewBox="0 0 300 110" className="logo-sticker-svg">
      <filter id="sticker-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="5" dy="5" stdDeviation="0" floodColor="#1e293b" />
      </filter>
      <path d="M 30 20 L 270 20 C 290 20 290 90 270 90 L 30 90 C 10 90 10 20 30 20 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="7" filter="url(#sticker-shadow)" strokeLinejoin="round" />
      <text x="50%" y="68" textAnchor="middle" fill="#081420" fontSize="42" fontWeight="900" fontFamily="'Outfit', 'Inter', sans-serif" letterSpacing="0">SUPPORT</text>
    </svg>
  );
}

export function ClientShowcase() {
  const containerRef = useRef(null);
  const uptimeRef = useRef(null);
  const scopingRef = useRef(null);
  const usersRef = useRef(null);

  // Lists of sticker cards (Sky Blue theme coordinated palette)
  const track1 = [
    { component: <WebDevSticker />, bg: '#2F9EE4' },
    { component: <MobileSticker />, bg: '#1b6eab' },
    { component: <UiUxSticker />, bg: '#63bbf2' },
    { component: <WebAppsSticker />, bg: '#0e4a77' },
    { component: <SupportSticker />, bg: '#46abeb' },
  ];

  const track2 = [
    { component: <MobileSticker />, bg: '#1b6eab' },
    { component: <UiUxSticker />, bg: '#63bbf2' },
    { component: <WebAppsSticker />, bg: '#0e4a77' },
    { component: <SupportSticker />, bg: '#46abeb' },
    { component: <WebDevSticker />, bg: '#2F9EE4' },
  ];

  const displayTrack1 = [...track1, ...track1, ...track1];
  const displayTrack2 = [...track2, ...track2, ...track2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Animate the left content elements (fade and slide up)
      const title = container.querySelector('.showcase-left-title');
      const desc = container.querySelector('.showcase-left-desc');
      const statsRow = container.querySelector('.showcase-stats-row');

      gsap.fromTo([title, desc, statsRow],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          }
        }
      );

      // Stats counting animation
      const statsObj = { uptime: 0, scoping: 0, users: 0 };
      gsap.to(statsObj, {
        uptime: 99.9,
        scoping: 24,
        users: 100,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 72%',
        },
        onUpdate: () => {
          if (uptimeRef.current) uptimeRef.current.innerText = statsObj.uptime.toFixed(1) + '%';
          if (scopingRef.current) scopingRef.current.innerText = Math.floor(statsObj.scoping) + 'h';
          if (usersRef.current) usersRef.current.innerText = Math.floor(statsObj.users) + '%';
        }
      });
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="showcase-section" ref={containerRef}>
      <div className="showcase-grid">
        
        {/* Left Column (Static contents) */}
        <div className="showcase-left">
          
          {/* Rotating badge in the corner */}
          <div className="work-badge-wrapper">
            <svg viewBox="0 0 100 100" className="star-badge-svg">
               <path d="M 50 0 L 61 35 L 96 25 L 70 54 L 88 88 L 50 71 L 12 88 L 30 54 L 4 25 L 39 35 Z" fill="#2F9EE4" />
            </svg>
            <span className="work-badge-text">focus</span>
          </div>

          <div className="showcase-left-content">
            <h2 className="showcase-left-title">
              designed for<br />
              reliability &amp; quality.
            </h2>
            <p className="showcase-left-desc">
              We build digital products with a focus on clean code, intuitive design, and long-term reliability. We treat every project as a partnership to help your business establish a strong online presence.
            </p>
            <div className="showcase-stats-row">
              <div className="showcase-stat-col">
                <span className="showcase-stat-number" ref={uptimeRef}>0.0%</span>
                <span className="showcase-stat-label">service uptime</span>
              </div>
              <div className="showcase-stat-col">
                <span className="showcase-stat-number" ref={scopingRef}>0h</span>
                <span className="showcase-stat-label">support response</span>
              </div>
              <div className="showcase-stat-col">
                <span className="showcase-stat-number" ref={usersRef}>0M+</span>
                <span className="showcase-stat-label">client satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Animated Columns */}
        <div className="showcase-right">
          
          {/* Column 1: Scrolls Up */}
          <div className="marquee-col scroll-up-col">
            <div className="marquee-vertical-track track-up">
              {displayTrack1.map((card, idx) => (
                <div key={idx} className="client-card" style={{ backgroundColor: card.bg }}>
                  {card.component}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Scrolls Down */}
          <div className="marquee-col scroll-down-col">
            <div className="marquee-vertical-track track-down">
              {displayTrack2.map((card, idx) => (
                <div key={idx} className="client-card" style={{ backgroundColor: card.bg }}>
                  {card.component}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// 6. Capability Showcase Section (Joy Rush style)
export function CapabilityShowcase() {
  const containerRef = useRef(null);
  const capabilities = [
    {
      title: "1. Plan",
      desc: "We discuss your project goals, define the features you need, and provide a clear timeline and budget estimation."
    },
    {
      title: "2. Design",
      desc: "We create visual layouts of your website or app so you can see how it will look and function before we start coding."
    },
    {
      title: "3. Develop",
      desc: "We build your website or app using reliable, secure code that works well on both desktop computers and mobile devices."
    },
    {
      title: "4. Launch & Support",
      desc: "We test the software, publish it online, and provide regular maintenance to ensure everything stays secure and up to date."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Animate the header block
      const header = container.querySelector('.capability-header');
      gsap.fromTo(header,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          }
        }
      );

      // Animate the progress line
      const progressLine = container.querySelector('.capability-timeline-line-progress');
      const isDesktop = window.innerWidth > 768;
      gsap.fromTo(progressLine,
        isDesktop ? { width: '0%' } : { height: '0%' },
        {
          width: '100%',
          height: '100%',
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.querySelector('.capability-timeline-container'),
            start: 'top 75%',
          }
        }
      );

      // Animate the timeline steps in a staggered way
      const steps = container.querySelectorAll('.capability-step');
      gsap.fromTo(steps,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.querySelector('.capability-timeline-container'),
            start: 'top 65%',
          }
        }
      );
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="capability-section" ref={containerRef}>
      <div className="capability-container">
        
        {/* Top Text Content */}
        <div className="capability-header">
          <h2 className="capability-main-title">
            Our development<br />
            process is <span className="highlight-text">straightforward.</span>
          </h2>
          <p className="capability-subtitle">
            We guide you through every step of building your website or application, from the initial plan to design, development, and long-term support.
          </p>
        </div>

        {/* Connected Horizontal Timeline (No boxes) */}
        <div className="capability-timeline-container">
          <div className="capability-timeline-line">
            <div className="capability-timeline-line-progress"></div>
          </div>
          
          <div className="capability-process-grid">
            {capabilities.map((item, index) => (
              <div key={index} className="capability-step">
                <div className="capability-node"></div>
                <span className="capability-step-num">0{index + 1}</span>
                <h3 className="capability-step-title">{item.title}</h3>
                <p className="capability-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Testimonial custom SVGs
function GoogleLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

function PinterestLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#E60023">
      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.3l1.37-5.8s-.35-.7-.35-1.74c0-1.63.95-2.85 2.13-2.85 1 0 1.49.75 1.49 1.66 0 1-.64 2.52-.97 3.92-.28 1.18.59 2.13 1.75 2.13 2.1 0 3.73-2.21 3.73-5.4 0-2.82-2.03-4.8-4.93-4.8-3.36 0-5.33 2.52-5.33 5.12 0 1 .39 2.12.88 2.72.1.11.11.2.08.31l-.33 1.37c-.05.2-.18.25-.4.15-1.5-.7-2.45-2.9-2.45-4.66 0-3.8 2.76-7.29 7.96-7.29 4.18 0 7.42 2.98 7.42 6.96 0 4.15-2.62 7.5-6.26 7.5-1.22 0-2.37-.64-2.77-1.39l-.75 2.87c-.27 1.04-1 2.35-1.5 3.16A12 12 0 1 0 12 0z" />
    </svg>
  );
}

function TwitchLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#9146FF">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
  );
}

function SpotifyLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1DB954">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.077-.337.135-.668.47-.745 3.856-.88 7.15-.5 9.82 1.13.296.18.387.563.207.858zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.078-1.182-.413.125-.847-.11-.972-.522-.125-.413.11-.847.522-.972 3.67-1.114 8.24-.57 11.343 1.34.367.227.487.708.26 1.075zm.107-2.846C14.524 8.78 8.942 8.594 5.71 9.574a1.001 1.001 0 0 1-1.22-.72 1 1 0 0 1 .72-1.22c3.707-1.125 9.852-.912 13.784 1.422.45.267.6.85.333 1.3a1 1 0 0 1-1.3.333z" />
    </svg>
  );
}

function StripeLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#635BFF">
      <path d="M13.962 10.931c0-1.012-.76-1.503-2.038-1.503-1.488 0-3.08.435-4.135 1.026l-.689-3.238c1.378-.592 3.197-.84 4.887-.84 4.093 0 6.036 1.83 6.036 5.176v6.237c0 1.258.261 1.895.748 1.895.27 0 .54-.085.748-.22v2.96c-.503.226-1.144.338-1.895.338-2.096 0-2.836-1.145-2.836-2.802v-.395c-.99 1.156-2.484 1.776-4.225 1.776-3.064 0-5.176-1.748-5.176-4.577 0-3.81 3.236-4.888 7.37-4.888 1.2 0 1.2.043 1.2.043v-.058zm-1.218 2.115c-1.833 0-3.14.364-3.14 1.42 0 .685.556 1.053 1.34 1.053 1.399 0 2.27-.887 2.27-2.148V13.06l-.47-.014z" />
    </svg>
  );
}

function AirbnbLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF5A5F">
      <path d="M12 2C11.39 2 10.84.34 9.17 3.86L3.43 15.65A5 5 0 0 0 7.8 22.8c2 .07 3.39-.77 4.2-1.88.81 1.11 2.2 1.95 4.2 1.88a5 5 0 0 0 4.37-7.15L14.83 3.86A3 3 0 0 0 12 2zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
}

function SlackLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#4A154B">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043z" />
    </svg>
  );
}

function ShopifyLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#96bf48">
      <path d="M19.57 6.47c-.24.08-.47.16-.7.24V4.94A1.94 1.94 0 0 0 16.93 3h-3.86A1.94 1.94 0 0 0 11.13 4.94v1.94c-.6.22-1.2.47-1.78.75l-1.32-2a.96.96 0 0 0-1.33-.27l-2 1.33a.96.96 0 0 0-.27 1.33l1.19 1.8a21 21 0 0 0-2.8 6.78.96.96 0 0 0 .8 1.1h16.76a.96.96 0 0 0 .8-1.1c-.24-2.88-1.24-5.63-2.8-6.78z" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 24 24" className="card-action-icon" width="18" height="18" fill={filled ? '#2F9EE4' : 'none'} stroke={filled ? '#2F9EE4' : 'currentColor'} strokeWidth="2">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function BookmarkIcon({ filled }) {
  return (
    <svg viewBox="0 0 24 24" className="card-action-icon" width="18" height="18" fill={filled ? '#2F9EE4' : 'none'} stroke={filled ? '#2F9EE4' : 'currentColor'} strokeWidth="2">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

function QuoteMarkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="card-quote-icon" width="28" height="28" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

// 7. Testimonial Section (Draggable Horizontal Slider)
export function TestimonialSection() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [likes, setLikes] = useState(Array(8).fill(false));
  const [bookmarks, setBookmarks] = useState(Array(8).fill(false));

  const testimonials = [
    {
      logo: <GoogleLogoIcon />,
      brand: "Google",
      quote: "The website developed by Toco Technologies loads quickly and is easy for our team to update. Their technical support is always responsive.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
      name: "Sarah Mitchell",
      role: "Head of Growth"
    },
    {
      logo: <PinterestLogoIcon />,
      brand: "Pinterest",
      quote: "They built our mobile application on time and within budget. The app is stable, and our users find it very easy to navigate.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
      name: "Marcus Lee",
      role: "Performance Marketing Lead"
    },
    {
      logo: <TwitchLogoIcon />,
      brand: "Twitch",
      quote: "Toco Technologies helped us redesign our customer portal. The interface is clean, simple, and has significantly improved our user satisfaction.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80",
      name: "Olivia Bennett",
      role: "Brand Marketing Manager"
    },
    {
      logo: <SpotifyLogoIcon />,
      brand: "Spotify",
      quote: "We hired Toco Technologies to build a custom dashboard. They delivered a reliable solution and continue to provide great maintenance support.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
      name: "David Chen",
      role: "Senior Product Lead"
    },
    {
      logo: <StripeLogoIcon />,
      brand: "Stripe",
      quote: "They integrated our payment systems and database workflows smoothly. The team communicates clearly and explains technical details simply.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&fit=crop&q=80",
      name: "Elena Rostova",
      role: "Technical Lead"
    },
    {
      logo: <AirbnbLogoIcon />,
      brand: "Airbnb",
      quote: "We needed a responsive website that worked well on mobile. They delivered a clean design that has helped us reach more customers.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&fit=crop&q=80",
      name: "Liam O'Connor",
      role: "Creative Director"
    },
    {
      logo: <SlackLogoIcon />,
      brand: "Slack",
      quote: "Their team built a custom directory tool for our employees. It works exactly as expected and has simplified our daily workflows.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&fit=crop&q=80",
      name: "Sophia Vance",
      role: "Product Marketing Manager"
    },
    {
      logo: <ShopifyLogoIcon />,
      brand: "Shopify",
      quote: "Toco Technologies handles our monthly website maintenance. They keep our systems secure, up to date, and resolve any issues quickly.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&fit=crop&q=80",
      name: "Alex Dumont",
      role: "Founder & CTO"
    }
  ];

  const toggleLike = (idx) => {
    setLikes(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const toggleBookmark = (idx) => {
    setBookmarks(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -418, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 418, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Header reveal
      const header = container.querySelector('.testimonials-header-row');
      gsap.fromTo(header,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          }
        }
      );

      // Cards staggered reveal on scroll
      const cards = container.querySelectorAll('.testimonial-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: 'top 65%',
          }
        }
      );
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="testimonials-section" ref={containerRef}>
      <div className="testimonials-container">
        
        {/* Header Row with Navigation Buttons */}
        <div className="testimonials-header-row">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              What our clients say<br />
              about working with us.
            </h2>
          </div>
          <div className="testimonials-nav">
            <button className="nav-arrow-btn" onClick={scrollPrev} aria-label="Previous Reviews">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="nav-arrow-btn" onClick={scrollNext} aria-label="Next Reviews">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Slider Track Container */}
        <div className="testimonials-slider-container">
          <div className="testimonials-slider-track" ref={sliderRef}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                
                {/* Card Header: Brand */}
                <div className="testimonial-card-brand">
                  {item.logo}
                  <span className="brand-name">{item.brand}</span>
                </div>

                {/* Quote Icon */}
                <div className="testimonial-quote-wrapper">
                  <QuoteMarkIcon />
                </div>

                {/* Quote Content */}
                <p className="testimonial-quote-text">{item.quote}</p>

                {/* Card Footer: Profile */}
                <div className="testimonial-card-footer">
                  <div className="testimonial-profile">
                    <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                    <div className="testimonial-info">
                      <span className="profile-name">{item.name}</span>
                      <span className="profile-role">{item.role}</span>
                    </div>
                  </div>

                  {/* Utility Buttons */}
                  <div className="testimonial-utilities">
                    <button 
                      className={`utility-btn ${likes[idx] ? 'liked' : ''}`} 
                      onClick={() => toggleLike(idx)}
                      aria-label="Like testimonial"
                    >
                      <HeartIcon filled={likes[idx]} />
                    </button>
                    <button 
                      className={`utility-btn ${bookmarks[idx] ? 'bookmarked' : ''}`} 
                      onClick={() => toggleBookmark(idx)}
                      aria-label="Bookmark testimonial"
                    >
                      <BookmarkIcon filled={bookmarks[idx]} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 8. Horizontal Pin Scroll Services Showcase (Oak & Grid / Redondo style visual impact)
export function ServicesShowcase() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  const services = [
    {
      num: "01",
      title: "website development",
      desc: "We build custom websites that are secure, fast, and easy to use on both mobile and desktop screens."
    },
    {
      num: "02",
      title: "ui/ux design",
      desc: "We design clean layouts and prototypes to make sure your website or application is easy for visitors to navigate."
    },
    {
      num: "03",
      title: "web applications",
      desc: "We build custom web software to help streamline your internal business processes and manage data safely."
    },
    {
      num: "04",
      title: "mobile app development",
      desc: "We develop custom iOS and Android mobile apps designed to perform reliably and support your business goals."
    },
    {
      num: "05",
      title: "api & database setups",
      desc: "We connect your systems with secure databases and build stable API integrations to keep your data synced."
    },
    {
      num: "06",
      title: "maintenance & support",
      desc: "We provide ongoing technical support, regular security patches, and updates to keep your software working correctly."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      // Check if view width is desktop to enable pinning (responsive design)
      const isDesktop = window.innerWidth > 768;
      let pinTrigger;

      if (isDesktop) {
        // Calculate how far the horizontal track needs to slide to the left using scrollWidth
        const getScrollAmount = () => {
          return track.scrollWidth - window.innerWidth + 160; // offset padding
        };

        const scrollAmount = getScrollAmount();
        if (scrollAmount <= 0) return;

        pinTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          animation: gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none"
          }),
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          }
        });
      }

      // Individual card entrance animations inside the track on load/scroll
      const cards = track.querySelectorAll('.horizontal-service-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: isDesktop ? "top 80%" : "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Force update ScrollTrigger layouts
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="services-pin-container" ref={containerRef}>
      <div className="services-pin-wrapper">
        
        {/* Header */}
        <div className="services-pin-header">
          <h2 className="services-pin-title">
            Our services are built<br />
            to support your business goals.
          </h2>
        </div>

        {/* Viewport & Horizontal Track */}
        <div className="services-horizontal-viewport">
          <div className="services-horizontal-track" ref={trackRef}>
            {services.map((item) => (
              <div key={item.num} className="horizontal-service-card">
                <div className="service-number-badge">
                  <span>{item.num}</span>
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Tracker (Desktop only) */}
        <div className="service-progress-container">
          <div className="service-progress-bar" ref={progressBarRef}></div>
        </div>

      </div>
    </section>
  );
}

// 9. About Us Scroll Reveal (Redondo style)
export function AboutUsReveal() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const textContent = "we are a team of developers and designers focused on building reliable websites, custom web applications, and mobile apps. we work closely with business owners to deliver quality software that is easy to use, scale, and maintain.";
  const words = textContent.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const spans = textRef.current?.querySelectorAll('.reveal-word');
      if (!spans || spans.length === 0) return;

      // Timeline for scroll reveal word color
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 1.2,
        }
      });

      tl.to(spans, {
        color: "#081420",
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="about-reveal-section" ref={containerRef}>
      <div className="about-reveal-container">
        
        {/* Pink capitalized sub-label */}
        <span className="showcase-pink-label">we are toco</span>
        
        {/* Reveal Text block */}
        <p className="reveal-text-container" ref={textRef}>
          {words.map((word, idx) => (
            <span key={idx} className="reveal-word-wrapper">
              <span className="reveal-word">{word}</span>
              {" "}
            </span>
          ))}
        </p>

      </div>
    </section>
  );
}

// 10. Expertise Split-Row Section (Oak & Grid style)
export function ExpertiseSection() {
  const containerRef = useRef(null);
  const expertiseItems = [
    {
      title: "Website Development",
      desc: "We build fast, secure, and responsive websites that help you connect with your customers and support your business goals.",
      tags: ["Next.js", "React", "WordPress", "SEO"]
    },
    {
      title: "UI/UX Design",
      desc: "We design clean, user-friendly interfaces that make your website or application easy and intuitive for people to navigate.",
      tags: ["Figma", "UI/UX", "Wireframes", "Layouts"]
    },
    {
      title: "Web Applications",
      desc: "We develop custom web software to help you manage your internal operations, automate tasks, and serve your users.",
      tags: ["React", "Node.js", "SaaS", "Databases"]
    },
    {
      title: "Mobile Apps",
      desc: "We design and build custom mobile applications for iOS and Android platforms that are fast and reliable.",
      tags: ["iOS", "Android", "React Native", "Apps"]
    },
    {
      title: "Maintenance & Support",
      desc: "We provide regular updates, security monitoring, and technical support to keep your digital products running smoothly.",
      tags: ["Support", "Security", "Backups", "Updates"]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Animate lines to expand width
      const lines = container.querySelectorAll('.expertise-divider');
      gsap.fromTo(lines, 
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          }
        }
      );

      // Animate rows to fade and slide up
      const rows = container.querySelectorAll('.expertise-row');
      gsap.fromTo(rows,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          }
        }
      );
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="expertise-section" ref={containerRef}>
      <div className="expertise-container">
        
        {/* Large Serif Title */}
        <h2 className="expertise-main-title">Expertise</h2>

        {/* Divider above rows */}
        <div className="expertise-divider"></div>

        {/* Rows List */}
        <div className="expertise-rows-list">
          {expertiseItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="expertise-row">
                <div className="expertise-title-col">
                  <h3 className="expertise-title">{item.title}</h3>
                </div>
                <div className="expertise-slash-col">
                  <span className="expertise-slash">/</span>
                </div>
                <div className="expertise-desc-col">
                  <p className="expertise-desc">{item.desc}</p>
                </div>
                <div className="expertise-tags-col">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="expertise-tag-badge">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="expertise-divider"></div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

// 11. FAQ Accordion Section (thepatchsystem.com/ai style)
export function FaqSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      num: "01",
      question: "What services does Toco Technologies offer?",
      answer: "We specialize in custom website development, web application development, mobile app development (iOS & Android), UI/UX design, and ongoing website maintenance and support."
    },
    {
      num: "02",
      question: "How do we start a new project?",
      answer: "We begin with an initial consultation to discuss your business needs. After defining the project scope and requirements, we provide a clear project plan, estimated timeline, and cost estimate."
    },
    {
      num: "03",
      question: "Do you offer website maintenance and support?",
      answer: "Yes. We offer monthly maintenance plans to monitor security, install updates, fix bugs, and ensure your website or application continues to run reliably."
    },
    {
      num: "04",
      question: "Can you collaborate with our in-house team?",
      answer: "Yes. We can work alongside your existing team members, designers, or project managers to help build features or manage specific parts of your software project."
    },
    {
      num: "05",
      question: "What technologies do you use?",
      answer: "We choose the right technology based on your project goals. We commonly build websites and web apps using HTML, CSS, JavaScript, React, Next.js, and Node.js, and build mobile apps using React Native or native frameworks."
    },
    {
      num: "06",
      question: "How do we get a project estimate?",
      answer: "You can click the 'Start Your Project' button and fill out our contact form. We will schedule a call to learn more about your business and provide a detailed estimate."
    }
  ];

  const toggleAccordion = (idx) => {
    setActiveIndex(prev => (prev === idx ? null : idx));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Animate the main title fade in
      const title = container.querySelector('.faq-main-title');
      gsap.fromTo(title,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          }
        }
      );

      // Staggered reveal of accordion items
      const items = container.querySelectorAll('.faq-item');
      gsap.fromTo(items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
          }
        }
      );

      // Animate background fluid blobs slowly
      const blobs = container.querySelectorAll('.mixed-blob');
      blobs.forEach((blob) => {
        gsap.to(blob, {
          x: '+=50',
          y: '-=30',
          duration: 9 + Math.random() * 5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="faq-section" ref={containerRef}>
      {/* Background blobs to match the mixed-media gradient */}
      <div className="mixed-hero-bg-blobs">
        <div className="mixed-blob mixed-blob-1"></div>
        <div className="mixed-blob mixed-blob-2"></div>
        <div className="mixed-blob mixed-blob-3"></div>
      </div>

      <div className="faq-section-container">
        
        {/* Title */}
        <h2 className="faq-main-title">Frequently Asked Questions</h2>

        {/* Accordion List */}
        <div className="faq-accordion-container">
          {faqs.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isActive}
                >
                  {/* Left Column: Number Badge */}
                  <div className="faq-badge-wrapper">
                    <div className="faq-number-badge">
                      <span>{item.num}</span>
                    </div>
                  </div>

                  {/* Middle Column: Question Text */}
                  <span className="faq-question-text">{item.question}</span>

                  {/* Right Column: Arrow Separator */}
                  <div className="faq-arrow-wrapper">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="faq-arrow-icon"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer block */}
                <div 
                  className="faq-content"
                  style={{ maxHeight: isActive ? '300px' : '0px' }}
                >
                  <div className="faq-answer-inner">
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
