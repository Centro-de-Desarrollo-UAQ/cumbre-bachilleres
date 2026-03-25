# Code Style and Conventions

## TypeScript
- **Strict mode**: Enabled
- **Target**: ES2017
- **No emit**: True (Next.js handles compilation)
- **Isolated modules**: Enabled

## File Extensions
- React components: `.tsx`
- TypeScript files: `.ts`
- Configuration: `.ts` for Next.js config, `.mjs` for ESLint

## Naming Conventions
- **Components**: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- **Files**: PascalCase for components
- **Directories**: lowercase (e.g., `app`, `components`)

## Code Structure
- Components stored in `/components` directory
- App Router structure in `/app` directory
- CSS imports at top of layout file
- Use of CSS custom properties for theming

## Component Patterns
- Functional components with typed props
- Use of `React.ReactNode` for children
- Named exports for components
- Default exports for page components

## Styling
- Tailwind CSS v4 with `@import "tailwindcss"`
- CSS custom properties defined in `:root`
- Inline theme declarations with `@theme inline`
- Dark mode support via `prefers-color-scheme`

## ESLint
- Uses `eslint-config-next` with Core Web Vitals
- TypeScript-specific rules enabled
- Custom ignores for build directories
