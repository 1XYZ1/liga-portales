export interface Team {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  teamPhoto: string;
  primaryColor: string;
  secondaryColor: string;
  foundedYear: number;
  stadium: string;
  captain: string;
  description?: string;
  isCurrentChampion?: boolean;
  stats?: {
    titulos: number;
    points?: number;
    played?: number;
    goalsFor?: number;
    goalsAgainst?: number;
  };
}

export const teams: Team[] = [
  {
    id: 1,
    name: "U.A INTERNACIONAL F.C",
    shortName: "UAI",
    logo: "/images/teams/ua-logo.jpeg",
    teamPhoto: "/images/teams/ua-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#ffffff",
    foundedYear: 2023,
    stadium: "San Miguel",
    captain: "Elbert",
    description:
      "Equipo líder de la liga con un estilo de juego ofensivo y dinámico.",
    stats: {
      titulos: 2,
      goalsFor: 21,
      goalsAgainst: 15,
    },
  },
  {
    id: 2,
    name: "COLOMBIA EXPRESS F.C",
    shortName: "COL",
    logo: "/images/teams/colombia-logo.PNG",
    teamPhoto: "/images/teams/colombia-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#FDE047",
    foundedYear: 2023,
    stadium: "Santiago Centro",
    captain: "Camilo",
    description:
      "Un equipo que representa la velocidad y precisión del fútbol colombiano.",
    stats: {
      titulos: 1,
      goalsFor: 21,
      goalsAgainst: 11,
    },
  },
  {
    id: 3,
    name: "BROSKY F.C",
    shortName: "BRO",
    logo: "/images/teams/brosky-logo.PNG",
    teamPhoto: "/images/teams/brosky-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#000000",
    foundedYear: 2023,
    stadium: "Estacion Central",
    captain: "Jesús Echeverría",
    description:
      "Conocidos por su juego técnico y estrategia única en el campo.",
    isCurrentChampion: true,
    stats: {
      titulos: 1,
      goalsFor: 22,
      goalsAgainst: 16,
    },
  },
  {
    id: 4,
    name: "BAJO CERO F.C",
    shortName: "BJC",
    logo: "/images/teams/bajocero-logo.jpeg",
    teamPhoto: "/images/teams/bajocero-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#ffffff",
    foundedYear: 2023,
    stadium: "Estacion Central",
    captain: "Miguel Tisoy",
    description:
      "Un equipo que mantiene la calma bajo presión y destaca por su juego frío y calculador.",
    stats: {
      titulos: 0,
      goalsFor: 15,
      goalsAgainst: 14,
    },
  },
  {
    id: 5,
    name: "SAN ALBERTO HURTADO F.C",
    shortName: "SAH",
    logo: "/images/teams/sanalberto-logo.PNG",
    teamPhoto: "/images/teams/sanalberto-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#ffffff",
    foundedYear: 2023,
    stadium: "Estacion Central",
    captain: "José David",
    description: "Equipo con una fuerte tradición y valores deportivos.",
    stats: {
      titulos: 0,
      goalsFor: 17,
      goalsAgainst: 27,
    },
  },
  {
    id: 6,
    name: "PORTALES F.C",
    shortName: "POR",
    logo: "/images/teams/portales-logo.jpeg",
    teamPhoto: "/images/teams/portales-team.jpeg",
    primaryColor: "#6B21A8",
    secondaryColor: "#ffffff",
    foundedYear: 2023,
    stadium: "Estacion Central",
    captain: "Cristian",
    description:
      "El equipo local que representa el corazón y la pasión del barrio.",
    stats: {
      titulos: 0,
      goalsFor: 11,
      goalsAgainst: 24,
    },
  },
];
