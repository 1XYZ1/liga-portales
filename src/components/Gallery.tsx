import { createSignal, For, Show, type Component } from "solid-js";
import type { GalleryImage } from "../../data/gallery";
import type { JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      div: JSX.HTMLAttributes<HTMLDivElement>;
      button: JSX.HTMLAttributes<HTMLButtonElement>;
      span: JSX.HTMLAttributes<HTMLSpanElement>;
      svg: JSX.HTMLAttributes<SVGSVGElement> & {
        fill?: string;
        stroke?: string;
        viewBox?: string;
      };
      path: JSX.HTMLAttributes<SVGPathElement> & {
        "stroke-linecap"?: string;
        "stroke-linejoin"?: string;
        "stroke-width"?: string;
        d?: string;
      };
      h1: JSX.HTMLAttributes<HTMLHeadingElement>;
      h2: JSX.HTMLAttributes<HTMLHeadingElement>;
      h3: JSX.HTMLAttributes<HTMLHeadingElement>;
      p: JSX.HTMLAttributes<HTMLParagraphElement>;
      img: JSX.HTMLAttributes<HTMLImageElement>;
    }
  }
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: Component<GalleryProps> = (props) => {
  const [selectedImage, setSelectedImage] = createSignal<GalleryImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [selectedWeek, setSelectedWeek] = createSignal<number | "all">("all");

  const weeks = Array.from(new Set(props.images.map((img) => img.semana))).sort(
    (a, b) => a - b
  );

  const filteredImages = () => {
    let filtered = props.images;

    // Filtrar por semana
    if (selectedWeek() !== "all") {
      filtered = filtered.filter((img) => img.semana === selectedWeek());
    }

    return filtered;
  };

  const shareImage = (e: Event, image: GalleryImage) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: image.title,
          text: image.description,
          url: window.location.origin + image.imageUrl,
        })
        .catch(console.error);
    }
  };

  const downloadImage = async (e: Event, image: GalleryImage) => {
    e.stopPropagation();
    try {
      const response = await fetch(image.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `liga-portales-${image.title
        .toLowerCase()
        .replace(/\s+/g, "-")}.jpeg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
    }
  };

  // Función para manejar el scrollbar
  const toggleScrollLock = (lock: boolean) => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = lock ? "hidden" : "";
    }
  };

  // Función para abrir el modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    toggleScrollLock(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    toggleScrollLock(false);
  };

  return (
    <div class="min-h-screen bg-gray-900">
      {/* Hero Section con patrón de balón de fútbol */}
      <div class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16">
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute inset-0"
            style="background-image: url('/images/pattern-soccer.svg'); background-size: 60px;"
          ></div>
        </div>
        <div class="container mx-auto px-4 relative">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Galería de Momentos
          </h2>
          <p class="text-blue-400 text-center text-lg max-w-2xl mx-auto">
            Revive los mejores momentos de la liga a través de nuestras capturas
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div class="bg-gray-900 border-b border-gray-800">
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col gap-4">
            {/* Filtro por semana */}
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-300">Semana</h3>
                {selectedWeek() !== "all" && (
                  <button
                    onClick={() => setSelectedWeek("all")}
                    class="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Limpiar filtro
                  </button>
                )}
              </div>
              <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  class={`flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    selectedWeek() === "all"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedWeek("all")}
                >
                  <span class="flex items-center gap-2">
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
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                    Todas
                  </span>
                </button>
                {weeks.map((week) => (
                  <button
                    class={`flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedWeek() === week
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setSelectedWeek(week)}
                  >
                    Semana {week}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería con diseño dinámico basado en size */}
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[300px] gap-4 md:gap-6">
          <For each={filteredImages()}>
            {(image) => (
              <div
                class={`relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer ${
                  image.size === "large"
                    ? "sm:col-span-2 lg:col-span-2 row-span-2"
                    : image.size === "horizontal"
                    ? "sm:col-span-2"
                    : image.size === "vertical"
                    ? "row-span-2"
                    : ""
                }`}
                onClick={() => {
                  openModal(image);
                }}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  class={`w-full h-full object-cover ${
                    image.size === "large"
                      ? "object-center"
                      : image.size === "horizontal"
                      ? "object-center"
                      : image.size === "vertical"
                      ? "object-top"
                      : "object-center"
                  }`}
                  loading="lazy"
                />
                {/* Overlay con gradiente y controles - Siempre visible en móviles */}
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-all duration-300">
                  {/* Botones de acción */}
                  <div class="absolute top-2 right-2 flex gap-2 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button
                      onClick={(e) => shareImage(e, image)}
                      class="p-2 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-colors shadow-lg"
                      title="Compartir"
                    >
                      <svg
                        class="w-5 h-5 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => downloadImage(e, image)}
                      class="p-2 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-colors shadow-lg"
                      title="Descargar"
                    >
                      <svg
                        class="w-5 h-5 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Información de la imagen */}
                  <div class="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/90 to-transparent transform translate-y-0 transition-transform duration-300 z-0">
                    <h3 class="text-lg font-bold line-clamp-1 drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Modal minimalista */}
      <Show when={isModalOpen() && selectedImage()}>
        <div class="fixed inset-0 bg-black/95 z-50" onClick={closeModal}>
          {/* Contenedor de la imagen */}
          <div class="absolute inset-0 flex items-center justify-center p-4">
            <div class="relative max-w-[95vw] max-h-[95vh]">
              {/* Botones flotantes - Ahora sobre la imagen */}
              <div class="absolute top-0 left-0 right-0 flex items-center justify-end gap-3 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectedImage() && shareImage(e, selectedImage()!);
                  }}
                  class="p-3 bg-black/50 hover:bg-black/80 rounded-full shadow-lg transition-all duration-200 text-white hover:scale-105"
                  title="Compartir"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectedImage() && downloadImage(e, selectedImage()!);
                  }}
                  class="p-3 bg-black/50 hover:bg-black/80 rounded-full shadow-lg transition-all duration-200 text-white hover:scale-105"
                  title="Descargar"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  class="p-3 bg-black/50 hover:bg-black/80 rounded-full shadow-lg transition-all duration-200 text-white hover:scale-105"
                  title="Cerrar"
                >
                  <svg
                    class="w-5 h-5"
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
              </div>
              <img
                src={selectedImage()?.imageUrl}
                alt={selectedImage()?.title}
                class="max-w-full max-h-[85vh] md:max-h-[80vh] lg:max-h-[75vh] xl:max-h-[70vh] 2xl:max-h-[65vh] object-contain rounded-lg shadow-2xl border border-blue-700"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Gallery;
