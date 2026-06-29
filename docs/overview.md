# Visión general del proyecto

Página web personal de ResuaCode. Sirve como portfolio de proyectos, enlace a los módulos didácticos, canal de YouTube y formulario de contacto.

**URL de producción:** https://resuacode.es  
**Repositorio:** https://github.com/resuacode/resuacode.github.io

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework UI | React | 19.1.0 |
| Build tool | Vite | 7.0.0 |
| Lenguaje | JavaScript (ES Modules) | — |
| Estilos | CSS3 modular (sin preprocesador) | — |
| Formulario | @formspree/react | 3.0.0 |
| Iconos | Font Awesome 6.5.2 | CDN |
| Despliegue | GitHub Pages + gh-pages | 6.3.0 |

---

## Comandos npm

```bash
# Servidor de desarrollo con HMR
npm run dev

# Lint con ESLint
npm run lint

# Build de producción (genera /dist)
npm run build

# Preview del build en local
npm run preview

# Build + publicar en GitHub Pages (rama gh-pages)
npm run deploy
```

`npm run deploy` ejecuta internamente `npm run build` antes del despliegue (script `predeploy`).

---

## Estructura de carpetas

```
/
├── index.html              # Punto de entrada HTML, carga Font Awesome por CDN
├── vite.config.js          # Configuración de Vite (plugin React)
├── eslint.config.js        # Configuración de ESLint con reglas React
├── package.json
├── public/
│   ├── favicon.svg
│   ├── icons/              # Iconos SVG de tecnologías (usados en TechChip)
│   └── images/             # Imágenes de proyectos y perfil
├── src/
│   ├── main.jsx            # Punto de entrada React (ReactDOM.createRoot)
│   ├── App.jsx             # Componente raíz, gestiona el carousel de módulos
│   ├── components/         # Componentes React (ver architecture.md)
│   ├── data/               # Datos estáticos de contenido (ver architecture.md)
│   └── styles/             # CSS modular por componente + variables globales
└── docs/                   # Documentación técnica del proyecto
```

---

## Despliegue

El proyecto se despliega automáticamente en GitHub Pages mediante dos mecanismos:

1. **Manual:** `npm run deploy` publica el contenido de `/dist` en la rama `gh-pages`.
2. **CI/CD:** GitHub Actions ejecuta el build y despliegue en cada push a `main`.

La propiedad `homepage` en `package.json` está configurada como `https://resuacode.github.io/`, lo que ajusta las rutas base del build de Vite.

---

## Dependencias externas en tiempo de ejecución

- **Formspree** — gestiona el envío del formulario de contacto sin backend propio. Requiere un `formId` configurado en `src/components/Contact.jsx`.
- **Font Awesome 6.5.2** — cargado desde CDN en `index.html`. Se usa para los iconos de GitHub y demo en las tarjetas de proyecto.
- **YouTube embeds** — los vídeos se insertan como `<iframe>` con URLs de playlist de YouTube (sin API key).
