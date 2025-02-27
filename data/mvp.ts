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
    matchId: 11,
    week: 4,
    goals: 3,
    assists: 2,
    matchStats: "Brosky F.C 6 - 4 San Alberto Hurtado F.C",
    credit:
      "Camilo ha sido la figura del partido con 3 goles y 2 asistencias, siendo el MVP de la semana",
    photo: "/images/camilo.jpeg",
  },
];
