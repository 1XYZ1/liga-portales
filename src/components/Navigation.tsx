/** @jsxImportSource solid-js */
import { createSignal, Show, type Component } from "solid-js";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    name: "Inicio",
    href: "/",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Equipos",
    href: "/equipos",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Calendario",
    href: "/calendario",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    name: "Tabla",
    href: "/tabla",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    name: "Estadísticas",
    href: "/estadisticas",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    name: "Videos",
    href: "/videos",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    name: "Galería",
    href: "/galeria",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    name: "Patrocinadores",
    href: "/patrocinadores",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Reglamento",
    href: "/reglamento",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const Navigation: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const closeMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest(".mobile-menu") === null &&
      target.closest(".menu-button") === null
    ) {
      setIsOpen(false);
    }
  };

  if (typeof document !== "undefined") {
    document.addEventListener("click", closeMenu);
  }

  return (
    <>
      {/* Navegación de escritorio */}
      <nav class="hidden lg:flex items-center">
        <div class="flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              href={item.href}
              class="px-3 py-1.5 rounded-md text-sm font-medium text-blue-100 hover:text-white hover:bg-blue-700/50 transition-colors duration-200 relative z-10"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Botón de menú móvil */}
      <button
        class="lg:hidden menu-button p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 relative z-10"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen());
        }}
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isOpen() ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menú móvil */}
      <Show when={isOpen()}>
        <div class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out">
          <div
            class={`mobile-menu fixed inset-y-0 right-0 max-w-xs w-full bg-gradient-to-b from-blue-900 to-blue-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen() ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div class="h-full overflow-y-auto">
              <div class="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    href={item.href}
                    class="flex items-center px-4 py-2 text-blue-100 hover:bg-blue-700/50 hover:text-white rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      class="h-5 w-5 mr-3 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={item.icon}
                      />
                    </svg>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default Navigation;
