export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  image?: string;
  author: string;
  publishDate: string;
  tags: string[];
}

export const news: NewsArticle[] = [
  {
    id: 1,
    title: "Deportivo Halcones lidera la tabla tras victoria contundente",
    summary: "El equipo mostró un juego sólido venciendo 3-1 a Atlético Leones",
    content:
      "En un partido lleno de emoción, Deportivo Halcones demostró por qué es uno de los favoritos de la temporada. Con una actuación destacada de su capitán Carlos Mendoza, quien anotó dos goles, el equipo se impuso con claridad ante un Atlético Leones que no pudo mantener el ritmo del partido...",
    image: "/images/news/halcones-victory.jpg",
    author: "Manuel Gómez",
    publishDate: "2024-02-26",
    tags: ["Resultados", "Deportivo Halcones", "Atlético Leones"],
  },
  {
    id: 2,
    title: "Real Tigres y Sporting Águilas empatan en un partido vibrante",
    summary:
      "El 2-2 final refleja la intensidad de un encuentro que mantuvo a todos en vilo",
    content:
      "El partido entre Real Tigres y Sporting Águilas fue todo lo que prometía y más. Con goles de ambos lados y oportunidades hasta el último minuto, los equipos demostraron por qué son dos de los conjuntos más entretenidos de la liga...",
    image: "/images/news/tigres-aguilas-draw.jpg",
    author: "Laura Sánchez",
    publishDate: "2024-02-26",
    tags: ["Resultados", "Real Tigres", "Sporting Águilas"],
  },
  {
    id: 3,
    title: "La liga anuncia mejoras en los estadios para la próxima temporada",
    summary: "Se realizarán inversiones significativas en infraestructura",
    content:
      "La dirección de la liga ha anunciado un ambicioso plan de mejoras para todos los estadios participantes. Las renovaciones incluirán nuevos sistemas de iluminación, mejoras en los vestuarios y más comodidades para los aficionados...",
    image: "/images/news/stadium-improvements.jpg",
    author: "Ricardo Martínez",
    publishDate: "2024-02-24",
    tags: ["Noticias", "Infraestructura", "Desarrollo"],
  },
];
