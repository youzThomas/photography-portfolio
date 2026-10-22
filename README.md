# Halcyon — Thomas You Photography

A photography portfolio featuring landscape, lifestyle, and sport work by Thomas You, based between Chapel Hill and Guangzhou.

## Development

Install dependencies with `npm ci`, then run `npm run dev`. Use `npm run build` for a production build and `npm start` to serve it.

The Works page uses Sanity image collections. Configure `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and the existing `NEXT_PUBLIC_SANTIY_API_VERSION` environment variable in `.env.local`. Manage collections at `/studio`.

## Design

Home, Works, and About share a responsive left navigation, locally served Instrument Serif, Geist, and JetBrains Mono fonts, and a minimal footer. Light mode is the default; the bottom-right theme button remembers the visitor's preference. Studio retains its own appearance.

Home photographs are ordered in `lib/images.ts`. Existing remote CMS documents are not deleted by the removal of the legacy blog and shop.

## License

The original code is distributed under the MIT license; its attribution is preserved in `LICENSE`. Local font license notices are in `public/fonts`. Photographs and portfolio content belong to Thomas You.
