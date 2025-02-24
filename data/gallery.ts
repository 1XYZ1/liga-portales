export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: "gol" | "jugada" | "celebracion" | "equipo" | "partido";
  size?: "normal" | "large" | "vertical" | "horizontal";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Gol Histórico de Yosmar",
    description:
      "Un golazo desde media cancha que definió el partido contra San Alberto Hurtado F.C",
    imageUrl: "/highlights/gol-yosmar.jpg",
    date: "05/02/2025",
    category: "gol",
    size: "large",
  },
  {
    id: 2,
    title: "Celebración U.A Internacional",
    description:
      "El equipo celebra su paso a la final después de una victoria contundente",
    imageUrl: "/highlights/celebracion-ua.jpg",
    date: "10/02/2025",
    category: "celebracion",
    size: "horizontal",
  },
  {
    id: 3,
    title: "Atajada Espectacular",
    description:
      "El arquero salvó el partido con esta atajada en el último minuto",
    imageUrl: "/highlights/atajada.jpg",
    date: "17/02/2025",
    category: "jugada",
    size: "vertical",
  },
  {
    id: 4,
    title: "Campeones de la Liga",
    description:
      "La copa se queda en casa después de una temporada inolvidable",
    imageUrl: "/highlights/campeon.jpg",
    date: "24/02/2025",
    category: "equipo",
    size: "large",
  },
];
