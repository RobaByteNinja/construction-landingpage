import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
                      className="form-control" 
                      id="name" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject"
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea 
                      className="form-control" 
                      placeholder="Message" 
                      id="message" 
                      name="message"
                      style={{ height: '150px' }} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button 
                    className="btn btn-primary w-100 py-3" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {submitStatus && (
                  <div className="col-12">
                    <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'}`}>
                      {submitStatus.message}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* The rest of your contact section remains the same */}
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