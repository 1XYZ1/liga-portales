interface Player {
  name: string;
  team: string;
}

interface TopScorer {
  name: string;
  team: string;
  goals: number;
}

interface TeamStats {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

interface GoalKeeper extends Player {
  cleanSheets: number;
}

interface LeagueStats {
  topScorers: TopScorer[];
  teamStats: TeamStats[];
  cleanSheets: GoalKeeper[];
}

export const stats: LeagueStats = {
  topScorers: [
    {
      name: "Yosmar",
      team: "U.A Internacional F.C",
      goals: 6,
    },
    {
      name: "Leandro",
      team: "U.A Internacional F.C",
      goals: 6,
    },
    {
      name: "Camilo",
      team: "Colombia Express F.C",
      goals: 6,
    },
    {
      name: "Beto",
      team: "Portales F.C",
      goals: 4,
    },
    {
      name: "Geremy",
      team: "San Alberto Hurtado F.C",
      goals: 4,
    },
    {
      name: "Andrés Martínez",
      team: "Bajo Cero F.C",
      goals: 4,
    },
    {
      name: "Luis",
      team: "Brosky F.C",
      goals: 3,
    },
    {
      name: "Jesús David",
      team: "Bajo Cero F.C",
      goals: 3,
    },
    {
      name: "Luciano",
      team: "Bajo Cero F.C",
      goals: 1,
    },
  ],
  teamStats: [
    {
      name: "Los Ángeles FC",
      played: 20,
      won: 15,
      drawn: 3,
      lost: 2,
      goalsFor: 45,
      goalsAgainst: 20,
      points: 48,
    },
    {
      name: "Barcelona",
      played: 20,
      won: 14,
      drawn: 4,
      lost: 2,
      goalsFor: 40,
      goalsAgainst: 18,
      points: 46,
    },
  ],
  cleanSheets: [
    { name: "Thibaut Courtois", team: "Real Madrid", cleanSheets: 8 },
    { name: "Ederson", team: "Manchester City", cleanSheets: 7 },
    { name: "Alisson", team: "Liverpool", cleanSheets: 6 },
  ],
};
