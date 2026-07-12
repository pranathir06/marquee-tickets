# Marquee — Movie Tickets

A small cinema booking demo for testing **PACE AI** (Jira ticket → code → PR).

Browse films, pick a showtime, select seats, and confirm. Bookings are stored in the browser (`localStorage`) — no backend.

## Stack

- React + TypeScript + Vite
- React Router
- Deployable on [Vercel](https://vercel.com)

## Local run

```bash
npm install
npm run dev
```

Open http://localhost:5173

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel → **Add New Project** → import the repo.
3. Framework preset: **Vite** (build `npm run build`, output `dist`).
4. Deploy. Share the URL with the team.

SPA routes are covered by `vercel.json` rewrites.

## What works today

- Now showing grid (6 sample films)
- Movie detail + showtimes
- Seat map with taken/available/selected
- Confirm booking → confirmation page
- My tickets list (this browser only)

## Suggested Jira tickets for PACE

Use these as small issues so the pipeline can open PRs:

1. **Search / filter** — Add a search box on the home page to filter movies by title or genre.
2. **Genre filter chips** — Filter the grid by Thriller, Drama, Sci-Fi, etc.
3. **Seat limit** — Cap selection at 6 seats and show a clear message when over the limit.
4. **Booking reference** — Show a short human-readable code (e.g. `MQ-A4B2`) on the confirmation ticket.
5. **Empty showtimes message** — If a movie has no showtimes, show a friendly empty state instead of a blank section.
6. **Accessibility** — Add a skip link and ensure the seat map announces selection changes to screen readers.
7. **Price display on home** — Show “From $12.50” under each movie card.
8. **Clear confirmation copy** — Add the cinema name and a “arrive 15 minutes early” note on the confirmation page.

## PACE notes

- `pace.config.yaml` sets `require_tests: false` (frontend-only).
- After connecting the GitHub repo + Jira project in PACE, raise tickets like the ones above and let the pipeline open PRs.
