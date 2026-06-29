# Arquitectura del proyecto

## Jerarquía de componentes

```
App.jsx
├── Header
├── <main class="main-content">
│   ├── About
│   ├── <section id="modules"> (carousel gestionado en App.jsx)
│   │   └── ModuleCard[]
│   │       └── TechChip[]
│   ├── Projects
│   │   ├── TechChip[] (filtros activos/inactivos)
│   │   └── ProjectCard[]
│   │       └── TechChip[]
│   ├── <section id="videos">
│   │   └── YouTubeVideoCard[]
│   └── Contact
└── Footer
```

---

## Componentes

### `App.jsx`
Componente raíz. Orquesta el layout completo y contiene la lógica del **carousel de módulos**:

- `currentIndex` — índice del módulo visible actualmente.
- `itemsPerPage` — calculado dinámicamente: 2 en desktop, 1 en mobile (mediante `window.innerWidth`).
- `carouselRef` / `cardRef` — refs para medir el ancho real de las tarjetas y calcular el desplazamiento CSS (`translateX`).
- Lógica de avance/retroceso con comprobación de límites.

### `Header`
Navegación fija en la parte superior. Props: ninguna.

- Estado interno: `menuOpen` (hamburger en mobile), `isVisible` (auto-hide al hacer scroll down).
- Detecta dirección del scroll con `lastScrollY` en un `useEffect`.
- El menú se cierra automáticamente al pulsar cualquier enlace de navegación.

### `About`
Sección de presentación personal. Props: ninguna.

- Importa la imagen de perfil directamente como módulo (`channels4_profile.jpg`).
- Layout: flex-row en desktop, flex-column en mobile.

### `ModuleCard`
Tarjeta de módulo didáctico dentro del carousel.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `title` | string | Nombre del módulo |
| `description` | string | Descripción (puede contener HTML) |
| `link` | string | URL del sitio web del módulo |
| `technologies` | `{ name: string }[]` | Tecnologías usadas en el módulo |

> Usa `dangerouslySetInnerHTML` para renderizar la descripción.

### `Projects`
Sección de proyectos con filtrado por tecnología. Props: ninguna.

- Importa `projects` de `data/projects.js`.
- Estado: `activeFilters` (Set de strings), `showAll` (booleano para "mostrar más").
- Filtrado: lógica OR — un proyecto aparece si tiene **alguna** de las tecnologías activas.
- Paginación: 6 proyectos visibles en desktop, 3 en mobile. Botón "Mostrar más" si hay más.
- Calcula la lista de tecnologías únicas a partir de todos los proyectos para generar los chips de filtro.

### `ProjectCard`
Tarjeta individual de proyecto.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `title` | string | Nombre del proyecto |
| `description` | string | Descripción (puede contener HTML) |
| `githubLink` | string | URL del repositorio de GitHub |
| `demoLink` | string \| null | URL de demo en vivo (opcional) |
| `image` | string \| null | Ruta relativa a `/public/images/` (opcional) |
| `technologies` | string[] | Nombres de tecnologías |

> Usa `dangerouslySetInnerHTML` para renderizar la descripción.

### `TechChip`
Badge visual de una tecnología concreta.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `name` | string | Nombre de la tecnología |

Obtiene colores e icono desde `TECHNOLOGIES_CONFIG` (en `data/technologies.js`). Si la tecnología no existe en la configuración, aplica estilos por defecto.

### `YouTubeVideoCard`
Tarjeta con iframe embebido de una playlist de YouTube.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `title` | string | Título de la playlist |
| `embedUrl` | string | URL de embed de YouTube |
| `technologies` | `{ name: string }[]` | Tecnologías asociadas (opcional) |

El iframe usa `padding-bottom: 56.25%` para mantener la relación de aspecto 16:9.

### `Contact`
Formulario de contacto integrado con Formspree.

- Validación de email con regex en cliente antes del envío.
- Muestra mensaje de éxito/error según la respuesta de Formspree.
- Campos: nombre, email, mensaje.

### `Footer`
Pie de página con copyright. Props: ninguna.

---

## Modelo de datos

### `src/data/modules.js`
Array de objetos con la siguiente forma:

```js
{
  id: number,
  title: string,
  description: string,       // puede contener HTML
  link: string,              // URL del sitio del módulo
  technologies: { name: string }[]
}
```

Módulos actuales: Programación, PMDM, PSP, Seguridad y Alta Disponibilidad, Seguridad Informática.

### `src/data/projects.js`
Array de objetos con la siguiente forma:

```js
{
  id: number,
  title: string,
  description: string,       // puede contener HTML
  githubLink: string,
  demoLink: string | null,
  image: string | null,      // ruta relativa a /public/images/
  technologies: string[]     // nombres de tecnología (coinciden con claves de TECHNOLOGIES_CONFIG)
}
```

### `src/data/technologies.js`
Objeto de configuración `TECHNOLOGIES_CONFIG` con la siguiente forma por entrada:

```js
'NombreTecnología': {
  color: string,             // color del texto del chip (hex)
  backgroundColor: string,   // color de fondo del chip (hex)
  icon?: string,             // import de SVG desde /public/icons/ (opcional)
}
```

Las claves deben coincidir exactamente con los valores `name` usados en módulos y proyectos.

### `src/data/youtubeVideos.js`
Array de objetos con la siguiente forma:

```js
{
  id: number,
  title: string,
  embedUrl: string,          // URL de YouTube embed (videoseries)
  technologies: { name: string }[]
}
```

---

## Breakpoints responsive

| Breakpoint | Ancho | Cambios principales |
|-----------|-------|-------------------|
| Desktop | > 768px | Nav completa, carousel 2 módulos, grid 2-3 columnas, perfil 300px |
| Mobile | ≤ 768px | Hamburger menu, carousel 1 módulo, grid 1 columna, perfil 200px, 3 proyectos iniciales |

No se usa ningún framework CSS — todos los breakpoints se definen con `@media` queries en los archivos CSS de cada componente.
