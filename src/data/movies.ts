export type Showtime = {
  id: string;
  time: string;
  screen: string;
};

export type Movie = {
  id: string;
  title: string;
  genre: string;
  runtime: number;
  rating: string;
  synopsis: string;
  posterGradient: string;
  accent: string;
  showtimes: Showtime[];
};

export const MOVIES: Movie[] = [
  {
    id: "neon-harbor",
    title: "Neon Harbor",
    genre: "Thriller",
    runtime: 118,
    rating: "PG-13",
    synopsis:
      "A detective returns to the port city that ruined him, chasing a smuggling ring that hides in plain sight under the neon glow.",
    posterGradient: "linear-gradient(145deg, #1a2744 0%, #0d3d4d 45%, #1a1520 100%)",
    accent: "#3dd6c6",
    showtimes: [
      { id: "nh-1", time: "1:30 PM", screen: "Screen 1" },
      { id: "nh-2", time: "4:45 PM", screen: "Screen 1" },
      { id: "nh-3", time: "8:00 PM", screen: "Screen 3" },
    ],
  },
  {
    id: "paper-cranes",
    title: "Paper Cranes",
    genre: "Drama",
    runtime: 104,
    rating: "PG",
    synopsis:
      "Two siblings fold a thousand paper cranes across one summer, hoping the ritual can stitch their family back together.",
    posterGradient: "linear-gradient(160deg, #5c2a3a 0%, #8b4a5c 40%, #2a1f2e 100%)",
    accent: "#e8a0b0",
    showtimes: [
      { id: "pc-1", time: "12:00 PM", screen: "Screen 2" },
      { id: "pc-2", time: "3:15 PM", screen: "Screen 2" },
      { id: "pc-3", time: "6:30 PM", screen: "Screen 4" },
    ],
  },
  {
    id: "orbit-seven",
    title: "Orbit Seven",
    genre: "Sci-Fi",
    runtime: 132,
    rating: "PG-13",
    synopsis:
      "A cargo crew stranded on a dying station must choose between protocol and the one passenger who might rewrite their fate.",
    posterGradient: "linear-gradient(150deg, #1e1640 0%, #2d1b69 50%, #0a0a12 100%)",
    accent: "#9b7bff",
    showtimes: [
      { id: "os-1", time: "2:00 PM", screen: "Screen 3" },
      { id: "os-2", time: "5:20 PM", screen: "Screen 3" },
      { id: "os-3", time: "9:10 PM", screen: "IMAX" },
    ],
  },
  {
    id: "kitchen-fire",
    title: "Kitchen Fire",
    genre: "Comedy",
    runtime: 96,
    rating: "R",
    synopsis:
      "A washed-up chef inherits a failing roadside diner and must win over the town before the bank — and his ego — shut the doors.",
    posterGradient: "linear-gradient(155deg, #4a2c0a 0%, #a85a1a 45%, #1a1208 100%)",
    accent: "#f0a050",
    showtimes: [
      { id: "kf-1", time: "11:45 AM", screen: "Screen 4" },
      { id: "kf-2", time: "2:30 PM", screen: "Screen 4" },
      { id: "kf-3", time: "7:15 PM", screen: "Screen 1" },
    ],
  },
  {
    id: "winter-signal",
    title: "Winter Signal",
    genre: "Mystery",
    runtime: 121,
    rating: "PG-13",
    synopsis:
      "Radio static from an abandoned alpine station leads a journalist into a decades-old disappearance no one wants reopened.",
    posterGradient: "linear-gradient(160deg, #1a2a3a 0%, #3a5a6a 40%, #0e1418 100%)",
    accent: "#7ec8e3",
    showtimes: [
      { id: "ws-1", time: "1:00 PM", screen: "Screen 2" },
      { id: "ws-2", time: "4:00 PM", screen: "IMAX" },
      { id: "ws-3", time: "8:30 PM", screen: "Screen 2" },
    ],
  },
  {
    id: "last-encore",
    title: "Last Encore",
    genre: "Romance",
    runtime: 110,
    rating: "PG-13",
    synopsis:
      "A touring pianist and a stagehand collide during a farewell concert tour — and decide whether the final night is really final.",
    posterGradient: "linear-gradient(145deg, #3a1520 0%, #6b2040 50%, #12080c 100%)",
    accent: "#ff6b8a",
    showtimes: [
      { id: "le-1", time: "12:30 PM", screen: "Screen 1" },
      { id: "le-2", time: "3:45 PM", screen: "Screen 1" },
      { id: "le-3", time: "7:00 PM", screen: "Screen 3" },
    ],
  },
];

export const ROWS = ["A", "B", "C", "D", "E", "F"];
export const SEATS_PER_ROW = 10;
export const TICKET_PRICE = 12.5;

/** Seats that appear already taken (demo data). */
export const TAKEN_SEATS = new Set([
  "A3",
  "A4",
  "B7",
  "C1",
  "C2",
  "D5",
  "E8",
  "E9",
  "F4",
]);
