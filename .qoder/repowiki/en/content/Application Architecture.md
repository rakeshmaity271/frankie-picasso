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
- [src/components/acts/ActSection.jsx](file://src/components/acts/ActSection.jsx)
- [src/components/acts/ActSection.module.css](file://src/components/acts/ActSection.module.css)
- [src/components/acts/Heartbeat.jsx](file://src/components/acts/Heartbeat.jsx)
- [src/components/acts/RecognitionBadges.jsx](file://src/components/acts/RecognitionBadges.jsx)
- [src/components/acts/TimelineStrip.jsx](file://src/components/acts/TimelineStrip.jsx)
- [src/components/story/FrankieStory.jsx](file://src/components/story/FrankieStory.jsx)
- [src/components/entrepreneurship/Entrepreneurship.jsx](file://src/components/entrepreneurship/Entrepreneurship.jsx)
- [src/components/media/MediaHub.jsx](file://src/components/media/MediaHub.jsx)
- [src/components/creativity/Creativity.jsx](file://src/components/creativity/Creativity.jsx)
- [src/components/community/CommunityImpact.jsx](file://src/components/community/CommunityImpact.jsx)
- [src/components/vision/FutureVision.jsx](file://src/components/vision/FutureVision.jsx)
- [public/index.html](file://public/index.html)
</cite>

## Update Summary
**Changes Made**
- Updated architecture documentation to reflect major transformation from component-based section system to six-act narrative framework
- Documented new data-driven content organization through acts array structure
- Added comprehensive coverage of ActSection-based component architecture
- Integrated theming system documentation using CSS variables and act-specific styling
- Updated component hierarchy to reflect six-act narrative structure
- Added detailed analysis of centralized content management through content.js

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Six-Act Narrative Framework](#six-act-narrative-framework)
4. [Core Components](#core-components)
5. [Architecture Overview](#architecture-overview)
6. [Responsive Component Architecture](#responsive-component-architecture)
7. [Styling and Design System](#styling-and-design-system)
8. [Detailed Component Analysis](#detailed-component-analysis)
9. [Dependency Analysis](#dependency-analysis)
10. [Performance Considerations](#performance-considerations)
11. [Troubleshooting Guide](#troubleshooting-guide)
12. [Conclusion](#conclusion)

## Introduction
This document describes the architecture of the Frankie Picasso application, a modern React Single Page Application (SPA) designed with a six-act narrative framework. The application demonstrates contemporary web development patterns through its data-driven content organization, centralized content management system, and sophisticated theming architecture. The system emphasizes a narrative-driven approach where content flows through six distinct acts, each with unique theming, storytelling elements, and specialized component implementations. The architecture showcases modern web development patterns including component-based design, responsive architecture, and integrated theming systems using CSS custom properties.

**Updated**: The application has undergone a major architectural transformation from a traditional component-based section system to a six-act narrative framework that organizes content around Frankie Picasso's life story divided into six distinct acts of her journey.

## Project Structure
The repository follows a modern React application layout with a data-driven six-act narrative architecture:
- Frontend: React application with component-based architecture under src/
- Data Layer: Centralized content management through content.js with six-act structure
- Theming System: Integrated CSS variable-based theming with act-specific color schemes
- Component Architecture: ActSection-based components that wrap specialized content sections
- Build and Dev Tooling: Vite configuration and scripts defined in package.json
- Static Assets: Minimal HTML shell in public/index.html
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
ACTS["src/components/acts/"]
STORIES["src/components/story/"]
ENTREPRENEURSHIP["src/components/entrepreneurship/"]
MEDIA["src/components/media/"]
CREATIVITY["src/components/creativity/"]
COMMUNITY["src/components/community/"]
VISION["src/components/vision/"]
STYLES["src/styles/"]
DATA["src/data/"]
HOOKS["src/hooks/"]
end
subgraph "Six-Act Framework"
CONTENT["src/data/content.js<br/>Acts Array Structure"]
ACTSECTION["ActSection Component<br/>Wrapper Component"]
THEME["CSS Variable Theming<br/>Act-Specific Colors"]
end
PJSON --> VITE
VCFG --> PUBLIC
MAIN --> APP
APP --> COMPONENTS
COMPONENTS --> ACTS
COMPONENTS --> STORIES
COMPONENTS --> ENTREPRENEURSHIP
COMPONENTS --> MEDIA
COMPONENTS --> CREATIVITY
COMPONENTS --> COMMUNITY
COMPONENTS --> VISION
COMPONENTS --> DATA
COMPONENTS --> HOOKS
DATA --> CONTENT
ACTS --> ACTSECTION
ACTS --> THEME
```

**Diagram sources**
- [package.json:1-23](file://package.json#L1-L23)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [src/data/content.js:1-239](file://src/data/content.js#L1-L239)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- [public/index.html:1-21](file://public/index.html#L1-L21)

**Section sources**
- [package.json:1-23](file://package.json#L1-L23)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [public/index.html:1-21](file://public/index.html#L1-L21)

## Six-Act Narrative Framework
The application implements a revolutionary six-act narrative framework that organizes Frankie Picasso's life story into distinct thematic sections:

### Act Structure Organization
Each act represents a distinct phase of Frankie's journey with its own color scheme, themes, and content organization:
- **Act I (Becoming)**: Foundation and early influences
- **Act II (Building)**: Platform creation and leadership roles
- **Act III (Amplifying)**: Media and platform expansion
- **Act IV (Creating)**: Artistic and creative endeavors
- **Act V (Giving)**: Community impact and mentorship
- **Act VI (Still Becoming)**: Ongoing evolution and future vision

### Data-Driven Content Management
The content.js file contains a centralized acts array that defines the complete narrative structure:
- Each act includes metadata (id, number, title, tagline)
- Color theming through CSS variables
- Narrative content including intros, philosophies, and timelines
- Specialized content arrays for ventures, shows, initiatives, and achievements

### ActSection Component Architecture
The ActSection component serves as a wrapper that applies act-specific theming and provides consistent structural elements:
- Dynamic watermark with act number
- Theme class application based on act id
- Consistent header structure with act branding
- Content area for specialized act components

**Section sources**
- [src/data/content.js:11-172](file://src/data/content.js#L11-L172)
- [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)

## Core Components
- React Application Entry Point
  - Initializes the React application and renders the root App component
  - Sets up global styles and strict mode for development
- Six-Act Narrative Architecture
  - Centralized content management through acts array structure
  - ActSection wrapper component for consistent theming and layout
  - Data-driven component composition based on content structure
- Responsive Component Architecture
  - Component-based UI with reusable, modular components optimized for various screen sizes
  - CSS modules with responsive design patterns and progressive enhancement
- Integrated Theming System
  - CSS variable-based theming with act-specific color schemes
  - Dynamic theme application through theme classes
  - Consistent design tokens across all components
- Comprehensive Styling System
  - Responsive design with CSS custom properties and utility classes
  - Progressive enhancement from mobile to desktop breakpoints
- Modern Frontend Tooling
  - Vite for development and production builds
  - GSAP for advanced animations and scroll effects
  - Responsive design with CSS Grid and Flexbox

Key implementation references:
- React entry point and rendering: [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- App component composition with acts: [src/App.jsx:23-84](file://src/App.jsx#L23-L84)
- ActSection wrapper component: [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- Centralized content management: [src/data/content.js:11-172](file://src/data/content.js#L11-L172)
- Act-specific theming: [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- Vite configuration and dev server: [vite.config.js:4-10](file://vite.config.js#L4-L10)
- Development scripts: [package.json:6-10](file://package.json#L6-L10)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/data/content.js:1-239](file://src/data/content.js#L1-L239)
- [src/styles/_variables.css:1-72](file://src/styles/_variables.css#L1-L72)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:1-23](file://package.json#L1-L23)

## Architecture Overview
The system employs a modern data-driven narrative architecture:
- Presentation Layer: React components organized around six-act narrative structure
- State Management: React hooks for component state and custom hooks for animations
- Data Layer: Centralized content management through acts array structure
- Theming Layer: CSS variable-based theming with act-specific color schemes
- Animation Layer: GSAP integration for scroll-triggered animations and mobile menu effects
- Styling Layer: Responsive design system with CSS custom properties and utility classes
- Responsive Layer: Progressive enhancement from mobile to desktop breakpoints

```mermaid
graph TB
Browser["Browser"]
ViteDev["Vite Dev Server<br/>Port 3000"]
ReactApp["React Application<br/>Six-Act Narrative Architecture"]
ActSection["ActSection Wrapper<br/>Consistent Theming"]
Content["Content Data<br/>Acts Array Structure"]
Themes["CSS Variable Themes<br/>Act-Specific Colors"]
Components["Act-Specific Components<br/>Story, Entrepreneurship, Media, etc."]
Animations["GSAP Animations<br/>Scroll Effects"]
Styles["Responsive Styles<br/>CSS Custom Properties"]
Utilities["Utility Classes<br/>Progressive Enhancement"]
Browser --> ViteDev
ViteDev --> ReactApp
ReactApp --> ActSection
ReactApp --> Content
ReactApp --> Themes
ReactApp --> Components
ReactApp --> Animations
ActSection --> Styles
Styles --> Utilities
Content --> Themes
Components --> Themes
```

**Diagram sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/App.jsx:23-84](file://src/App.jsx#L23-L84)
- [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- [src/data/content.js:11-172](file://src/data/content.js#L11-L172)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- [src/styles/_global.css:1-76](file://src/styles/_global.css#L1-L76)

## Responsive Component Architecture
The application's component architecture is designed for responsive design across various screen sizes within the six-act framework:

### ActSection Component
The ActSection component serves as the primary wrapper for all narrative content:
- Dynamic watermark with act number (50% opacity serif font)
- Theme class application (act-theme--{actId})
- Consistent header structure with act branding
- Content area for specialized act components
- Responsive design with mobile-first approach

### Act-Specific Components
Each act has specialized components that leverage the shared ActSection wrapper:
- **FrankieStory**: Personal narrative and timeline presentation
- **Entrepreneurship**: Venture showcase with card-based layout
- **MediaHub**: Interactive filtering system for shows, interviews, and press
- **Creativity**: Artistic works display with GSAP animations
- **CommunityImpact**: Initiative showcase with parallax effects
- **FutureVision**: Mission statement and current projects presentation

### Theming Integration
The theming system integrates seamlessly with the component architecture:
- CSS variables define act-specific colors (--act-becoming, --act-building, etc.)
- Theme classes apply act-specific styling to components
- Dynamic color application through CSS custom properties
- Consistent design language across all act components

```mermaid
graph LR
ActSection["ActSection Component"] --> Watermark["Watermark<br/>Act Number"]
ActSection --> Header["Header<br/>Act Branding"]
ActSection --> ContentArea["Content Area<br/>Specialized Components"]
FrankieStory["FrankieStory"] --> ActSection
Entrepreneurship["Entrepreneurship"] --> ActSection
MediaHub["MediaHub"] --> ActSection
Creativity["Creativity"] --> ActSection
CommunityImpact["CommunityImpact"] --> ActSection
FutureVision["FutureVision"] --> ActSection
Themes["CSS Variables<br/>Act Colors"] --> ActSection
Themes --> ActSection
```

**Diagram sources**
- [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- [src/components/acts/ActSection.module.css:1-91](file://src/components/acts/ActSection.module.css#L1-L91)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- [src/components/story/FrankieStory.jsx:1-39](file://src/components/story/FrankieStory.jsx#L1-L39)
- [src/components/entrepreneurship/Entrepreneurship.jsx:1-48](file://src/components/entrepreneurship/Entrepreneurship.jsx#L1-L48)
- [src/components/media/MediaHub.jsx:1-73](file://src/components/media/MediaHub.jsx#L1-L73)
- [src/components/creativity/Creativity.jsx:1-56](file://src/components/creativity/Creativity.jsx#L1-L56)
- [src/components/community/CommunityImpact.jsx:1-84](file://src/components/community/CommunityImpact.jsx#L1-L84)
- [src/components/vision/FutureVision.jsx:1-30](file://src/components/vision/FutureVision.jsx#L1-L30)

**Section sources**
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/components/acts/ActSection.module.css:1-91](file://src/components/acts/ActSection.module.css#L1-L91)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- [src/components/story/FrankieStory.jsx:1-39](file://src/components/story/FrankieStory.jsx#L1-L39)
- [src/components/entrepreneurship/Entrepreneurship.jsx:1-48](file://src/components/entrepreneurship/Entrepreneurship.jsx#L1-L48)
- [src/components/media/MediaHub.jsx:1-73](file://src/components/media/MediaHub.jsx#L1-L73)
- [src/components/creativity/Creativity.jsx:1-56](file://src/components/creativity/Creativity.jsx#L1-L56)
- [src/components/community/CommunityImpact.jsx:1-84](file://src/components/community/CommunityImpact.jsx#L1-L84)
- [src/components/vision/FutureVision.jsx:1-30](file://src/components/vision/FutureVision.jsx#L1-L30)

## Styling and Design System
The application features a comprehensive styling system built on modern CSS methodologies with integrated theming:

### CSS Custom Properties System
- Root-level design tokens for consistent theming across all acts
- Act-specific color tokens (--act-becoming, --act-building, etc.)
- Responsive spacing scale with adaptive adjustments
- Typography hierarchy with fluid scaling
- Color palette with semantic naming
- Transition timing functions for smooth animations
- Z-index layers for proper stacking context

### Act-Specific Theming
- Dynamic theme application through theme classes
- CSS variable fallbacks for consistent styling
- Act-specific color schemes integrated throughout components
- Theme-aware typography and spacing
- Consistent design language across all act components

### Utility-First Approach
- Container classes for consistent page width
- Text alignment and color utility classes
- Background color variations
- Responsive spacing utilities
- Screen reader only helper class

### Component-Specific Styling
- CSS Modules for scoped component styles
- Responsive base styles with desktop overrides
- Animation-specific styling with GSAP integration
- Accessibility-focused styling with focus states
- Responsive typography with clamp() functions

### Responsive Design Implementation
- 1023px breakpoint for tablet and desktop adaptation
- Progressive enhancement from mobile to desktop
- Flexible grid layouts with CSS Grid
- Adaptive Flexbox patterns
- Fluid typography scaling

```mermaid
graph TB
DesignSystem["Design System"] --> Variables["CSS Variables"]
Variables --> ActColors["Act Color Tokens"]
Variables --> Typography["Typography Scale"]
Variables --> Spacing["Spacing Scale"]
Variables --> Transitions["Transition Timing"]
DesignSystem --> Utilities["Utility Classes"]
Utilities --> Containers["Container Classes"]
Utilities --> TextUtils["Text Utilities"]
Utilities --> ColorUtils["Color Utilities"]
Utilities --> BackgroundUtils["Background Utilities"]
DesignSystem --> Components["Component Styles"]
Components --> ActSectionStyles["ActSection Styles"]
Components --> ActSpecificStyles["Act-Specific Styles"]
Components --> ThemeIntegration["Theme Integration"]
```

**Diagram sources**
- [src/styles/_variables.css:1-72](file://src/styles/_variables.css#L1-L72)
- [src/styles/_utilities.css:1-55](file://src/styles/_utilities.css#L1-L55)
- [src/components/acts/ActSection.module.css:1-91](file://src/components/acts/ActSection.module.css#L1-L91)

**Section sources**
- [src/styles/_global.css:1-76](file://src/styles/_global.css#L1-L76)
- [src/styles/_variables.css:1-72](file://src/styles/_variables.css#L1-L72)
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
- [src/App.jsx:25-84](file://src/App.jsx#L25-L84)

Implementation highlights:
- Root rendering: [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- App component composition with acts: [src/App.jsx:23-84](file://src/App.jsx#L23-L84)
- Global styling import: [src/main.jsx:4](file://src/main.jsx#L4)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)

### Six-Act Narrative Architecture
The application implements a revolutionary six-act narrative framework that organizes content around Frankie Picasso's life story:

#### ActSection Wrapper Component
The ActSection component serves as the primary wrapper for all narrative content:
- Dynamic watermark with act number (50% opacity serif font)
- Theme class application (act-theme--{actId})
- Consistent header structure with act branding
- Content area for specialized act components
- Responsive design with mobile-first approach

#### Act-Specific Content Components
Each act has specialized components that leverage the shared ActSection wrapper:
- **FrankieStory**: Personal narrative and timeline presentation
- **Entrepreneurship**: Venture showcase with card-based layout
- **MediaHub**: Interactive filtering system for shows, interviews, and press
- **Creativity**: Artistic works display with GSAP animations
- **CommunityImpact**: Initiative showcase with parallax effects
- **FutureVision**: Mission statement and current projects presentation

#### Heartbeat Integration
The Heartbeat component provides thematic transitions between acts:
- Simple animated presentation with dot separators
- Fade-in animation for smooth transitions
- Consistent design language across all acts

```mermaid
flowchart TD
App["App.jsx"] --> ActsLoop["acts.forEach"]
App --> ActSection["ActSection Wrapper"]
ActSection --> Header["Act Header<br/>Number, Title, Tagline"]
ActSection --> Watermark["Watermark<br/>Act Number"]
ActSection --> Content["Act Content<br/>Specialized Component"]
FrankieStory["FrankieStory"] --> ActSection
Entrepreneurship["Entrepreneurship"] --> ActSection
MediaHub["MediaHub"] --> ActSection
Creativity["Creativity"] --> ActSection
CommunityImpact["CommunityImpact"] --> ActSection
FutureVision["FutureVision"] --> ActSection
Heartbeat["Heartbeat"] --> App
```

**Diagram sources**
- [src/App.jsx:45-76](file://src/App.jsx#L45-L76)
- [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- [src/components/acts/Heartbeat.jsx:5-21](file://src/components/acts/Heartbeat.jsx#L5-L21)

Implementation highlights:
- ActSection wrapper: [src/components/acts/ActSection.jsx:5-34](file://src/components/acts/ActSection.jsx#L5-L34)
- Act-specific content rendering: [src/App.jsx:45-76](file://src/App.jsx#L45-L76)
- Heartbeat integration: [src/App.jsx:48, 53, 58, 64, 69, 75](file://src/App.jsx#L48,L53,L58,L64,L69,L75)

**Section sources**
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/components/acts/Heartbeat.jsx:1-21](file://src/components/acts/Heartbeat.jsx#L1-L21)

### Act-Specific Component Analysis

#### FrankieStory Component
The FrankieStory component presents Act I's personal narrative:
- Scroll-reveal animations for narrative and timeline elements
- Philosophy statement with fade-up animation
- Timeline presentation with year/title/description structure
- Pull quote with fade-in animation
- Act-specific content access through content.acts[0]

#### Entrepreneurship Component
The Entrepreneurship component showcases Act II's ventures:
- Grid-based card layout for venture presentations
- SVG placeholders with gradient backgrounds
- Impact indicators with specialized styling
- Timeline presentation for career milestones
- Scroll-reveal animations for card elements

#### MediaHub Component
The MediaHub component presents Act III's media presence:
- Interactive filtering system for different content types
- Tab-based navigation for content categories
- Responsive grid layout for media items
- SVG placeholders with gradient backgrounds
- Dynamic content aggregation from shows, interviews, and press arrays

#### Creativity Component
The Creativity component showcases Act IV's artistic endeavors:
- GSAP-powered animations for card elements
- Parallax-style entrance animations
- Wide and standard card layouts
- Type-based icon system (book, radio, art, writing)
- Scroll-triggered animations with reduced motion support

#### CommunityImpact Component
The CommunityImpact component presents Act V's community work:
- Parallax image effects with useParallax hook
- GSAP-powered card animations
- Layout with image column and initiative cards
- Quote band with fade-in animation
- Scroll-triggered animations with toggle actions

#### FutureVision Component
The FutureVision component presents Act VI's ongoing work:
- Mission statement with reveal animation
- Project showcase with accent elements
- Simple card-based layout for current initiatives
- Scroll-reveal animations for content elements

**Section sources**
- [src/components/story/FrankieStory.jsx:1-39](file://src/components/story/FrankieStory.jsx#L1-L39)
- [src/components/entrepreneurship/Entrepreneurship.jsx:1-48](file://src/components/entrepreneurship/Entrepreneurship.jsx#L1-L48)
- [src/components/media/MediaHub.jsx:1-73](file://src/components/media/MediaHub.jsx#L1-L73)
- [src/components/creativity/Creativity.jsx:1-56](file://src/components/creativity/Creativity.jsx#L1-L56)
- [src/components/community/CommunityImpact.jsx:1-84](file://src/components/community/CommunityImpact.jsx#L1-L84)
- [src/components/vision/FutureVision.jsx:1-30](file://src/components/vision/FutureVision.jsx#L1-L30)

### Content Management System
The application uses a centralized content management approach through the acts array structure:
- Structured six-act content organization
- Consistent data structure for different content types per act
- Easy maintenance and updates through single source of truth
- Integration with components for dynamic content rendering
- Color theming integration through CSS variables
- Navigation and section identification through dedicated arrays

```mermaid
graph TB
Content["Content System"] --> ActsArray["acts Array<br/>Six Acts Structure"]
Content --> Hero["Hero Content"]
Content --> Closing["Closing Content"]
Content --> Contact["Contact Information"]
Content --> SectionIds["sectionIds Array"]
Content --> NavLinks["navLinks Array"]
Content --> ActColors["actColors Object"]
ActsArray --> Becoming["Act I: Becoming"]
ActsArray --> Building["Act II: Building"]
ActsArray --> Amplifying["Act III: Amplifying"]
ActsArray --> Creating["Act IV: Creating"]
ActsArray --> Giving["Act V: Giving"]
ActsArray --> StillBecoming["Act VI: Still Becoming"]
Becoming --> Philosophy["Philosophy Statement"]
Becoming --> Timeline["Early Timeline"]
Building --> Ventures["Venture Showcase"]
Amplifying --> Shows["Media Content"]
Creating --> Works["Creative Works"]
Giving --> Initiatives["Community Initiatives"]
StillBecoming --> Awards["Recognition Awards"]
```

**Diagram sources**
- [src/data/content.js:11-172](file://src/data/content.js#L11-L172)
- [src/data/content.js:208-239](file://src/data/content.js#L208-L239)

**Section sources**
- [src/data/content.js:1-239](file://src/data/content.js#L1-L239)

### Animation and Interaction System
The application leverages GSAP for advanced animations and scroll effects:
- Scroll-triggered animations for enhanced user experience
- Smooth transitions and entrance effects
- Performance-optimized animations with proper cleanup
- Integration with React component lifecycle
- Reduced motion support for accessibility
- Parallax effects with useParallax hook
- Staggered animations with GSAP stagger functionality

```mermaid
flowchart TD
GSAP["GSAP Integration"] --> ScrollTrigger["Scroll Trigger Events"]
GSAP --> Animations["Component Animations"]
GSAP --> Transitions["Page Transitions"]
GSAP --> Parallax["Parallax Effects"]
ScrollTrigger --> ComponentEffects["Component-Specific Effects"]
Animations --> Performance["Performance Optimization"]
Transitions --> UserExperience["Enhanced UX"]
Parallax --> ImageEffects["Image Movement Effects"]
ReducedMotion["Reduced Motion Support"] --> Accessibility["Accessibility Features"]
```

**Diagram sources**
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/components/creativity/Creativity.jsx:11-32](file://src/components/creativity/Creativity.jsx#L11-L32)
- [src/components/community/CommunityImpact.jsx:13-34](file://src/components/community/CommunityImpact.jsx#L13-L34)

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
The application maintains clean separation between frontend dependencies with integrated theming:
- React Application depends on:
  - React and React DOM for component rendering
  - GSAP for advanced animations and scroll effects
  - CSS modules for scoped styling with theming integration
- Vite configuration depends on:
  - React plugin for JSX support and fast refresh
  - Development server settings
- Component dependencies:
  - Shared hooks and utilities
  - Centralized content management through acts array
  - Modular CSS architecture with integrated theming system
- Theming dependencies:
  - CSS variables for act-specific color schemes
  - Theme class application through ActSection component
  - Dynamic color application across all components

```mermaid
graph TB
ReactApp["React Application"]
Vite["Vite Dev Server"]
ReactPlugin["@vitejs/plugin-react"]
GSAP["GSAP Animation Library"]
CSSModules["CSS Modules"]
ContentData["Content Data System"]
Hooks["Custom Hooks"]
ThemingSystem["Theming System"]
ResponsiveDesign["Responsive Design System"]
ReactApp --> ReactPlugin
ReactApp --> GSAP
ReactApp --> CSSModules
ReactApp --> ContentData
ReactApp --> Hooks
ReactApp --> ThemingSystem
ReactApp --> ResponsiveDesign
Vite --> ReactPlugin
ContentData --> ThemingSystem
CSSModules --> ThemingSystem
```

**Diagram sources**
- [src/main.jsx:1-3](file://src/main.jsx#L1-L3)
- [vite.config.js:2](file://vite.config.js#L2)
- [src/hooks/useGsap.js:1-4](file://src/hooks/useGsap.js#L1-L4)
- [src/data/content.js:11-172](file://src/data/content.js#L11-L172)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/data/content.js:1-239](file://src/data/content.js#L1-L239)
- [src/styles/_variables.css:1-72](file://src/styles/_variables.css#L1-L72)

## Performance Considerations
- Development Performance
  - Vite's fast refresh and optimized bundling minimize rebuild times
  - Hot reloading reduces iteration cycles during development
  - React Fast Refresh provides instant component updates
- Production Performance
  - Vite's build process generates optimized assets suitable for deployment
  - CSS modules provide scoped styling without global conflicts
  - Integrated theming system reduces runtime calculations
  - Responsive approach reduces unnecessary CSS for smaller devices
  - Utility classes minimize custom CSS bloat
  - Component lazy loading opportunities for future optimization
- Animation Performance
  - GSAP provides hardware-accelerated animations
  - Proper cleanup of event listeners and animations
  - Optimized scroll event handling with throttling
  - Backdrop filter effects optimized for modern browsers
  - Reduced motion support prevents unnecessary animations
- Theming Performance
  - CSS variables provide efficient color switching
  - Theme class application minimizes style recalculation
  - Act-specific colors cached through CSS variables
  - Efficient watermark rendering with transform optimization
- Responsive Performance
  - Responsive design reduces CSS parsing overhead on smaller devices
  - Responsive images and optimized asset loading
  - Touch-friendly interactive elements
  - Reduced JavaScript bundle size through modular architecture
- Scalability Notes
  - Six-act framework supports easy content expansion
  - Component-based architecture supports easy scaling
  - CSS modules enable maintainable styling at scale
  - Integrated theming system supports new act additions
  - Responsive approach ensures future-proof design

## Troubleshooting Guide
Common issues and resolutions:
- Port Conflicts
  - Vite defaults to port 3000; adjust server.port in vite.config.js if needed
  - Ensure no other processes are using the development port
- Component Rendering Issues
  - Verify React and React DOM versions match
  - Check component imports and export statements
  - Ensure CSS modules are properly imported
  - Validate ActSection component props and theming classes
- Act-Specific Component Problems
  - Verify content.acts array structure and indexing
  - Check act.id values match expected values
  - Ensure theme classes are properly applied
  - Validate act-specific content arrays exist
- Theming Issues
  - Verify CSS variables are properly defined
  - Check theme class application in ActSection
  - Ensure act-specific color tokens exist
  - Validate CSS variable fallbacks
- Animation Problems
  - Verify GSAP and @gsap/react installations
  - Check for proper cleanup of scroll triggers
  - Ensure component unmounting removes event listeners
  - Validate reduced motion support implementation
- Mobile Menu Problems
  - Verify GSAP and @gsap/react installations
  - Check for proper cleanup of scroll triggers
  - Ensure component unmounting removes event listeners
  - Validate mobile menu accessibility attributes
- Development Server Not Starting
  - Check Node.js and npm versions meet project requirements
  - Run installation steps and review script commands in package.json
- CSS Module Issues
  - Verify CSS files are properly imported with .module.css extension
  - Check for naming conventions and class name conflicts
  - Ensure CSS variables are properly defined in global styles
  - Validate theme class application syntax
- Responsive Design Issues
  - Verify responsive CSS is properly structured
  - Check media query breakpoints and specificity
  - Validate utility class usage and ordering
  - Ensure container classes are applied correctly
  - Check act-specific responsive overrides

**Section sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/styles/_variables.css:50-56](file://src/styles/_variables.css#L50-L56)
- [package.json:6-10](file://package.json#L6-L10)

## Conclusion
The Frankie Picasso application exemplifies modern React SPA architecture with a revolutionary six-act narrative framework. The implementation demonstrates sophisticated data-driven content organization, integrated theming system with CSS custom properties, and advanced animation techniques using GSAP. The six-act framework transforms traditional component-based architecture into a cohesive storytelling experience where each act represents a distinct phase of Frankie's journey with its own color scheme, themes, and specialized content presentation.

**Updated**: The application has successfully transitioned from a traditional component-based section system to a six-act narrative framework that organizes content around Frankie Picasso's life story. The new architecture provides a scalable foundation for content management while maintaining the responsive design principles and educational focus that make this implementation an excellent example of contemporary web development patterns. The integrated theming system using CSS variables ensures consistent visual identity across all acts, while the component-based approach supports maintainable and extensible code architecture. This implementation serves as a comprehensive demonstration of modern web development practices including data-driven architecture, responsive design, accessibility considerations, and performance optimization.