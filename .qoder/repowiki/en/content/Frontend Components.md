# Frontend Components

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [vite.config.js](file://vite.config.js)
- [src/main.jsx](file://src/main.jsx)
- [src/App.jsx](file://src/App.jsx)
- [src/App.module.css](file://src/App.module.css)
- [src/components/layout/Nav.jsx](file://src/components/layout/Nav.jsx)
- [src/components/layout/Footer.jsx](file://src/components/layout/Footer.jsx)
- [src/components/hero/HeroExperience.jsx](file://src/components/hero/HeroExperience.jsx)
- [src/components/hero/HeroExperience.module.css](file://src/components/hero/HeroExperience.module.css)
- [src/components/story/FrankieStory.jsx](file://src/components/story/FrankieStory.jsx)
- [src/components/story/FrankieStory.module.css](file://src/components/story/FrankieStory.module.css)
- [src/components/entrepreneurship/Entrepreneurship.jsx](file://src/components/entrepreneurship/Entrepreneurship.jsx)
- [src/components/creativity/Creativity.jsx](file://src/components/creativity/Creativity.jsx)
- [src/components/community/CommunityImpact.jsx](file://src/components/community/CommunityImpact.jsx)
- [src/components/media/MediaHub.jsx](file://src/components/media/MediaHub.jsx)
- [src/components/books/BooksPublications.jsx](file://src/components/books/BooksPublications.jsx)
- [src/components/awards/AwardsRecognition.jsx](file://src/components/awards/AwardsRecognition.jsx)
- [src/components/legacy/LegacyTimeline.jsx](file://src/components/legacy/LegacyTimeline.jsx)
- [src/components/legacy/LegacyTimeline.module.css](file://src/components/legacy/LegacyTimeline.module.css)
- [src/components/vision/FutureVision.jsx](file://src/components/vision/FutureVision.jsx)
- [src/components/contact/Contact.jsx](file://src/components/contact/Contact.jsx)
- [src/components/common/SectionHeading.jsx](file://src/components/common/SectionHeading.jsx)
- [src/components/common/SectionHeading.module.css](file://src/components/common/SectionHeading.module.css)
- [src/hooks/useGsap.js](file://src/hooks/useGsap.js)
- [src/data/content.js](file://src/data/content.js)
- [src/styles/_typography.css](file://src/styles/_typography.css)
- [src/styles/_variables.css](file://src/styles/_variables.css)
- [src/styles/_global.css](file://src/styles/_global.css)
</cite>

## Update Summary
**Changes Made**
- Updated Legacy Timeline component documentation to reflect simplified vertical layout
- Updated SectionHeading component documentation to reflect removal of decorative numbering system
- Updated typography documentation to reflect Cormorant Garamond font family adoption
- Enhanced CSS Modules styling documentation with new typography system
- Updated component architecture diagrams to reflect current implementation

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Component Architecture](#component-architecture)
5. [Layout Components](#layout-components)
6. [Content Components](#content-components)
7. [Shared Utilities](#shared-utilities)
8. [State Management and Hooks](#state-management-and-hooks)
9. [CSS Modules and Styling](#css-modules-and-styling)
10. [Typography System](#typography-system)
11. [Data Management](#data-management)
12. [Vite Integration](#vite-integration)
13. [Development Workflow](#development-workflow)
14. [Performance Considerations](#performance-considerations)
15. [Troubleshooting Guide](#troubleshooting-guide)
16. [Conclusion](#conclusion)

## Introduction
This document provides comprehensive documentation for the React frontend components and development setup. The project features a modular component-based architecture with 11 distinct content sections, sophisticated animation integration using GSAP, and a robust CSS Modules styling system. The application showcases a professional portfolio-style website with smooth scrolling navigation, interactive animations, responsive design patterns, and a refined typography system using Cormorant Garamond and Inter fonts.

## Project Structure
The project follows a structured React + Vite setup with a comprehensive component hierarchy organized into logical modules:

```mermaid
graph TB
Root["Project Root"] --> Src["src/"]
Root --> Public["public/"]
Root --> Config["vite.config.js"]
Root --> Package["package.json"]
Src --> Main["main.jsx"]
Src --> App["App.jsx"]
Src --> Styles["styles/"]
Src --> Components["components/"]
Src --> Data["data/"]
Src --> Hooks["hooks/"]
Components --> Layout["layout/"]
Components --> Hero["hero/"]
Components --> Story["story/"]
Components --> Entrepreneurship["entrepreneurship/"]
Components --> Creativity["creativity/"]
Components --> Community["community/"]
Components --> Media["media/"]
Components --> Books["books/"]
Components --> Awards["awards/"]
Components --> Legacy["legacy/"]
Components --> Vision["vision/"]
Components --> Contact["contact/"]
Components --> Common["common/"]
Data --> Content["content.js"]
Hooks --> GSAP["useGsap.js"]
Styles --> Variables["_variables.css"]
Styles --> Typography["_typography.css"]
Styles --> Global["_global.css"]
```

**Diagram sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [src/components/layout/Nav.jsx:1-102](file://src/components/layout/Nav.jsx#L1-L102)
- [src/components/hero/HeroExperience.jsx:1-114](file://src/components/hero/HeroExperience.jsx#L1-L114)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:1-23](file://package.json#L1-L23)

## Core Components
The application is structured around several key architectural components that work together to create a cohesive user experience:

### Entry Point: main.jsx
The application bootstraps through a minimal entry point that creates the React root and renders the main App component within strict mode for enhanced error detection.

### Primary Component: App.jsx
The main App component orchestrates the entire application layout, managing the loading sequence and coordinating all content sections. It implements sophisticated loading animations and accessibility features.

### Layout System
The layout system consists of reusable components that provide consistent navigation, branding, and footer functionality across all pages.

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:17-51](file://src/App.jsx#L17-L51)
- [src/App.module.css:1-23](file://src/App.module.css#L1-L23)

## Component Architecture
The application employs a hierarchical component architecture with clear separation of concerns:

```mermaid
graph TD
App["App.jsx"] --> Nav["Nav.jsx"]
App --> Footer["Footer.jsx"]
App --> Hero["HeroExperience.jsx"]
App --> Story["FrankieStory.jsx"]
App --> Entrepreneurship["Entrepreneurship.jsx"]
App --> Creativity["Creativity.jsx"]
App --> Community["CommunityImpact.jsx"]
App --> Media["MediaHub.jsx"]
App --> Books["BooksPublications.jsx"]
App --> Awards["AwardsRecognition.jsx"]
App --> Legacy["LegacyTimeline.jsx"]
App --> Vision["FutureVision.jsx"]
App --> Contact["Contact.jsx"]
Story --> SectionHeading["SectionHeading.jsx"]
Entrepreneurship --> SectionHeading
Community --> SectionHeading
Media --> SectionHeading
Books --> SectionHeading
Awards --> SectionHeading
Legacy --> SectionHeading
Vision --> SectionHeading
Contact --> SectionHeading
Nav --> GSAP["useGsap.js"]
Nav --> ActiveSection["useActiveSection.js"]
Hero --> GSAP
Hero --> Parallax["useParallax.js"]
Story --> GSAP
Story --> ScrollReveal["useScrollReveal.js"]
Entrepreneurship --> GSAP
Entrepreneurship --> ScrollReveal
```

**Diagram sources**
- [src/App.jsx:2-14](file://src/App.jsx#L2-L14)
- [src/components/layout/Nav.jsx:1-5](file://src/components/layout/Nav.jsx#L1-L5)
- [src/components/common/SectionHeading.jsx:1-12](file://src/components/common/SectionHeading.jsx#L1-L12)

**Section sources**
- [src/App.jsx:1-51](file://src/App.jsx#L1-L51)
- [src/components/layout/Nav.jsx:1-102](file://src/components/layout/Nav.jsx#L1-L102)

## Layout Components
The layout system provides consistent navigation and structural elements across all pages.

### Navigation Component (Nav.jsx)
Features responsive design with mobile hamburger menu, scroll-aware styling, and animated navigation items. Integrates with GSAP for smooth animations and uses custom hooks for active section detection.

### Footer Component (Footer.jsx)
Provides comprehensive footer navigation with brand information, copyright details, and accessible navigation controls.

**Section sources**
- [src/components/layout/Nav.jsx:1-102](file://src/components/layout/Nav.jsx#L1-L102)
- [src/components/layout/Footer.jsx:1-52](file://src/components/layout/Footer.jsx#L1-L52)

## Content Components
The application features 11 specialized content components, each designed to showcase specific aspects of Frankie Picasso's work and achievements.

### Hero Experience (HeroExperience.jsx)
Implements sophisticated animations including headline word-by-word reveal, parallax effects, and decorative motion elements. Uses GSAP for timeline-based animations and responsive design considerations. Features the new typography system with Cormorant Garamond for headings and Inter for body text.

### Frankie Story (FrankieStory.jsx)
Features interactive timeline with scroll-triggered animations, fade-in effects, and quote presentation. Combines GSAP ScrollTrigger with scroll reveal animations. Utilizes the refined typography system throughout.

### Entrepreneurship (Entrepreneurship.jsx)
Showcases venture cards with animated impact counters, SVG graphics, and responsive grid layouts. Implements scroll-triggered number animations.

### Creativity (Creativity.jsx)
Displays creative works in an organized grid format with SVG placeholders and category-based organization.

### Community Impact (CommunityImpact.jsx)
Highlights community initiatives with card-based layout, SVG graphics, and inspirational quotes.

### Media Hub (MediaHub.jsx)
Organizes media appearances, shows, and press coverage in categorized sections with timeline presentation.

### Books Publications (BooksPublications.jsx)
Features book showcase with prominent featured book display and additional publications listing.

### Awards Recognition (AwardsRecognition.jsx)
Presents award history with prominent featured award and comprehensive award list.

### Legacy Timeline (LegacyTimeline.jsx)
**Updated** Chronological presentation of career milestones with category-based filtering and responsive design. The component has been modernized to use a simplified vertical layout that removes horizontal scrolling complexity. Events are now arranged vertically with alternating left/right positioning for improved readability and mobile responsiveness.

### Future Vision (FutureVision.jsx)
Outlines current projects and future initiatives with mission statement and project descriptions.

### Contact (Contact.jsx)
Provides contact information, email, speaking topics, and social media links with form integration.

**Section sources**
- [src/components/hero/HeroExperience.jsx:1-114](file://src/components/hero/HeroExperience.jsx#L1-L114)
- [src/components/hero/HeroExperience.module.css:1-157](file://src/components/hero/HeroExperience.module.css#L1-L157)
- [src/components/story/FrankieStory.jsx:1-84](file://src/components/story/FrankieStory.jsx#L1-L84)
- [src/components/story/FrankieStory.module.css:1-119](file://src/components/story/FrankieStory.module.css#L1-L119)
- [src/components/entrepreneurship/Entrepreneurship.jsx:1-63](file://src/components/entrepreneurship/Entrepreneurship.jsx#L1-L63)

## Shared Utilities
The application leverages several shared utility components and hooks to maintain consistency and reduce code duplication.

### Section Heading (SectionHeading.jsx)
**Updated** Reusable component for consistent heading presentation across all content sections. The component has been refactored to remove the decorative numbering system, simplifying the design to focus purely on title and subtitle presentation. Supports light/dark theme variants for different background contexts.

### GSAP Hook (useGsap.js)
Centralized GSAP configuration with ScrollTrigger registration, default settings, and useGSAP wrapper for consistent animation behavior.

**Section sources**
- [src/components/common/SectionHeading.jsx:1-12](file://src/components/common/SectionHeading.jsx#L1-L12)
- [src/components/common/SectionHeading.module.css:1-32](file://src/components/common/SectionHeading.module.css#L1-L32)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)

## State Management and Hooks
The application implements a sophisticated state management approach using React hooks and custom hooks for enhanced functionality.

### Custom Hooks
- **useGsap**: Centralized GSAP configuration with ScrollTrigger support
- **useActiveSection**: Tracks active navigation section based on scroll position
- **useParallax**: Implements parallax scrolling effects
- **useScrollReveal**: Manages scroll-triggered reveal animations

### State Patterns
Components utilize useState for UI state management (mobile menu, scroll awareness), useEffect for side effects and cleanup, and useRef for DOM manipulation and animation references.

**Section sources**
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/components/layout/Nav.jsx:1-102](file://src/components/layout/Nav.jsx#L1-L102)

## CSS Modules and Styling
The application employs CSS Modules for scoped styling, ensuring component isolation and preventing style conflicts.

### Styling Architecture
Each component maintains its own CSS Module file with component-specific classes, enabling:
- Local class name scoping
- Predictable styling inheritance
- Easy maintenance and modification
- Theme variable integration

### Design System
The styling system utilizes:
- CSS custom properties for theming
- Responsive design patterns
- Accessibility-focused color schemes
- Consistent spacing and typography scales

**Section sources**
- [src/App.module.css:1-23](file://src/App.module.css#L1-L23)
- [src/components/layout/Nav.jsx:5](file://src/components/layout/Nav.jsx#L5)

## Typography System
**Updated** The application now features a refined typography system with two distinct font families:

### Font Families
- **Serif Font**: Cormorant Garamond - Used for headings (h1-h3), quotes, and emphasized text
- **Sans-serif Font**: Inter - Used for body text, navigation, and interface elements

### Typography Implementation
The typography system is implemented through CSS custom properties in the variables file, providing consistent font sizing and spacing across all components:

```css
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
```

### Component Integration
All content components now utilize the new typography system:
- Headings use Cormorant Garamond for elegant serif typography
- Body text uses Inter for excellent readability
- Quotes and emphasized text use the serif font for visual distinction
- Navigation and interface elements use the sans-serif font for clarity

**Section sources**
- [src/styles/_typography.css:1-41](file://src/styles/_typography.css#L1-L41)
- [src/styles/_variables.css:13-15](file://src/styles/_variables.css#L13-L15)
- [src/styles/_global.css:10-19](file://src/styles/_global.css#L10-L19)

## Data Management
The application uses a centralized content management system through a dedicated data module.

### Content Structure
The content.js file organizes all application data into logical categories:
- Hero content with headline and tagline
- Personal story with timeline and philosophy
- Entrepreneurship ventures with impact metrics
- Creative works across multiple mediums
- Community initiatives and impact
- Media appearances and press coverage
- Published works and awards
- Legacy timeline with categorized events
- Future vision and current projects
- Contact information and social links

### Navigation Data
Separate arrays manage:
- sectionIds for scroll positioning
- navLinks for navigation structure
- Consistent labeling and routing

**Section sources**
- [src/data/content.js:1-185](file://src/data/content.js#L1-L185)

## Vite Integration
The project leverages Vite for modern development workflow with optimized build processes.

### Development Server
- Automatic browser opening on startup
- Hot module replacement for instant updates
- Fast refresh for React components
- Port configuration (default 3000)

### Build Process
- Optimized production builds
- Asset optimization and minification
- Environment-specific configurations
- Preview server for build validation

**Section sources**
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:6-10](file://package.json#L6-L10)

## Development Workflow
The development environment supports rapid iteration and efficient debugging.

### Fast Refresh
- Instant component updates without full page reload
- Preserves component state during development
- Seamless integration with React DevTools

### Animation Development
- GSAP timeline testing and debugging
- Scroll-triggered animation development
- Responsive design testing across breakpoints

### Component Development
- Modular component creation and testing
- CSS Modules hot reloading
- Data-driven content updates
- Accessibility testing integration

**Section sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)

## Performance Considerations
The application implements several performance optimization strategies:

### Animation Optimization
- Reduced motion preference detection
- Scroll-triggered animations for performance
- Efficient GSAP usage patterns
- Cleanup of event listeners and observers

### Loading Strategies
- Sequential component loading
- Lazy loading for non-critical resources
- Optimized image handling
- CSS animation performance

### Bundle Optimization
- Tree shaking for unused imports
- Component splitting for large sections
- Minimal dependency footprint
- Efficient CSS Modules compilation

## Troubleshooting Guide
Common development and runtime issues with solutions:

### Component Rendering Issues
- **Blank screen on startup**: Verify DOM element existence and React version compatibility
- **Animation not working**: Check GSAP plugin registration and ScrollTrigger initialization
- **Navigation not responding**: Ensure section IDs match between content and navigation

### Styling Problems
- **Styles not applying**: Verify CSS Modules import syntax and class name matching
- **Animation conflicts**: Check for conflicting CSS properties and z-index stacking
- **Responsive issues**: Review media query breakpoints and viewport meta tags

### Typography Issues
- **Font not loading**: Verify Google Fonts import and network connectivity
- **Font fallback not working**: Check CSS font stack ordering
- **Typography inconsistencies**: Ensure CSS custom properties are properly defined

### Development Environment
- **Hot reload not working**: Restart Vite server and check plugin configurations
- **Build errors**: Verify Node.js version compatibility and dependency installation
- **Port conflicts**: Change server port in Vite configuration or kill conflicting processes

**Section sources**
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/hooks/useGsap.js:6](file://src/hooks/useGsap.js#L6)
- [vite.config.js:7-8](file://vite.config.js#L7-L8)

## Conclusion
The React frontend components demonstrate a mature, scalable architecture with comprehensive animation integration, modular component design, and robust development tooling. The recent updates to the Legacy Timeline component, SectionHeading component, and typography system showcase the evolution toward a more streamlined and visually cohesive design. The 11-content component structure provides excellent organization for showcasing diverse aspects of Frankie Picasso's work while maintaining consistency and performance. The combination of CSS Modules, custom hooks, GSAP animations, and the refined typography system creates a polished user experience with smooth interactions and professional presentation quality.