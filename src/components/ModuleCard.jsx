import React from 'react';
import '../styles/ModuleCard.css';
import TechChip from './TechChip';

function ModuleCard({ title, description, link, technologies }) {
  return (
    <div className="module-card">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p> {/* Usamos dangerouslySetInnerHTML para permitir HTML en la descripción */}
      {technologies && technologies.length > 0 && (
        <div className="tech-chips-container">
          {technologies.map((tech, index) => (
            <TechChip
              key={index} // Usa el índice como key si no hay un ID único para las techs
              name={tech.name}
              color={tech.color}
              backgroundColor={tech.backgroundColor}
            />
          ))}
        </div>
      )}
      <a href={link} target="_blank" rel="noopener noreferrer" className="module-link">
        Ir al Módulo
      </a>
    </div>
  );
}

export default ModuleCard;