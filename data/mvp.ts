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
    playerName: "Yosmar",
    teamName: "U.A Internacional F.C",
    matchId: 2,
    week: 1,
    goals: 4,
    assists: 2,
    matchStats: "U.A Internacional F.C 11 - 5 San Alberto Hurtado F.C",
    credit:
      "Extraordinaria actuación con 4 goles y 2 asistencias, liderando la goleada de su equipo",
    photo: "/players/yosmar.jpg",
  },
  {
    playerName: "Camilo",
    teamName: "Colombia Express F.C",
    matchId: 3,
    week: 1,
    goals: 3,
    assists: 1,
    matchStats: "Colombia Express F.C 6 - 3 Bajo Cero F.C",
    credit:
      "Hat-trick perfecto y una asistencia, siendo figura clave en la victoria",
    photo: "/players/camilo.jpg",
  },
  {
    playerName: "Leandro",
    teamName: "U.A Internacional F.C",
    matchId: 5,
    week: 2,
    goals: 2,
    assists: 1,
    matchStats: "Colombia Express F.C 3 - 4 U.A Internacional F.C",
    credit:
      "Doblete decisivo que dio la victoria a su equipo en un partido muy disputado",
    photo: "/players/leandro.jpg",
  },
];
