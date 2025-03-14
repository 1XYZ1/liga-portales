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
    playerName: "Alessandro",
    teamName: "BROSKY F.C",
    matchId: 16,
    week: 6,
    goals: 2,
    assists: 2,
    matchStats: "BROSKY F.C 4-2 COLOMBIA EXPRESS F.C",
    credit:
      "Alessandro ha sido clave para la victoria de BROSKY F.C, anotando dos goles y asistiendo en dos ocasiones más contra COLOMBIA EXPRESS F.C",
    photo: "/images/alessandro.jpg",
  },
];
