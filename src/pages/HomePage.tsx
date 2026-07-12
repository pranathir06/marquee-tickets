import { Link } from "react-router-dom";
import { MOVIES } from "../data/movies";

export default function HomePage() {
  return (
    <div className="shell">
      <section className="hero">
        <p className="hero-kicker">Tonight at Marquee</p>
        <h1>Pick a film. Grab a seat.</h1>
        <p>
          A simple box-office for booking movie tickets — browse what&apos;s
          playing, choose a showtime, and claim your seats.
        </p>
      </section>

      <div className="section-head">
        <h2>Now showing</h2>
      </div>

      <div className="movie-grid">
        {MOVIES.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <div
              className="poster"
              style={{ background: movie.posterGradient }}
            >
              <h3 className="poster-title">{movie.title}</h3>
              <p className="poster-meta">
                {movie.genre} · {movie.runtime} min
              </p>
            </div>
            <div className="movie-card-meta">
              <strong>{movie.title}</strong>
              <span>
                {movie.rating} · from {movie.showtimes[0]?.time}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
