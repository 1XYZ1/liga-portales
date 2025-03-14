import { createSignal, For, Show, type Component } from "solid-js";
import type { GalleryImage } from "../../data/gallery";
import { galleryImages } from "../../data/gallery";

const HighlightsGallery: Component = () => {
  const [selectedImage, setSelectedImage] = createSignal<GalleryImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [selectedWeek, setSelectedWeek] = createSignal<number | "all">("all");

  // Obtener las semanas directamente de la propiedad semana de las imágenes
  const weeks = Array.from(
    new Set(galleryImages.map((img) => img.semana))
  ).sort((a, b) => a - b);

  const highlights = () => {
    const filtered =
      selectedWeek() === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.semana === selectedWeek());
    return filtered.slice(0, 4);
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
    <div class="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl overflow-hidden border border-blue-700">
      <div class="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-4">
        <h2 class="text-2xl font-bold text-white flex items-center">
          <span class="mr-2">📸</span> Mejores Momentos
        </h2>
      </div>

      {/* Filtros */}
      <div class="p-3 border-b border-blue-800">
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            class={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedWeek() === "all"
                ? "bg-blue-700 text-white"
                : "bg-gray-800 text-blue-200 hover:bg-gray-700 border border-blue-600"
            }`}
            onClick={() => setSelectedWeek("all")}
          >
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
          </button>
          {weeks.map((week) => (
            <button
              class={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedWeek() === week
                  ? "bg-blue-700 text-white"
                  : "bg-gray-800 text-blue-200 hover:bg-gray-700 border border-blue-600"
              }`}
              onClick={() => setSelectedWeek(week)}
            >
              <span class="w-4 h-4 flex items-center justify-center">⚽</span>
              Semana {week}
            </button>
          ))}
        </div>
      </div>

      {/* Galería */}
      <div class="p-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <For each={highlights()}>
            {(image) => (
              <div
                class="relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-blue-600"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-all duration-300">
                  <div class="absolute top-2 right-2 flex gap-2 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button
                      onClick={(e) => shareImage(e, image)}
                      class="p-2 bg-blue-900/70 hover:bg-blue-900/90 rounded-full backdrop-blur-sm transition-colors shadow-lg border border-blue-600"
                      title="Compartir"
                    >
                      <svg
                        class="w-4 h-4 text-white drop-shadow-lg"
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
                      class="p-2 bg-blue-900/70 hover:bg-blue-900/90 rounded-full backdrop-blur-sm transition-colors shadow-lg border border-blue-600"
                      title="Descargar"
                    >
                      <svg
                        class="w-4 h-4 text-white drop-shadow-lg"
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
                  <div class="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black/90 to-transparent transform translate-y-0 transition-transform duration-300 z-0">
                    <h3 class="text-base font-bold line-clamp-1 drop-shadow-lg">
                      {image.title}
                    </h3>
                    <p class="text-xs text-blue-200 line-clamp-1">
                      Semana {image.semana}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Ver más */}
      <div class="p-3 text-center border-t border-blue-800">
        <a
          href="/galeria"
          class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors text-sm font-medium group"
          rel="prefetch"
        >
          Ver galería completa
          <svg
            class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>

      {/* Modal minimalista */}
      <Show when={isModalOpen() && selectedImage()}>
        <div class="fixed inset-0 bg-black/95 z-50" onClick={closeModal}>
          {/* Contenedor de la imagen */}
          <div class="absolute inset-0 flex items-center justify-center p-4">
            <div class="relative max-w-[95vw] max-h-[95vh]">
              {/* Botones flotantes - Ahora en la parte superior izquierda */}
              <div class="absolute top-0 left-0 flex items-center gap-3 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectedImage() && shareImage(e, selectedImage()!);
                  }}
                  class="p-2 bg-blue-900/50 hover:bg-blue-900/80 rounded-full shadow-lg transition-all duration-200 text-white hover:scale-105 border border-blue-600"
                  title="Compartir"
                >
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectedImage() && downloadImage(e, selectedImage()!);
                  }}
                  class="p-2 bg-blue-900/50 hover:bg-blue-900/80 rounded-full shadow-lg transition-all duration-200 text-white hover:scale-105 border border-blue-600"
                  title="Descargar"
                >
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>

              {/* Imagen */}
              <img
                src={selectedImage()?.imageUrl}
                alt={selectedImage()?.title}
                class="max-w-full max-h-[85vh] md:max-h-[80vh] lg:max-h-[75vh] xl:max-h-[70vh] 2xl:max-h-[65vh] xl:max-w-[1000px] object-contain rounded-lg shadow-2xl border border-blue-700"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Información de la imagen */}
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 class="text-xl font-bold text-white mb-1">
                  {selectedImage()?.title}
                </h3>
                <p class="text-blue-200 text-sm line-clamp-2">
                  {selectedImage()?.description &&
                  selectedImage()!.description.length > 100
                    ? selectedImage()!.description.substring(0, 100) + "..."
                    : selectedImage()?.description}
                </p>
                <div class="mt-2 flex items-center gap-2">
                  <span class="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs border border-blue-700 flex items-center">
                    <span class="mr-1">⚽</span> Semana{" "}
                    {selectedImage()?.semana}
                  </span>
                </div>
              </div>

              {/* Botón de cerrar - Mantiene su posición en la esquina superior derecha */}
              <button
                onClick={closeModal}
                class="absolute top-2 right-2 p-2 bg-blue-900/70 hover:bg-blue-900/90 rounded-full text-white z-20 border border-blue-600"
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
          </div>
        </div>
      </Show>
    </div>
  );
};

export default HighlightsGallery;
