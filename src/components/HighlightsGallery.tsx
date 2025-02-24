import { createSignal, For, type Component } from "solid-js";
import type { GalleryImage } from "../../data/gallery";
import { galleryImages } from "../../data/gallery";

const HighlightsGallery: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal<string>("todos");
  const [activeIndex, setActiveIndex] = createSignal<number>(0);

  const filteredHighlights = () =>
    selectedCategory() === "todos"
      ? galleryImages
      : galleryImages.filter((h) => h.category === selectedCategory());

  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="bg-blue-600 px-6 py-4">
        <h2 class="text-2xl font-bold text-white">Mejores Momentos</h2>
      </div>

      {/* Filtros */}
      <div class="p-4 border-b">
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            class={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory() === "todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("todos")}
          >
            Todos
          </button>
          <button
            class={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory() === "gol"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("gol")}
          >
            Goles
          </button>
          <button
            class={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory() === "jugada"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("jugada")}
          >
            Jugadas
          </button>
          <button
            class={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory() === "celebracion"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("celebracion")}
          >
            Celebraciones
          </button>
          <button
            class={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory() === "equipo"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory("equipo")}
          >
            Equipo
          </button>
        </div>
      </div>

      {/* Galería */}
      <div class="p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <For each={filteredHighlights()}>
            {(highlight: GalleryImage) => (
              <div
                class="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => setActiveIndex(highlight.id)}
              >
                <div class="aspect-video w-full">
                  <img
                    src={highlight.imageUrl}
                    alt={highlight.title}
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 class="text-lg font-bold mb-1">{highlight.title}</h3>
                    <p class="text-sm text-gray-200">{highlight.description}</p>
                    <div class="flex items-center gap-2 mt-2 text-xs text-gray-300">
                      <span>{highlight.date}</span>
                      <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span class="capitalize">{highlight.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Ver más */}
      <div class="p-4 text-center border-t">
        <a
          href="/galeria"
          class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
          rel="prefetch"
        >
          Ver galería completa
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HighlightsGallery;
