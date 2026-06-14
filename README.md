# NetraSecure AI Landing

An AI-powered cybersecurity landing page built with **Next.js** (App Router) and **Express**.

## Folder Structure

```
netrasecure-ai-landing/
├── client/                     # Next.js frontend (App Router + Tailwind CSS)
│   ├── app/
│   │   ├── layout.js           # Root layout with Inter font, metadata
│   │   ├── page.js             # Home page composing all sections
│   │   └── globals.css         # Tailwind v4 theme, custom colors, animations
│   ├── components/
│   │   ├── Navbar.js           # Sticky nav with hamburger menu
│   │   ├── Hero.js             # Hero section with animated SVG shield
│   │   ├── Introduction.js     # "What is NetraSecure AI" overview
│   │   ├── Features.js         # 6 feature cards grid
│   │   ├── FeatureCard.js      # Reusable card with hover glow
│   │   ├── WhyChooseUs.js      # 5-point value proposition grid
│   │   ├── HowItWorks.js       # 4-step timeline flow
│   │   ├── TrustSecurity.js    # Trust points + badges
│   │   ├── PlatformShowcase.js # Dashboard/mobile/chat mockups
│   │   ├── ChatbotSection.js   # AI chat assistant UI
│   │   ├── UrlScannerSection.js# URL scanner with result card
│   │   ├── ContactForm.js      # Contact form with validation
│   │   ├── Testimonials.js     # User testimonial cards
│   │   ├── FinalCTA.js         # Closing call-to-action
│   │   └── Footer.js           # Footer with links and socials
│   ├── public/                 # Static assets
│   └── .env.local              # NEXT_PUBLIC_API_URL
├── server/                     # Express backend
│   ├── routes/
│   │   ├── chat.js             # POST /chat — keyword-based AI replies
│   │   ├── contact.js          # POST /contact — form validation
│   │   └── scanUrl.js          # POST /scan-url — randomized scan results
│   ├── controllers/            # Ready for controller logic
│   ├── app.js                  # Express server entry point
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js 18+
- npm

## Setup

### 1. Clone and install dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. Environment variables

The client reads `NEXT_PUBLIC_API_URL` from `client/.env.local`. It defaults to `http://localhost:5000`.

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running Locally

### Start the server (terminal 1)

```bash
cd server
npm start
```

Server runs on **http://localhost:5000**.

### Start the client (terminal 2)

```bash
cd client
npm run dev
```

Client runs on **http://localhost:3000**.

## API Endpoints

| Method | Path        | Description                            |
|--------|-------------|----------------------------------------|
| GET    | `/`         | Health check — returns `{ status: "ok" }` |
| POST   | `/chat`     | Send a message, get an AI security reply |
| POST   | `/scan-url` | Submit a URL for threat scanning       |
| POST   | `/contact`  | Submit a contact form inquiry          |

## Deployment

### Deploy Frontend (Vercel)

1. Push the repository to GitHub/GitLab.
2. Import the project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `client`.
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL` — URL of your deployed backend (e.g. `https://your-backend.railway.app`)
5. Deploy. Vercel auto-detects Next.js and builds accordingly.

### Deploy Backend (Render / Railway)

#### Render

1. Create a new **Web Service** and connect your repo.
2. Set **Root Directory** to `server`.
3. Set **Build Command** to `npm install`.
4. Set **Start Command** to `npm start`.
5. Add environment variable:
   - `FRONTEND_URL` — your deployed Vercel URL (e.g. `https://your-app.vercel.app`)
6. Deploy.

#### Railway

1. Create a new project and connect your repo.
2. Set **Root Directory** to `server`.
3. Railway auto-detects `package.json` and uses `npm start`.
4. Add environment variable:
   - `FRONTEND_URL` — your deployed Vercel URL
5. Deploy.

> **Note:** In production, your backend URL will be used as `NEXT_PUBLIC_API_URL` in the client, and your frontend URL will be used as `FRONTEND_URL` in the server CORS config.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, react-icons
- **Backend**: Express.js, CORS
- **Theme**: Premium Dark Cybersecurity (neon-blue `#00d4ff`, neon-orange `#ff6b35`, dark-bg `#0a0e17`)
