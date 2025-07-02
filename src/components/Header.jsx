// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react'; // Importa useState
import '../styles/Header.css'; // Asegúrate de tener este CSS para el header
// import '../styles/global.css'; // Esto también lo necesitamos para los estilos generales
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true); // Nuevo estado para mostrar/ocultar el header
  const lastScrollY = useRef(0); // Para guardar la posición de scroll anterior


  const toggleMenu = () => {
    console.log("Toggle menu clicked! isOpen:", !isOpen); // Mantener para depuración si es necesario
    setIsOpen(!isOpen);
  };

  // Efecto para controlar la visibilidad del header en scroll
  useEffect(() => {
    const handleScroll = () => {
      // Solo aplicamos este comportamiento en móviles (cuando el menú de hamburguesa está activo)
      // Podemos basarnos en el ancho de la ventana o en una clase CSS que se active en móvil
      // Para este ejemplo, supondremos que es un comportamiento solo móvil.
      // Puedes refinar esto si necesitas un breakpoint exacto.
        if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
          // Scrolling hacia abajo y ya hemos bajado un poco
          setShowHeader(false);
          setIsOpen(false); // Cierra el menú si se oculta el header
        } else if (window.scrollY < lastScrollY.current) {
          // Scrolling hacia arriba
          setShowHeader(true);
        }
        lastScrollY.current = window.scrollY; // Actualiza la última posición de scroll
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar


  return (
    <header className={`header ${showHeader ? 'show-header' : 'hide-header'}`}>
      {/* Contenido principal del header (título y botón de hamburguesa) */}
      <div className="header-top-row"> {/* NUEVO DIV para la fila superior */}
        <h1>Daniel Resúa</h1> 
        {/* Botón de hamburguesa para móvil */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Menú de navegación (FUERA del header-top-row) */}
      {/* Ahora nav-menu es un hijo directo de .header */}
      <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
          <li><a href="#modules" onClick={() => setIsOpen(false)}>Módulos</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
          <li>
            <a href="https://github.com/resuacode" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => setIsOpen(false)}>
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@ResuaCode" target="_blank" rel="noopener noreferrer" aria-label="YouTube" onClick={() => setIsOpen(false)}>
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;