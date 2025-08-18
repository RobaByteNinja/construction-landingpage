import React, { useState } from 'react'; // Ensure useState is imported
import { projects } from '../data';
import ProjectModal from './ProjectModal'; // Make sure this import exists

const Projects = () => {
  // State declarations (MUST HAVE THESE)
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Our Construction Projects</h2>
          <p className="lead">Explore our portfolio of completed works</p>
        </div>
        
        <div className="d-flex justify-content-center flex-wrap mb-5 gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'} px-4`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="row g-4">
          {filteredProjects.map(project => (
            <div key={project.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 overflow-hidden shadow-sm">
                <div className="position-relative" style={{ height: '200px' }}>
                  <img 
                  src={`/images/projects/project${project.id}.jpg`}
                  alt={project.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  />
                  <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                    {project.category}
                    </span>
                    </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">Completed: Jan 2023</p>
                  <button 
                    className="btn-project-details text-decoration-none"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowModal(true);
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-primary px-4 py-2"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View All Projects
          </button>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        show={showModal} 
        onHide={() => setShowModal(false)} 
      />
    </section>
  );
};

export default Projects;