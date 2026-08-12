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
| src/ | TypeScript | SPA source code |
| src/pages/ | TypeScript | Route-level pages |
| src/data/ | TypeScript | Static movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styles |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19 |
| Routing | react-router-dom 7 |
| Build | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS |
| Runtime | Browser localStorage |
| Hosting | Vercel (rewrites to index.html) |

## System Architecture
| Step | Interaction |
|---|---|
| 1 | Browser loads index.html and /src/main.tsx bootstraps React |
| 2 | App.tsx defines routes for Home, Movie, Confirmation, Bookings |
| 3 | Pages read MOVIES and seat constants from src/data/movies.ts |
| 4 | Booking flow saves Booking records via src/lib/bookings.ts to localStorage |
| 5 | Confirmation/Bookings pages read localStorage for saved bookings |

## Key Interfaces & Contracts
| Interface | Contract |
|---|---|
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| localStorage key | "marquee-bookings" |
| Booking type | id, movieId, movieTitle, showtimeId, time, screen, seats[], total, createdAt |
| Data constants | MOVIES, ROWS, SEATS_PER_ROW, TICKET_PRICE, TAKEN_SEATS |

## Coding Conventions
| Rule | Source |
|---|---|
| Strict TypeScript, noUnusedLocals/Parameters | tsconfig.json |
| Functional components (export default function) | AGENTS.md |
| Keep data client-side only (localStorage) | AGENTS.md / README.md |
| Do not change localStorage key | AGENTS.md |
| Preserve routing patterns | AGENTS.md |

## Test Patterns
| Aspect | Details |
|---|---|
| Test runner | None |
| Test command | N/A |
| Test files | N/A |
