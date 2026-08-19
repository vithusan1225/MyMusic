export type Track = {
  title: string;
  artist: string;
  duration?: string;
  color: string;
};

export const tracks: Track[] = [
  { title: "Midnight City", artist: "M83", duration: "4:03", color: "#e85d75" },
  {
    title: "Electric Feel",
    artist: "MGMT",
    duration: "3:49",
    color: "#f3a65a",
  },
  {
    title: "The Less I Know",
    artist: "Tame Impala",
    duration: "3:36",
    color: "#6c8ee8",
  },
  {
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    duration: "3:58",
    color: "#55b99b",
  },
];

export const favoriteTracks: Track[] = [
  { title: "Space Song", artist: "Beach House", color: "#7564c6" },
  { title: "Intro", artist: "The xx", color: "#e85d75" },
  { title: "Sweet Disposition", artist: "The Temper Trap", color: "#f3a65a" },
];

export const recentTracks = tracks.slice(0, 2).concat(favoriteTracks[0]);
