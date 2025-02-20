import type { Team } from "./teams";

export interface TeamStanding {
  teamId: number;
  gamesPlayed: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export const standings: TeamStanding[] = [
  {
    teamId: 1, // U.A INTERNACIONAL F.C
    gamesPlayed: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 17,
    goalsAgainst: 10,
    points: 7,
  },
  {
    teamId: 2, // COLOMBIA EXPRESS F.C
    gamesPlayed: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 15,
    goalsAgainst: 8,
    points: 6,
  },
  {
    teamId: 3, // BROSKY F.C
    gamesPlayed: 3,
    won: 1,
    drawn: 2,
    lost: 0,
    goalsFor: 10,
    goalsAgainst: 6,
    points: 5,
  },
  {
    teamId: 4, // BAJO CERO F.C
    gamesPlayed: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    goalsFor: 10,
    goalsAgainst: 10,
    points: 4,
  },
  {
    teamId: 5, // SAN ALBERTO HURTADO F.C
    gamesPlayed: 3,
    won: 1,
    drawn: 0,
    lost: 2,
    goalsFor: 13,
    goalsAgainst: 21,
    points: 3,
  },
  {
    teamId: 6, // PORTALES F.C
    gamesPlayed: 3,
    won: 0,
    drawn: 0,
    lost: 3,
    goalsFor: 8,
    goalsAgainst: 18,
    points: 0,
  },
];

// Helper para calcular la diferencia de goles
export const getGoalDifference = (standing: TeamStanding): number => {
  return standing.goalsFor - standing.goalsAgainst;
};

// Helper para ordenar la tabla por puntos y diferencia de goles
export const getSortedStandings = (
  standings: TeamStanding[]
): TeamStanding[] => {
  return [...standings].sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    return getGoalDifference(b) - getGoalDifference(a);
  });
};
