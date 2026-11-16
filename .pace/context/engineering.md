---
language: typescript
package_manager: npm
test_runner: none
test_command: "N/A"
test_file_pattern: "N/A"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript | React SPA source code |
| src/pages/ | TypeScript | Route-level pages (home, movie, confirmation, bookings) |
| src/data/ | TypeScript | Demo data for movies/showtimes/seats |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styles and layout |
| public (via index.html) | HTML | App shell and root mount |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Routing | react-router-dom 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5.7 |
| Styling | CSS (index.css) |
| Storage | Browser localStorage |
| Hosting target | Vercel (vercel.json) |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html → src/main.tsx mounts App into #root |
| Routing | BrowserRouter → Routes in App.tsx |
| Data | Static MOVIES + seat constants in src/data/movies.ts |
| Booking storage | src/lib/bookings.ts reads/writes localStorage key "marquee-bookings" |
| Pages | HomePage → MoviePage → ConfirmationPage; BookingsPage reads localStorage |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Route | / → HomePage |
| Route | /movie/:movieId → MoviePage |
| Route | /confirmation/:bookingId → ConfirmationPage |
| Route | /bookings → BookingsPage |
| Storage key | marquee-bookings (JSON array of Booking) |
| Type | Booking { id, movieId, movieTitle, showtimeId, time, screen, seats, total, createdAt } |
| Type | Movie { id, title, genre, runtime, rating, synopsis, posterGradient, accent, showtimes[] } |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Functional components | All pages use function components (HomePage, MoviePage, etc.) |
| Hooks for state | useState/useMemo/useParams/useNavigate |
| Named exports for helpers | loadBookings/saveBooking/clearBookings |
| Local-only persistence | localStorage, no network requests |

## Test Patterns
| Item | Details |
|---|---|
| Tests | None present |
| Runner | N/A (no test script) |
| Notes | pace.config.yaml sets require_tests: false |
