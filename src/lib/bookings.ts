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

function generateBookingId() {
  return `mq-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export function loadBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const stored = JSON.parse(raw) as Booking[];
    let didUpdate = false;
    const normalized = stored.map((booking) => {
      if (!booking.id) {
        didUpdate = true;
        return { ...booking, id: generateBookingId() };
      }
      return booking;
    });
    if (didUpdate) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    }
    return normalized;
  } catch {
    return [];
  }
}

export function saveBooking(booking: Omit<Booking, "id">): Booking {
  const existing = loadBookings();
  const saved = { ...booking, id: generateBookingId() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([saved, ...existing]));
  return saved;
}

export function clearBookings(): void {
  localStorage.removeItem(STORAGE_KEY);
}
