import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BookingsPage from "./pages/BookingsPage";
import { useEffect, useState } from "react";
import { BOOKINGS_EVENT } from "./lib/bookings";

export default function App() {
  const [hasNewBooking, setHasNewBooking] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleUpdate(event: Event) {
      const detail = (event as CustomEvent<{ action: string }>).detail;
      if (detail?.action === "saved") {
        setHasNewBooking(true);
      }
      if (detail?.action === "cleared") {
        setHasNewBooking(false);
      }
    }

    window.addEventListener(BOOKINGS_EVENT, handleUpdate);
    return () => window.removeEventListener(BOOKINGS_EVENT, handleUpdate);
  }, []);

  useEffect(() => {
    if (location.pathname === "/bookings") {
      setHasNewBooking(false);
    }
  }, [location.pathname]);

  function handleNavClick() {
    setHasNewBooking(false);
  }

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
            <NavLink to="/bookings" onClick={handleNavClick}>
              My tickets
              {hasNewBooking ? (
                <span className="nav-badge" aria-label="New tickets">
                  New
                </span>
              ) : null}
            </NavLink>
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
