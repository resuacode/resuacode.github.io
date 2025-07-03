// src/components/Contact.jsx

import React, { useState } from 'react';
import '../styles/Contact.css'; 

function Contact() {
  const FORMSPREE_FORM_ID = 'mzzgwvyj'; // <-- ¡CAMBIA ESTO POR TU ID REAL DE FORMSPREE!

    // Estados para el formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(''); // Estado para el mensaje de error del email

  // Expresión regular para validar el formato del email
  // Esta es una regex básica; para validación estricta de RFC, sería más compleja.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (emailToValidate) => {
    if (!emailToValidate) {
      return 'El email es obligatorio.';
    }
    if (!emailRegex.test(emailToValidate)) {
      return 'Por favor, introduce un formato de email válido.';
    }
    return ''; // Si es válido, retorna cadena vacía
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Valida en tiempo real mientras el usuario escribe
    setEmailError(validateEmail(newEmail));
  };

  const handleSubmit = (e) => {
    // Primero, previene el envío por defecto del formulario
    e.preventDefault();

    // Vuelve a validar el email justo antes de enviar
    const currentEmailError = validateEmail(email);
    setEmailError(currentEmailError);

    // Si hay algún error en el email, o si algún campo requerido está vacío
    if (currentEmailError || !name || !message) {
      // Opcional: mostrar un mensaje general si no se rellenan todos los campos
      if (!name) alert('Por favor, introduce tu nombre.');
      if (!message) alert('Por favor, introduce tu mensaje.');
      return; // Detiene el envío del formulario
    }

    // Si todo es válido, puedes enviar el formulario.
    // Como estamos usando Formspree, cambiamos el 'action' del form
    // y dejamos que el navegador haga el envío POST.
    // Podemos crear un FormData y enviarlo manualmente si quisieramos más control aquí.
    
    // Para simplificar, permitimos que el formulario HTML se envíe a Formspree:
    const form = e.target; // Obtenemos la referencia al formulario HTML
    form.submit(); // Disparamos el envío del formulario

    // Opcional: limpiar el formulario después de un envío exitoso (Formspree redirige por defecto)
    // setName('');
    // setEmail('');
    // setMessage('');
    // setEmailError('');
  };


  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contacto</h2>
        <p className="intro-paragraph">
          Si tienes alguna pregunta, un proyecto en mente o simplemente quieres saludar,
          no dudes en enviarme un mensaje. ¡Estaré encantado de leerte!
        </p>

    {/* Cambiamos el onSubmit del form para interceptar el envío */}
        <form className="contact-form" action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`} method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Tu Email:</label>
            <input
              type="email" // <-- Mantenemos type="email" para validación HTML5 básica del navegador
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange} // <-- Usamos la nueva función onChange
              required
            />
            {/* Mensaje de error si emailError no está vacío */}
            {emailError && <p className="error-message">{emailError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;