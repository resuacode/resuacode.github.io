// src/data/technologies.js

// Puedes descargarlos en formato SVG (busca "React icon svg", "Python icon svg", etc.)
// y guardarlos en tu carpeta 'public/icons/'.

import AndroidIcon from '/icons/android.svg';
import PythonIcon from '/icons/python.svg';
import JavaIcon from '/icons/java.svg';
import UnityIcon from '/icons/unity.svg';
import JetpackComposeIcon from '/icons/jetpack.svg';
import KotlinIcon from '/icons/kotlin.svg';
import CSharpIcon from '/icons/csharp.svg';




const TECHNOLOGIES_CONFIG = {
  // Ejemplos de configuración para cada tecnología
  'React': {
    color: '#000000', // Color de texto oscuro, legible sobre el fondo claro del chip
    backgroundColor: '#61DAFB', // Azul de React
  },
  'JavaScript': {
    color: '#000000',
    backgroundColor: '#F7DF1E', // Amarillo de JavaScript
  },
  'Vite': {
    color: '#FFFFFF', // Texto blanco sobre fondo oscuro
    backgroundColor: '#646CFF', // Morado de Vite
  },
  'HTML': {
    color: '#FFFFFF',
    backgroundColor: '#E34F26', // Naranja de HTML
  },
  'CSS': {
    color: '#FFFFFF',
    backgroundColor: '#1572B6', // Azul de CSS
  },
  'SQL': {
    color: '#FFFFFF',
    backgroundColor: '#00758F', // Azul oscuro de SQL
  },
  'MySQL': {
    color: '#FFFFFF',
    backgroundColor: '#4479A1', // Azul de MySQL
  },
  'PostgreSQL': {
    color: '#FFFFFF',
    backgroundColor: '#336791', // Azul oscuro de PostgreSQL
  },
  'MongoDB': {
    color: '#FFFFFF',
    backgroundColor: '#47A248', // Verde de MongoDB
  },
  'Express.js': {
    color: '#000000', // Texto negro
    backgroundColor: '#F0DB4F', // Puedes usar un color que destaque el texto negro
  },
  'Node.js': {
    color: '#FFFFFF',
    backgroundColor: '#339933', // Verde de Node.js
  },
  'Next.js': {
    color: '#FFFFFF',
    backgroundColor: '#000000', // Negro de Next.js
  },
  'Stripe': {
    color: '#FFFFFF',
    backgroundColor: '#635BFF', // Morado de Stripe
  },
  'Tailwind CSS': {
    color: '#FFFFFF',
    backgroundColor: '#06B6D4', // Cian de Tailwind
  },
  'Python': {
    color: '#FFFFFF',
    backgroundColor: '#3776AB', // Azul de Python
    icon: PythonIcon,
  },
  'Java': {
    color: '#000000', // Texto negro
    backgroundColor: '#F89820', // Naranja de Java
    icon: JavaIcon,
  },
  'Git': {
    color: '#FFFFFF',
    backgroundColor: '#F05033', // Naranja de Git
  },
  'GitHub': {
    color: '#FFFFFF',
    backgroundColor: '#181717', // Negro de GitHub
  },
  'Docker': {
    color: '#FFFFFF',
    backgroundColor: '#2496ED', // Azul de Docker
  },
  'Kubernetes': {
    color: '#FFFFFF',
    backgroundColor: '#326CE5', // Azul de Kubernetes
  },
  'Spring Boot': {
    color: '#FFFFFF',
    backgroundColor: '#6DB33F', // Verde de Spring Boot
  },
  'Spring': {
    color: '#FFFFFF',
    backgroundColor: '#6DB33F', // Verde de Spring
  },
  'Azure': {
    color: '#000000', // Texto negro
    backgroundColor: '#0078D4', // Azul de Azure
  },
  'AWS': {
    color: '#000000', // Texto negro
    backgroundColor: '#FF9900', // Naranja de AWS
  },
  'Bases de Datos': { // Para conceptos generales
    color: '#FFFFFF',
    backgroundColor: '#5A5A5A',
  },
  'Hooks': { // Para conceptos específicos
    color: '#000000',
    backgroundColor: '#E0BBE4',
  },
  'Android': {
    color: '#FFFFFF',
    backgroundColor: '#A4C639', // Verde de Android
    icon: AndroidIcon,
  },
    'Kotlin': {
    color: '#FFFFFF',
    backgroundColor: '#7F52FF', // Purple blue de Kotlin
    icon: KotlinIcon, 
    },
    'Jetpack Compose': {
    color: '#FFFFFF',
    backgroundColor: '#3c4ec7', // Azul de Jetpack Compose
    icon: JetpackComposeIcon, 
    },
  'Unity6': {
    color: '#FFFFFF',
    backgroundColor: '#000000', // Negro de Unity
    icon: UnityIcon,
  },
  'C#': {
    color: '#FFFFFF',
    backgroundColor: '#9b4993', // Morado de C#
    icon: CSharpIcon,
  },
  'Express': {
    color: '#FFFFFF',
    backgroundColor: '#000000', // Negro de Express
  }
};

export default TECHNOLOGIES_CONFIG;