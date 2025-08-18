import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">About Our Company</h2>
          <p className="lead">Building excellence since 2003</p>
        </div>
        
        <div className="row g-4 align-items-center">
         <div className="col-lg-6">
            <div className="h-100 rounded-3 overflow-hidden" style={{ height: '400px' }}>
              <img 
                src="/images/about/team.jpg" 
                alt="BuildMaster Construction Team"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">Our Story</h3>
            <p className="mb-4">
              Founded in 2003, BuildMaster has grown from a small local contractor to a leading regional construction firm. 
              Our commitment to quality, safety, and customer satisfaction has remained unchanged.
            </p>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="d-flex">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-people fs-4 text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Professional Team</h5>
                    <p className="mb-0">50+ certified experts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="d-flex">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-award fs-4 text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold">Certified Quality</h5>
                    <p className="mb-0">ISO 9001 certified</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary px-4 py-2">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;