import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Server, Database, Cloud } from 'lucide-react';
import './TechStackSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left side elements
      gsap.fromTo(leftRef.current.children,
        { opacity: 0, y: 30 },
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

      // Fade and slide in cards
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tech-section" ref={sectionRef} id="tech-stack">
      <div className="tech-container">
        
        {/* Left Side: Copy */}
        <div className="tech-left" ref={leftRef}>
          <div className="tech-badge">
            <span className="tech-badge-dot"></span>
            our foundation
          </div>
          
          <h2 className="tech-title">
            Engineering Excellence with <span className="text-gradient-blue">Modern Technologies</span>
          </h2>
          
          <p className="tech-subtitle">
            We build high-performance digital products by pairing modern frameworks with robust cloud infrastructure, guaranteeing speed, security, and scalability.
          </p>
        </div>

        {/* Right Side: Bento Grid Tech Cards */}
        <div className="tech-right-grid" ref={cardsRef}>
          
          {/* Card 1: Frontend */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon-box blue-theme">
                <Monitor size={20} />
              </div>
              <h3>Frontend Stack</h3>
            </div>
            <p>Creating fluid, highly responsive user interfaces that deliver exceptional speed and SEO performance.</p>
            <div className="tech-card-badges">
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">Tailwind CSS</span>
              <span className="tech-pill">TypeScript</span>
            </div>
          </div>

          {/* Card 2: Backend */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon-box green-theme">
                <Server size={20} />
              </div>
              <h3>Backend &amp; API</h3>
            </div>
            <p>Building secure, high-throughput APIs and server architectures for flawless data transactions.</p>
            <div className="tech-card-badges">
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express</span>
              <span className="tech-pill">REST APIs</span>
              <span className="tech-pill">GraphQL</span>
            </div>
          </div>

          {/* Card 3: Database */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon-box purple-theme">
                <Database size={20} />
              </div>
              <h3>Databases</h3>
            </div>
            <p>Designing optimized relational and non-relational database structures for speed and safety.</p>
            <div className="tech-card-badges">
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">Redis</span>
              <span className="tech-pill">SQL</span>
            </div>
          </div>

          {/* Card 4: Cloud & Deployment */}
          <div className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon-box orange-theme">
                <Cloud size={20} />
              </div>
              <h3>Cloud &amp; DevOps</h3>
            </div>
            <p>Configuring deployments and CDNs for maximum global uptime, security, and automated delivery.</p>
            <div className="tech-card-badges">
              <span className="tech-pill">AWS</span>
              <span className="tech-pill">Vercel</span>
              <span className="tech-pill">Docker</span>
              <span className="tech-pill">Cloudflare</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
