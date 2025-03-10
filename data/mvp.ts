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
    playerName: "Luciano",
    teamName: "Colombia Express F.C",
    matchId: 15,
    week: 5,
    goals: 2,
    assists: 2,
    matchStats: "Bajo Cero F.C 6-1 San Alberto Hurtado F.C",
    credit:
      "Luciano ha cargado con su equipo para una victoria contundente frente a Bajo Cero F.C, haciendo un gol y defendiendo su equipo a muerte",
    photo: "/images/luciano.jpeg",
  },
];
