import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Effect to automatically clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); // Clear after 5 seconds

      // Cleanup function to clear the timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'name':
        if (value.length < 2) error = 'Name must be at least 2 characters';
        else if (value.length > 50) error = 'Name must be less than 50 characters';
        break;
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) error = 'Please enter a valid email';
        break;
      case 'subject':
        if (value.length < 5) error = 'Subject must be at least 5 characters';
        else if (value.length > 100) error = 'Subject must be less than 100 characters';
        break;
      case 'message':
        if (value.length < 10) error = 'Message must be at least 10 characters';
        else if (value.length > 1000) error = 'Message must be less than 1000 characters';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isSubjectValid = validateField('subject', formData.subject);
    const isMessageValid = validateField('message', formData.message);
    
    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.errors ? data.errors[0].msg : data.message 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Contact Us</h2>
          <p className="lead">Get in touch for a free consultation</p>
        </div>
        
        <div className="row g-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-floating">
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email" 
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject" 
                      name="subject"
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Message" 
                      id="message" 
                      name="message"
                      style={{ height: '150px' }} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                </div>
                
                <div className="col-12">
                  <button 
                    className="btn btn-primary w-100 py-3" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
                
                {submitStatus && (
                  <div className="col-12">
                    <div 
                      className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}
                      role="alert"
                    >
                      {submitStatus.message}
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setSubmitStatus(null)}
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative rounded overflow-hidden map-container">
              <a 
                href="https://maps.app.goo.gl/obLEDW1d51XqoB5e8"
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block"
              >
                <img 
                  src="/images/contact/map.jpg" 
                  alt="Our Location - Click to open Google Maps"
                  className="img-fluid w-100"
                  loading="lazy"
                  style={{ minHeight: '300px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 p-md-3">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-2 mb-md-0">
                      <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                      <span>Eshet, Dire Dawa, Ethiopia</span>
                    </div>
                    <div className="bg-primary rounded-pill px-3 py-1 map-overlay-btn">
                      Open Map
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="row mt-5 pt-4 g-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start p-3 bg-light rounded h-100">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 mb-md-0" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                <i className="bi bi-geo-alt fs-4 text-white"></i>
              </div>
              <div className="ms-md-4">
                <h5 className="fw-bold mt-0">Our Location</h5>
                <p className="mb-0">Eshet, Dire Dawa, Ethiopia</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start p-3 bg-light rounded h-100">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 mb-md-0" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                <i className="bi bi-telephone fs-4 text-white"></i>
              </div>
              <div className="ms-md-4">
                <h5 className="fw-bold mt-0">Call Us</h5>
                <p className="mb-0">+251-901-23-4567</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start p-3 bg-light rounded h-100">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 mb-md-0" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                <i className="bi bi-envelope fs-4 text-white"></i>
              </div>
              <div className="ms-md-4">
                <h5 className="fw-bold mt-0">Email Us</h5>
                <p className="mb-0">info@buildmaster.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;