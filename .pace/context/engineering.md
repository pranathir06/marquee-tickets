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
| src | TypeScript/TSX | React app source |
| src/pages | TSX | Route-level pages |
| src/data | TypeScript | Demo movie/showtime data |
| src/lib | TypeScript | localStorage booking helpers |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19 |
| Routing | react-router-dom 7 |
| Build | Vite 6 |
| Language | TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json) |

## System Architecture
| Flow | Details |
|---|---|
| App bootstrap | index.html -> src/main.tsx -> App.tsx |
| Routing | BrowserRouter with routes /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | Static MOVIES/ROWS/TAKEN_SEATS/TICKET_PRICE from src/data/movies.ts |
| Persistence | Bookings stored in localStorage key marquee-bookings |

## Key Interfaces & Contracts
| Interface | Location | Fields |
|---|---|---|
| Movie | src/data/movies.ts | id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[] |
| Showtime | src/data/movies.ts | id,time,screen |
| Booking | src/lib/bookings.ts | id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Function components with hooks | useState/useMemo/useParams/useNavigate in pages |
| Named exports for helpers | loadBookings/saveBooking/clearBookings |
| Data static only | MOVIES in src/data/movies.ts |
| localStorage only persistence | src/lib/bookings.ts uses marquee-bookings |

## Test Patterns
| Item | Details |
|---|---|
| Test framework | None present |
| Test command | N/A |
| Test files | N/A |
