# Task Completion Checklist

When completing a development task, run the following commands in order:

## 1. Linting
```bash
npm run lint
```
Fix any ESLint errors or warnings before proceeding.

## 2. Build (if applicable)
```bash
npm run build
```
Ensure the project builds without errors. This catches TypeScript errors and build issues.

## 3. Development Server (for visual changes)
```bash
npm run dev
```
Verify UI changes render correctly at http://localhost:3000

## 4. Git Workflow
```bash
git status
git add .
git commit -m "descriptive message"
```

## Notes
- This project currently has no test scripts configured
- Always run `npm run build` before committing to catch type errors
- Follow the existing component patterns in `/components`
- Maintain Tailwind CSS utility-first approach
