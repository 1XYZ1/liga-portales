import { type Team, teams } from "./teams";

export interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: number; // ID del equipo local
  awayTeam: number; // ID del equipo visitante
  homeScore?: number;
  awayScore?: number;
  status: "scheduled" | "in_progress" | "finished" | "cancelled";
  week: number;
  stadium: string;
}

export const matches: Match[] = [
  {
    id: 1,
    date: "2024-02-25",
    time: "16:00",
    homeTeam: 1,
    awayTeam: 2,
    homeScore: 3,
    awayScore: 1,
    status: "finished",
    week: 1,
    stadium: "Estadio Las Águilas",
  },
  {
    id: 2,
    date: "2025-02-05",
    time: "19:30",
    homeTeam: 3,
    awayTeam: 6,
    homeScore: 6,
    awayScore: 1,
    status: "finished",
    week: 1,
    stadium: "Portales",
  },
  {
    id: 3,
    date: "2024-03-03",
    time: "16:00",
    homeTeam: 2,
    awayTeam: 3,
    status: "scheduled",
    week: 2,
    stadium: "Campo León",
  },
  {
    id: 4,
    date: "2024-03-03",
    time: "18:00",
    homeTeam: 4,
    awayTeam: 1,
    status: "scheduled",
    week: 2,
    stadium: "Nido Verde",
  },
];

// Función helper para obtener información completa del equipo
export const getTeamById = (id: number): Team | undefined => {
  return teams.find((team) => team.id === id);
};
