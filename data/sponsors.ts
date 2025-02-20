type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: SponsorTier;
}

export const sponsors: Sponsor[] = [
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
