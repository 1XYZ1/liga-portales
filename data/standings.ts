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
    teamId: 2, // COLOMBIA EXPRESS F.C
    gamesPlayed: 5,
    won: 4,
    drawn: 0,
    lost: 1,
    goalsFor: 25,
    goalsAgainst: 12,
    points: 12,
  },
  {
    teamId: 1, // U.A INTERNACIONAL F.C
    gamesPlayed: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 25,
    goalsAgainst: 17,
    points: 10,
  },
  {
    teamId: 4, // BAJO CERO F.C
    gamesPlayed: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 21,
    goalsAgainst: 15,
    points: 10,
  },
  {
    teamId: 3, // BROSKY F.C
    gamesPlayed: 5,
    won: 3,
    drawn: 2,
    lost: 1,
    goalsFor: 22,
    goalsAgainst: 16,
    points: 8,
  },
  {
    teamId: 5, // SAN ALBERTO HURTADO F.C
    gamesPlayed: 5,
    won: 1,
    drawn: 0,
    lost: 4,
    goalsFor: 18,
    goalsAgainst: 33,
    points: 3,
  },
  {
    teamId: 6, // PORTALES F.C
    gamesPlayed: 5,
    won: 0,
    drawn: 0,
    lost: 5,
    goalsFor: 12,
    goalsAgainst: 28,
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
