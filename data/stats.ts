interface Player {
  name: string;
  team: string;
}

interface TopScorer extends Player {
  goals: number;
  assists: number;
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
    { name: "Carlos Vela", team: "Los Ángeles FC", goals: 15, assists: 8 },
    { name: "Robert Lewandowski", team: "Barcelona", goals: 13, assists: 5 },
    { name: "Karim Benzema", team: "Real Madrid", goals: 12, assists: 7 },
    { name: "Erling Haaland", team: "Manchester City", goals: 11, assists: 4 },
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
