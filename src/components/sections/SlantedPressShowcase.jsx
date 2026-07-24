import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SlantedPressShowcase.css';

// Vibrant, Colorful Tech Stack Logo Components (No Grayscale)
function ReactLogo() {
  return (
    <div className="tech-logo-wrapper" title="React">
      <svg viewBox="0 0 100 100" width="76" height="76" fill="none" stroke="#61DAFB" strokeWidth="3" className="press-logo">
        <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
        <ellipse cx="50" cy="50" rx="38" ry="14.5"/>
        <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(120 50 50)"/>
      </svg>
      <span className="tech-logo-label">React</span>
    </div>
  );
}

function NextjsLogo() {
  return (
    <div className="tech-logo-wrapper" title="Next.js">
      <svg viewBox="0 0 180 180" width="74" height="74" fill="#ffffff" className="press-logo">
        <circle cx="90" cy="90" r="85" fill="#000000" stroke="#ffffff" strokeWidth="8"/>
        <path d="M135 135 L65 55 M65 55 L65 135 M130 90 L130 135" stroke="#ffffff" strokeWidth="12" strokeLinecap="round"/>
      </svg>
      <span className="tech-logo-label">Next.js</span>
    </div>
  );
}

function TypeScriptLogo() {
  return (
    <div className="tech-logo-wrapper" title="TypeScript">
      <svg viewBox="0 0 100 100" width="66" height="66" fill="#ffffff" className="press-logo">
        <rect x="5" y="5" width="90" height="90" rx="12" fill="#3178C6"/>
        <text x="36" y="72" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="32" textAnchor="middle" fill="#ffffff">T</text>
        <text x="66" y="72" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="32" textAnchor="middle" fill="#ffffff">S</text>
      </svg>
      <span className="tech-logo-label">TypeScript</span>
    </div>
  );
}

function NodejsLogo() {
  return (
    <div className="tech-logo-wrapper" title="Node.js">
      <svg viewBox="0 0 100 100" width="72" height="72" fill="none" stroke="#339933" strokeWidth="6" strokeLinejoin="round" className="press-logo">
        <path d="M50 10 L15 30 L15 70 L50 90 L85 70 L85 30 Z" />
        <path d="M50 10 L50 90 M50 50 L15 30 M50 50 L85 30 M50 50 L15 70 M50 50 L85 70" strokeWidth="4"/>
        <circle cx="50" cy="50" r="10" fill="#339933" stroke="none" />
      </svg>
      <span className="tech-logo-label">Node.js</span>
    </div>
  );
}

function TailwindLogo() {
  return (
    <div className="tech-logo-wrapper" title="Tailwind CSS">
      <svg viewBox="0 0 100 100" width="78" height="78" fill="#38BDF8" className="press-logo">
        <path d="M26 30 C34 18 48 18 56 30 C64 42 78 42 86 30 C90 24 92 18 92 18 C92 18 90 28 82 38 C74 50 60 50 52 38 C44 26 30 26 22 38 C14 50 14 50 14 50 C14 50 18 40 26 30 Z" />
        <path d="M14 62 C22 50 36 50 44 62 C52 74 66 74 74 62 C82 50 86 44 86 44 C86 44 84 54 76 64 C68 76 54 76 46 64 C38 52 24 52 16 64 C10 72 8 78 8 78 C8 78 10 70 14 62 Z" fill="#06B6D4" opacity="0.8"/>
      </svg>
      <span className="tech-logo-label">Tailwind CSS</span>
    </div>
  );
}

// Purple gradient Vite logo
function ViteLogo() {
  return (
    <div className="tech-logo-wrapper" title="Vite">
      <svg viewBox="0 0 100 100" width="74" height="74" fill="none" className="press-logo">
        <defs>
          <linearGradient id="viteColorfulGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BD34FE" />
            <stop offset="100%" stopColor="#41CDFF" />
          </linearGradient>
        </defs>
        <path d="M10 20 L50 85 L90 20" stroke="url(#viteColorfulGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 15 L35 52 L50 52 L40 82 L65 44 L50 44 Z" fill="#FFD62E"/>
      </svg>
      <span className="tech-logo-label">Vite</span>
    </div>
  );
}

function HtmlLogo() {
  return (
    <div className="tech-logo-wrapper" title="HTML5">
      <svg viewBox="0 0 100 100" width="68" height="68" fill="#E34F26" className="press-logo">
        <path d="M10 10 L90 10 L82 82 L50 92 L18 82 Z" />
        <path d="M50 18 L50 84 L75 76 L80 26 Z" fill="#EF652A" />
        <path d="M50 40 L34 40 L33 30 L50 30 Z M50 62 L40 59 L39 48 L29 48 L31 69 L50 74 Z" fill="#EEEEEE" />
        <path d="M50 30 L50 40 L65 40 L64 54 L50 58 L50 69 L67 64 L70 30 Z" fill="#FFFFFF" />
      </svg>
      <span className="tech-logo-label">HTML5</span>
    </div>
  );
}

function CssLogo() {
  return (
    <div className="tech-logo-wrapper" title="CSS3">
      <svg viewBox="0 0 100 100" width="68" height="68" fill="#1572B6" className="press-logo">
        <path d="M10 10 L90 10 L82 82 L50 92 L18 82 Z" />
        <path d="M50 18 L50 84 L75 76 L80 26 Z" fill="#33A9DC" />
        <path d="M50 40 L34 40 L33 30 L50 30 Z M50 62 L40 59 L39 48 L29 48 L31 69 L50 74 Z" fill="#EEEEEE" />
        <path d="M50 30 L50 40 L65 40 L64 54 L50 58 L50 69 L67 64 L70 30 Z" fill="#FFFFFF" />
      </svg>
      <span className="tech-logo-label">CSS3</span>
    </div>
  );
}

