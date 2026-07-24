import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Clock, ArrowUpRight, X, Briefcase, Paperclip, Send } from 'lucide-react';
import './CareersPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const pageRef = useRef(null);
  const jobsGridRef = useRef(null);

  // Categories list matching screenshot exactly
  const categories = [
    "View all", "Development", "Design", "Marketing",
    "Customer Service", "Operations", "Finance", "Management"
  ];
  const testimonials = [
    {
      id: 1,
      quote:
        "Toco truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.",
      name: "Frankie Sullivan",
      role: "Web Developer, Toco",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80",
    },
    {
      id: 2,
      quote:
        "The collaborative culture here has helped me grow both personally and professionally. Every day brings new opportunities.",
      name: "James Carter",
      role: "UI/UX Designer, Toco",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&fit=crop&q=80",
    },
    {
      id: 3,
      quote:
        "Working with talented people and solving real-world problems makes every project exciting. It's a great place to build a career.",
      name: "Sophia Williams",
      role: "Software Engineer, Toco",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&fit=crop&q=80",
    },
  ];

  // Jobs database
  const jobsData = [
    {
      id: 1,
      title: "Product Designer",
      desc: "We're looking for a mid-level product designer to join our team.",
      location: "100% remote",
      type: "Full-time",
      categories: ["Design"]
    },
    {
      id: 2,
      title: "Engineering Manager",
      desc: "We're looking for an experienced engineering manager to join our team.",
      location: "100% remote",
      type: "Full-time",
      categories: ["Development", "Management"]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      desc: "We're looking for a customer success manager to join our team.",
      location: "100% remote",
      type: "Full-time",
      categories: ["Customer Service"]
    },
    {
      id: 4,
      title: "Account Executive",
      desc: "We're looking for an account executive to join our team.",
      location: "100% remote",
      type: "Full-time",
      categories: ["Operations", "Management"]
    },
    {
      id: 5,
      title: "SEO Marketing Manager",
      desc: "We're looking for an experienced SEO marketing manager to join our team.",
      location: "100% remote",
      type: "Full-time",
      categories: ["Marketing"]
    }
  ];

  // State Management
  const [activeCategory, setActiveCategory] = useState("View all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resumeName: '',
    message: ''
  });

  const filteredJobs = activeCategory === "View all"
    ? jobsData
    : jobsData.filter(job => job.categories.includes(activeCategory));

  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormSubmitted(false);
    setFormData({ fullName: '', email: '', resumeName: '', message: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, resumeName: e.target.files[0].name }));
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // Intro headers animation
      gsap.fromTo('.careers-hero-content *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );

      // Slide in jobs on load
      gsap.fromTo('.jobs-list-box',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' }
      );

      // Quote banner reveal on scroll
      gsap.fromTo('.careers-quote-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.careers-quote-card',
            start: 'top 85%'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Animate jobs when filter changes
  useEffect(() => {
    if (jobsGridRef.current) {
      gsap.fromTo(jobsGridRef.current.querySelectorAll('.job-row-item'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  return (
    <div className="careers-page-wrapper" ref={pageRef}>
      <div className="careers-hero-glow"></div>

      <div className="careers-page-container">

        {/* Hero Header Area */}
        <div className="careers-hero">
          <div className="pill-badge-tag">
            <span className="badge-dot-blue"></span>
            <span>We're hiring!</span>
          </div>

          <div className="careers-hero-content">
            <h1 className="careers-title">Be part of <span className="title-gradient-highlight">our mission</span></h1>
            <p className="careers-subtitle">
              We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
            </p>
          </div>
        </div>

        {/* Filter categories bar */}
        <div className="careers-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs list grid container */}
        <div className="jobs-list-box" ref={jobsGridRef}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-row-item">
                <div className="job-left-details">
                  <h3 className="job-row-title">{job.title}</h3>
                  <p className="job-row-desc">{job.desc}</p>

                  <div className="job-tags-row">
                    <div className="job-tag-bullet">
                      <Globe size={14} className="tag-icon" />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-tag-bullet">
                      <Clock size={14} className="tag-icon" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="job-right-action">
                  <button className="job-apply-link" onClick={() => handleOpenApply(job)}>
                    <span>Apply</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="jobs-empty-state">
              <Briefcase size={40} className="empty-icon" />
              <h4>No positions available</h4>
              <p>There are currently no open roles in the "{activeCategory}" category. Please check back later or explore other sections.</p>
            </div>
          )}
        </div>

        {/* Value Quote Section */}
        <div className="careers-quote-grid">
          {testimonials.map((item) => (
            <div className="careers-quote-card" key={item.id}>
              <div className="quote-radial-glow"></div>

              <div className="quote-card-content">
                <h2 className="quote-text">{item.quote}</h2>

                <div className="quote-author-profile">
                  <div className="author-avatar">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="author-details">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redesigned Bottom CTA Banner matching screenshot exactly */}
        <div 
          className="careers-bottom-banner-section"
          onClick={() => handleOpenApply({ id: 'open', title: 'Open Application' })}
          title="Click to Start Your Journey"
        >
          <img src="/career.webp" alt="Start Your Journey - Discover Your Path" className="careers-full-banner-img" />
          <div className="careers-banner-overlay-hint">
            <span>Click to Apply & Start Your Journey</span>
          </div>
        </div>

      </div>

      {/* Interactive Application Modal Popup */}
      {isModalOpen && (
        <div className="careers-apply-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="careers-modal-box" onClick={(e) => e.stopPropagation()}>

            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <div className="modal-form-content">
                <span className="modal-job-badge">Apply for Position</span>
                <h3 className="modal-job-title">{selectedJob?.title}</h3>

                <form onSubmit={handleFormSubmit} className="modal-apply-form">

                  <div className="modal-input-group">
                    <label>Full Name*</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group">
                    <label>Upload Resume / CV*</label>
                    <div className="resume-upload-wrapper">
                      <input
                        type="file"
                        id="resume-file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                      />
                      <label htmlFor="resume-file" className="resume-upload-btn">
                        <Paperclip size={16} />
                        <span>{formData.resumeName || "Attach file (.pdf, .doc, .docx)"}</span>
                      </label>
                    </div>
                  </div>

                  <div className="modal-input-group">
                    <label>Message / Cover Note</label>
                    <textarea
                      placeholder="Tell us about yourself and why you'd be a great fit"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="modal-submit-pill">
                    <span>Submit Application</span>
                    <Send size={14} />
                  </button>

                </form>
              </div>
            ) : (
              <div className="modal-success-content">
                <div className="modal-success-circle">
                  <Briefcase size={36} />
                </div>
                <h3>Application Submitted!</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. We have received your application for the <strong>{selectedJob?.title}</strong> role and will review your resume shortly.
                </p>
                <button className="modal-success-close-btn" onClick={() => setIsModalOpen(false)}>
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
