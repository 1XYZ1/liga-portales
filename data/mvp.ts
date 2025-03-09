interface WeeklyScorer {
  playerName: string;
  teamName: string;
  matchId: number;
  week: number;
  goals: number;
  assists: number;
  matchStats: string;
  photo?: string;
  credit: string;
}

export const weeklyScorers: WeeklyScorer[] = [
  {
    playerName: "Camilo",
    teamName: "Colombia Express F.C",
    matchId: 15,
    week: 5,
    goals: 2,
    assists: 2,
    matchStats: "Brosky F.C 2-4 Colombia Express F.C",
    credit:
      "Camilo ha sido la figura del partido con 2 goles y 2 asistencias, siendo el MVP de la semana",
    photo: "/images/camilo.jpeg",
  },
];
