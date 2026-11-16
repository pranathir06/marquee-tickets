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
| src | TypeScript/TSX | React SPA entry, routing, shared styles |
| src/pages | TypeScript/TSX | Route-level pages (home, movie, confirmation, bookings) |
| src/lib | TypeScript | localStorage booking helpers |
| src/data | TypeScript | demo movie/showtime/seat data constants |

## Tech Stack
| Category | Technology |
|---|---|
| Frontend | React 19, React Router DOM 7 |
| Build | Vite 6, TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Storage | browser localStorage |
| Hosting | Vercel (vercel.json rewrites) |

## System Architecture
| Component | Interaction |
|---|---|
| Browser UI | Renders React SPA via src/main.tsx and App.tsx |
| Router | BrowserRouter + Routes map paths to page components |
| Data Layer | MOVIES/TAKEN_SEATS constants drive UI state |
| Booking Storage | saveBooking/loadBookings read/write localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Booking type | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| localStorage key | "marquee-bookings" stores Booking[] JSON |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Seat model | ROWS + SEATS_PER_ROW + TAKEN_SEATS constants |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Function components | default function HomePage/MoviePage/etc. |
| Hooks for state | useState/useMemo in MoviePage, useState in BookingsPage |
| TypeScript types | Booking, Movie, Showtime types defined in src/lib and src/data |
| Strict TS | tsconfig.json strict=true, noUnusedLocals/Parameters |

## Test Patterns
| Item | Details |
|---|---|
| Test runner | none detected (no test scripts in package.json) |
| Tests required | false (pace.config.yaml require_tests: false) |
