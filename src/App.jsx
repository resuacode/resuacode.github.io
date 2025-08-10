import React, { useState, useEffect,useRef  } from 'react'; // Importa useState y useEffect
import Header from './components/Header'; 
import About from './components/About'; // Importa el componente About
import ModuleCard from './components/ModuleCard'; // Importa el componente ModuleCard
import YouTubeVideoCard from './components/YouTubeVideoCard'; // Importa el componente YouTubeVideoCard
import Footer from './components/Footer'; // Importa el componente Footer
import Projects from './components/Projects'; // Importa el componente Projects
import Contact from './components/Contact'; // Importa el componente Contact


import modulesData from './data/modules'; // Importa los datos de los módulos
import youtubeVideosData from './data/youtubeVideos'; // Importa los datos de los videos de YouTube

import './styles/global.css'; 

import ArrowLeftIcon from '/icons/arrow-left.svg'; // Importa el icono de flecha izquierda
import ArrowRightIcon from '/icons/arrow-right.svg'; // Importa el icono de fle
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const carouselContentRef = useRef(null); // Referencia al div que contiene TODAS las tarjetas

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
      setCurrentIndex(0); // Resetea currentIndex al cambiar itemsPerPage
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama una vez al inicio

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lógica para el desplazamiento visual del carrusel
  useEffect(() => {
    if (carouselContentRef.current) {
      const firstCard = carouselContentRef.current.querySelector('.module-card');
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth; // Ancho calculado de una tarjeta por el navegador
      const gap = 30; // Este valor DEBE coincidir con el 'gap' en .modules-carousel-content en global.css

      // Calculamos el ancho de UN SOLO PASO del carrusel:
      // Ancho de una tarjeta + el espacio de gap que la sigue.
      // Esto es lo que efectivamente "mueve" una tarjeta para dar paso a la siguiente.
      const stepUnitWidth = cardWidth + gap; 
      
      // El offset total es el currentIndex multiplicado por el ancho de un "paso" de tarjeta.
      // Dado que currentIndex ya incrementa por itemsPerPage (1 o 2),
      // este cálculo moverá correctamente el número de tarjetas visibles.
      const offset = currentIndex * stepUnitWidth;

      carouselContentRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex, itemsPerPage, modulesData]); // Dependencias

  const nextSlide = () => {
    const maxIndex = modulesData.length - itemsPerPage;
    setCurrentIndex(prevIndex => Math.min(prevIndex + itemsPerPage, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - itemsPerPage, 0));
  };

  const showPrevArrow = currentIndex > 0;
  const showNextArrow = currentIndex < (modulesData.length - itemsPerPage);

  const allModules = modulesData; // Renderizamos TODOS los módulos

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <About /> {/* Renderiza el componente About */}
        <section id="modules">
          <h2>Módulos de Formación</h2>
          <div className="carousel-container">
            {showPrevArrow && (
              <button className="carousel-arrow left-arrow" onClick={prevSlide}>
                <img src={ArrowLeftIcon} alt="Previous" />
              </button>
            )}
            <div className="modules-carousel-wrapper"> {/* overflow: hidden */}
              <div className="modules-carousel-content" ref={carouselContentRef}>
                {allModules.map(module => (
                  <ModuleCard
                    key={module.id}
                    title={module.title}
                    description={module.description}
                    link={module.link}
                    technologies={module.technologies}
                  />
                ))}
              </div>
            </div>
            {showNextArrow && (
              <button className="carousel-arrow right-arrow" onClick={nextSlide}>
                <img src={ArrowRightIcon} alt="Next" />
              </button>
            )}
          </div>
        </section>

        {/* Aquí irán las otras secciones */}

          <Projects /> {/* Renderiza el componente Projects que ya maneja los proyectos */}

       {/* Sección de Mi Canal de YouTube */}
        <section id="youtube">
          <h2>Canal de YouTube</h2>
          <div className="youtube-videos-grid">
            {youtubeVideosData.map(video => (
              <YouTubeVideoCard
                key={video.id}
                title={video.title}
                embedUrl={video.embedUrl}
                technologies={video.technologies}
              />
            ))}
          </div>
           {/* Enlace directo al canal */}
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            <a href="https://www.youtube.com/@resuacode" target="_blank" rel="noopener noreferrer" className="youtube-channel-link">
              Visita el canal
            </a>
          </p>
        </section>
        {/* Sección de Contacto */}
        <Contact /> {/* Renderiza el componente Contact que ya maneja el formulario de contacto */}
      </main>
      <Footer />
    </div>
  );
}

export default App;