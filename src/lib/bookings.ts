export type Booking = {
  id: string;
  movieId: string;
  movieTitle: string;
  showtimeId: string;
  time: string;
  screen: string;
  seats: string[];
  total: number;
  createdAt: string;
};

const STORAGE_KEY = "marquee-bookings";

export function loadBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Booking[];
  } catch {
    return [];
  }
}

export function saveBooking(booking: Booking): void {
  const existing = loadBookings();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([booking, ...existing]));
}

export function clearBookings(): void {
  localStorage.removeItem(STORAGE_KEY);
}
