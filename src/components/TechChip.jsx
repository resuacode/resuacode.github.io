import React from 'react';
import '../styles/TechChip.css';
import TECHNOLOGIES_CONFIG from '../data/technologies'; // <-- Importa la configuración

function TechChip({ name }) { // Recibe solo el nombre de la tecnología
  // Busca la configuración para esta tecnología, si no la encuentra, usa valores por defecto
  const config = TECHNOLOGIES_CONFIG[name] || {
    color: '#333', // Default text color
    backgroundColor: '#e0e0e0', // Default background color (light gray)
    // icon: null, // Default icon
  };

  const chipStyle = {
    color: config.color,
    backgroundColor: config.backgroundColor,
  };

  return (
    <span className="tech-chip" style={chipStyle}>
      {/* Si tienes iconos definidos en config.icon, puedes renderizarlos aquí */}
      {/* {config.icon && <img src={config.icon} alt={`${name} icon`} className="tech-chip-icon" />} */}
      {name}
    </span>
  );
}

export default TechChip;