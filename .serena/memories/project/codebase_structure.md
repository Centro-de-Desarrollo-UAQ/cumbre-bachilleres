# Codebase Structure

```
cumbre-bachilleres/
├── app/                    # Next.js App Router directory
│   ├── favicon.ico         # Site favicon
│   ├── globals.css         # Global styles (Tailwind + custom CSS)
│   ├── layout.tsx          # Root layout with fonts
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── Hero.tsx            # Hero section component
│   ├── HexagonBackground.tsx  # Background component
│   └── Navbar.tsx          # Navigation component
├── public/                 # Static assets
├── node_modules/           # Dependencies
├── .next/                  # Build output (generated)
├── .git/                   # Git repository
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Locked dependency versions
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── eslint.config.mjs       # ESLint configuration
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # Project documentation
```

## Key Directories
- **app/**: Contains all routes and pages (App Router)
- **components/**: Reusable React components
- **public/**: Static assets served at root

## Key Files
- **app/layout.tsx**: Root layout with font configuration
- **app/page.tsx**: Home page entry point
- **app/globals.css**: Global CSS with Tailwind and theme variables
