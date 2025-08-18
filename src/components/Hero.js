import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="vh-100 d-flex align-items-center position-relative">
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/images/hero/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      </div>
      
      <div className="container position-relative z-10">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold mb-4 text-white">
              Building Your Vision, <span className="text-warning">Crafting Reality</span>
            </h1>
            <p className="lead mb-5 text-white">
              Premier construction services with 20+ years of experience.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary btn-lg px-4 py-3">
                Get Free Consultation
              </a>
              <a href="#projects" className="btn btn-outline-light btn-lg px-4 py-3">
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;