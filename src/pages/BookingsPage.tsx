import { Link } from "react-router-dom";
import { clearBookings, loadBookings } from "../lib/bookings";
import { useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState(() => loadBookings());

  function handleClear() {
    clearBookings();
    setBookings([]);
  }

  return (
    <div className="shell page">
      <h1>My tickets</h1>
      <p className="page-lead">
        Tickets you booked in this browser. Nothing is sent to a server.
      </p>

      {bookings.length === 0 ? (
        <div className="empty-state">
          No tickets yet. <Link to="/">See what&apos;s playing</Link>.
        </div>
      ) : (
        <>
          <div className="booking-list">
            {bookings.map((b) => (
              <div key={b.id} className="booking-item">
                <div>
                  <h3>{b.movieTitle}</h3>
                  <p>
                    {b.time} · {b.screen} · Seats {b.seats.join(", ")}
                  </p>
                </div>
                <div className="price">${b.total.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="ticket-actions">
            <Link to="/" className="btn">
              Book another
            </Link>
            <button type="button" className="btn btn-ghost" onClick={handleClear}>
              Clear tickets
            </button>
          </div>
        </>
      )}
    </div>
  );
}
