## Styling Architecture

This project uses a **CSS Modules** approach combined with a centralized **design token system** built on CSS custom properties. There is no CSS framework (Tailwind, Bootstrap) or component library — all styles are hand-crafted using vanilla CSS organized into a modular architecture.

### Core Approach

- **CSS Modules**: Every component has a paired `.module.css` file that provides locally-scoped class names, preventing style collisions and enabling component-level encapsulation.
- **Design Tokens via CSS Custom Properties**: All colors, typography scales, spacing units, transitions, border radii, layout constraints, and z-index values are defined as CSS variables in `src/styles/_variables.css`, establishing a single source of truth for the design system.
- **Global Reset & Base Styles**: A `_global.css` entry point imports Normalize.css, then layers variables, typography rules, and utility classes before applying base element styles.

### Key Files

| File | Purpose |
|------|---------|
| `src/styles/_variables.css` | Centralized design tokens: 8 color tokens, 2 font families, 7 fluid/clamped font sizes, 8 spacing values (8px grid), 2 transition curves, 3 border radii, 2 container widths, nav height, 3 z-index layers |
| `src/styles/_typography.css` | Google Fonts import (Cormorant Garamond + Inter), heading/body/blockquote/link base styles referencing token variables |
| `src/styles/_utilities.css` | Reusable utility classes: `.container`, `.container--narrow`, `.sr-only`, `.section-padding`, text/background color helpers |
| `src/styles/_global.css` | Entry point that orchestrates all style imports, sets box-sizing, body defaults, selection styling, focus-visible outlines, responsive image handling, and reduced-motion media query |
| `src/main.jsx` | Imports `_global.css` once at application root |

### Design Token System

**Color Palette** (warm, sophisticated theme):
- Primary: Deep Plum (`#3D1C3E`), Burgundy (`#722F37`)
- Accent: Gold (`#C5A55A`), Muted Copper (`#B87333`)
- Neutrals: Warm Ivory (`#FAF6F0`), Charcoal (`#2C2C2C`)
- Variants: Plum Light, Gold Dim, Overlay Dark

**Typography**:
- Serif display: Cormorant Garamond (headings, quotes, decorative elements)
- Sans-serif body: Inter (paragraphs, UI text, navigation)
- Fluid type scale using `clamp()` for responsive sizing without breakpoints (e.g., `--fs-display: clamp(3rem, 6vw, 6rem)`)

**Spacing**: 8px-based scale from `0.5rem` to `6rem`, plus a viewport-responsive section spacing token.

**Transitions**: Two standardized curves — `cubic-bezier` for smooth animations, simple `ease` for fast interactions.

### Component-Level Conventions

Every component follows a consistent pattern:

1. **Paired files**: `ComponentName.jsx` + `ComponentName.module.css`
2. **CamelCase class names**: e.g., `.hero`, `.portraitWrap`, `.scrollIndicator`
3. **Modifier patterns**: BEM-like suffixes (`.container--narrow`) and state classes (`.scrolled`, `.active`, `.open`, `.light`)
4. **Responsive strategy**: Mobile-first with breakpoint overrides at `1023px` (tablet) and `479px` (small mobile). Grid layouts collapse to single-column; navigation switches to hamburger menu.
5. **Token usage**: Components exclusively reference CSS variables — no hardcoded colors, sizes, or spacing values appear in module files.
6. **Decorative elements**: Gold accent lines, outlined numbers with `-webkit-text-stroke`, gradient backgrounds, and subtle opacity layers create visual hierarchy.

### Accessibility Features

- `normalize.css` baseline reset
- `:focus-visible` with gold outline and offset
- `.sr-only` utility for screen-reader-only content
- Skip-link implementation in `App.module.css`
- `prefers-reduced-motion` media query disables all animations/transitions
- Minimum touch target sizes (44px) on interactive elements
- Semantic HTML with proper heading hierarchy

### Responsive Strategy

The system uses a hybrid approach:
- **Fluid typography** via `clamp()` eliminates most text-related breakpoints
- **Layout breakpoints** at 1023px (desktop-to-tablet) and 479px (tablet-to-mobile)
- **Container constraints**: max-width 1200px standard, 800px narrow variant
- **Grid/flexbox** for layout with column reordering via `order` property on mobile

### Rules for Developers

1. **Never hardcode design values** — always use CSS custom properties from `_variables.css`
2. **Use CSS Modules** for all component styles — never write global CSS except in the `styles/` directory
3. **Follow the 8px spacing grid** — use predefined `--space-*` tokens
4. **Maintain the two-font system** — Cormorant Garamond for headings/decorative, Inter for body/UI
5. **Add responsive overrides** at the bottom of module files using the established breakpoints
6. **Use utility classes** from `_utilities.css` for common patterns (containers, text alignment, color applications)
7. **Respect z-index layers** — only use `--z-nav`, `--z-overlay`, `--z-content` unless a new layer is genuinely needed
8. **Include reduced-motion support** when adding new animations