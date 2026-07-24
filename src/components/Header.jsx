import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import './Header.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
];

export default function Header({ isContactPage }) {
  const [hoveredStyle, setHoveredStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navContainerRef = useRef(null);

  // Monitor scroll for shrinking header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active navigation link with URL hash changes
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setActiveItem('');
      } else if (hash === '#careers') {
        setActiveItem('Careers');
      } else if (hash === '#home' || hash === '') {
        setActiveItem('Home');
      } else if (hash === '#services') {
        setActiveItem('Services');
      } else if (hash === '#about') {
        setActiveItem('About Us');
      } else if (hash === '#projects') {
        setActiveItem('Projects');
      }
    };
    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  // Update hover state
  const handleMouseEnter = (e) => {
    const linkElement = e.currentTarget;
    const container = navContainerRef.current;
    if (linkElement && container) {
      const linkRect = linkElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setHoveredStyle({
        left: `${linkRect.left - containerRect.left}px`,
        width: `${linkRect.width}px`,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleItemClick = (label) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled || isContactPage ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <a href="#home" className="logo-container" onClick={() => handleItemClick('Home')}>
          <img src="/logo.jpeg" alt="Toco Technologies Logo" className="header-logo" />
          <span className="logo-text">Toco<span className="accent-text"> Technologies</span></span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="desktop-nav" ref={navContainerRef} onMouseLeave={handleMouseLeave}>
          {/* Sliding Hover Indicator */}
          <div className="nav-hover-indicator" style={hoveredStyle} />
          
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter}
              onClick={() => handleItemClick(item.label)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="header-actions">
          <a href="#contact" className="cta-button" onClick={() => handleItemClick('')}>
            <span>Start Your Project</span>
            <ArrowUpRight size={16} className="cta-icon" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${activeItem === item.label ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleItemClick(item.label)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mobile-cta-link"
            style={{ animationDelay: `${navItems.length * 0.1}s` }}
            onClick={() => handleItemClick('')}
          >
            <PhoneCall size={18} />
            <span>Contact Our Team</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
