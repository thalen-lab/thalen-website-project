# NexDyne Website - Complete Local Development Package

Welcome to the NexDyne Technology website codebase. This package contains everything you need to run the website on your local machine.

---

## System Requirements

Before you begin, ensure your system meets these requirements:

| Requirement | Version | Installation |
|-------------|---------|--------------|
| **Node.js** | v22.x or later | [nodejs.org](https://nodejs.org/) |
| **pnpm** | v10.x or later | `npm install -g pnpm` |
| **MySQL** | 8.0+ (optional) | [mysql.com](https://dev.mysql.com/downloads/) |

---

## Quick Start (5 Minutes)

### Step 1: Extract the Archive

```bash
unzip nexdyne-website-complete.zip
cd nexdyne-website
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This command will install all 80+ packages required by the project, including React 19, Tailwind CSS 4, Express, tRPC, and all UI components.

### Step 3: Create Environment File

Create a `.env` file in the project root with the following content:

```env
# App Configuration (Required)
VITE_APP_TITLE=NexDyne Technology
VITE_APP_LOGO=/thalen-logo.png

# JWT Secret (Required for authentication features)
JWT_SECRET=your-secure-random-string-at-least-32-characters-long

# Database (Required for full-stack features)
DATABASE_URL=mysql://username:password@localhost:3306/nexdyne

# Optional - Leave empty if not using
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
VITE_APP_ID=
VITE_OAUTH_PORTAL_URL=
VITE_FRONTEND_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=
BUILT_IN_FORGE_API_URL=
OAUTH_SERVER_URL=
OWNER_NAME=
OWNER_OPEN_ID=
```

### Step 4: Start Development Server

```bash
pnpm dev
```

Open your browser and navigate to: **http://localhost:3000**

---

## Frontend-Only Mode (No Database Required)

If you only want to run the frontend without database features:

1. Install dependencies: `pnpm install`
2. Create a minimal `.env` file with just:
   ```env
   VITE_APP_TITLE=NexDyne Technology
   VITE_APP_LOGO=/thalen-logo.png
   JWT_SECRET=any-random-string-for-local-dev
   ```
3. Run: `pnpm dev`

The website will work with limited functionality (no job listings, lead forms, or admin features).

---

## Full-Stack Mode (With Database)

For complete functionality including the admin panel, job listings, and contact forms:

### 1. Set Up MySQL Database

```sql
CREATE DATABASE nexdyne CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'nexdyne_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON nexdyne.* TO 'nexdyne_user'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Update DATABASE_URL in .env

```env
DATABASE_URL=mysql://nexdyne_user:your_password@localhost:3306/nexdyne
```

### 3. Run Database Migrations

```bash
pnpm db:push
```

### 4. Start the Server

```bash
pnpm dev
```

---

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run test suite |
| `pnpm db:push` | Generate and run database migrations |

---

## Project Structure

```
nexdyne-website/
├── client/                    # Frontend React application
│   ├── public/               # Static assets (images, PDFs, videos)
│   │   ├── badges/          # Certification badges
│   │   ├── certifications/  # Compliance logos
│   │   ├── customers/       # Client logos
│   │   ├── images/          # Page images
│   │   ├── optimized/       # Responsive image variants
│   │   └── videos/          # Video assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/         # Shadcn/ui components
│   │   ├── pages/          # Page components (routes)
│   │   │   ├── admin/      # Admin panel pages
│   │   │   ├── case-studies/
│   │   │   ├── industries/
│   │   │   ├── insights/
│   │   │   ├── news/
│   │   │   ├── sectors/
│   │   │   └── services/
│   │   ├── contexts/       # React contexts (Theme)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── data/           # Static data files
│   │   ├── styles/         # Additional CSS
│   │   ├── App.tsx         # Main app with routing
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles & theme
│   └── index.html          # HTML template
├── server/                   # Backend Express + tRPC server
│   ├── _core/              # Core server utilities
│   ├── routers/            # API route handlers
│   ├── db.ts               # Database connection
│   └── index.ts            # Server entry point
├── shared/                   # Shared types and constants
├── drizzle/                  # Database schema and migrations
├── patches/                  # Package patches
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── drizzle.config.ts        # Database configuration
└── vitest.config.ts         # Test configuration
```

---

## Technology Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Vite 7** - Fast build tool and dev server
- **Wouter** - Lightweight client-side routing
- **TanStack Query** - Data fetching and caching
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animations
- **Recharts** - Data visualization

### Backend
- **Express** - Web server framework
- **tRPC** - Type-safe API layer
- **Drizzle ORM** - Database ORM
- **MySQL** - Database
- **Zod** - Schema validation

---

## Customization Guide

### Changing Colors and Theme

Edit `client/src/index.css` to modify the color palette:

```css
:root {
  --primary: oklch(0.47 0.13 264.05);
  --primary-foreground: oklch(0.98 0 0);
  /* ... other variables */
}
```

### Adding New Pages

1. Create a new component in `client/src/pages/YourPage.tsx`
2. Add the route in `client/src/App.tsx`:
   ```tsx
   <Route path="/your-page" component={YourPage} />
   ```

### Updating Content

- Page content: Edit files in `client/src/pages/`
- Images: Replace files in `client/public/`
- Logos: Update `client/src/const.ts`

---

## Troubleshooting

### "Port 3000 is already in use"

```bash
# Find and kill the process using port 3000
lsof -i :3000
kill -9 <PID>

# Or use a different port
pnpm dev --port 3001
```

### "Cannot find module" errors

```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Database connection errors

1. Verify MySQL is running: `mysql -u root -p`
2. Check DATABASE_URL format in `.env`
3. Ensure the database exists: `SHOW DATABASES;`

### TypeScript errors

```bash
# Run type check to see all errors
pnpm check
```

### Build fails

```bash
# Check Node.js version (must be 22+)
node --version

# Clear build cache
rm -rf dist
pnpm build
```

---

## Production Build

To create an optimized production build:

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

The production build includes:
- Code splitting and lazy loading
- Asset optimization and minification
- Tree shaking for smaller bundles
- Image optimization

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Mobile Safari | iOS 15+ |
| Chrome Mobile | Latest |

---

## Support

For questions about this codebase:
1. Review component documentation in source files
2. Check the inline comments throughout the code
3. Refer to the official documentation for each technology

---

## License

Proprietary - NexDyne Technology

---

**You're ready to start!** Run `pnpm install` followed by `pnpm dev` to launch the development server.
