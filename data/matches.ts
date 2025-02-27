import type { Team } from "./teams";
import { teams } from "./teams";

export interface Match {
  id: number;
  homeTeam: number;
  awayTeam: number;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time?: string;
  endTime?: string;
  stadium: string;
  week: number;
  status: "scheduled" | "finished" | "cancelled";
}

export const matches: Match[] = [
  // Semana 1 - Fecha: Miércoles 5 de febrero
  {
    id: 1,
    homeTeam: 3, // Brosky F.C
    awayTeam: 6, // Portales F.C
    homeScore: 6,
    awayScore: 2,
    date: "2025-02-05",
    time: "19:30",
    endTime: "20:10",
    stadium: "Portales",
    week: 1,
    status: "finished",
  },
  {
    id: 2,
    homeTeam: 5, // San Alberto Hurtado F.C
    awayTeam: 1, // U.A Internacional F.C
    homeScore: 5,
    awayScore: 11,
    date: "2025-02-05",
    time: "20:10",
    endTime: "20:50",
    stadium: "Portales",
    week: 1,
    status: "finished",
  },
  {
    id: 3,
    homeTeam: 2, // Colombia Express F.C
    awayTeam: 4, // Bajo Cero F.C
    homeScore: 6,
    awayScore: 3,
    date: "2025-02-05",
    time: "20:50",
    endTime: "21:30",
    stadium: "Portales",
    week: 1,
    status: "finished",
  },

  // Semana 2 - Fecha: Lunes 10 de febrero
  {
    id: 4,
    homeTeam: 6, // Portales F.C
    awayTeam: 5, // San Alberto Hurtado F.C
    homeScore: 4,
    awayScore: 7,
    date: "2025-02-10",
    time: "22:00",
    endTime: "22:40",
    stadium: "Centenario",
    week: 2,
    status: "finished",
  },
  {
    id: 5,
    homeTeam: 2, // Colombia Express F.C
    awayTeam: 1, // U.A Internacional F.C
    homeScore: 3,
    awayScore: 4,
    date: "2025-02-10",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 2,
    status: "finished",
  },
  {
    id: 6,
    homeTeam: 3, // Brosky F.C
    awayTeam: 4, // Bajo Cero F.C
    homeScore: 2,
    awayScore: 2,
    date: "2025-02-10",
    time: "23:20",
    endTime: "00:00",
    stadium: "Centenario",
    week: 2,
    status: "finished",
  },

  // Semana 3 - Fecha: Lunes 17 de febrero
  {
    id: 7,
    homeTeam: 3, // Brosky F.C
    awayTeam: 1, // U.A Internacional F.C
    homeScore: 2,
    awayScore: 2,
    date: "2025-02-17",
    time: "22:00",
    endTime: "22:40",
    stadium: "Centenario",
    week: 3,
    status: "finished",
  },
  {
    id: 8,
    homeTeam: 5, // San Alberto Hurtado F.C
    awayTeam: 2, // Colombia Express F.C
    homeScore: 1,
    awayScore: 6,
    date: "2025-02-17",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 3,
    status: "finished",
  },
  {
    id: 9,
    homeTeam: 6, // Portales F.C
    awayTeam: 4, // Bajo Cero F.C
    homeScore: 2,
    awayScore: 5,
    date: "2025-02-17",
    time: "23:20",
    endTime: "00:00",
    stadium: "Centenario",
    week: 3,
    status: "finished",
  },

  // Semana 4 - Fecha: Lunes 24 de febrero (Próximos partidos)
  {
    id: 10,
    homeTeam: 4, // Bajo Cero F.C
    awayTeam: 1, // U.A Internacional F.C
    date: "2025-02-24",
    time: "22:00",
    endTime: "22:40",
    stadium: "Centenario",
    week: 4,
    status: "finished",
    homeScore: 5,
    awayScore: 4,
  },
  {
    id: 11,
    homeTeam: 6, // Portales F.C
    awayTeam: 2, // Colombia Express F.C
    date: "2025-02-24",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 4,
    status: "finished",
    homeScore: 2,
    awayScore: 6,
  },
  {
    id: 12,
    homeTeam: 3, // Brosky F.C
    awayTeam: 5, // San Alberto Hurtado F.C
    date: "2025-02-24",
    time: "23:20",
    endTime: "00:00",
    stadium: "Centenario",
    week: 4,
    status: "finished",
    homeScore: 6,
    awayScore: 4,
  },

  // Semana 5 - Fecha: Lunes 3 de marzo (Próximos partidos)
  {
    id: 13,
    homeTeam: 5, // San Alberto Hurtado F.C
    awayTeam: 4, // Bajo Cero F.C
    date: "2025-03-03",
    time: "22:00",
    endTime: "22:40",
    stadium: "Centenario",
    week: 5,
    status: "scheduled",
  },
  {
    id: 14,
    homeTeam: 6, // Portales F.C
    awayTeam: 1, // U.A Internacional F.C
    date: "2025-03-03",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 5,
    status: "scheduled",
  },
  {
    id: 15,
    homeTeam: 2, // Colombia Express F.C
    awayTeam: 3, // Brosky F.C
    date: "2025-03-03",
    time: "23:20",
    endTime: "00:00",
    stadium: "Centenario",
    week: 5,
    status: "scheduled",
  },
];

// Función helper para obtener información completa del equipo
export const getTeamById = (id: number): Team | undefined => {
  return teams.find((team) => team.id === id);
};
