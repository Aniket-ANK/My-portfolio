import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Responsive pet adption page",
      description: "Responsive pet adption page",
      image: "/images/project1.jpg",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Airbnb",
      description: "A full-stack website with user authentication.... and may more",
      image: "/images/project2.jpg",
      technologies: ["React", "Node.js", "MongoDb"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "portfolio",
      description: "A personal portfolio ",
      image: "/images/project3.jpg",
      technologies: ["React", "HTML", "CSS", "Javascript"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;