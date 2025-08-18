import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const servicesLinks = [
    { name: 'Residential Construction', id: 'services' },
    { name: 'Commercial Projects', id: 'services' },
    { name: 'Renovation & Remodeling', id: 'services' },
    { name: 'Project Management', id: 'services' }
  ];
  
  const companyLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Team', id: 'about' },
    { name: 'Careers', id: 'about' },
    { name: 'Blog', id: 'about' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <h3 className="logo-text fw-bold mb-4">
              <span className="logo-primary">Build</span>
              <span className="logo-accent">Master</span>
            </h3>
            <p className="mb-4">
              Building excellence since 2003. We deliver quality construction services with integrity and professionalism.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled">
              {servicesLinks.map((service, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={`#${service.id}`}
                    className="text-white text-decoration-none"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.id);
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4">Company</h5>
            <ul className="list-unstyled">
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={`#${link.id}`}
                    className="text-white text-decoration-none"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-4">
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p>Subscribe to receive project updates and industry insights</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <p className="small text-white-50">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
        
        <hr className="mt-4 mb-4 border-secondary" />
        
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">&copy; {currentYear} BuildMaster Construction. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <button 
                  className="footer-link-btn text-decoration-none"
                  onClick={() => {
                    // Add functionality for Privacy Policy
                    console.log("Privacy Policy clicked");
                  }}
                >
                  Privacy Policy
                </button>
              </li>
              <li className="list-inline-item mx-3">|</li>
              <li className="list-inline-item">
                <button 
                  className="footer-link-btn text-decoration-none"
                  onClick={() => {
                    // Add functionality for Terms of Service
                    console.log("Terms of Service clicked");
                  }}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;