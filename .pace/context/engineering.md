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
| src/ | TypeScript + React | SPA source code |
| src/pages/ | TypeScript + React | Route-level pages |
| src/data/ | TypeScript | Demo movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| ./ | Config | Vite/TypeScript/Vercel config + HTML entry |

## Tech Stack
| Layer | Technology | Notes |
|---|---|---|
| UI | React 19 | Functional components |
| Routing | React Router DOM 7 | BrowserRouter, Routes |
| Build | Vite 6 | @vitejs/plugin-react |
| Language | TypeScript 5.7 | strict: true |
| Storage | Browser localStorage | key: marquee-bookings |
| Styling | CSS | src/index.css |
| Hosting | Vercel | vercel.json rewrites |

## System Architecture
| Component | взаимодействие |
|---|---|
| Browser SPA | Renders React app from index.html + Vite build |
| React Router | Client-side routes for home/movie/confirmation/bookings |
| localStorage | Stores booking array for this browser only |

## Key Interfaces & Contracts
| Interface | Details |
|---|---|
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Storage key | marquee-bookings (JSON array) |
| Booking shape | {id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt} |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Strict TypeScript | tsconfig.json: strict:true, noUnusedLocals:true |
| Functional components | All pages/App export function components |
| Client-only state | useState/useMemo + localStorage helpers |

## Test Patterns
| Pattern | Details |
|---|---|
| Tests | None configured (no test scripts or runner) |
