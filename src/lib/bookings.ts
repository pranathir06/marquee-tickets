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
export const BOOKINGS_EVENT = "marquee-bookings-change";

function dispatchBookingEvent(action: "saved" | "cleared") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(BOOKINGS_EVENT, {
      detail: { action },
    }),
  );
}

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
  dispatchBookingEvent("saved");
}

export function clearBookings(): void {
  localStorage.removeItem(STORAGE_KEY);
  dispatchBookingEvent("cleared");
}
