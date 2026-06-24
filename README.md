# Grid.Pe Design System

> The official design language, component library, and token documentation for Grid.Pe — doorstep cash delivery and FX exchange for Tier 2/3 India.

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38BDF8?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

---

## What is this?

This repository is the single source of truth for Grid.Pe's visual language. It contains:

- **Color tokens** — Every color used across the Grid.Pe app, named and documented
- **Typography** — Satoshi type scale with live preview
- **Component gallery** — Interactive playground for every UI component
- **Design tokens** — Spacing, border radius, shadows, and height scale

The documentation site is built with Vite + React + Tailwind and can be run locally or deployed to any static host.

---

## Live Site

> Coming soon at `design.grid.pe`

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repo
git clone https://github.com/keyushhh/gridpe-design.git
cd gridpe-design

# Install dependencies
npm install

# Start the dev server
npm run dev
# Opens at http://localhost:3333
```

### Build for production

```bash
npm run build
# Output in dist/
```

### Preview production build

```bash
npm run preview
```

---

## What's Inside

### 🎨 Colors
All 30 color tokens organized into groups:
- **Brand** — Primary purple and its variants
- **Backgrounds** — Dark surfaces, light surfaces, deep blacks
- **Borders** — Light, dark, and mid border colors
- **Text** — Muted, dim, subtle, placeholder variants
- **Status** — Success, error, warning, and semantic status colors

Click any swatch to copy the **HEX**, **RGB**, or **Tailwind class**. Use the search bar to find tokens by name or hex value.

### ✍️ Typography
Satoshi font scale from Display (40px/900) down to Caption (12px/400). Type your own text in the live preview input to see it rendered across all sizes instantly. Click any row to copy the Tailwind class.

### ⚡ Components
Live interactive playground for every extracted component:

| Component | Description | Variants |
|---|---|---|
| `GpButton` | Primary CTA button | primary, secondary, destructive |
| `GpStatusDot` | Semantic status indicator | active, pending, review, cancelled, warning, delivered |
| `GpSectionLabel` | Uppercase section header | md (14px), sm (12px) |

The GpButton playground lets you toggle variant, size, loading state, full-width, and label text — and shows the exact code snippet that matches your configuration.

### 🔧 Tokens
Copyable token reference for:
- **Spacing** — 4px to 48px scale
- **Border radius** — full (9999px) down to lg (8px)
- **Shadows** — Status glow shadows and primary glow
- **Height scale** — Input, button, header, tab bar heights

---

## Component Library

The following components are extracted into the Grid.Pe Customer App at `src/components/ui/`:
src/components/ui/

├── GpButton.tsx        # Primary/secondary/destructive button

├── GpSectionLabel.tsx  # Uppercase section header label

└── GpStatusDot.tsx     # Semantic status indicator dot

### GpButton

```tsx
import { GpButton } from '@/components/ui/GpButton';

<GpButton
  variant="primary"     // "primary" | "secondary" | "destructive"
  size="md"             // "md" (48px) | "lg" (52px)
  fullWidth={true}      // boolean
  isLoading={false}     // boolean — shows spinner, disables button
  disabled={false}      // boolean
  onClick={handler}
  className=""          // extra classes (margins, shadows)
>
  Order Cash
</GpButton>
```

### GpStatusDot

```tsx
import { GpStatusDot } from '@/components/ui/GpStatusDot';

<GpStatusDot status="active" />
// status: "active" | "pending" | "review" | "cancelled" | "warning" | "delivered"
```

### GpSectionLabel

```tsx
import { GpSectionLabel } from '@/components/ui/GpSectionLabel';

<GpSectionLabel size="md">PAYMENT METHODS</GpSectionLabel>
// size: "md" (14px, default) | "sm" (12px)
```

---

## Color Token Reference

All tokens are defined in `tailwind.config.ts` and available as Tailwind classes:

| Token | Hex | Usage |
|---|---|---|
| `brand-primary` | `#5260FE` | Primary actions, links, active states |
| `brand-bg-dark` | `#0A0A12` | Main app background (dark mode) |
| `brand-bg-light` | `#F7F8FA` | Main app background (light mode) |
| `brand-surface-dark` | `#1A1A1A` | Card/sheet backgrounds (dark) |
| `brand-card-dark` | `#191919` | Elevated card backgrounds (dark) |
| `brand-border-light` | `#E9EAEB` | Borders (light mode) |
| `brand-border-mid` | `#313131` | Borders (dark mode) |
| `brand-success` | `#1CB956` | Success states, active status |
| `brand-error-light` | `#EF4444` | Error states, destructive actions |
| `brand-warning` | `#FACC15` | Pending states, warnings |

Full token list available on the Colors page of the documentation site.

---

## Design Principles

### 1. Dark-first
Grid.Pe is a dark-mode-first product. All components are designed for dark surfaces and adapted for light mode.

### 2. Touch-optimized
Minimum touch target: **48px height**. All interactive elements use `active:scale-95` for tactile feedback.

### 3. Satoshi everywhere
A single typeface — Satoshi — across all weights (300–900). No exceptions.

### 4. Semantic tokens
Colors are never hardcoded. Everything references a named token from `tailwind.config.ts`.

### 5. `useIsDarkMode()` pattern
Theme checks always use `useIsDarkMode()` hook with `resolvedTheme !== 'light'`. Never `dark:` Tailwind prefix, never `useTheme()` directly.

---

## Roadmap

- [ ] `@gridpe/ui` npm package — shared component library installable in any Grid.Pe project
- [ ] `GpCard` component extraction
- [ ] `GpInput` component extraction  
- [ ] `GpBottomBar` component extraction
- [ ] `GpPageHeader` component extraction
- [ ] Figma token sync via Style Dictionary
- [ ] Automated visual regression tests
- [ ] `design.grid.pe` custom domain

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Vite | 5.x | Build tool and dev server |
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Satoshi | — | Primary typeface via Fontshare |

---

## Contributing

This design system is maintained by the Grid.Pe product team. To propose a new component or token:

1. Open an issue describing the component and its usage in the app
2. Reference at least 3 existing usages in `src/pages/` or `src/components/`
3. Follow the extraction pattern: audit → API design → extraction → usage replacement → TSC verify

---

## License

Private — Grid.Pe © 2026. All rights reserved.
