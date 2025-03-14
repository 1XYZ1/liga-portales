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
      name: "Camilo",
      team: "Colombia Express F.C",
      goals: 12,
    },
    {
      name: "Yosmar",
      team: "U.A Internacional F.C",
      goals: 9,
    },
    {
      name: "Leandro",
      team: "U.A Internacional F.C",
      goals: 8,
    },
    {
      name: "Geremy",
      team: "San Alberto Hurtado F.C",
      goals: 7,
    },
    {
      name: "Andres Rusio",
      team: "Bajo Cero F.C",
      goals: 6,
    },
    {
      name: "Luis Gerardo",
      team: "Brosky F.C",
      goals: 6,
    },
  ],
  teamStats: [
    {
      name: "Colombia Express F.C",
      played: 4,
      won: 3,
      drawn: 0,
      lost: 1,
      goalsFor: 21,
      goalsAgainst: 11,
      points: 9,
    },
    {
      name: "Brosky F.C",
      played: 4,
      won: 2,
      drawn: 2,
      lost: 0,
      goalsFor: 16,
      goalsAgainst: 10,
      points: 8,
    },
    {
      name: "U.A Internacional F.C",
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsFor: 21,
      goalsAgainst: 15,
      points: 7,
    },
    {
      name: "Bajo Cero F.C",
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      goalsFor: 15,
      goalsAgainst: 14,
      points: 7,
    },
    {
      name: "San Alberto Hurtado F.C",
      played: 4,
      won: 1,
      drawn: 0,
      lost: 3,
      goalsFor: 17,
      goalsAgainst: 27,
      points: 3,
    },
    {
      name: "Portales F.C",
      played: 4,
      won: 0,
      drawn: 0,
      lost: 4,
      goalsFor: 11,
      goalsAgainst: 24,
      points: 0,
    },
  ],
  cleanSheets: [
    { name: "Thibaut Courtois", team: "Real Madrid", cleanSheets: 8 },
    { name: "Ederson", team: "Manchester City", cleanSheets: 7 },
    { name: "Alisson", team: "Liverpool", cleanSheets: 6 },
  ],
};
