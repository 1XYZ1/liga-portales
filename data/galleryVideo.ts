export interface GalleryVideo {
  id: string;
  title: string;
  date: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
}

export const galleryVideos: GalleryVideo[] = [
  {
    id: "1",
    title: "Colombia tiki taka",
    date: "2024-02-24",
    videoUrl: "/videos/colombia.mp4",
    thumbnailUrl: "/images/teams/colombia-team.jpeg",
    duration: "0:42",
  },
  // {
  //   id: "2",
  //   title: "Goles de la Fecha - Semana 2",
  //   date: "2024-03-17",
  //   videoUrl: "/videos/semana2.mp4",
  // },
];