function GsapLogo() {
  return (
    <div className="tech-logo-wrapper" title="GSAP">
      <span className="press-logo" style={{ fontFamily: "var(--heading)", fontWeight: 900, fontSize: '38px', letterSpacing: '-1.5px', color: '#88CE02' }}>
        GSAP
      </span>
      <span className="tech-logo-label">GSAP</span>
    </div>
  );
}

function JavascriptLogo() {
  return (
    <div className="tech-logo-wrapper" title="JavaScript">
      <svg viewBox="0 0 100 100" width="68" height="68" fill="#F7DF1E" className="press-logo">
        <rect x="5" y="5" width="90" height="90" rx="12"/>
        <text x="50" y="68" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="34" textAnchor="middle" fill="#000000">JS</text>
      </svg>
      <span className="tech-logo-label">JavaScript</span>
    </div>
  );
}

function GitLogo() {
  return (
    <div className="tech-logo-wrapper" title="Git">
      <svg viewBox="0 0 100 100" width="70" height="70" fill="none" stroke="#F05032" strokeWidth="5" className="press-logo">
        <path d="M50 8 L8 50 L50 92 L92 50 Z" strokeLinejoin="round" />
        <circle cx="50" cy="32" r="6" fill="#F05032" stroke="none" />
        <circle cx="50" cy="68" r="6" fill="#F05032" stroke="none" />
        <circle cx="32" cy="50" r="6" fill="#F05032" stroke="none" />
        <path d="M50 32 L50 68 M50 50 L32 50" strokeWidth="6" />
      </svg>
      <span className="tech-logo-label">Git</span>
    </div>
  );
}

function DatabaseLogo() {
  return (
    <div className="tech-logo-wrapper" title="MongoDB">
      <svg viewBox="0 0 100 100" width="70" height="70" fill="none" stroke="#47A248" strokeWidth="5" className="press-logo">
        <path d="M50 6 C28 32 28 68 50 94 C72 68 72 32 50 6 Z" strokeLinejoin="round" strokeWidth="5"/>
        <path d="M50 6 V94" strokeWidth="3" />
        <path d="M50 24 C40 38 40 58 50 72" strokeWidth="3" />
      </svg>
      <span className="tech-logo-label">MongoDB</span>
    </div>
  );
}

export default function SlantedPressShowcase() {
  const sectionRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const track3Ref = useRef(null);

  const row1 = [
    { component: <ReactLogo /> },
    { component: <NextjsLogo /> },
    { component: <TypeScriptLogo /> },
    { component: <NodejsLogo /> },
  ];

  const row2 = [
    { component: <TailwindLogo /> },
    { component: <ViteLogo /> },
    { component: <HtmlLogo /> },
    { component: <CssLogo /> },
  ];

  const row3 = [
    { component: <GsapLogo /> },
    { component: <JavascriptLogo /> },
    { component: <GitLogo /> },
    { component: <DatabaseLogo /> },
  ];

  // Triplicate items to allow seamless infinite looping
  const displayRow1 = [...row1, ...row1, ...row1];
  const displayRow2 = [...row2, ...row2, ...row2];
  const displayRow3 = [...row3, ...row3, ...row3];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in the header content
      gsap.fromTo('.slanted-press-header-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      const track1 = track1Ref.current;
      const track2 = track2Ref.current;
      const track3 = track3Ref.current;

      if (track1 && track2 && track3) {
        gsap.to(track1, {
          xPercent: -33.3333,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          }
        });

        gsap.to(track2, {
          xPercent: 33.3333,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          }
        });

        gsap.to(track3, {
          xPercent: -33.3333,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="slanted-press-section" ref={sectionRef}>
      
      {/* Top Header Information */}
      <div className="slanted-press-container">
        <div className="slanted-press-header-content">
          <span className="slanted-press-badge">OUR TOOLKIT</span>
          <h2 className="slanted-press-title section-title section-title-dark-bg">
            Built with <span className="section-title-highlight">Modern Tech</span>
          </h2>
          <p className="slanted-press-desc">
            We build digital products that perform. Our engineering team leverages a powerful, modern stack of frontend frameworks, backend runtimes, databases, and styling tools to build fast, secure, and responsive systems.
          </p>
          <a href="mailto:hello@toco.ae" className="slanted-press-email-link">
            start a project -&gt; hello@toco.ae
          </a>
        </div>
      </div>

      {/* Slanted Marquee Grid */}
      <div className="slanted-press-grid-wrapper">
        <div className="slanted-press-skew-container">
          
          {/* Row 1: Scrolls Left */}
          <div className="slanted-marquee-row">
            <div className="slanted-marquee-track track-left" ref={track1Ref}>
              {displayRow1.map((item, idx) => (
                <div key={idx} className="press-card">
                  {item.component}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="slanted-marquee-row">
            <div className="slanted-marquee-track track-right" ref={track2Ref} style={{ transform: 'translateX(-25%)' }}>
              {displayRow2.map((item, idx) => (
                <div key={idx} className="press-card">
                  {item.component}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Scrolls Left */}
          <div className="slanted-marquee-row">
            <div className="slanted-marquee-track track-left" ref={track3Ref}>
              {displayRow3.map((item, idx) => (
                <div key={idx} className="press-card">
                  {item.component}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
