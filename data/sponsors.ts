type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

interface Service {
  name: string;
  description: string;
  icon: string;
}

interface Location {
  address: string;
  city: string;
  maps: {
    google: string;
    waze: string;
  };
}

export interface Sponsor {
  name: string;
  logo: string;
  description: string;
  longDescription: string;
  website?: string;
  tier: SponsorTier;
  contact: {
    whatsapp: string;
    email: string;
    instagram: string;
    location: Location;
  };
  services: Service[];
  schedule: {
    days: string;
    hours: string;
  };
  features: string[];
}

export const sponsors: Sponsor[] = [
  {
    name: "Milo Y Sus Amigos",
    logo: "/images/milo.jpeg",
    description:
      "Cuidando con amor y profesionalismo a las mascotas de la familia. Orgullosos patrocinadores de la Liga Portales, porque el deporte y el cuidado animal van de la mano.",
    longDescription:
      "En Milo y Sus Amigos, entendemos que tu mascota es parte de tu familia. Nuestro equipo de profesionales altamente capacitados se dedica a proporcionar servicios de peluquería canina y atención veterinaria de primera calidad, garantizando que cada peludo amigo reciba un tratamiento personalizado y cariñoso. Con años de experiencia y pasión por los animales, nos enorgullece ser el lugar preferido para el cuidado y salud de las mascotas en Santiago. Como patrocinadores de la Liga Portales, compartimos los valores del deporte: compromiso, dedicación y trabajo en equipo.",
    tier: "platinum",
    contact: {
      whatsapp: "+56937229564",
      email: "miloysusamigosspa@gmail.com",
      instagram: "miloysusamigoscl",
      location: {
        address: "Mario Alvo Hassan 1489",
        city: "Santiago Centro",
        maps: {
          google:
            "https://maps.google.com/maps?q=Av.+Providencia+1234,+Santiago,+Región+Metropolitana,+Chile",
          waze: "https://waze.com/ul?ll=[-33.4378702,-70.6501731]&navigate=yes",
        },
      },
    },
    services: [
      {
        name: "Baño y Corte Completo",
        description:
          "Servicio integral que incluye baño, secado, corte personalizado, limpieza de oídos y corte de uñas",
        icon: "scissors",
      },
      {
        name: "Consultas Veterinarias",
        description:
          "Atención médica profesional para el cuidado preventivo y tratamiento de tu mascota",
        icon: "health",
      },
      {
        name: "Limpieza Sanitaria",
        description:
          "Mantenimiento higiénico específico para la salud y comodidad de tu mascota",
        icon: "health",
      },
      {
        name: "Tratamientos Especiales",
        description:
          "Servicios personalizados para razas específicas y necesidades particulares",
        icon: "star",
      },
    ],
    schedule: {
      days: "Lunes a Viernes | Sábados | Domingos",
      hours: "L-V: 09:00 - 19:30 | S: 09:00 - 18:00 | D: Cerrado",
    },
    features: [
      "Atención personalizada para cada mascota",
      "Productos premium hipoalergénicos",
      "Personal certificado y con experiencia",
      "Ambiente seguro y amigable",
      "Instalaciones modernas y limpias",
      "Servicio a domicilio disponible",
    ],
  },
  {
    name: "LethalStore",
    logo: "/images/lethalstore.jpg",
    description:
      "Tu destino para ropa deportiva y accesorios de moda. Expertos en estampados personalizados al mayor y detal.",
    longDescription:
      "En LethalStore nos especializamos en ofrecer la mejor ropa deportiva y accesorios de moda. Nuestro catálogo incluye una amplia selección de productos como lentes, guantes y bananos. Destacamos por nuestro servicio de estampados personalizados, disponible tanto al mayor como al detal, garantizando la mejor calidad y atención a nuestros clientes.",
    tier: "bronze",
    contact: {
      whatsapp: "+56975584688",
      email: "contacto@lethalstore.cl",
      instagram: "lethal_Store10",
      location: {
        address: "Por definir",
        city: "Santiago",
        maps: {
          google: "",
          waze: "",
        },
      },
    },
    services: [
      {
        name: "Ropa Deportiva",
        description: "Venta de ropa deportiva al mayor y detal",
        icon: "tshirt",
      },
      {
        name: "Accesorios de Moda",
        description: "Lentes, guantes, bananos y más accesorios",
        icon: "accessories",
      },
      {
        name: "Estampados Personalizados",
        description: "Servicio de estampados al mayor y detal",
        icon: "print",
      },
    ],
    schedule: {
      days: "Lunes a Sábado",
      hours: "L-V: 10:00 - 19:00 | S: 10:00 - 15:00",
    },
    features: [
      "Amplia variedad de ropa deportiva",
      "Accesorios de moda exclusivos",
      "Estampados personalizados de alta calidad",
      "Ventas al mayor y detal",
      "Atención personalizada",
    ],
  },
];
