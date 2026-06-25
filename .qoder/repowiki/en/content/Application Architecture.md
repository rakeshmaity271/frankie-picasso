# Application Architecture

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [vite.config.js](file://vite.config.js)
- [src/main.jsx](file://src/main.jsx)
- [src/App.jsx](file://src/App.jsx)
- [src/App.module.css](file://src/App.module.css)
- [src/components/layout/Nav.jsx](file://src/components/layout/Nav.jsx)
- [src/components/layout/Nav.module.css](file://src/components/layout/Nav.module.css)
- [src/components/layout/Footer.jsx](file://src/components/layout/Footer.jsx)
- [src/components/layout/Footer.module.css](file://src/components/layout/Footer.module.css)
- [src/styles/_global.css](file://src/styles/_global.css)
- [src/styles/_variables.css](file://src/styles/_variables.css)
- [src/styles/_typography.css](file://src/styles/_typography.css)
- [src/styles/_utilities.css](file://src/styles/_utilities.css)
- [src/data/content.js](file://src/data/content.js)
- [src/hooks/useGsap.js](file://src/hooks/useGsap.js)
- [public/index.html](file://public/index.html)
</cite>

## Update Summary
**Changes Made**
- Enhanced mobile-first design documentation with comprehensive responsive architecture
- Updated navigation system analysis to reflect advanced mobile menu with GSAP animations
- Documented comprehensive styling system overhaul with CSS custom properties and utility classes
- Added detailed responsive design patterns and breakpoint implementations
- Expanded component architecture coverage with mobile-specific optimizations
- Updated performance considerations for mobile-first approach

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Mobile-First Design System](#mobile-first-design-system)
6. [Responsive Component Architecture](#responsive-component-architecture)
7. [Styling and Design System](#styling-and-design-system)
8. [Detailed Component Analysis](#detailed-component-analysis)
9. [Dependency Analysis](#dependency-analysis)
10. [Performance Considerations](#performance-considerations)
11. [Troubleshooting Guide](#troubleshooting-guide)
12. [Conclusion](#conclusion)

## Introduction
This document describes the architecture of the Frankie Picasso application, a modern React Single Page Application (SPA) designed with a comprehensive mobile-first approach. The application demonstrates contemporary web development patterns through its client-side React architecture, advanced responsive design system, and sophisticated styling methodology. The system emphasizes component-based architecture with mobile-first responsiveness, modular CSS styling with CSS custom properties, and a streamlined developer experience with hot reloading during development and efficient production builds.

## Project Structure
The repository follows a modern React application layout with mobile-first architecture:
- Frontend: Pure React application with component-based architecture under src/
- Build and Dev Tooling: Vite configuration and scripts defined in package.json
- Static Assets: Minimal HTML shell in public/index.html
- Styles: Comprehensive CSS architecture with mobile-first design system
- Data: Centralized content management through content.js
- Hooks: Custom React hooks for animations and state management
- Responsive Design: Mobile-first approach with progressive enhancement

```mermaid
graph TB
subgraph "Repository Root"
PJSON["package.json"]
VCFG["vite.config.js"]
PUBLIC["public/index.html"]
end
subgraph "React Application (src/)"
MAIN["src/main.jsx"]
APP["src/App.jsx"]
COMPONENTS["src/components/"]
STYLES["src/styles/"]
DATA["src/data/"]
HOOKS["src/hooks/"]
end
subgraph "Mobile-First Architecture"
MOBILE["Mobile-First Design"]
RESPONSIVE["Responsive Patterns"]
BREAKPOINTS["Breakpoint System"]
end
PJSON --> VCFG
VCFG --> PUBLIC
MAIN --> APP
APP --> COMPONENTS
APP --> STYLES
COMPONENTS --> DATA
COMPONENTS --> HOOKS
STYLES --> MOBILE
MOBILE --> RESPONSIVE
RESPONSIVE --> BREAKPOINTS
```

**Diagram sources**
- [package.json:1-23](file://package.json#L1-L23)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [public/index.html:1-21](file://public/index.html#L1-L21)

**Section sources**
- [package.json:1-23](file://package.json#L1-L23)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [public/index.html:1-21](file://public/index.html#L1-L21)

## Core Components
- React Application Entry Point
  - Initializes the React application and renders the root App component
  - Sets up global styles and strict mode for development
- Vite Development Server
  - Provides fast development iteration with hot module replacement and live reload
  - Serves the React application with React plugin support
- Mobile-First Component Architecture
  - Component-based UI with reusable, modular components optimized for mobile
  - CSS modules with responsive design patterns and progressive enhancement
- Comprehensive Styling System
  - Mobile-first design with CSS custom properties and utility classes
  - Progressive enhancement from mobile to desktop breakpoints
- Modern Frontend Tooling
  - Vite for development and production builds
  - GSAP for advanced animations and scroll effects
  - Responsive design with CSS Grid and Flexbox

Key implementation references:
- React entry point and rendering: [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- App component composition: [src/App.jsx:17-48](file://src/App.jsx#L17-L48)
- Mobile navigation with GSAP animations: [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)
- Responsive footer design: [src/components/layout/Footer.jsx:14-49](file://src/components/layout/Footer.jsx#L14-L49)
- Mobile-first styling system: [src/styles/_variables.css:26-34](file://src/styles/_variables.css#L26-L34)
- Vite configuration and dev server: [vite.config.js:4-10](file://vite.config.js#L4-L10)
- Development scripts: [package.json:6-10](file://package.json#L6-L10)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [src/components/layout/Nav.jsx:1-98](file://src/components/layout/Nav.jsx#L1-L98)
- [src/components/layout/Footer.jsx:1-59](file://src/components/layout/Footer.jsx#L1-L59)
- [src/styles/_variables.css:1-67](file://src/styles/_variables.css#L1-L67)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:1-23](file://package.json#L1-L23)

## Architecture Overview
The system employs a modern mobile-first client-side architecture:
- Presentation Layer: React components with CSS modules and responsive design
- State Management: React hooks for component state and custom hooks for animations
- Data Layer: Centralized content management through content.js
- Animation Layer: GSAP integration for scroll-triggered animations and mobile menu effects
- Styling Layer: Mobile-first design system with CSS custom properties and utility classes
- Responsive Layer: Progressive enhancement from mobile to desktop breakpoints

```mermaid
graph TB
Browser["Browser"]
ViteDev["Vite Dev Server<br/>Port 3000"]
ReactApp["React Application<br/>Mobile-First Architecture"]
Components["React Components<br/>Responsive Design"]
Content["Content Data<br/>Centralized Management"]
Animations["GSAP Animations<br/>Mobile Menu Effects"]
Styles["Mobile-First Styles<br/>CSS Custom Properties"]
Utilities["Utility Classes<br/>Progressive Enhancement"]
Browser --> ViteDev
ViteDev --> ReactApp
ReactApp --> Components
ReactApp --> Content
ReactApp --> Animations
Components --> Styles
Styles --> Utilities
```

**Diagram sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/App.jsx:17-48](file://src/App.jsx#L17-L48)
- [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)
- [src/styles/_global.css:1-76](file://src/styles/_global.css#L1-L76)

## Mobile-First Design System
The application implements a comprehensive mobile-first design approach with progressive enhancement:

### Core Principles
- Mobile-first approach prioritizing mobile experiences
- Progressive enhancement from mobile to desktop
- CSS custom properties for consistent theming
- Utility classes for rapid development
- Responsive breakpoints at 768px and above

### Design Tokens
- Color palette with deep plum, burgundy, gold, and ivory tones
- Typography system with Cormorant Garamond and Inter fonts
- Spacing scale optimized for mobile devices
- Transition durations for smooth animations
- Border radius values for consistent rounded corners

### Responsive Patterns
- Flexible container system with max-width constraints
- Fluid typography using clamp() functions
- Mobile navigation with animated hamburger menu
- Grid layouts for desktop optimization
- Utility-first CSS approach

```mermaid
flowchart TD
MobileFirst["Mobile-First Design"] --> BaseStyles["Base Mobile Styles"]
BaseStyles --> Breakpoints["768px Breakpoints"]
Breakpoints --> DesktopEnhancement["Desktop Enhancements"]
MobileFirst --> DesignTokens["Design Tokens"]
DesignTokens --> Colors["Color System"]
DesignTokens --> Typography["Typography Scale"]
DesignTokens --> Spacing["Spacing Scale"]
MobileFirst --> ResponsivePatterns["Responsive Patterns"]
ResponsivePatterns --> GridLayout["CSS Grid Layouts"]
ResponsivePatterns --> FlexLayout["Flexbox Layouts"]
ResponsivePatterns --> MediaQueries["Media Queries"]
```

**Diagram sources**
- [src/styles/_variables.css:1-67](file://src/styles/_variables.css#L1-L67)
- [src/styles/_typography.css:1-41](file://src/styles/_typography.css#L1-L41)
- [src/styles/_utilities.css:1-55](file://src/styles/_utilities.css#L1-L55)

**Section sources**
- [src/styles/_variables.css:1-67](file://src/styles/_variables.css#L1-L67)
- [src/styles/_typography.css:1-41](file://src/styles/_typography.css#L1-L41)
- [src/styles/_utilities.css:1-55](file://src/styles/_utilities.css#L1-L55)

## Responsive Component Architecture
The application's component architecture is specifically designed for mobile-first responsiveness:

### Navigation Component
The navigation system exemplifies mobile-first design with sophisticated interactions:
- Fixed positioning with backdrop blur effects
- Animated hamburger menu with three-state transitions
- Mobile overlay menu with staggered entrance animations
- Scroll-aware header styling with backdrop filter
- Accessible ARIA attributes and keyboard navigation
- Body overflow control during mobile menu activation

### Footer Component
The footer adapts seamlessly from mobile to desktop layouts:
- Mobile-centered single-column layout
- Desktop grid system with three-column structure
- Responsive typography and spacing adjustments
- Social media icons with hover effects
- Accessible navigation structure

### Component Responsiveness
- All components utilize CSS Grid and Flexbox for flexible layouts
- Breakpoint-specific styling with media queries
- Utility classes for consistent spacing and typography
- Fluid typography scales using clamp() functions
- Container-based responsive design

```mermaid
graph LR
Nav["Navigation Component"] --> MobileMenu["Mobile Menu Overlay"]
Nav --> ScrollEffect["Scroll Effect Styling"]
Nav --> Hamburger["Animated Hamburger"]
MobileMenu --> Staggered["Staggered Animations"]
ScrollEffect --> BackdropFilter["Backdrop Filter"]
Hamburger --> ThreeState["Three-State Animation"]
Footer["Footer Component"] --> MobileLayout["Mobile Layout"]
Footer --> DesktopLayout["Desktop Grid Layout"]
MobileLayout --> Centered["Centered Content"]
DesktopLayout --> ThreeColumn["Three Column Grid"]
```

**Diagram sources**
- [src/components/layout/Nav.jsx:47-95](file://src/components/layout/Nav.jsx#L47-L95)
- [src/components/layout/Nav.module.css:79-213](file://src/components/layout/Nav.module.css#L79-L213)
- [src/components/layout/Footer.jsx:14-56](file://src/components/layout/Footer.jsx#L14-L56)
- [src/components/layout/Footer.module.css:140-172](file://src/components/layout/Footer.module.css#L140-L172)

**Section sources**
- [src/components/layout/Nav.jsx:1-98](file://src/components/layout/Nav.jsx#L1-L98)
- [src/components/layout/Nav.module.css:1-214](file://src/components/layout/Nav.module.css#L1-L214)
- [src/components/layout/Footer.jsx:1-59](file://src/components/layout/Footer.jsx#L1-L59)
- [src/components/layout/Footer.module.css:1-274](file://src/components/layout/Footer.module.css#L1-L274)

## Styling and Design System
The application features a comprehensive styling system built on modern CSS methodologies:

### CSS Custom Properties System
- Root-level design tokens for consistent theming
- Mobile-first spacing scale with responsive adjustments
- Typography hierarchy with fluid scaling
- Color palette with semantic naming
- Transition timing functions for smooth animations
- Z-index layers for proper stacking context

### Utility-First Approach
- Container classes for consistent page width
- Text alignment and color utility classes
- Background color variations
- Responsive spacing utilities
- Screen reader only helper class

### Component-Specific Styling
- CSS Modules for scoped component styles
- Mobile-first base styles with desktop overrides
- Animation-specific styling with GSAP integration
- Accessibility-focused styling with focus states
- Responsive typography with clamp() functions

### Responsive Design Implementation
- 768px breakpoint for tablet and desktop
- Progressive enhancement from mobile to desktop
- Flexible grid layouts with CSS Grid
- Adaptive Flexbox patterns
- Fluid typography scaling

```mermaid
graph TB
DesignSystem["Design System"] --> Variables["CSS Variables"]
Variables --> Colors["Color System"]
Variables --> Typography["Typography Scale"]
Variables --> Spacing["Spacing Scale"]
Variables --> Transitions["Transition Timing"]
DesignSystem --> Utilities["Utility Classes"]
Utilities --> Containers["Container Classes"]
Utilities --> TextUtils["Text Utilities"]
Utilities --> ColorUtils["Color Utilities"]
Utilities --> BackgroundUtils["Background Utilities"]
DesignSystem --> Components["Component Styles"]
Components --> NavStyles["Navigation Styles"]
Components --> FooterStyles["Footer Styles"]
Components --> SectionStyles["Section Styles"]
```

**Diagram sources**
- [src/styles/_variables.css:1-67](file://src/styles/_variables.css#L1-L67)
- [src/styles/_utilities.css:1-55](file://src/styles/_utilities.css#L1-L55)
- [src/components/layout/Nav.module.css:1-214](file://src/components/layout/Nav.module.css#L1-L214)
- [src/components/layout/Footer.module.css:1-274](file://src/components/layout/Footer.module.css#L1-L274)

**Section sources**
- [src/styles/_global.css:1-76](file://src/styles/_global.css#L1-L76)
- [src/styles/_variables.css:1-67](file://src/styles/_variables.css#L1-L67)
- [src/styles/_typography.css:1-41](file://src/styles/_typography.css#L1-L41)
- [src/styles/_utilities.css:1-55](file://src/styles/_utilities.css#L1-L55)

## Detailed Component Analysis

### React Application Entry Point
The application bootstraps through a minimal entry point that initializes React and renders the root App component:
- Creates React root and mounts the App component
- Imports global styles for consistent theming
- Enables React Strict Mode for development best practices
- Sets up the application foundation for component tree rendering

```mermaid
sequenceDiagram
participant Browser as "Browser"
participant Main as "main.jsx"
participant ReactDOM as "React DOM"
participant App as "App.jsx"
Browser->>Main : Load application
Main->>ReactDOM : Create root element
Main->>App : Render App component
App->>App : Initialize component state
App->>Browser : Render component tree
```

**Diagram sources**
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/App.jsx:17-48](file://src/App.jsx#L17-L48)

Implementation highlights:
- Root rendering: [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- App component composition: [src/App.jsx:17-48](file://src/App.jsx#L17-L48)
- Global styling import: [src/main.jsx:4](file://src/main.jsx#L4)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)

### Mobile-First Navigation Component
The navigation component exemplifies mobile-first design with advanced interactions:
- Fixed positioning with backdrop blur and shadow effects
- Animated hamburger menu with three-state transitions
- Mobile overlay menu with staggered entrance animations using GSAP
- Scroll-aware header styling with background transitions
- Accessible ARIA attributes and keyboard navigation support
- Body overflow control during mobile menu activation
- Smooth scrolling to target sections with offset positioning

```mermaid
flowchart TD
Nav["Nav Component"] --> Scrolled["Scroll Detection"]
Nav --> MobileMenu["Mobile Menu Toggle"]
Nav --> SmoothScroll["Smooth Scrolling"]
Nav --> ActiveSection["Active Section Tracking"]
Scrolled --> HeaderStyle["Header Styling"]
MobileMenu --> MenuAnimation["Menu Entrance Animation"]
MobileMenu --> BodyOverflow["Body Overflow Control"]
SmoothScroll --> SectionTarget["Section Targeting"]
ActiveSection --> NavLinkHighlight["Navigation Highlighting"]
MenuAnimation --> GSAPAnimations["GSAP Staggered Animations"]
```

**Diagram sources**
- [src/components/layout/Nav.jsx:8-18](file://src/components/layout/Nav.jsx#L8-L18)
- [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)
- [src/components/layout/Nav.jsx:28-35](file://src/components/layout/Nav.jsx#L28-L35)
- [src/components/layout/Nav.jsx:37-44](file://src/components/layout/Nav.jsx#L37-L44)

Implementation highlights:
- Scroll effect handling: [src/components/layout/Nav.jsx:14-18](file://src/components/layout/Nav.jsx#L14-L18)
- Mobile menu animation: [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)
- GSAP staggered animations: [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)
- Body overflow control: [src/components/layout/Nav.jsx:28-35](file://src/components/layout/Nav.jsx#L28-L35)
- Smooth scrolling implementation: [src/components/layout/Nav.jsx:37-44](file://src/components/layout/Nav.jsx#L37-L44)

**Section sources**
- [src/components/layout/Nav.jsx:1-98](file://src/components/layout/Nav.jsx#L1-L98)
- [src/components/layout/Nav.module.css:1-214](file://src/components/layout/Nav.module.css#L1-L214)

### Responsive Footer Component
The footer component demonstrates adaptive design patterns:
- Mobile-centered layout with centered content and single-column structure
- Desktop grid system with three-column responsive layout
- Social media icons with hover effects and accessibility attributes
- Responsive typography with larger font sizes on desktop
- Container-based responsive design with max-width constraints
- Gold accent line for visual hierarchy

```mermaid
graph LR
Footer["Footer Component"] --> MobileLayout["Mobile Layout"]
Footer --> DesktopLayout["Desktop Grid Layout"]
MobileLayout --> Centered["Centered Content"]
MobileLayout --> SocialIcons["Social Icons"]
DesktopLayout --> ThreeColumns["Three Columns"]
DesktopLayout --> BrandSection["Brand Section"]
DesktopLayout --> NavigationSections["Navigation Sections"]
```

**Diagram sources**
- [src/components/layout/Footer.jsx:14-49](file://src/components/layout/Footer.jsx#L14-L49)
- [src/components/layout/Footer.jsx:24-49](file://src/components/layout/Footer.jsx#L24-L49)
- [src/components/layout/Footer.module.css:140-172](file://src/components/layout/Footer.module.css#L140-L172)

**Section sources**
- [src/components/layout/Footer.jsx:1-59](file://src/components/layout/Footer.jsx#L1-L59)
- [src/components/layout/Footer.module.css:1-274](file://src/components/layout/Footer.module.css#L1-L274)

### Content Management System
The application uses a centralized content management approach:
- Structured content organization by topic areas
- Consistent data structure for different content types
- Easy maintenance and updates through single source of truth
- Integration with components for dynamic content rendering

```mermaid
graph TB
Content["Content System"] --> Hero["Hero Content"]
Content --> Story["Life Story Content"]
Content --> Ventures["Entrepreneurship Content"]
Content --> Creativity["Creativity Content"]
Content --> Community["Community Impact Content"]
Content --> Media["Media Hub Content"]
Content --> Books["Books Publications Content"]
Content --> Awards["Awards Recognition Content"]
Content --> Legacy["Legacy Timeline Content"]
Content --> Vision["Future Vision Content"]
Content --> Contact["Contact Information Content"]
```

**Diagram sources**
- [src/data/content.js:1-183](file://src/data/content.js#L1-L183)

**Section sources**
- [src/data/content.js:1-183](file://src/data/content.js#L1-L183)

### Animation and Interaction System
The application leverages GSAP for advanced animations and scroll effects:
- Scroll-triggered animations for enhanced user experience
- Smooth transitions and entrance effects
- Performance-optimized animations with proper cleanup
- Integration with React component lifecycle
- Mobile menu animations with staggered effects

```mermaid
flowchart TD
GSAP["GSAP Integration"] --> ScrollTrigger["Scroll Trigger Events"]
GSAP --> Animations["Component Animations"]
GSAP --> Transitions["Page Transitions"]
ScrollTrigger --> ComponentEffects["Component-Specific Effects"]
Animations --> Performance["Performance Optimization"]
Transitions --> UserExperience["Enhanced UX"]
MobileMenu["Mobile Menu Animations"] --> Staggered["Staggered Entrance Effects"]
```

**Diagram sources**
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/components/layout/Nav.jsx:20-26](file://src/components/layout/Nav.jsx#L20-L26)

**Section sources**
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)

### Vite Development and Build System
Vite orchestrates the development and build lifecycle:
- Development Server
  - Port 3000 with automatic browser opening
  - React plugin enabled for JSX and fast refresh
- Production Build
  - Generates optimized static assets to dist/
- Preview
  - Serves built assets locally for verification

```mermaid
flowchart TD
Start(["Developer runs npm run dev"]) --> ViteStart["Vite starts dev server on port 3000"]
ViteStart --> ReactPlugin["React plugin active"]
ReactPlugin --> HotReload["Hot module replacement"]
HotReload --> Browser["Browser receives React app"]
Build(["npm run build"]) --> ViteBuild["Vite produces optimized assets"]
ViteBuild --> Dist["dist/ directory"]
Preview(["npm run preview"]) --> Dist
Dist --> PreviewServer["Preview server on port 3000"]
```

**Diagram sources**
- [vite.config.js:4-10](file://vite.config.js#L4-L10)
- [package.json:6-10](file://package.json#L6-L10)

**Section sources**
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:1-23](file://package.json#L1-L23)

### Frontend Static Asset Serving
The frontend relies on a minimal HTML shell located in the public directory:
- Single HTML file with embedded basic styles
- Served directly by Vite dev server
- Ready for React integration and component rendering

```mermaid
graph LR
ViteDev["Vite Dev Server"] --> Public["public/index.html"]
Browser["Browser"] --> Public
Public --> ReactApp["React Application"]
ReactApp --> Components["React Components"]
```

**Diagram sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [public/index.html:1-21](file://public/index.html#L1-L21)

**Section sources**
- [public/index.html:1-21](file://public/index.html#L1-L21)
- [vite.config.js:6-9](file://vite.config.js#L6-L9)

### ES6 Module System and Package Management
- ES Modules
  - The project declares module type in package.json enabling native ES modules
  - React application uses ES module imports and exports
- Dependencies
  - React and React DOM for frontend framework
  - Vite and @vitejs/plugin-react for development and build tooling
  - GSAP for advanced animations and scroll effects
- Scripts
  - Development, build, and preview commands orchestrated via npm scripts

```mermaid
graph TB
Pkg["package.json"]
Deps["Dependencies"]
DevDeps["Dev Dependencies"]
Scripts["Scripts"]
Pkg --> Deps
Pkg --> DevDeps
Pkg --> Scripts
Deps --> React["React Ecosystem"]
DevDeps --> Vite["Vite Tooling"]
Deps --> GSAP["Animation Library"]
```

**Diagram sources**
- [package.json:11-21](file://package.json#L11-L21)
- [package.json:6-10](file://package.json#L6-L10)

**Section sources**
- [package.json:1-23](file://package.json#L1-L23)

## Dependency Analysis
The application maintains clean separation between frontend dependencies:
- React Application depends on:
  - React and React DOM for component rendering
  - GSAP for advanced animations and scroll effects
  - CSS modules for scoped styling
- Vite configuration depends on:
  - React plugin for JSX support and fast refresh
  - Development server settings
- Component dependencies:
  - Shared hooks and utilities
  - Centralized content management
  - Modular CSS architecture with mobile-first design system

```mermaid
graph TB
ReactApp["React Application"]
Vite["Vite Dev Server"]
ReactPlugin["@vitejs/plugin-react"]
GSAP["GSAP Animation Library"]
CSSModules["CSS Modules"]
ContentData["Content Data System"]
Hooks["Custom Hooks"]
MobileDesign["Mobile-First Design System"]
ReactApp --> ReactPlugin
ReactApp --> GSAP
ReactApp --> CSSModules
ReactApp --> ContentData
ReactApp --> Hooks
ReactApp --> MobileDesign
Vite --> ReactPlugin
```

**Diagram sources**
- [src/main.jsx:1-3](file://src/main.jsx#L1-L3)
- [vite.config.js:2](file://vite.config.js#L2)
- [src/hooks/useGsap.js:1-4](file://src/hooks/useGsap.js#L1-L4)
- [src/data/content.js:1-183](file://src/data/content.js#L1-L183)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/data/content.js:1-183](file://src/data/content.js#L1-L183)

## Performance Considerations
- Development Performance
  - Vite's fast refresh and optimized bundling minimize rebuild times
  - Hot reloading reduces iteration cycles during development
  - React Fast Refresh provides instant component updates
- Production Performance
  - Vite's build process generates optimized assets suitable for deployment
  - CSS modules provide scoped styling without global conflicts
  - Mobile-first approach reduces unnecessary CSS for mobile devices
  - Utility classes minimize custom CSS bloat
  - Component lazy loading opportunities for future optimization
- Animation Performance
  - GSAP provides hardware-accelerated animations
  - Proper cleanup of event listeners and animations
  - Optimized scroll event handling with throttling
  - Backdrop filter effects optimized for modern browsers
- Mobile Performance
  - Mobile-first design reduces CSS parsing overhead on mobile
  - Responsive images and optimized asset loading
  - Touch-friendly interactive elements
  - Reduced JavaScript bundle size through modular architecture
- Scalability Notes
  - Current implementation focuses on simplicity and education
  - Component-based architecture supports easy scaling
  - CSS modules enable maintainable styling at scale
  - Mobile-first approach ensures future-proof responsive design

## Troubleshooting Guide
Common issues and resolutions:
- Port Conflicts
  - Vite defaults to port 3000; adjust server.port in vite.config.js if needed
  - Ensure no other processes are using the development port
- Component Rendering Issues
  - Verify React and React DOM versions match
  - Check component imports and export statements
  - Ensure CSS modules are properly imported
- Mobile Menu Problems
  - Verify GSAP and @gsap/react installations
  - Check for proper cleanup of scroll triggers
  - Ensure component unmounting removes event listeners
  - Validate mobile menu accessibility attributes
- Animation Problems
  - Verify GSAP and @gsap/react installations
  - Check for proper cleanup of scroll triggers
  - Ensure component unmounting removes event listeners
- Development Server Not Starting
  - Check Node.js and npm versions meet project requirements
  - Run installation steps and review script commands in package.json
- CSS Module Issues
  - Verify CSS files are properly imported with .module.css extension
  - Check for naming conventions and class name conflicts
  - Ensure CSS variables are properly defined in global styles
- Responsive Design Issues
  - Verify mobile-first CSS is properly structured
  - Check media query breakpoints and specificity
  - Validate utility class usage and ordering
  - Ensure container classes are applied correctly

**Section sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [package.json:6-10](file://package.json#L6-L10)

## Conclusion
The Frankie Picasso application exemplifies modern React SPA architecture with a comprehensive mobile-first design approach. The implementation demonstrates sophisticated responsive design patterns, a robust styling system with CSS custom properties, and advanced animation techniques using GSAP. The layered design, ES6 module usage, and CSS modules showcase best practices for educational and prototyping scenarios. The architecture balances mobile-first principles with desktop optimization, creating a scalable foundation that supports both immediate development needs and future feature expansion. This implementation serves as an excellent example of contemporary web development patterns emphasizing accessibility, performance, and maintainable code architecture.