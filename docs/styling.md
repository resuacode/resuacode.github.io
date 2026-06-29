# Estilos y diseño visual

## Variables CSS globales

Definidas en `src/styles/global.css` bajo `:root`. Disponibles en todos los componentes.

```css
:root {
  --primary-color:      #147a8a;   /* Azul verdoso principal — botones, enlaces, CTA */
  --primary-hover:      #0f5f6b;   /* Variante hover del color principal */
  --secondary-color:    #6c757d;   /* Gris — textos secundarios */
  --background-light:   #f8f9fa;   /* Fondo general de la página */
  --background-dark:    #282c34;   /* Fondo del header y footer */
  --text-dark:          #212529;   /* Texto principal sobre fondo claro */
  --text-light:         #f8f9fa;   /* Texto sobre fondo oscuro */
  --border-color:       #e0e0e0;   /* Bordes de separadores y tarjetas */
  --shadow-light:  rgba(0,0,0,0.05);  /* Sombra suave para tarjetas */
  --shadow-medium: rgba(0,0,0,0.08);  /* Sombra media para hover */
  --youtube-red:        #FF0000;   /* Rojo YouTube (uso decorativo) */
  --youtube-red-dark:   #CC0000;   /* Rojo YouTube oscuro (hover) */
}
```

---

## Paleta de colores

| Rol | Color | Valor |
|-----|-------|-------|
| Acción / enlace | Azul verdoso principal | `#147a8a` |
| Hover de acción | Azul verdoso oscuro | `#0f5f6b` |
| Header / Footer | Gris oscuro | `#282c34` |
| Fondo de página | Gris muy claro | `#f8f9fa` |
| Texto principal | Casi negro | `#212529` |
| Error / validación | Rojo | `#e74c3c` |
| Borde sutil | Gris claro | `#e0e0e0` |

Los colores de los **TechChip** son individuales por tecnología y se definen en `src/data/technologies.js` (`TECHNOLOGIES_CONFIG`). Cada tecnología tiene su propio `color` (texto) y `backgroundColor`.

---

## Tipografía

**Familia:** system font stack — `'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

No se carga ninguna fuente externa (sin Google Fonts). El renderizado usa `-webkit-font-smoothing: antialiased` para suavizado en WebKit/macOS.

**Tamaños relevantes:**
- Títulos de sección (`h2`): `2.5em`, centrado, con separador decorativo pseudoelemento (`::after`)
- Texto base: hereda del body (`line-height: 1.6`)
- TechChip: `0.85em`

---

## Organización de archivos CSS

Cada componente tiene su propio archivo CSS en `src/styles/`. Los estilos globales y variables están en `global.css`.

| Archivo | Contenido |
|---------|-----------|
| `global.css` | Variables `:root`, reset, layout base (`.main-content`, `section`), estilos de `h2`, carousel wrapper |
| `Header.css` | Navegación fija, hamburger menu, hover underline |
| `About.css` | Flex layout perfil + texto, imagen circular, hover scale |
| `ModuleCard.css` | Tarjeta del carousel, hover transform, botón de enlace con separación adicional respecto a tecnologías |
| `Projects.css` | Grid de proyectos, chips de filtro (activo/inactivo), botón reset, botón "mostrar más" |
| `ProjectCard.css` | Imagen de proyecto (200px, `object-fit: cover`) o placeholder con degradado cromático, sección de tecnologías |
| `TechChip.css` | Badge inline-flex, `border-radius: 20px`, `box-shadow`, icono SVG |
| `YouTubeVideoCard.css` | Contenedor responsive 16:9 (`padding-bottom: 56.25%`) |
| `Contact.css` | Formulario centrado, estados de foco (borde azul), mensajes de error |
| `Footer.css` | Fondo oscuro (igual que header), `text-align: center`, borde superior |

---

## Patrones de layout

### Contenedor principal
```css
.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  padding-top: 80px; /* compensa el header fijo */
}
```

### Grid responsivo (proyectos y vídeos)
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```
Se adapta automáticamente al ancho disponible, de 1 a 3 columnas según el espacio.

### Carousel (módulos)
Desplazamiento horizontal con `transform: translateX()` calculado en `App.jsx`:

- **Desktop:** 2 tarjetas visibles (`flex-basis: calc(50% - 15px)`)
- **Mobile:** 1 tarjeta visible (`flex-basis: 100%`)
- Transición: `transform 0.5s ease-in-out`

### Header auto-hide
El header tiene `position: fixed; top: 0; z-index: 1000`. Se oculta con `transform: translateY(-100%)` cuando el usuario hace scroll hacia abajo y reaparece al hacer scroll hacia arriba.

### TechChip (filtros de proyectos)
Los chips de filtro usan opacidad y `filter: grayscale(80%)` para el estado inactivo, y `box-shadow` + `transform: translateY(-2px)` para el estado activo seleccionado.

---

## Notas para modificaciones visuales

- Para cambiar el color de acento principal, basta con actualizar `--primary-color` en `global.css`.
- Para mantener consistencia en botones y enlaces, ajustar también `--primary-hover` junto con `--primary-color`.
- Para cambiar el fondo del header/footer, actualizar `--background-dark`.
- Los colores de los TechChips se gestionan exclusivamente en `src/data/technologies.js`.
- Las sombras de tarjetas usan las variables `--shadow-light` y `--shadow-medium` — modificarlas afecta a todas las tarjetas del sitio.
- El separador decorativo bajo los `h2` se genera con `::after` en `global.css` — es un buen punto para cambiar el color de acento de las secciones.
- Si un proyecto no tiene imagen (`image: null`), `ProjectCard` renderiza un placeholder con degradado basado en la primera tecnología del proyecto para mantener altura y consistencia visual del grid.
