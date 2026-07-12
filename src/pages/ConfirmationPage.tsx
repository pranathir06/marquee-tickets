import { Link, useParams } from "react-router-dom";
import { loadBookings } from "../lib/bookings";

export default function ConfirmationPage() {
  const { bookingId } = useParams();
  const booking = loadBookings().find((b) => b.id === bookingId);

  if (!booking) {
    return (
      <div className="shell page">
        <h1>Ticket not found</h1>
        <p className="page-lead">
          We couldn&apos;t find that booking.{" "}
          <Link to="/">Browse films</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="shell page">
      <h1>You&apos;re booked</h1>
      <p className="page-lead">
        Show this ticket at the door. Bookings stay in this browser only.
      </p>

      <div className="confirm-ticket">
        <h2>{booking.movieTitle}</h2>
        <div className="ticket-row">
          <span>Time</span>
          <strong>{booking.time}</strong>
        </div>
        <div className="ticket-row">
          <span>Screen</span>
          <strong>{booking.screen}</strong>
        </div>
        <div className="ticket-row">
          <span>Seats</span>
          <strong>{booking.seats.join(", ")}</strong>
        </div>
        <div className="ticket-row">
          <span>Total</span>
          <strong>${booking.total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="ticket-actions">
        <Link to="/bookings" className="btn">
          View my tickets
        </Link>
        <Link to="/" className="btn btn-ghost">
          Book another
        </Link>
      </div>
    </div>
  );
}
