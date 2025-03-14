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
  status: "scheduled" | "finished" | "suspended";
  cancellationReason?: string;
}

export const matches: Match[] = [
  // Semana 1 - Fecha: Miércoles 5 de febrero
  {
    id: 1,
    homeTeam: 3, // BROSKY F.C
    awayTeam: 6, // PORTALES F.C
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
    homeTeam: 5, // SAN ALBERTO HURTADO F.C
    awayTeam: 1, // U.A INTERNACIONAL F.C
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
    homeTeam: 2, // COLOMBIA EXPRESS F.C
    awayTeam: 4, // BAJO CERO F.C
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
    homeTeam: 6, // PORTALES F.C
    awayTeam: 5, // SAN ALBERTO HURTADO F.C
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
    homeTeam: 2, // COLOMBIA EXPRESS F.C
    awayTeam: 1, // U.A INTERNACIONAL F.C
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
    homeTeam: 3, // BROSKY F.C
    awayTeam: 4, // BAJO CERO F.C
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
    homeTeam: 3, // BROSKY F.C
    awayTeam: 1, // U.A INTERNACIONAL F.C
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
    homeTeam: 5, // SAN ALBERTO HURTADO F.C
    awayTeam: 2, // COLOMBIA EXPRESS F.C
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
    homeTeam: 6, // PORTALES F.C
    awayTeam: 4, // BAJO CERO F.C
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
    homeTeam: 4, // BAJO CERO F.C
    awayTeam: 1, // U.A INTERNACIONAL F.C
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
    homeTeam: 6, // PORTALES F.C
    awayTeam: 3, // COLOMBIA EXPRESS F.C
    date: "2025-02-24",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 4,
    status: "finished",
    homeScore: 3,
    awayScore: 6,
  },
  {
    id: 12,
    homeTeam: 3, // BROSKY F.C
    awayTeam: 5, // SAN ALBERTO HURTADO F.C
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
    homeTeam: 4, // BAJO CERO F.C
    awayTeam: 5, // SAN ALBERTO HURTADO F.C
    date: "2025-03-03",
    time: "22:00",
    endTime: "22:40",
    stadium: "Centenario",
    week: 5,
    status: "finished",
    homeScore: 6,
    awayScore: 1,
  },
  {
    id: 14,
    homeTeam: 1, // U.A INTERNACIONAL F.C
    awayTeam: 6, // PORTALES F.C
    date: "2025-03-03",
    time: "22:40",
    endTime: "23:20",
    stadium: "Centenario",
    week: 5,
    status: "finished",
    homeScore: 4,
    awayScore: 2,
  },
  {
    id: 15,
    homeTeam: 2, // COLOMBIA EXPRESS F.C
    awayTeam: 3, // BROSKY F.C
    date: "2025-03-03",
    time: "23:20",
    endTime: "00:00",
    stadium: "Centenario",
    week: 5,
    status: "finished",
    homeScore: 4,
    awayScore: 2,
  },

  // Semana 6 - Fecha: Lunes 10 de marzo
  {
    id: 16,
    homeTeam: 3, // BROSKY F.C
    awayTeam: 2, // COLOMBIA EXPRESS F.C
    date: "2025-03-10",
    time: "22:00",
    endTime: "22:50",
    stadium: "Centenario",
    week: 6,
    status: "finished",
    homeScore: 4,
    awayScore: 2,
  },
  {
    id: 17,
    homeTeam: 4, // BAJO CERO F.C
    awayTeam: 1, // U.A INTERNACIONAL F.C
    date: "2025-03-10",
    time: "22:55",
    endTime: "23:35",
    stadium: "Centenario",
    week: 6,
    status: "suspended",
    homeScore: 1,
    awayScore: 4,
    cancellationReason: "Suspendido por agresiónes",
  },
];

// Función helper para obtener información completa del equipo
export const getTeamById = (id: number): Team | undefined => {
  return teams.find((team) => team.id === id);
};
