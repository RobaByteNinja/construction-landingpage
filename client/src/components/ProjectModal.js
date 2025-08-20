import React from 'react';

const ProjectModal = ({ project, show, onHide }) => {
  if (!project || !show) return null;
  
  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1050
    }}>
      <div className="modal-content bg-white rounded-3 p-4" style={{
        width: '90%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="modal-title fw-bold">{project.title}</h3>
          <button 
            className="btn-close" 
            onClick={onHide}
            aria-label="Close"
          ></button>
        </div>

        <div className="mb-4">
          <img 
            src={`/images/projects/project${project.id}.jpg`}
            alt={project.title}
            className="w-100 rounded-3"
            style={{ height: '300px', objectFit: 'cover' }}
          />      
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Project Details</h5>
            <ul className="list-unstyled">
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Completed:</strong> January 2023</li>
              <li><strong>Size:</strong> 15,000 sq ft</li>
              <li><strong>Location:</strong> Downtown Business District</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Description</h5>
            <p>
              {project.description || 'A premium construction project showcasing our expertise in modern building techniques and sustainable materials.'}
            </p>
          </div>
        </div>
        
        <div className="bg-light p-3 rounded">
          <h5>Testimonial</h5>
          <p className="fst-italic">"The team delivered exceptional quality and completed the project ahead of schedule. Highly recommended!"</p>
          <p className="mb-0"><strong>- Project Owner</strong></p>
        </div>
        
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-outline-secondary" onClick={onHide}>
            Close
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                onHide();
              }
            }}
          >
            Request Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;