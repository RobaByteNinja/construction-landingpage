import React from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-warning' : 'text-muted'}>★</span>
    ));
  };

  return (
    <section id="testimonials" className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Client Testimonials</h2>
          <p className="lead">What our clients say about our construction services</p>
        </div>
        
        <div className="row g-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0 me-3">
                      <img 
                        src={`/images/testimonials/avatar${testimonial.id}.jpg`}
                        alt={testimonial.name}
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h5 className="card-title fw-bold mb-1">{testimonial.name}</h5>
                      <p className="card-text text-muted mb-0">{testimonial.role}</p>
                      <div className="mt-2">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>
                  <p className="card-text fst-italic">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-5 pt-4">
          <div className="bg-primary rounded-3 p-5 text-white">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h3 className="fw-bold">Ready to Start Your Construction Project?</h3>
                <p className="mb-0">Get a free consultation with our expert team today</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a href="#contact" className="btn btn-light btn-lg px-4 py-3">
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;