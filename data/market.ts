type Position = "Portero" | "Defensa" | "Mediocampista" | "Delantero";
type Status = "Disponible" | "En negociación" | "Transferido";

interface Player {
  id: string;
  name: string;
  age: number;
  position: Position;
  currentTeam: string;
  value: number; // en miles de dólares
  status: Status;
  stats: {
    matches: number;
    goals?: number;
    assists?: number;
    cleanSheets?: number; // solo para porteros
  };
  contractEnds: string; // fecha en formato ISO
}

export const marketPlayers: Player[] = [
  {
    id: "P001",
    name: "Miguel Ángel Rodríguez",
    age: 25,
    position: "Portero",
    currentTeam: "Atlético Madrid",
    value: 800,
    status: "Disponible",
    stats: {
      matches: 15,
      cleanSheets: 6,
    },
    contractEnds: "2024-06-30",
  },
  {
    id: "P002",
    name: "Carlos Martínez",
    age: 28,
    position: "Defensa",
    currentTeam: "Sevilla FC",
    value: 1200,
    status: "En negociación",
    stats: {
      matches: 22,
      goals: 2,
      assists: 3,
    },
    contractEnds: "2023-12-31",
  },
  {
    id: "P003",
    name: "Juan Pablo Torres",
    age: 23,
    position: "Mediocampista",
    currentTeam: "Valencia CF",
    value: 1500,
    status: "Disponible",
    stats: {
      matches: 20,
      goals: 4,
      assists: 7,
    },
    contractEnds: "2024-06-30",
  },
  {
    id: "P004",
    name: "Roberto Sánchez",
    age: 29,
    position: "Delantero",
    currentTeam: "Real Betis",
    value: 2000,
    status: "Disponible",
    stats: {
      matches: 18,
      goals: 12,
      assists: 3,
    },
    contractEnds: "2024-06-30",
  },
];
