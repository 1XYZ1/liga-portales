import { createSignal, For, Show, type Component } from "solid-js";
import type { GalleryVideo } from "../../data/galleryVideo";
import { galleryVideos } from "../../data/galleryVideo";

const HighlightsVideoGallery: Component = () => {
  const [selectedVideo, setSelectedVideo] = createSignal<GalleryVideo | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const highlights = () => {
    return galleryVideos.slice(0, 3);
  };

  const shareVideo = (e: Event, video: GalleryVideo) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: video.title,
          url: video.videoUrl,
        })
        .catch(console.error);
    }
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
    <div class="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl overflow-hidden border border-blue-700 mt-8">
      <div class="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-4">
        <h2 class="text-2xl font-bold text-white flex items-center">
          <span class="mr-2">🎥</span> Videos Destacados
        </h2>
      </div>

      {/* Galería */}
      <div class="p-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <For each={highlights()}>
            {(video) => (
              <div
                class="relative aspect-video group cursor-pointer overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-blue-600"
                onClick={() => openModal(video)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-all duration-300">
                  <div class="absolute top-2 right-2 flex gap-2 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button
                      onClick={(e) => shareVideo(e, video)}
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
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black/90 to-transparent transform translate-y-0 transition-transform duration-300 z-0">
                    <h3 class="text-base font-bold line-clamp-1 drop-shadow-lg">
                      {video.title}
                    </h3>
                    <p class="text-xs text-blue-200 line-clamp-1">
                      {video.duration}
                    </p>
                  </div>
                  {/* Play button overlay */}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        class="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
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
          href="/videos"
          class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors text-sm font-medium group"
          rel="prefetch"
        >
          Ver todos los videos
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

      {/* Modal para reproducción de video */}
      <Show when={isModalOpen() && selectedVideo()}>
        <div class="fixed inset-0 bg-black/95 z-50" onClick={closeModal}>
          <div class="absolute inset-0 flex items-center justify-center p-4">
            <div class="relative w-full max-w-4xl">
              <div class="aspect-video">
                <iframe
                  src={selectedVideo()?.videoUrl}
                  class="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <button
                onClick={closeModal}
                class="absolute -top-10 right-0 p-2 bg-blue-900/70 hover:bg-blue-900/90 rounded-full text-white z-20 border border-blue-600"
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

export default HighlightsVideoGallery;
