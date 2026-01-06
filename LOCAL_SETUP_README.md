# NexDyne Website - Local Setup Guide

## Project Overview
This is the complete NexDyne Technology website - a sophisticated corporate site built with React 19, Tailwind CSS 4, and modern web technologies.

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v22.13.0 or later) - [Download here](https://nodejs.org/)
- **pnpm** (v9 or later) - Install with: `npm install -g pnpm`

## Setup Instructions

### 1. Extract the Archive
```bash
# Extract the downloaded archive
tar -xzf nexdyne-website-complete.tar.gz
cd nexdyne-website
```

### 2. Install Dependencies
```bash
# Install all project dependencies
pnpm install
```

This will install all required packages including:
- React 19 and React DOM
- Vite (build tool)
- Tailwind CSS 4
- Wouter (routing)
- Lucide React (icons)
- Shadcn/ui components
- And all other dependencies

### 3. Start Development Server
```bash
# Start the development server
pnpm dev
```

The site will be available at: **http://localhost:3000**

### 4. Build for Production
```bash
# Create optimized production build
pnpm build

# Preview production build locally
pnpm preview
```

## Project Structure

```
nexdyne-website/
├── client/                 # Frontend application
│   ├── public/            # Static assets (images, PDFs, etc.)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.tsx        # Main app component with routes
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles and theme
│   ├── index.html         # HTML template
│   └── vite.config.ts     # Vite configuration
├── server/                # Backend Express + tRPC server
│   ├── _core/            # Core server utilities
│   ├── routers/          # API routers
│   └── db.ts             # Database connection
├── shared/               # Shared types and constants
├── drizzle/              # Database schema and migrations
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Database Setup (Optional)

If you want to use the full-stack features with the database:

### 1. Create MySQL Database

```sql
CREATE DATABASE nexdyne;
```

### 2. Configure DATABASE_URL

Update your `.env` file with your MySQL connection string:

```env
DATABASE_URL=mysql://root:yourpassword@localhost:3306/nexdyne
```

### 3. Run Migrations

```bash
pnpm db:push
```

---

## Key Features

### Pages Included
- **Home** - Hero section with video background
- **About** - Company information and team
- **Solutions** - Technology solutions and services
- **Capabilities** - Core competencies
- **Past Performance** - Case studies and success stories
- **Insights** - Blog and articles
- **Contact** - Contact form and information
- **Careers** - Job listings and application

### Technologies Used
- **React 19** - Latest React with modern features
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Vite 7** - Fast build tool and dev server
- **Express** - Backend server
- **tRPC** - Type-safe API layer
- **Drizzle ORM** - Database ORM for MySQL
- **TanStack Query** - Data fetching and caching
- **Wouter** - Lightweight routing
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Type check
pnpm check

# Format code
pnpm format

# Run tests
pnpm test

# Database migrations (requires DATABASE_URL)
pnpm db:push
```

## Environment Variables

For full-stack development with database features, create a `.env` file in the project root:

```env
# Required for database features
DATABASE_URL=mysql://username:password@localhost:3306/nexdyne

# JWT Secret for authentication (generate a random string)
JWT_SECRET=your-random-secret-key-here-minimum-32-characters

# App Configuration
VITE_APP_TITLE=NexDyne Technology
VITE_APP_LOGO=/nexdyne-logo.svg

# Optional: Leave empty to disable analytics
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
VITE_APP_ID=
```

**Note:** For frontend-only development, you can skip the `.env` file entirely.

## Customization

### Updating Colors and Theme
Edit `client/src/index.css` to modify the color palette and theme variables.

### Adding New Pages
1. Create a new component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`

### Modifying Content
- Update page content in the respective component files under `client/src/pages/`
- Replace images in `client/public/` (use content-hashed filenames for cache busting)

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
pnpm dev --port 3001
```

### Dependencies Installation Issues
If you encounter issues during installation:
```bash
# Clear pnpm cache and reinstall
pnpm store prune
rm -rf node_modules
pnpm install
```

### Build Errors
Ensure you're using the correct Node.js version (v22.13.0 or later):
```bash
node --version
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
The production build is optimized with:
- Code splitting
- Asset optimization
- Image optimization
- CSS minification
- Tree shaking

## Support
For questions or issues with the codebase, refer to the component documentation in the source files or the original project README.

## License
Proprietary - NexDyne Technology

---

**Ready to start developing!** Run `pnpm install` and then `pnpm dev` to get started.
