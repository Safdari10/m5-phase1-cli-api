# Auction Platform with AI Search

This is a [Next.js](https://nextjs.org) application for managing simple online auctions. It includes:

- TypeScript, Tailwind CSS, and Mongoose for MongoDB integration
- Search with optional Google Gemini (Generative AI) refinement
- Basic UI with a search bar and auction item cards
- RESTful API endpoints for auction item management
- CLI tools for database seeding and admin tasks

## Features

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS for styling
- Mongoose for MongoDB models
- Google Gemini AI integration for smart search (`src/services/geminiService.ts`)
- Custom search bar and auction item cards (`src/components/`)
- RESTful API endpoints (`src/api/auction/route.ts`)
- CLI tools for seeding and admin (`src/cli/cli.ts`)

## Getting Started

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app/` - Next.js app directory (pages, layout, styles)
- `src/components/` - React UI components (SearchBar, AuctionItemCard)
- `src/db/models/` - Mongoose models (AuctionItem, Seller, Buyer)
- `src/db/connection.ts` - MongoDB connection logic
- `src/services/auctionServices.ts` - Auction business logic
- `src/services/geminiService.ts` - Google Gemini AI integration
- `src/api/auction/route.ts` - API endpoint for searching auction items
- `src/cli/cli.ts` - CLI for seeding and admin
- `public/` - Static assets
- `tailwind.config.ts` / `postcss.config.mjs` - Tailwind CSS configuration

## Auction Item Model

The auction item model (`src/db/models/auctionItem.ts`) defines:

- `title`: string, required
- `description`: string, required
- `start_price`: number, required, must be >= 0
- `reserve_price`: number, required, must be > `start_price`
- `endDate`: Date, required
- `sellerId`: ObjectId, required
- `status`: string, required (active, inactive, suspended)
- `buyerId`: ObjectId, optional

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `cli` - Run CLI tools (see `src/cli/cli.ts`)

## AI-Powered Search

AuctionAI uses Google Gemini AI to refine and improve search queries for auction items. The custom search bar allows users to toggle AI refinement for smarter, typo-tolerant results. See `src/services/geminiService.ts` for implementation details.

## Customization

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file. UI components are in `src/components/`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Google Generative AI Documentation](https://ai.google.dev/docs)
