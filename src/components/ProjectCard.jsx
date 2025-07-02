import React from 'react';
import '../styles/ProjectCard.css';
import TechChip from './TechChip'; 

function ProjectCard({ title, description, githubLink, demoLink, image, technologies }) {
  return (
    <div className="project-card">
      {image && ( // Solo renderiza la imagen si existe
        <div className="project-image-container">
          <img src={image} alt={`Captura de pantalla de ${title}`} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        {technologies && technologies.length > 0 && (
          <div className="tech-chips-container">
            {technologies.map((tech, index) => (
              <TechChip
                key={index}
                name={tech.name}
                color={tech.color}
                backgroundColor={tech.backgroundColor}
              />
            ))}
          </div>
        )}
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              GitHub
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;