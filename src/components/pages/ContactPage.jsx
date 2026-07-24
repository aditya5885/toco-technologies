import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  User, Mail, Briefcase, Building2, Calendar, MapPin, 
  Clock, ChevronDown, ChevronUp, CheckCircle2, Sparkles, ArrowRight 
} from 'lucide-react';
import './ContactPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);
  const formSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    solution: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ interactive state
  const [activeCategory, setActiveCategory] = useState("General");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.jobTitle || !formData.companyName || !formData.solution) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      gsap.fromTo('.contact-success-card-parloa',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }
      );
    }, 1200);
  };

  const toggleAccordion = (idx) => {
    setActiveAccordion(prev => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      category: "General",
      question: "What does Toco Technologies specialize in?",
      answer: "We provide custom software development, web applications, mobile apps, UI/UX design, cloud solutions, and technology consulting tailored to business needs."
    },
    {
      category: "General",
      question: "Who can benefit from your services?",
      answer: "We work with startups, small businesses, enterprises, and organizations looking for reliable digital solutions."
    },
    {
      category: "General",
      question: "Do you work with international clients?",
      answer: "Yes. We collaborate with clients worldwide using online meetings, project management tools, and secure communication channels."
    },
    {
      category: "General",
      question: "Can you sign an NDA?",
      answer: "Yes. We are happy to sign a Non-Disclosure Agreement before discussing sensitive business information."
    },
    {
      category: "Services",
      question: "What services do you offer?",
      answer: "We offer web development, mobile application development, custom software, API development, cloud solutions, UI/UX design, maintenance, and technical consulting."
    },
    {
      category: "Services",
      question: "Can you redesign my existing website?",
      answer: "Yes. We can modernize your website's design, improve performance, optimize SEO, and enhance the user experience."
    },
    {
      category: "Services",
      question: "Do you develop mobile applications?",
      answer: "Yes. We create Android, iOS, and cross-platform applications using modern technologies."
    },
    {
      category: "Services",
      question: "Can you build software specifically for my business?",
      answer: "Absolutely. Every business has unique requirements, and we develop custom solutions designed around your workflow and goals."
    },
    {
      category: "Development Process",
      question: "How does your development process work?",
      answer: "Our process includes requirement gathering, planning, UI/UX design, development, testing, deployment, and ongoing support."
    },
    {
      category: "Development Process",
      question: "How long does a project usually take?",
      answer: "Project timelines depend on complexity. A simple website may take 2–4 weeks, while larger applications may require several months."
    },
    {
      category: "Development Process",
      question: "Will I receive progress updates?",
      answer: "Yes. We provide regular updates and involve you throughout the development process."
    },
    {
      category: "Development Process",
      question: "Can I request changes during development?",
      answer: "Yes. Minor changes can often be accommodated during development. Larger changes may affect the timeline and cost."
    },
    {
      category: "Pricing",
      question: "How much does a project cost?",
      answer: "Pricing depends on project scope, features, technology stack, and timeline. We provide detailed quotations after understanding your requirements."
    },
    {
      category: "Pricing",
      question: "Do you offer fixed-price projects?",
      answer: "Yes. We offer both fixed-price and hourly engagement models depending on the project."
    },
    {
      category: "Pricing",
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers and other secure payment methods agreed upon during project onboarding."
    },
    {
      category: "Pricing",
      question: "Do I need to pay an advance?",
      answer: "Yes. Most projects begin with an initial deposit, with the remaining balance paid according to agreed milestones."
    },
    {
      category: "Support",
      question: "Do you provide maintenance after launch?",
      answer: "Yes. We offer maintenance, security updates, feature enhancements, and performance monitoring."
    },
    {
      category: "Support",
      question: "What if I discover a bug after launch?",
      answer: "We address bugs reported within the agreed support period and can provide ongoing maintenance plans."
    },
    {
      category: "Support",
      question: "Can you manage hosting and deployment?",
      answer: "Yes. We assist with cloud hosting, domain setup, SSL configuration, deployment, backups, and monitoring."
    },
    {
      category: "Support",
      question: "How can I contact support?",
      answer: "You can reach us via email, phone, or the contact form on our website. We aim to respond promptly to all inquiries."
    },
    {
      category: "Technology",
      question: "Which technologies do you use?",
      answer: "We work with modern technologies including React, Next.js, Angular, Vue.js, Node.js, Laravel, PHP, Python, Flutter, React Native, .NET, AWS, Docker, PostgreSQL, MySQL, MongoDB, and more."
    },
    {
      category: "Technology",
      question: "Do you integrate third-party services?",
      answer: "Yes. We integrate payment gateways, CRMs, ERP systems, authentication providers, maps, analytics, messaging platforms, and other APIs."
    },
    {
      category: "Technology",
      question: "Can you build AI-powered applications?",
      answer: "Yes. We develop AI-enabled solutions such as chatbots, automation tools, recommendation systems, document processing, and intelligent business workflows."
    },
    {
      category: "Technology",
      question: "Do you build scalable applications?",
      answer: "Yes. We follow modern architecture and best practices to ensure your application is secure, maintainable, and capable of scaling as your business grows."
    }
  ];

  // Filter FAQs based on active category
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const ctx = gsap.context(() => {
      // Fade in hero and grid
      gsap.fromTo('.contact-hero-intro *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );

      gsap.fromTo('.contact-split-grid',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.35, ease: 'power3.out' }
      );

      // Scroll reveals
      gsap.fromTo('.contact-faq-section',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-faq-section',
            start: 'top 85%'
          }
        }
      );

      gsap.fromTo('.contact-cta-banner',
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-cta-banner',
            start: 'top 85%'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-page-wrapper-parloa" ref={pageRef}>
      
      {/* Premium fading dot-grid background overlay */}
      <div className="contact-bg-grid"></div>
      
      <div className="contact-container">
        
        {/* Redesigned Hero Header Area */}
        <div className="contact-hero-intro">
          <div className="pill-badge-tag">
            <span className="badge-dot-blue"></span>
            <span>Contact Us</span>
          </div>
          
          <div className="hero-columns-wrapper">
            <div className="hero-left-col">
              <h1 className="contact-hero-title">
                Explore the Power of Toco Technologies
              </h1>
            </div>
            <div className="hero-right-col">
              <p className="contact-hero-subtitle">
                See how Toco Technologies turns complex ideas into scalable, high-performance web & mobile architectures for forward-thinking brands.
              </p>
            </div>
          </div>
        </div>

        {/* Stateful 2-Column Split Grid */}
        <div className="contact-split-grid" ref={formSectionRef}>
          
          {/* Left Card: Send us a Message Form */}
          <div className="contact-card-left-form">
            <h3 className="card-box-heading">Send us a message</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="contact-custom-form">
                
                {/* Full Name */}
                <div className="form-input-wrapper">
                  <label>Full Name*</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                      required
                    />
                    <User size={18} className="input-icon" />
                  </div>
                </div>

                {/* Business Email */}
                <div className="form-input-wrapper">
                  <label>Business Email*</label>
                  <div className="input-with-icon">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      required
                    />
                    <Mail size={18} className="input-icon" />
                  </div>
                </div>

                {/* Job Title */}
                <div className="form-input-wrapper">
                  <label>Job Title*</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="Enter job"
                      required
                    />
                    <Briefcase size={18} className="input-icon" />
                  </div>
                </div>

                {/* Company Name */}
                <div className="form-input-wrapper">
                  <label>Company Name*</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter company"
                      required
                    />
                    <Building2 size={18} className="input-icon" />
                  </div>
                </div>

                {/* Solution Dropdown */}
                <div className="form-input-wrapper">
                  <label>Solution*</label>
                  <div className="input-with-icon">
                    <select 
                      name="solution"
                      value={formData.solution}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select solution</option>
                      <option value="Web Development">Web App Development</option>
                      <option value="Mobile Development">Mobile App Development</option>
                      <option value="AI Integration">AI Integration & ML</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                      <option value="Bespoke Systems">Custom Software Systems</option>
                    </select>
                    <ChevronDown size={18} className="input-icon select-pointer" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`form-submit-pill-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="submit-spinner"></span>
                  ) : (
                    <span>Talk to an Expert</span>
                  )}
                </button>

              </form>
            ) : (
              <div className="contact-success-card-parloa">
                <div className="success-icon-wrapper-parloa">
                  <CheckCircle2 size={44} className="success-checkmark-parloa" />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out. We have received your project parameters and our engineering team will follow up within 12 business hours.
                </p>
                <button 
                  className="reset-enquiry-btn-parloa"
                  onClick={() => {
                    setFormData({ fullName: '', email: '', jobTitle: '', companyName: '', solution: '' });
                    setIsSubmitted(false);
                  }}
                >
                  <Sparkles size={14} />
                  <span>Send Another Message</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Card: Info block & Map preview */}
          <div className="contact-card-right-info">
            <div className="info-cards-list">
              
              {/* Mail Us */}
              <div className="info-row-item">
                <div className="info-icon-circle">
                  <Mail size={18} />
                </div>
                <div className="info-row-text">
                  <span className="info-row-label">Mail Us</span>
                  <a href="mailto:hello@toco.tech" className="info-row-value">hello@toco.tech</a>
                </div>
              </div>

              {/* Hours */}
              <div className="info-row-item">
                <div className="info-icon-circle">
                  <Calendar size={18} />
                </div>
                <div className="info-row-text">
                  <span className="info-row-label">Monday to Friday</span>
                  <span className="info-row-value">9:00 AM - 6:00 PM Central Time</span>
                </div>
              </div>

              {/* Address */}
              <div className="info-row-item">
                <div className="info-icon-circle">
                  <MapPin size={18} />
                </div>
                <div className="info-row-text">
                  <span className="info-row-label">Toco Office</span>
                  <span className="info-row-value">500 West Madison Street, Chicago, IL 60661, United States</span>
                </div>
              </div>

            </div>

            {/* Embedded Google Map iframe inside Card */}
            <div className="card-map-embed-wrapper">
              <iframe 
                title="Toco Technologies Chicago Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.187383637151!2d-87.64245648455794!3d41.882463779221975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cc000000001%3A0x6bde6008efc5bde7!2s500%20W%20Madison%20St%2C%20Chicago%2C%20IL%2060661%2C%20USA!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Stateful FAQ Section (matching screenshot FAQ layout) */}
        <div className="contact-faq-section" ref={faqSectionRef}>
          <div className="faq-section-header">
            <h2 className="faq-main-title section-title section-title-light-bg">
              Frequently Asked <span className="title-gradient-highlight">Questions</span>
            </h2>
            <p className="faq-main-subtitle">
              Clear answers to common questions about our platform, features, and support.
            </p>
            
            {/* Filter Tabs */}
            <div className="faq-category-tabs">
              {["General", "Services", "Development Process", "Pricing", "Support", "Technology"].map((cat) => (
                <button 
                  key={cat} 
                  className={`faq-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveAccordion(null); // Reset open states
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="faq-accordions-list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="faq-accordion-header">
                    <h4>{faq.question}</h4>
                    <div className="faq-arrow-box">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                  
                  <div className="faq-accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Banner (matching screenshot layout) */}
        <div className="contact-cta-banner" ref={ctaSectionRef}>
          
          <div className="cta-radial-glow"></div>
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Let's make your software vision a reality
            </h2>
            <p className="cta-banner-desc">
              Trusted by forward-thinking brands to deliver high-impact custom web & mobile apps. Get in touch to schedule a discovery call.
            </p>
            
            <div className="cta-banner-actions">
              <a href="#contact" className="cta-btn-dark">
                <span>Talk to sales</span>
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="cta-btn-white">
                Request a demo
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
