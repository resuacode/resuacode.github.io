// src/components/About.jsx

import React from 'react';
import '../styles/About.css'; // Vamos a crear este archivo CSS
import myProfileImage from '/images/perfil.jpg'; // Asegúrate de que esta sea la ruta correcta a tu imagen

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>¡Hola!</h2>
        <p>
          Me llamo Dani y soy <strong>profe de informática</strong> en FP y además <strong>desarrollador de software</strong>.
          Llevo programando desde 2014 y a lo largo de los años he ido probando diferentes tecnologías pero mis favoritas actualmente son 
          <strong> Kotlin y Jetpack Compose</strong> para el desarrollo de aplicaciones móviles, y <strong>Unity con C#</strong> para la creación de videojuegos.
        </p>
        <p>
          En esta página encontrarás una sección con enlaces a las <strong>Webs de los Módulos</strong> que imparto o he impartido en el pasado, en ellas encontrarás recursos, vídeos y ejercicios prácticos para aprender.
          </p>
        <p>
          También he incluido una sección con <strong>Proyectos de clase</strong> que he desarrollado junto a mis alumnos, donde podrás ver ejemplos prácticos de lo que se puede lograr con las tecnologías que enseñamos.
          </p>
        <p>
          Por último, he añadido una sección con <strong>Vídeos de YouTube</strong> donde comparto tutoriales y contenido relacionado con la informática y el desarrollo de software.
        </p>
        {/* Puedes añadir más párrafos o contenido aquí si lo deseas */}
      </div>
      <div className="about-image-container">
        <img src={myProfileImage} alt="Tu foto de perfil" className="profile-image" />
      </div>
    </section>
  );
}

export default About;