type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website?: string;
  tier: "platinum" | "gold" | "silver";
}

export const sponsors: Sponsor[] = [
  {
    name: "Milo Y Sus Amigos",
    logo: "/images/milo.jpeg",
    description:
      "Empresa en Santiago de Chile siempre apoyando al deporte y cuidando la salud y la belleza de todas las mascotas de la familia.",
    tier: "platinum",
  },
  {
    name: "SportMax",
    logo: "/sponsors/sportmax.png",
    description: "Equipamiento deportivo de alta calidad",
    website: "https://sportmax.com",
    tier: "platinum",
  },
  {
    name: "HydraPro",
    logo: "/sponsors/hydrapro.png",
    description: "Bebidas isotónicas para deportistas",
    website: "https://hydrapro.com",
    tier: "gold",
  },
  {
    name: "FitLife",
    logo: "/sponsors/fitlife.png",
    description: "Suplementos deportivos y nutrición",
    website: "https://fitlife.com",
    tier: "gold",
  },
  {
    name: "TechSport",
    logo: "/sponsors/techsport.png",
    description: "Tecnología deportiva y análisis de rendimiento",
    website: "https://techsport.com",
    tier: "silver",
  },
];
