---
language: typescript
package_manager: npm
test_runner: none
test_command: N/A
test_file_pattern: N/A
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript/TSX | React UI entrypoint and routing |
| src/pages/ | TypeScript/TSX | Page-level views (home, movie, confirmation, bookings) |
| src/data/ | TypeScript | Static movie, seat, pricing data |
| src/lib/ | TypeScript | Booking persistence helpers (localStorage) |
| src/index.css | CSS | Global styles and layout |
| / | JSON/TS/HTML | App config (Vite, TS, Vercel, HTML shell) |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | react-router-dom 7.1 |
| Build Tool | Vite 6 |
| Language | TypeScript 5.7 |
| Storage | Browser localStorage |
| Styling | CSS (index.css) |

## System Architecture
| Component | Interacts With | Notes |
|---|---|---|
| index.html | src/main.tsx | Loads Vite module entry |
| src/main.tsx | App.tsx + BrowserRouter | Mounts React app |
| App.tsx | Routes -> Pages | Client-side routing for 4 pages |
| MoviePage | data/movies.ts | Reads movie/showtime/seat data |
| MoviePage | lib/bookings.ts | Saves booking to localStorage |
| ConfirmationPage | lib/bookings.ts | Reads bookings from localStorage |
| BookingsPage | lib/bookings.ts | Lists/clears localStorage bookings |

## Key Interfaces & Contracts
| Interface | Location | Shape |
|---|---|---|
| Booking | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt} |
| loadBookings/saveBooking/clearBookings | src/lib/bookings.ts | localStorage CRUD for "marquee-bookings" |
| Movie/Showtime | src/data/movies.ts | Movie includes showtimes[] with id/time/screen |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Pricing | src/data/movies.ts | TICKET_PRICE = 12.5 |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Functional components + hooks | useState/useMemo/useParams in pages |
| TypeScript strict mode | tsconfig.json "strict": true |
| Client-only storage | localStorage in lib/bookings.ts |
| CSS class naming | kebab-case in index.css + JSX className |

## Test Patterns
| Item | Details |
|---|---|
| Test framework | None configured |
| Test command | N/A |
| Test files | N/A |