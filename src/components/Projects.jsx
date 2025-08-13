// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects';
import TECHNOLOGIES_CONFIG from '../data/technologies'; // Importa tu archivo de configuración
import '../styles/Projects.css';
import ProjectCard from './ProjectCard'; // ¡Importa tu ProjectCard!

const Projects = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState(new Set());
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [allTechnologies, setAllTechnologies] = useState([]);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(6);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Efecto para detectar el tamaño de pantalla y ajustar el número inicial de proyectos
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 768;
      setIsSmallScreen(isSmall);
      // Resetear la cantidad visible cuando cambia el tamaño de pantalla
      setVisibleProjectsCount(isSmall ? 3 : 6);
    };

    // Ejecutar al montar el componente
    handleResize();
    
    // Añadir listener para cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para recolectar todas las tecnologías únicas de los proyectos
  useEffect(() => {
    const technologiesFromProjects = new Set();
    projectsData.forEach(project => {
      project.technologies.forEach(name => technologiesFromProjects.add(name));
    });


    const availableTechnologies = Array.from(technologiesFromProjects).filter(
      name => TECHNOLOGIES_CONFIG.hasOwnProperty(name)
    ).sort();

    console.log("Tecnologías disponibles para filtrar (allTechnologies):", availableTechnologies);

    setAllTechnologies(availableTechnologies);
  }, []);

  // Efecto para filtrar proyectos cada vez que selectedTechnologies cambia
  useEffect(() => {
    if (selectedTechnologies.size === 0) {
      setFilteredProjects(projectsData);
    } else {
      const newFilteredProjects = projectsData.filter(project =>
        Array.from(selectedTechnologies).some(selectedTech =>
          project.technologies.includes(selectedTech)
        )
      );
      setFilteredProjects(newFilteredProjects);
    }
    // Resetear la cantidad visible cuando cambian los filtros
    setVisibleProjectsCount(isSmallScreen ? 3 : 6);
  }, [selectedTechnologies, isSmallScreen]);

  // Manejador para cuando se hace clic en una chip
  const handleChipClick = (techName) => {
    const newSelectedTechnologies = new Set(selectedTechnologies);
    if (newSelectedTechnologies.has(techName)) {
      newSelectedTechnologies.delete(techName);
    } else {
      newSelectedTechnologies.add(techName);
    }
    setSelectedTechnologies(newSelectedTechnologies);
  };

  // Manejador para reiniciar los filtros
  const handleResetFilters = () => {
    setSelectedTechnologies(new Set());
  };

  // Manejador para mostrar más proyectos
  const handleShowMore = () => {
    const increment = 3;
    setVisibleProjectsCount(prev => prev + increment);
  };

  // Obtener los proyectos que se van a mostrar
  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);
  const hasMoreProjects = filteredProjects.length > visibleProjectsCount;

  return (
    <section id="projects">
      <h2>Proyectos de clase</h2>
        <p className="projects-description">
          Aquí encontrarás una selección de proyectos desarrollados en clases impartidas de diferentes módulos y ciclos de formación. 
          Cada proyecto está diseñado para aplicar los conocimientos adquiridos en el aula, utilizando diversas tecnologías y herramientas. 
          <br/>Puedes <strong>filtrar los proyectos por tecnología</strong> para encontrar aquellos que más te interesen pulsando sobre ellas:
        </p>
      {/* Contenedor de Chips de Filtro (Botones) */}
      <div className="filter-chips-container">
        {/* Mapeamos todas las tecnologías disponibles para crear chips */}
        {allTechnologies.map(techName => {
          const techConfig = TECHNOLOGIES_CONFIG[techName];
          if (!techConfig) return null;

          return (
            <button
              key={techName}
              className={`chip ${selectedTechnologies.has(techName) ? 'active' : ''}`}
              onClick={() => handleChipClick(techName)}
              style={{
                backgroundColor: techConfig.backgroundColor,
                color: techConfig.color
              }}
            >
              {/* {techConfig.icon && <img src={techConfig.icon} alt={techName} className="chip-icon" />} */}
              {techName}
            </button>
          );
        })}
      </div>

      {/* Botón de Reiniciar Filtros */}
      {selectedTechnologies.size > 0 && (
        <button className="reset-filters-button" onClick={handleResetFilters}>
          Reiniciar Filtros
        </button>
      )}

      {/* Grid de Proyectos */}
      <div className="projects-grid">
        {visibleProjects.length > 0 ? (
          visibleProjects.map(project => {
            // Prepara el array de tecnologías para ProjectCard
            const projectTechnologiesForCard = project.technologies
              .filter(techName => TECHNOLOGIES_CONFIG.hasOwnProperty(techName)) // Filtra solo las que tienen configuración
              .map(techName => ({
                // Crea un objeto con 'name' y las propiedades de color
                name: techName,
                ...TECHNOLOGIES_CONFIG[techName]
              }));

            return (
              <ProjectCard
                key={project.id} // Usa project.id como key única
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                demoLink={project.demoLink} // Asegúrate de que tu data tenga una propiedad 'live' para demoLink
                image={project.image}
                technologies={projectTechnologiesForCard} // Pasa el array de objetos listo
              />
            );
          })
        ) : (
          <p>No se encontraron proyectos con las tecnologías seleccionadas.</p>
        )}
      </div>

      {/* Botón Mostrar Más */}
      {hasMoreProjects && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Mostrar más ({Math.min(3, filteredProjects.length - visibleProjectsCount)} proyectos)
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;