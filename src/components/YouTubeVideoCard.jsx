import React from 'react';
import '../styles/YouTubeVideoCard.css'; // Crearemos este archivo CSS
import TechChip from './TechChip';

function YouTubeVideoCard({ title, embedUrl, technologies }) {
  return (
    <div className="youtube-video-card">
      <h3>{title}</h3>
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
      <div className="video-responsive">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title} // Es buena práctica añadir un título para accesibilidad
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeVideoCard;