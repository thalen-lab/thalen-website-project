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
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

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
- **Vite** - Fast build tool and dev server
- **Wouter** - Lightweight routing
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm type-check

# Lint code
pnpm lint
```

## Environment Variables

This project runs entirely on the frontend and doesn't require environment variables for local development. All configurations are handled through the build process.

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
