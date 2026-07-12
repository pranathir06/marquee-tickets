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
| src/ | TypeScript/React | SPA source code |
| src/pages/ | TypeScript/React | Route-level pages |
| src/lib/ | TypeScript | LocalStorage booking helpers |
| src/data/ | TypeScript | Demo movie/showtime data |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19, React Router 7 |
| Build | Vite 6, TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json rewrites) |

## System Architecture
| Component | Interaction |
|---|---|
| BrowserRouter | Routes /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| MoviePage | Reads MOVIES, manages seat selection, writes Booking to localStorage |
| ConfirmationPage | Reads Booking from localStorage by id |
| BookingsPage | Lists/clears localStorage bookings |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Booking | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| MOVIES | Array<Movie> demo data with showtimes |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Storage Key | localStorage "marquee-bookings" |

## Coding Conventions
| Area | Convention |
|---|---|
| Components | Function components with hooks (useState/useMemo/useParams) |
| Types | Exported TypeScript types (Booking, Movie, Showtime) |
| Styling | Global CSS classes in src/index.css |
| State | Seat selection in component state; localStorage as persistence |

## Test Patterns
| Item | Details |
|---|---|
| Test setup | None detected; pace.config.yaml require_tests: false |
| Test command | n/a |
