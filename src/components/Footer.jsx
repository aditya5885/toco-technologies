import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

// Custom inline SVG Instagram icon
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="social-svg-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

// Custom inline SVG ShieldCheck icon
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// Custom inline SVG TikTok icon for safety
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="social-svg-icon" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.83 2.19 1.4 3.48 1.63v3.9c-1.39-.02-2.77-.42-3.95-1.16-.27 2.15-1.2 4.19-2.67 5.76-1.74 2.02-4.4 3.23-7.07 3.22-3.08-.05-6.07-1.92-7.23-4.77C-1.12 9.87.1 6.2 2.92 4.41c2.14-1.42 5.03-1.66 7.4-.62.06 1.43.02 2.87.03 4.3-.97-.53-2.14-.62-3.17-.23-1.4.45-2.47 1.84-2.52 3.3-.08 1.77 1.25 3.4 3 3.58 1.68.23 3.43-.8 3.88-2.47.2-1.04.13-2.12.15-3.19.01-3.04-.01-6.08.03-9.12-.03-.02-.07-.03-.1-.04z" />
    </svg>
  );
}

// Custom inline SVG UAE Flag
function UaeFlag() {
  return (
    <svg viewBox="0 0 30 30" className="flag-icon-svg">
      <clipPath id="circle-clip-uae">
        <circle cx="15" cy="15" r="14" />
      </clipPath>
      <g clipPath="url(#circle-clip-uae)">
        {/* Green top bar */}
        <rect x="0" y="0" width="30" height="10" fill="#00732F" />
        {/* White middle bar */}
        <rect x="0" y="10" width="30" height="10" fill="#FFFFFF" />
        {/* Black bottom bar */}
        <rect x="0" y="20" width="30" height="10" fill="#000000" />
        {/* Red left bar */}
        <rect x="0" y="0" width="9" height="30" fill="#E30A17" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="madre-footer">
      {/* Background Subtle Wavy Lines Overlay */}
      <div className="madre-footer-wavy">
        <svg viewBox="0 0 1440 380" fill="none" preserveAspectRatio="none">
          <path d="M-100,180 C280,70 520,290 800,140 C1080,40 1280,240 1600,90" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="3" />
          <path d="M-100,280 C220,220 440,320 720,180 C1000,80 1220,280 1600,160" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="2" />
        </svg>
      </div>

      <div className="madre-footer-container">
        
        {/* Top Info Grid */}
        <div className="madre-footer-grid">
          
          {/* Left Brand Area (Spacer with wave overlay) */}
          <div className="madre-brand-column"></div>

          {/* Link Column 1 */}
          <div className="madre-links-column">
            <a href="#home" className="madre-footer-link">HOME</a>
            <a href="#services" className="madre-footer-link">SERVICES</a>
            <a href="#about" className="madre-footer-link">ABOUT US</a>
            <a href="#projects" className="madre-footer-link">PORTFOLIO</a>
            <a href="#blog" className="madre-footer-link">BLOG</a>
            <a href="#careers" className="madre-footer-link">CAREERS</a>
          </div>

          {/* Link Column 2 (Locations & Extra Info) */}
          <div className="madre-links-column">
            <div className="madre-location-badge">
              <span>UAE</span>
            </div>
            <a href="#faqs" className="madre-footer-link">FAQ</a>
            <a href="#contact" className="madre-footer-link">CONTACT</a>
            <a href="#terms" className="madre-footer-link">TERMS OF SERVICE</a>
            <a href="#privacy" className="madre-footer-link">PRIVACY POLICY</a>
            <a href="#newsletter" className="madre-footer-link">NEWSLETTER</a>
          </div>

          {/* Right Info Column (Socials, Copyright, Language Flags) */}
          <div className="madre-info-column">
            {/* Social Icons */}
            <div className="madre-social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="madre-social-btn">
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="madre-social-btn">
                <TikTokIcon />
              </a>
            </div>

            {/* Copyright */}
            <p className="madre-copyright-text">
              © Toco Technologies 2026.<br />
              All rights reserved.
            </p>

            {/* Flag Icons */}
            <div className="madre-flag-row">
              <button className="madre-flag-btn" aria-label="UAE Language">
                <UaeFlag />
              </button>
            </div>
          </div>

        </div>

        {/* Massive Screen-width Brand Wordmark */}
        <div className="madre-branding-wordmark">
          <span className="branding-orange">TOCO</span>
          <span className="branding-coral">TECHNOLOGIES</span>
        </div>

      </div>

      {/* Floating Checkmark Badge on Bottom Left */}
      <div className="madre-bottom-left-badge">
        <ShieldCheckIcon />
      </div>

      {/* Scroll-to-top Button on Bottom Right */}
      <button 
        className="madre-bottom-right-scroll-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

    </footer>
  );
}
