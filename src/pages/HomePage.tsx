import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "../data/movies";

const ALL_GENRES_LABEL = "All genres";

export default function HomePage() {
  const genres = useMemo(
    () => [ALL_GENRES_LABEL, ...new Set(MOVIES.map((movie) => movie.genre))],
    [],
  );
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES_LABEL);

  const visibleMovies = useMemo(() => {
    if (selectedGenre === ALL_GENRES_LABEL) {
      return MOVIES;
    }
    return MOVIES.filter((movie) => movie.genre === selectedGenre);
  }, [selectedGenre]);

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
        <div className="genre-filter">
          <label htmlFor="genre-filter" className="genre-filter-label">
            Genre
          </label>
          <select
            id="genre-filter"
            name="genre"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="movie-grid">
        {visibleMovies.map((movie) => (
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
