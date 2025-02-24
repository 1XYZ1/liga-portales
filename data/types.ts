export interface Team {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  teamPhoto: string;
  primaryColor: string;
  secondaryColor: string;
  foundedYear: number;
  stadium: string;
  captain: string;
  description?: string;
  isCurrentChampion?: boolean;
  stats?: {
    titulos: number;
    points?: number;
    played?: number;
    won?: number;
    drawn?: number;
    lost?: number;
    goalsFor?: number;
    goalsAgainst?: number;
  };
}

export interface Match {
  id: number;
  homeTeam: number;
  awayTeam: number;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time?: string;
  endTime?: string;
  stadium: string;
  week: number;
  status: "scheduled" | "finished" | "cancelled";
}
