/** @jsxImportSource solid-js */
import { createSignal, createEffect, For, type Component } from "solid-js";

interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  currentTeam: string;
  value: number;
  status: string;
  stats: {
    matches: number;
    goals?: number;
    assists?: number;
    cleanSheets?: number;
  };
  contractEnds: string;
}

interface PlayerFilterProps {
  players: Player[];
}

const PlayerFilter: Component<PlayerFilterProps> = (props) => {
  const [position, setPosition] = createSignal<string>("all");
  const [status, setStatus] = createSignal<string>("all");
  const [maxValue, setMaxValue] = createSignal<number>(5000);
  const [filteredPlayers, setFilteredPlayers] = createSignal<Player[]>(
    props.players
  );

  createEffect(() => {
    const filtered = props.players.filter((player) => {
      const matchesPosition =
        position() === "all" || player.position === position();
      const matchesStatus = status() === "all" || player.status === status();
      const matchesValue = player.value <= maxValue();
      return matchesPosition && matchesStatus && matchesValue;
    });
    setFilteredPlayers(filtered);
  });

  return (
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Posición
          </label>
          <select
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={position()}
            onChange={(e) => setPosition(e.currentTarget.value)}
          >
            <option value="all">Todas</option>
            <option value="Portero">Portero</option>
            <option value="Defensa">Defensa</option>
            <option value="Mediocampista">Mediocampista</option>
            <option value="Delantero">Delantero</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Estado</label>
          <select
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={status()}
            onChange={(e) => setStatus(e.currentTarget.value)}
          >
            <option value="all">Todos</option>
            <option value="Disponible">Disponible</option>
            <option value="En negociación">En negociación</option>
            <option value="Transferido">Transferido</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Valor máximo (miles $)
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={maxValue()}
            onChange={(e) => setMaxValue(parseInt(e.currentTarget.value))}
            class="mt-1 block w-full"
          />
          <span class="text-sm text-gray-500">{maxValue()} K</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <For each={filteredPlayers()}>
          {(player) => (
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {player.name}
                  </h3>
                  <p class="text-sm text-gray-500">{player.position}</p>
                </div>
                <span
                  class={`px-2 py-1 text-xs rounded-full ${
                    player.status === "Disponible"
                      ? "bg-green-100 text-green-800"
                      : player.status === "En negociación"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {player.status}
                </span>
              </div>

              <div class="mt-4 space-y-2">
                <p class="text-sm">
                  <span class="font-medium">Equipo actual:</span>{" "}
                  {player.currentTeam}
                </p>
                <p class="text-sm">
                  <span class="font-medium">Edad:</span> {player.age} años
                </p>
                <p class="text-sm">
                  <span class="font-medium">Valor:</span> ${player.value}K
                </p>
                <p class="text-sm">
                  <span class="font-medium">Contrato hasta:</span>{" "}
                  {new Date(player.contractEnds).toLocaleDateString()}
                </p>
              </div>

              <div class="mt-4 pt-4 border-t border-gray-200">
                <h4 class="text-sm font-medium text-gray-900">Estadísticas</h4>
                <div class="mt-2 grid grid-cols-2 gap-2">
                  <div class="text-sm">
                    <span class="text-gray-500">Partidos:</span>{" "}
                    {player.stats.matches}
                  </div>
                  {player.stats.goals !== undefined && (
                    <div class="text-sm">
                      <span class="text-gray-500">Goles:</span>{" "}
                      {player.stats.goals}
                    </div>
                  )}
                  {player.stats.assists !== undefined && (
                    <div class="text-sm">
                      <span class="text-gray-500">Asistencias:</span>{" "}
                      {player.stats.assists}
                    </div>
                  )}
                  {player.stats.cleanSheets !== undefined && (
                    <div class="text-sm">
                      <span class="text-gray-500">Porterías a cero:</span>{" "}
                      {player.stats.cleanSheets}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default PlayerFilter;
