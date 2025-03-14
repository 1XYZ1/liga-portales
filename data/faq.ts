interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faq: FAQItem[] = [
  {
    question: "¿Cuál es el costo de inscripción?",
    answer:
      "La inscripción a la Liga Portales tiene un costo de $100,000 pesos por equipo. Adicionalmente, cada partido tiene un costo de $25,000 pesos por equipo que debe pagarse antes del encuentro.",
    category: "Inscripciones y Pagos",
  },
  {
    question: "¿Puedo inscribir jugadores durante el torneo?",
    answer:
      "Sí, se pueden inscribir jugadores hasta la fecha límite establecida por la organización.",
    category: "Inscripciones y Pagos",
  },
  {
    question: "¿Qué pasa si un equipo no se presenta a un partido?",
    answer:
      "El equipo perderá el partido por marcador de 3-0 y deberá pagar una multa establecida por la organización.",
    category: "Reglamento y Sanciones",
  },
  {
    question: "¿Se pueden reprogramar partidos?",
    answer:
      "Solo se pueden reprogramar partidos por causas de fuerza mayor y con un mínimo de 48 horas de anticipación.",
    category: "Logística",
  },
  {
    question: "¿Hay límite de edad para participar?",
    answer:
      "No hay límite de edad, pero los jugadores menores de edad necesitan autorización por escrito de sus padres o tutores.",
    category: "Inscripciones y Pagos",
  },
  {
    question: "¿Cuál es el mínimo de jugadores para iniciar un partido?",
    answer:
      "Se requiere un mínimo de 5 jugadores por equipo para poder iniciar un partido.",
    category: "Reglamento y Sanciones",
  },
  {
    question: "¿La liga proporciona seguro médico?",
    answer: "No, cada jugador es responsable de su propia cobertura médica.",
    category: "Logística",
  },
  {
    question: "¿Cómo funciona el sistema de competencia?",
    answer:
      "La liga tiene 6 equipos que jugarán 5 partidos en formato todos contra todos. Los 4 mejores clasifican a semifinales donde 1° enfrenta a 4° y 2° a 3°.",
    category: "Formato de Competencia",
  },
  {
    question: "¿Qué premios hay para los ganadores?",
    answer:
      "El primer lugar recibe Copa de Campeones, medallas y $400,000 pesos en efectivo. El segundo lugar obtiene medallas y $100,000 pesos. También hay trofeos individuales para el goleador y el arquero menos goleado.",
    category: "Premios",
  },
  {
    question: "¿Qué tipo de calzado está permitido?",
    answer:
      "Solo se permite el uso de zapatos de baby fútbol. El uso de zapatos de fútbol está prohibido y será sancionado con tarjeta amarilla.",
    category: "Reglamento y Sanciones",
  },
];
