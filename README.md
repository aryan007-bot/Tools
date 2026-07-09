# SaaS User Portal

This is the customer-facing frontend for the multi-tool SaaS platform. Built on Next.js 15, it provides a high-performance, SEO-optimized, and visually stunning experience for end-users to manage their subscriptions and access platform tools.

## ⚙️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **State Management:** React Context API (`src/hooks/use-auth.tsx`)

## 📦 Architecture Overview
- `src/app/(auth)/`: Handles the user authentication flows (`/login`, `/signup`).
- `src/app/checkout/`: The checkout portal. Takes URL parameters and creates billing intents with the backend.
- `src/app/dashboard/`: Protected user dashboard displaying profile details and an interactive list of active subscriptions.
- `src/app/pricing/`: The dynamic pricing portal, fetching active tiers globally populated by the Admin.
- `src/lib/api-client.ts`: Centralized fetch wrapper that intercepts requests to inject the JWT `access_token` from `localStorage`.

## 🚀 Setup & Execution

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will run at `http://localhost:3000`*

## 🎨 Aesthetics Strategy
The UI is strictly designed to feel highly premium. Avoid plain generic colors; instead, the `tailwind.config.ts` extends the palette, and the components heavily utilize micro-animations via `framer-motion`. Tailwind gradients (`bg-clip-text text-transparent`) are favored for hero typography.

