import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BookingsPage from "./pages/BookingsPage";

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="shell">
          <NavLink to="/" className="brand">
            <span className="brand-mark">Marquee</span>
            <span className="brand-tag">Cinema tickets</span>
          </NavLink>
          <nav className="nav">
            <NavLink to="/" end>
              Now showing
            </NavLink>
            <NavLink to="/bookings">My tickets</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <span>Marquee · demo cinema for PACE testing</span>
          <span>$12.50 per seat · no payment required</span>
        </div>
      </footer>
    </>
  );
}
