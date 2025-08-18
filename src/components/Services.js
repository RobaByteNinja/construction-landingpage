import React from 'react';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Our Construction Services</h2>
          <p className="lead">Comprehensive solutions for residential, commercial, and industrial projects</p>
        </div>
        
        <div className="row g-4">
          {services.map(service => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-3 mb-3">{service.icon}</div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a href="#contact" className="text-primary text-decoration-none fw-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-5 pt-4 text-center">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center">
                <div className="display-4 fw-bold text-primary me-3">20+</div>
                <div className="text-start">Years of<br />Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center">
                <div className="display-4 fw-bold text-primary me-3">250+</div>
                <div className="text-start">Projects<br />Completed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center">
                <div className="display-4 fw-bold text-primary me-3">50+</div>
                <div className="text-start">Professional<br />Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;