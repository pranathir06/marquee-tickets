# Marquee

A simple movie ticket booking website. Browse what’s playing, pick a showtime, choose seats, and confirm your tickets.

**Live:** [marquee-tickets.vercel.app](https://marquee-tickets.vercel.app)

## Features

- Now showing — six sample films with posters and details
- Showtimes — pick a time and screen for each movie
- Seat map — select available seats (some are already taken)
- Booking confirmation — ticket summary after you confirm
- My tickets — view bookings saved in this browser

Bookings are stored in the browser only (`localStorage`). There is no backend or payment flow.

## Tech stack

- React
- TypeScript
- Vite
- React Router

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview
```

## Deploy

This project is set up for [Vercel](https://vercel.com):

1. Import the GitHub repository in Vercel
2. Use the Vite preset (`npm run build`, output directory `dist`)
3. Deploy

`vercel.json` rewrites all routes to `index.html` so client-side navigation works in production.

## Project structure

```
src/
  data/movies.ts     # Sample films, showtimes, seat layout
  lib/bookings.ts    # localStorage helpers for tickets
  pages/             # Home, movie detail, confirmation, my tickets
  App.tsx            # Layout and routes
```

## License

Personal / demo project.
