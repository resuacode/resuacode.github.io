import React from 'react';
import '../styles/Footer.css'; // Vamos a crear este archivo CSS

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Daniel Resúa.</p>
        <p>Desarrollado con Vite y React.</p>
        {/* Para añadir enlaces adicionales aquí, por ejemplo, a una política de privacidad */}
        {/* <div className="footer-links">
          <a href="/politica-privacidad">Política de Privacidad</a>
          <a href="/aviso-legal">Aviso Legal</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;