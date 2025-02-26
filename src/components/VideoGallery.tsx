import { createSignal, For, Show, type Component } from "solid-js";
import type { GalleryVideo } from "../../data/galleryVideo";

interface VideoGalleryProps {
  videos: GalleryVideo[];
}

const VideoGallery: Component<VideoGalleryProps> = (props) => {
  const [selectedVideo, setSelectedVideo] = createSignal<GalleryVideo | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Ajustamos la zona horaria sumando un día
    date.setDate(date.getDate() + 1);
    return date
      .toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-");
  };

  // Función para manejar el scrollbar
  const toggleScrollLock = (lock: boolean) => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = lock ? "hidden" : "";
    }
  };

  // Función para abrir el modal
  const openModal = (video: GalleryVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    toggleScrollLock(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    toggleScrollLock(false);
  };

  return (
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Videos de la Liga</h2>

        {/* Lista de Videos */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={props.videos}>
            {(video) => (
              <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Contenedor del thumbnail */}
                <div
                  class="relative aspect-video cursor-pointer group"
                  onClick={() => openModal(video)}
                >
                  {/* Imagen de vista previa */}
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    class="w-full h-full object-cover"
                  />

                  {/* Overlay oscuro al hover */}
                  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Botón de play estilo YouTube */}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-[68px] h-[48px] bg-black/80 rounded-lg opacity-80 group-hover:bg-red-600 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <svg
                        class="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duración del video */}
                  <div class="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Información del video */}
                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <p class="text-sm text-gray-500">{formatDate(video.date)}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Modal para reproducir video */}
      <Show when={isModalOpen() && selectedVideo()}>
        <div
          class="fixed inset-0 bg-black/95 z-50 p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Header del modal */}
          <div class="absolute top-0 left-0 right-0 p-4 z-10">
            <div class="container mx-auto flex items-center justify-between">
              <h3 class="text-white text-xl font-semibold truncate pr-4">
                {selectedVideo()?.title}
              </h3>
              <button
                onClick={closeModal}
                class="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
                title="Cerrar"
              >
                <svg
                  class="w-6 h-6"
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

          {/* Contenedor del video */}
          <div class="h-full flex items-center justify-center">
            <div
              class="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo()?.videoUrl}
                class="w-full h-full"
                controls
                autoplay
                controlsList="nodownload"
                poster={selectedVideo()?.thumbnailUrl}
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default VideoGallery;
