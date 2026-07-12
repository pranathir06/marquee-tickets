import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MOVIES,
  ROWS,
  SEATS_PER_ROW,
  TAKEN_SEATS,
  TICKET_PRICE,
} from "../data/movies";
import { saveBooking, type Booking } from "../lib/bookings";

export default function MoviePage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find((m) => m.id === movieId);

  const [showtimeId, setShowtimeId] = useState<string | null>(
    movie?.showtimes[0]?.id ?? null,
  );
  const [selected, setSelected] = useState<string[]>([]);

  const showtime = useMemo(
    () => movie?.showtimes.find((s) => s.id === showtimeId) ?? null,
    [movie, showtimeId],
  );

  if (!movie) {
    return (
      <div className="shell page">
        <h1>Film not found</h1>
        <p className="page-lead">
          That title isn&apos;t on the board.{" "}
          <Link to="/">Back to now showing</Link>
        </p>
      </div>
    );
  }

  function toggleSeat(seatId: string) {
    if (TAKEN_SEATS.has(seatId)) return;
    setSelected((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId].sort(),
    );
  }

  function confirmBooking() {
    if (!movie || !showtime || selected.length === 0) return;

    const booking: Booking = {
      id: `mq-${Date.now()}`,
      movieId: movie.id,
      movieTitle: movie.title,
      showtimeId: showtime.id,
      time: showtime.time,
      screen: showtime.screen,
      seats: selected,
      total: selected.length * TICKET_PRICE,
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);
    navigate(`/confirmation/${booking.id}`);
  }

  const total = selected.length * TICKET_PRICE;

  return (
    <div className="shell detail">
      <Link to="/" className="back-link">
        ← Now showing
      </Link>

      <div className="detail-layout">
        <div
          className="detail-poster"
          style={{ background: movie.posterGradient }}
          aria-hidden
        >
          <h2>{movie.title}</h2>
        </div>

        <div className="detail-body">
          <h1>{movie.title}</h1>
          <div className="chips">
            <span className="chip">{movie.genre}</span>
            <span className="chip">{movie.rating}</span>
            <span className="chip">{movie.runtime} min</span>
          </div>
          <p className="synopsis">{movie.synopsis}</p>

          <h3 className="subhead">Showtimes</h3>
          <div className="showtime-list">
            {movie.showtimes.map((st) => (
              <button
                key={st.id}
                type="button"
                className={`showtime-btn${showtimeId === st.id ? " selected" : ""}`}
                onClick={() => {
                  setShowtimeId(st.id);
                  setSelected([]);
                }}
              >
                <strong>{st.time}</strong>
                <span>{st.screen}</span>
              </button>
            ))}
          </div>

          <h3 className="subhead">Select seats</h3>
          <div className="seat-panel">
            <div className="screen-label">Screen</div>
            <div className="screen-bar" />

            <div className="seat-map" role="group" aria-label="Seat map">
              {ROWS.map((row) => (
                <div key={row} className="seat-row">
                  <span className="row-label">{row}</span>
                  {Array.from({ length: SEATS_PER_ROW }, (_, i) => {
                    const num = i + 1;
                    const seatId = `${row}${num}`;
                    const isTaken = TAKEN_SEATS.has(seatId);
                    const isSelected = selected.includes(seatId);
                    return (
                      <button
                        key={seatId}
                        type="button"
                        className={`seat${isTaken ? " taken" : ""}${isSelected ? " selected" : ""}`}
                        disabled={isTaken}
                        aria-label={`Seat ${seatId}${isTaken ? ", taken" : isSelected ? ", selected" : ""}`}
                        aria-pressed={isSelected}
                        onClick={() => toggleSeat(seatId)}
                      />
                    );
                  })}
                  <span className="row-label">{row}</span>
                </div>
              ))}
            </div>

            <div className="legend">
              <div className="legend-item">
                <span className="legend-swatch" /> Available
              </div>
              <div className="legend-item">
                <span className="legend-swatch selected" /> Selected
              </div>
              <div className="legend-item">
                <span className="legend-swatch taken" /> Taken
              </div>
            </div>

            <div className="booking-bar">
              <div className="booking-summary">
                {selected.length === 0 ? (
                  <span>Select one or more seats</span>
                ) : (
                  <>
                    <span>
                      {selected.join(", ")} · {selected.length} seat
                      {selected.length > 1 ? "s" : ""} ·{" "}
                    </span>
                    <strong>${total.toFixed(2)}</strong>
                  </>
                )}
              </div>
              <button
                type="button"
                className="btn"
                disabled={!showtime || selected.length === 0}
                onClick={confirmBooking}
              >
                Confirm tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
