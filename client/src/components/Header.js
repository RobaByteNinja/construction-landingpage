import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'Services', id: 'services' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

  return (
    <header className={`fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'} transition-all`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/">
            <span className="text-primary">Build</span>Master
          </a>          
          <button 
            className={`navbar-toggler ${mobileMenuOpen ? 'collapsed' : ''}`} 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className={`navbar-toggler-icon ${isScrolled ? 'scrolled' : ''}`}></span>
            )}
          </button>
          
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item mx-2">
                  <a 
                  className={`nav-link fw-medium ${isScrolled || mobileMenuOpen ? 'text-dark' : 'text-white'}`} 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  >
                    {link.name}
                    </a>
                    </li>
                  ))}
            </ul>
           <button 
           className={`btn btn-primary ms-lg-3 ${isScrolled || mobileMenuOpen ? '' : 'btn-outline-light'}`}
           onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenuOpen(false);
            }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;