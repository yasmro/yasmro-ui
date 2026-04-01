# CLAUDE.md — schatten-ui

Design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand.
When adding or modifying components, follow shadcn/ui conventions (Radix UI + CVA + cn utility) as the baseline.

## Tech Stack

- **Base**: shadcn/ui
- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS + class-variance-authority (CVA)
- **Primitives**: Radix UI
- **Storybook**: Component documentation & visual testing
- **Build**: tsup
- **Lint / Format**: Biome
- **Test**: Vitest
- **VRT**: Playwright
- **Git Hooks**: lefthook
- **Release**: Changesets
- **Package Manager**: pnpm

## Project Structure

- `src/components/lv1/` — Primitive components (Button, etc.)
- `src/variants/` — CVA variant definitions
- `src/lib/` — Shared utilities

## Guidelines

- See [.claude/rules/storybook-guideline.md](.claude/rules/storybook-guideline.md) for Storybook conventions
