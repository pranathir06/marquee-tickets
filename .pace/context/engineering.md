---
language: typescript
package_manager: npm
test_runner: none
test_command: "n/a"
test_file_pattern: "n/a"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript/TSX | React UI, routing, styling, data, storage helpers |
| src/pages/ | TypeScript/TSX | Route-level pages |
| src/data/ | TypeScript | Sample movie, showtime, seat data |
| src/lib/ | TypeScript | localStorage booking helpers |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19, React Router 7 |
| Build | Vite 6, TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |

## System Architecture
| Part | Interactions |
|---|---|
| Browser UI | Renders routes via React Router in App.tsx |
| Booking Flow | MoviePage -> saveBooking() -> localStorage -> ConfirmationPage/BookingsPage |
| Data Source | MOVIES/ROWS/SEATS/TICKET_PRICE in src/data/movies.ts |

## Key Interfaces & Contracts
| Interface | Shape | File |
|---|---|---|
| Booking | id, movieId, movieTitle, showtimeId, time, screen, seats[], total, createdAt | src/lib/bookings.ts |
| Movie | id, title, genre, runtime, rating, synopsis, posterGradient, accent, showtimes[] | src/data/movies.ts |
| Showtime | id, time, screen | src/data/movies.ts |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings | src/App.tsx |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Functional components | All pages export function components |
| Local state via hooks | useState/useMemo/useParams/useNavigate in MoviePage |
| TypeScript strict | tsconfig.json strict true |
| No backend calls | README.md notes localStorage only |

## Test Patterns
| Item | Details |
|---|---|
| Test framework | None detected (no test scripts or files) |
| Test command | n/a |
| Test files | n/a |