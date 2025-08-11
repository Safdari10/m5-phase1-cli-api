# Next.js AI-Powered Auction Platform

This project is a full-stack [Next.js](https://nextjs.org) application for managing online auctions, featuring:

- TypeScript, Tailwind CSS, and Mongoose for MongoDB integration
- AI-powered search using Google Gemini (Generative AI)
- RESTful API endpoints for auction item management
- CLI tools for database seeding and admin tasks

## Features

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS for styling
- Mongoose for MongoDB models
- Google Gemini AI integration for smart search (`src/services/geminiService.ts`)
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

The platform uses Google Gemini AI to refine and improve search queries for auction items. See `src/services/geminiService.ts` for implementation details.

## Customization

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Google Generative AI Documentation](https://ai.google.dev/docs)

---

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
