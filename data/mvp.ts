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
    playerName: "Luis",
    teamName: "Brosky F.C",
    matchId: 12,
    week: 4,
    goals: 5,
    assists: 2,
    matchStats: "Brosky F.C 6 - 4 San Alberto Hurtado F.C",
    credit:
      "Luis ha sido la figura del partido con 5 goles y 2 asistencias, siendo el MVP de la semana",
    photo: "/images/luis.jpeg",
  },
];
