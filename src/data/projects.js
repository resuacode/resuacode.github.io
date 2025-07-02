const projects = [
  {
    id: 1,
    title: 'TriviaApp - Aplicación de Preguntas y Respuestas',
    description: 'Una aplicación Android realizada en Kotlin y Jetpack Compose que se conecta a una API pública llamada TriviaAPI para generar un juego tipo Trivial de preguntas y respuestas usando Retrofit.<br/> Utilizamos también inyección de dependencias manuales para la conexión con la API y también Room para almacenar las partidas y un archivo de preferencias para el mejor Record en porcentaje de aciertos.',
    githubLink: 'https://github.com/resuacode/TriviaApp', // Tu repo de GitHub
    demoLink: null, // Opcional: enlace a una demo en vivo
    image: '/images/triviaapp.png', // Opcional: ruta a una imagen dentro de la carpeta public
     technologies: [
      { name: 'Android' },
      { name: 'Kotlin' },
        { name: 'Jetpack Compose' },
     ],
  },
  {
    id: 2,
    title: 'App de Lista de la Compra',
    description: 'Aprovechamos un ejemplo de app clásico para ver como crear una aplicación con varios ViewModels y su ViewModelProvider, además de usar la arquitectura MVVM. <br/>La app almacena los datos en una base de datos SQLite usando Room y permite añadir, eliminar y editar productos en una lista de la compra.',
    githubLink: 'https://github.com/resuacode/ListaCompraRoom',
    demoLink: null, // Opcional: enlace a una demo en vivo
    image: null, // Opcional: ruta a una imagen dentro de la carpeta public
     technologies: [
      { name: 'Android' },
      { name: 'Kotlin' },
        { name: 'Jetpack Compose' },
     ],
  },
  {
    id: 3,
    title: 'Breakout en Unity6 - Juego de Rompe Ladrillos',
    description: 'Una versión del clásico juego Breakout, desarrollado en Unity6 con C#. <br/> Este proyecto incluye la implementación de físicas, colisiones y un sistema de puntuación. Es un excelente ejemplo de cómo crear un juego 2D simple pero entretenido.',
    githubLink: 'https://github.com/resuacode/BreakoutUnity6',
    demoLink: null, // Si no tienes demo, puedes poner null
    image: '/images/breakout.png',    // Si no tienes imagen, puedes poner null
     technologies: [
      { name: 'Unity6' },
      { name: 'C#' },
     ],
  },
   {
    id: 4,
    title: 'App de Discos Favoritos',
    description: 'Ejemplo parecido al de la Lista de la Compra, pero con una base de datos más compleja y con una interfaz más elaborada.<br/> La app permite gestionar una colección de discos favoritos, incluyendo funcionalidades para añadir, eliminar y editar discos, así como ordenar los discos en base a la valoración.',
    githubLink: 'https://github.com/resuacode/DiscosFavoritosApp',
    demoLink: null, // Opcional: enlace a una demo en vivo
    image: null, // Opcional: ruta a una imagen dentro de la carpeta public
     technologies: [
      { name: 'Android' },
      { name: 'Kotlin' },
        { name: 'Jetpack Compose' },
     ],
  },
  // Añade más proyectos aquí siguiendo el mismo formato
];

export default projects;