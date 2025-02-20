interface RuleSection {
  title: string;
  items: string[];
}

interface Rules {
  sections: RuleSection[];
}

export const rules: Rules = {
  sections: [
    {
      title: "Formato de Competencia",
      items: [
        "La liga está compuesta por 6 equipos",
        "Se jugarán 5 partidos en formato todos contra todos",
        "Clasifican los 4 primeros equipos de la tabla general a fases finales",
        "En semifinales: 1° vs 4° y 2° vs 3°",
        "Los criterios de desempate en fase regular son: puntos, diferencia de goles y goles a favor",
        "En caso de empate en fases finales, se definirá con 2 penales por equipo",
      ],
    },
    {
      title: "Reglas de Juego",
      items: [
        "Duración: 20 minutos por lado con 2 minutos de descanso",
        "Cambios ilimitados y rotativos con autorización del árbitro",
        "Los goles son válidos desde cualquier lugar de la cancha",
        "El gol de saque de fondo del arquero solo vale si es con el pie y tiene contacto con rival",
        "El saque de meta se puede realizar con manos o pie",
        "El arquero no puede tomar el balón con la mano de pase o lateral de un compañero",
        "Solo se permite el uso de zapatos de baby fútbol",
        "Mínimo 5 jugadores para iniciar el partido",
      ],
    },
    {
      title: "Conducta y Disciplina",
      items: [
        "Respeto absoluto hacia árbitros, rivales y compañeros",
        "Prohibido el uso de lenguaje ofensivo o discriminatorio",
        "Las agresiones físicas resultan en expulsión inmediata de la liga",
        "El uso de zapatos de fútbol será sancionado con tarjeta amarilla",
        "Los equipos deben presentarse 15 minutos antes del partido",
        "El fair play será considerado para desempates en casos especiales",
      ],
    },
    {
      title: "Sistema de Pagos",
      items: [
        "Inscripción: $100,000 pesos por equipo",
        "Costo por partido: $25,000 pesos por equipo",
        "Los pagos deben realizarse antes de cada partido",
        "No se permite jugar con pagos pendientes",
      ],
    },
    {
      title: "Premiación",
      items: [
        "Primer Lugar: Copa de Campeones + Medallas + $400,000 pesos",
        "Segundo Lugar: Medallas + $100,000 pesos",
        "Premio Individual: Trofeo al Máximo Goleador",
        "Premio Individual: Trofeo al Arquero Menos Goleado",
      ],
    },
  ],
};
