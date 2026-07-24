import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Mail, Phone, MapPin, Briefcase, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import './ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Scroll to the top of the form wrapper
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Animate success screen
      gsap.fromTo('.contact-success-card-parloa',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }
      );
    }, 1200);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left elements
      gsap.fromTo(leftRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      // Fade in right form wrapper
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      );

      // Fade in map section
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      
      {/* Decorative blurred background blobs */}
      <div className="contact-bg-blob c-blob-1"></div>
      <div className="contact-bg-blob c-blob-2"></div>

      <div className="contact-container">
        
        {/* Left Side: Contact Info */}
        <div className="contact-left" ref={leftRef}>
          <span className="contact-small-label">GET IN TOUCH</span>
          
          <h2 className="contact-heading">
            Let's Build<br />
            Something<br />
            <span className="text-sky-highlight">Extraordinary</span>
          </h2>
          
          <p className="contact-description">
            Ready to transform your ideas into reality? Our team of experts is here to help you scale your business with cutting-edge technology.
          </p>

          <div className="contact-details-list">
            
            {/* Email */}
            <a href="mailto:hello@toco.ae" className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>
              <div className="contact-detail-info">
                <span>EMAIL US</span>
                <p>hello@toco.ae</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+971500000000" className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={20} />
              </div>
              <div className="contact-detail-info">
                <span>CALL US</span>
                <p>+971 50 000 0000</p>
              </div>
            </a>

            {/* Location */}
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-detail-info">
                <span>VISIT US</span>
                <p>Marina Plaza, Dubai Marina, Dubai, UAE</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="contact-right" ref={formRef}>
          
          {!isSubmitted ? (
            <form className="contact-form-card" onSubmit={handleSubmit}>
              
              {/* Row 1: First and Last Name */}
              <div className="form-row-grid">
                <div className="form-group-floating">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-wrapper">
                    <User size={18} className="field-icon" />
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required
                    />
                  </div>
                </div>

                <div className="form-group-floating">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-wrapper">
                    <User size={18} className="field-icon" />
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="form-group-floating">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail size={18} className="field-icon" />
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group-floating">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={18} className="field-icon" />
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>

              {/* Choose Service */}
              <div className="form-group-floating">
                <label htmlFor="service">Choose Service</label>
                <div className="input-wrapper">
                  <Briefcase size={18} className="field-icon" />
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden>Select a service</option>
                    <option value="Web App Development">Web App Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="AI Integration">AI Integration</option>
                  </select>
                </div>
              </div>

              {/* Tell us more */}
              <div className="form-group-floating">
                <label htmlFor="message">Tell us more</label>
                <div className="input-wrapper select-arrow-hidden">
                  <MessageSquare size={18} className="field-icon icon-textarea" />
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project goals and requirements..." 
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`form-submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="button-spinner"></span>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send size={16} className="submit-arrow-icon" />
                  </>
                )}
              </button>

            </form>
          ) : (
            <div className="contact-success-card-parloa">
              <div className="success-icon-wrapper-parloa">
                <CheckCircle2 size={48} className="success-checkmark-parloa" />
              </div>
              <h3>Enquiry Submitted</h3>
              <p>
                Thank you. We have received your request and will reach out to you within 12 business hours to schedule your software consultation.
              </p>
              <button 
                className="reset-enquiry-btn-parloa"
                onClick={() => {
                  setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
                  setIsSubmitted(false);
                }}
              >
                <Sparkles size={14} />
                <span>Submit Another Request</span>
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Google Map Section */}
      <div className="contact-map-wrapper" ref={mapRef}>
        <iframe 
          title="Toco Technologies Dubai Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.68412891965!2d55.1418!3d25.0772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca9b8e21a2d%3A0xb3cf5e05a8b030b4!2sMarina%20Plaza!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
