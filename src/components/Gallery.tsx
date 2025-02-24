import { createSignal, For, type Component } from "solid-js";
import type { GalleryImage } from "../../data/gallery";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      button: any;
      span: any;
      svg: any;
      path: any;
      h1: any;
      h2: any;
      h3: any;
      p: any;
      img: any;
    }
  }
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: Component<GalleryProps> = (props) => {
  const [selectedCategory, setSelectedCategory] = createSignal<string>("todos");
  const [expandedImage, setExpandedImage] = createSignal<GalleryImage | null>(
    null
  );

  const filteredImages = () =>
    selectedCategory() === "todos"
      ? props.images
      : props.images.filter((img) => img.category === selectedCategory());

  const closeModal = () => {
    setExpandedImage(null);
    document.body.style.overflow = "auto";
  };

  const expandImage = (image: GalleryImage) => {
    setExpandedImage(image);
    document.body.style.overflow = "hidden";
  };

  return (
    <div class="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div class="relative py-24 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 mix-blend-multiply"></div>
          <div class="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-20"></div>
        </div>
        <div class="relative container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Galería de Momentos
            </h1>
            <p class="text-xl text-blue-200 max-w-2xl mx-auto">
              Revive los mejores momentos de la liga a través de nuestra
              colección de fotografías
            </p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div class="container mx-auto px-4 -mt-8 mb-12">
        <div class="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "todos"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("todos")}
            >
              Todos los Momentos
            </button>
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "gol"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("gol")}
            >
              Goles
            </button>
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "jugada"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("jugada")}
            >
              Jugadas
            </button>
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "celebracion"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("celebracion")}
            >
              Celebraciones
            </button>
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "equipo"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("equipo")}
            >
              Equipo
            </button>
            <button
              class={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory() === "partido"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory("partido")}
            >
              Partidos
            </button>
          </div>
        </div>
      </div>

      {/* Galería Grid */}
      <div class="container mx-auto px-4 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={filteredImages()}>
            {(image) => (
              <div
                class={`group relative overflow-hidden rounded-2xl bg-gray-800 ${
                  image.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : image.size === "horizontal"
                    ? "md:col-span-2"
                    : image.size === "vertical"
                    ? "md:row-span-2"
                    : ""
                }`}
              >
                <div class="aspect-video w-full h-full">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2">
                        <span class="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-medium">
                          {image.category}
                        </span>
                        <span class="text-gray-400 text-sm">{image.date}</span>
                      </div>
                      <h3 class="text-xl font-bold text-white">
                        {image.title}
                      </h3>
                      <p class="text-gray-300 text-sm line-clamp-2">
                        {image.description}
                      </p>
                      <button
                        class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        onClick={() => expandImage(image)}
                      >
                        Ver más
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Modal */}
      {expandedImage() && (
        <div
          class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div class="relative max-w-6xl w-full">
            <button
              onClick={closeModal}
              class="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={expandedImage()?.imageUrl}
              alt={expandedImage()?.title}
              class="w-full h-auto rounded-lg"
            />
            <div class="mt-4 text-white">
              <h3 class="text-2xl font-bold">{expandedImage()?.title}</h3>
              <p class="mt-2 text-gray-300">{expandedImage()?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
