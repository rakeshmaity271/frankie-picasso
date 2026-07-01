# Frontend Components

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
- [src/components/hero/HeroExperience.jsx](file://src/components/hero/HeroExperience.jsx)
- [src/components/hero/HeroExperience.module.css](file://src/components/hero/HeroExperience.module.css)
- [src/components/acts/ActSection.jsx](file://src/components/acts/ActSection.jsx)
- [src/components/acts/ActSection.module.css](file://src/components/acts/ActSection.module.css)
- [src/components/acts/Heartbeat.jsx](file://src/components/acts/Heartbeat.jsx)
- [src/components/acts/Heartbeat.module.css](file://src/components/acts/Heartbeat.module.css)
- [src/components/acts/RecognitionBadges.jsx](file://src/components/acts/RecognitionBadges.jsx)
- [src/components/acts/RecognitionBadges.module.css](file://src/components/acts/RecognitionBadges.module.css)
- [src/components/acts/TimelineStrip.jsx](file://src/components/acts/TimelineStrip.jsx)
- [src/components/acts/TimelineStrip.module.css](file://src/components/acts/TimelineStrip.module.css)
- [src/components/closing/ClosingSection.jsx](file://src/components/closing/ClosingSection.jsx)
- [src/components/closing/ClosingSection.module.css](file://src/components/closing/ClosingSection.module.css)
- [src/components/awards/AwardsRecognition.jsx](file://src/components/awards/AwardsRecognition.jsx)
- [src/components/awards/AwardsRecognition.module.css](file://src/components/awards/AwardsRecognition.module.css)
- [src/components/books/BooksPublications.jsx](file://src/components/books/BooksPublications.jsx)
- [src/components/books/BooksPublications.module.css](file://src/components/books/BooksPublications.module.css)
- [src/components/community/CommunityImpact.jsx](file://src/components/community/CommunityImpact.jsx)
- [src/components/community/CommunityImpact.module.css](file://src/components/community/CommunityImpact.module.css)
- [src/components/contact/Contact.jsx](file://src/components/contact/Contact.jsx)
- [src/components/contact/Contact.module.css](file://src/components/contact/Contact.module.css)
- [src/components/creativity/Creativity.jsx](file://src/components/creativity/Creativity.jsx)
- [src/components/creativity/Creativity.module.css](file://src/components/creativity/Creativity.module.css)
- [src/components/entrepreneurship/Entrepreneurship.jsx](file://src/components/entrepreneurship/Entrepreneurship.jsx)
- [src/components/entrepreneurship/Entrepreneurship.module.css](file://src/components/entrepreneurship/Entrepreneurship.module.css)
- [src/components/media/MediaHub.jsx](file://src/components/media/MediaHub.jsx)
- [src/components/media/MediaHub.module.css](file://src/components/media/MediaHub.module.css)
- [src/components/story/FrankieStory.jsx](file://src/components/story/FrankieStory.jsx)
- [src/components/story/FrankieStory.module.css](file://src/components/story/FrankieStory.module.css)
- [src/components/vision/FutureVision.jsx](file://src/components/vision/FutureVision.jsx)
- [src/components/vision/FutureVision.module.css](file://src/components/vision/FutureVision.module.css)
- [src/components/common/SectionHeading.jsx](file://src/components/common/SectionHeading.jsx)
- [src/components/common/SectionHeading.module.css](file://src/components/common/SectionHeading.module.css)
- [src/components/common/SectionIndicator.jsx](file://src/components/common/SectionIndicator.jsx)
- [src/components/common/SectionIndicator.module.css](file://src/components/common/SectionIndicator.module.css)
- [src/components/common/SiteLoader.jsx](file://src/components/common/SiteLoader.jsx)
- [src/components/common/SiteLoader.module.css](file://src/components/common/SiteLoader.module.css)
- [src/components/who/WhoIsFrankie.jsx](file://src/components/who/WhoIsFrankie.jsx)
- [src/components/who/WhoIsFrankie.module.css](file://src/components/who/WhoIsFrankie.module.css)
- [src/components/impact/Impact.jsx](file://src/components/impact/Impact.jsx)
- [src/components/impact/Impact.module.css](file://src/components/impact/Impact.module.css)
- [src/components/art/Art.jsx](file://src/components/art/Art.jsx)
- [src/components/art/Art.module.css](file://src/components/art/Art.module.css)
- [src/components/media/MediaSection.jsx](file://src/components/media/MediaSection.jsx)
- [src/components/media/MediaSection.module.css](file://src/components/media/MediaSection.module.css)
- [src/components/timeline/TimelineSection.jsx](file://src/components/timeline/TimelineSection.jsx)
- [src/components/timeline/TimelineSection.module.css](file://src/components/timeline/TimelineSection.module.css)
- [src/hooks/useActiveSection.js](file://src/hooks/useActiveSection.js)
- [src/hooks/useGsap.js](file://src/hooks/useGsap.js)
- [src/hooks/useParallax.js](file://src/hooks/useParallax.js)
- [src/hooks/useScrollReveal.js](file://src/hooks/useScrollReveal.js)
- [src/data/content.js](file://src/data/content.js)
- [src/styles/_variables.css](file://src/styles/_variables.css)
- [src/styles/_global.css](file://src/styles/_global.css)
- [src/styles/_typography.css](file://src/styles/_typography.css)
- [src/styles/_utilities.css](file://src/styles/_utilities.css)
- [.gitignore](file://.gitignore)
</cite>

## Update Summary
**Changes Made**
- Added five new interactive components with sophisticated GSAP animations and scroll-triggered effects
- Enhanced existing components with new CSS modules and improved responsive design patterns
- Updated content structure with expanded data for six complete acts of life journey
- Integrated new WhoIsFrankie, Impact, Art, MediaSection, and TimelineSection components
- Implemented advanced scroll-triggered animations with ScrollTrigger integration
- Enhanced responsive design patterns across all interactive components

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Component Architecture](#component-architecture)
5. [Layout Components](#layout-components)
6. [Act-Based Narrative Framework](#act-based-narrative-framework)
7. [Interactive Content Components](#interactive-content-components)
8. [Shared Utilities](#shared-utilities)
9. [State Management and Hooks](#state-management-and-hooks)
10. [CSS Modules and Styling](#css-modules-and-styling)
11. [Typography System](#typography-system)
12. [Data Management](#data-management)
13. [Vite Integration](#vite-integration)
14. [Development Workflow](#development-workflow)
15. [Performance Considerations](#performance-considerations)
16. [Troubleshooting Guide](#troubleshooting-guide)
17. [Conclusion](#conclusion)

## Introduction
This document provides comprehensive documentation for the React frontend components and development setup. The project features a revolutionary six-act narrative framework that transforms traditional multi-section layouts into an immersive storytelling experience. The application showcases a sophisticated portfolio-style website with act-based organization, animated transitions, interactive storytelling elements, and a refined typography system using Cormorant Garamond and Inter fonts. The new architecture emphasizes narrative flow, thematic consistency, and enhanced user engagement through innovative component composition and seamless transitions between life chapters.

**Updated** The application now includes five new interactive components that leverage GSAP animations and scroll-triggered effects to create a more engaging user experience. These components integrate seamlessly with the existing six-act framework while introducing advanced animation capabilities.

## Project Structure
The project follows a structured React + Vite setup with a revolutionary six-act narrative architecture:

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
Components --> Acts["acts/"]
Components --> Layout["layout/"]
Components --> Hero["hero/"]
Components --> Awards["awards/"]
Components --> Books["books/"]
Components --> Community["community/"]
Components --> Contact["contact/"]
Components --> Creativity["creativity/"]
Components --> Entrepreneurship["entrepreneurship/"]
Components --> Media["media/"]
Components --> Story["story/"]
Components --> Vision["vision/"]
Components --> Closing["closing/"]
Components --> Common["common/"]
Components --> Who["who/"]
Components --> Impact["impact/"]
Components --> Art["art/"]
Components --> Timeline["timeline/"]
Data --> Content["content.js"]
Hooks --> GSAP["useGsap.js"]
Hooks --> ActiveSection["useActiveSection.js"]
Hooks --> Parallax["useParallax.js"]
Hooks --> ScrollReveal["useScrollReveal.js"]
Styles --> Variables["_variables.css"]
Styles --> Global["_global.css"]
Styles --> Typography["_typography.css"]
Styles --> Utilities["_utilities.css"]
```

**Diagram sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/components/acts/Heartbeat.jsx:1-21](file://src/components/acts/Heartbeat.jsx#L1-L21)
- [src/components/closing/ClosingSection.jsx:1-43](file://src/components/closing/ClosingSection.jsx#L1-L43)
- [src/components/who/WhoIsFrankie.jsx:1-77](file://src/components/who/WhoIsFrankie.jsx#L1-L77)
- [src/components/impact/Impact.jsx:1-93](file://src/components/impact/Impact.jsx#L1-L93)
- [src/components/art/Art.jsx:1-75](file://src/components/art/Art.jsx#L1-L75)
- [src/components/media/MediaSection.jsx:1-71](file://src/components/media/MediaSection.jsx#L1-L71)
- [src/components/timeline/TimelineSection.jsx:1-57](file://src/components/timeline/TimelineSection.jsx#L1-L57)

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)
- [package.json:1-23](file://package.json#L1-L23)

## Core Components
The application is structured around a revolutionary six-act narrative framework that organizes content into interconnected life chapters:

### Entry Point: main.jsx
The application bootstraps through a minimal entry point that creates the React root and renders the main App component within strict mode for enhanced error detection.

### Primary Component: App.jsx
The main App component orchestrates the six-act narrative structure, implementing sophisticated loading sequences and coordinating all content sections. The component now features a completely rewritten architecture that implements the six-act framework with ActSection wrappers, Heartbeat transitions, and specialized components for each narrative act.

### SiteLoader Component (SiteLoader.jsx)
A sophisticated loading component that provides an elegant transition experience for first-time visitors. Features a fixed-position loader with fade-out animation, brand logo display, and gradient wordmark with decorative divider elements. Implements session storage to track visitor status and ensures optimal loading experience across visits.

**Section sources**
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)
- [src/App.jsx:25-87](file://src/App.jsx#L25-L87)
- [src/App.module.css:1-23](file://src/App.module.css#L1-L23)
- [src/components/common/SiteLoader.jsx:1-45](file://src/components/common/SiteLoader.jsx#L1-L45)
- [src/components/common/SiteLoader.module.css:1-86](file://src/components/common/SiteLoader.module.css#L1-L86)

## Component Architecture
The application employs a revolutionary six-act narrative architecture with sophisticated component composition and seamless transitions:

```mermaid
graph TD
App["App.jsx<br/>Six-Act Narrative"] --> SiteLoader["SiteLoader.jsx"]
App --> Nav["Nav.jsx<br/>Fragment Wrapper"]
App --> Footer["Footer.jsx"]
App --> Hero["HeroExperience.jsx"]
App --> ActSection["ActSection.jsx<br/>Wrapper Component"]
App --> Heartbeat["Heartbeat.jsx<br/>Transition Component"]
App --> Closing["ClosingSection.jsx"]
App --> ActSection1["Act I: Becoming"]
App --> ActSection2["Act II: Building"]
App --> ActSection3["Act III: Amplifying"]
App --> ActSection4["Act IV: Creating"]
App --> ActSection5["Act V: Giving"]
App --> ActSection6["Act VI: Still Becoming"]
ActSection1 --> FrankieStory["FrankieStory.jsx"]
ActSection2 --> Entrepreneurship["Entrepreneurship.jsx"]
ActSection3 --> MediaHub["MediaHub.jsx"]
ActSection4 --> Creativity["Creativity.jsx"]
ActSection4 --> BooksPublications["BooksPublications.jsx"]
ActSection5 --> CommunityImpact["CommunityImpact.jsx"]
ActSection6 --> FutureVision["FutureVision.jsx"]
ActSection6 --> RecognitionBadges["RecognitionBadges.jsx"]
ActSection6 --> TimelineStrip["TimelineStrip.jsx"]
Heartbeat --> Heartbeat1["Heartbeat I"]
Heartbeat --> Heartbeat2["Heartbeat II"]
Heartbeat --> Heartbeat3["Heartbeat III"]
Heartbeat --> Heartbeat4["Heartbeat IV"]
Heartbeat --> Heartbeat5["Heartbeat V"]
Heartbeat --> Heartbeat6["Heartbeat VI"]
App --> WhoIsFrankie["WhoIsFrankie.jsx<br/>Interactive Personal Story"]
App --> Impact["Impact.jsx<br/>Scroll-Triggered Stats"]
App --> Art["Art.jsx<br/>Animated Gallery Cards"]
App --> MediaSection["MediaSection.jsx<br/>Scroll-Triggered Media Items"]
App --> TimelineSection["TimelineSection.jsx<br/>Interactive Timeline"]
```

**Diagram sources**
- [src/App.jsx:45-76](file://src/App.jsx#L45-L76)
- [src/components/acts/ActSection.jsx:5-33](file://src/components/acts/ActSection.jsx#L5-L33)
- [src/components/acts/Heartbeat.jsx:5-20](file://src/components/acts/Heartbeat.jsx#L5-L20)
- [src/components/acts/RecognitionBadges.jsx:6-33](file://src/components/acts/RecognitionBadges.jsx#L6-L33)
- [src/components/acts/TimelineStrip.jsx:6-29](file://src/components/acts/TimelineStrip.jsx#L6-L29)
- [src/components/who/WhoIsFrankie.jsx:6-76](file://src/components/who/WhoIsFrankie.jsx#L6-L76)
- [src/components/impact/Impact.jsx:32-92](file://src/components/impact/Impact.jsx#L32-L92)
- [src/components/art/Art.jsx:7-75](file://src/components/art/Art.jsx#L7-L75)
- [src/components/media/MediaSection.jsx:7-71](file://src/components/media/MediaSection.jsx#L7-L71)
- [src/components/timeline/TimelineSection.jsx:7-57](file://src/components/timeline/TimelineSection.jsx#L7-L57)

**Section sources**
- [src/App.jsx:1-87](file://src/App.jsx#L1-L87)
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/components/acts/Heartbeat.jsx:1-21](file://src/components/acts/Heartbeat.jsx#L1-L21)
- [src/components/acts/RecognitionBadges.jsx:1-34](file://src/components/acts/RecognitionBadges.jsx#L1-L34)
- [src/components/acts/TimelineStrip.jsx:1-30](file://src/components/acts/TimelineStrip.jsx#L1-L30)

## Layout Components
The layout system provides consistent navigation and structural elements across all six acts with enhanced active section tracking, improved mobile responsiveness, and enhanced accessibility through React fragment wrappers.

### Navigation Component (Nav.jsx)
Features responsive design with mobile-first approach, scroll-aware styling, and animated navigation items. Integrates with GSAP for smooth animations and uses the new useActiveSection hook for intelligent active section detection. The navigation now includes a comprehensive mobile menu with social links and contact button, featuring sophisticated GSAP animations for menu item entrance and exit. The desktop navigation system has been enhanced with a dedicated `desktopNav` class for improved cross-device functionality and better separation of desktop vs mobile styling.

**Enhanced** The Nav component now utilizes a React fragment wrapper (`<>` and `</>`) at lines 64-151, which provides improved accessibility and React rendering behavior by allowing multiple root elements without adding extra DOM nodes. This enhancement ensures proper semantic structure and better screen reader support while maintaining the component's functionality.

### Footer Component (Footer.jsx)
Provides comprehensive footer navigation with brand information, copyright details, and accessible navigation controls. The footer has been transformed into a comprehensive brand showcase featuring a three-column grid layout on desktop with centered layout on mobile, including brand identity, navigation sections, and social media links.

### Section Indicator Component (SectionIndicator.jsx)
A floating navigation component that appears on mobile devices to provide quick access to different sections of the page. Features a vertical list of clickable dots that correspond to each major section, with automatic highlighting of the currently active section. Includes smooth scrolling functionality and responsive visibility control based on scroll position.

### SiteLoader Component (SiteLoader.jsx)
A sophisticated loading component that provides an elegant transition experience for first-time visitors. Features a fixed-position loader with fade-out animation, brand logo display, and gradient wordmark with decorative divider elements. Implements session storage to track visitor status and ensures optimal loading experience across visits.

**Section sources**
- [src/components/layout/Nav.jsx:1-154](file://src/components/layout/Nav.jsx#L1-L154)
- [src/components/layout/Nav.module.css:1-349](file://src/components/layout/Nav.module.css#L1-L349)
- [src/components/layout/Footer.jsx:1-59](file://src/components/layout/Footer.jsx#L1-L59)
- [src/components/layout/Footer.module.css:1-102](file://src/components/layout/Footer.module.css#L1-L102)
- [src/components/common/SectionIndicator.jsx:1-43](file://src/components/common/SectionIndicator.jsx#L1-L43)
- [src/components/common/SectionIndicator.module.css:1-60](file://src/components/common/SectionIndicator.module.css#L1-L60)
- [src/components/common/SiteLoader.jsx:1-45](file://src/components/common/SiteLoader.jsx#L1-L45)
- [src/components/common/SiteLoader.module.css:1-86](file://src/components/common/SiteLoader.module.css#L1-L86)

## Act-Based Narrative Framework
The revolutionary six-act framework organizes Frankie Picasso's life story into interconnected narrative chapters with sophisticated theming and transition elements.

### ActSection Component System
The ActSection component serves as the foundational wrapper for each narrative act, providing:
- Dynamic theming based on act-specific CSS variables
- Watermark system with act numbers for visual storytelling
- Scroll-triggered reveal animations
- Accessible labeling with act identification
- Container-based layout with proper spacing

### Heartbeat Transition System
The Heartbeat component provides animated transitions between narrative acts:
- Three-dot pulsing animation for visual continuity
- Inspirational quote display with serif typography
- Responsive design with fluid typography scaling
- Reduced motion support for accessibility
- Presentation role for semantic markup

### Act-Specific Components
Each act contains specialized components that showcase different aspects of Frankie's journey:
- **Act I (Becoming)**: FrankieStory component for early life narrative
- **Act II (Building)**: Entrepreneurship showcase with venture highlights
- **Act III (Amplifying)**: Media presence and platform building
- **Act IV (Creating)**: Creative endeavors and artistic pursuits
- **Act V (Giving)**: Community impact and social contribution
- **Act VI (Still Becoming)**: Current projects and ongoing legacy

**Section sources**
- [src/components/acts/ActSection.jsx:1-34](file://src/components/acts/ActSection.jsx#L1-L34)
- [src/components/acts/ActSection.module.css:1-91](file://src/components/acts/ActSection.module.css#L1-L91)
- [src/components/acts/Heartbeat.jsx:1-21](file://src/components/acts/Heartbeat.jsx#L1-L21)
- [src/components/acts/Heartbeat.module.css:1-50](file://src/components/acts/Heartbeat.module.css#L1-L50)
- [src/App.jsx:45-76](file://src/App.jsx#L45-L76)

## Interactive Content Components
The application features five new interactive components that leverage GSAP animations and scroll-triggered effects to create a more engaging user experience within the six-act framework.

### WhoIsFrankie Component
A deeply personal narrative component that presents Frankie's philosophy and values through an interactive storytelling format. Features sophisticated scroll-triggered animations, responsive typography, and elegant serif-based design with gold accents. The component includes:
- Interactive scroll reveal animations for content blocks
- Sophisticated typography system with serif headings and body text
- Gold accent borders and decorative elements
- Responsive design with mobile-first approach
- Comprehensive content structure covering personal beliefs, values, and life philosophy

### Impact Component
A statistics-driven component showcasing Frankie's professional impact through animated counters and pillar-based organization. Features:
- Scroll-triggered stat animations with staggered delays
- Four core pillars (Freedom, Creativity, Community, Leadership) with custom SVG icons
- Sophisticated grid layout with responsive column adjustments
- Hover effects with cinematic shadows and border animations
- Golden color scheme with deep plum accents

### Art Component
An interactive gallery component displaying Frankie's creative works through animated cards and medium-specific showcases. Features:
- Animated card reveals with staggered timing
- Two-column medium cards with hover effects
- Three-column gallery layout with icon accents
- Sophisticated typography hierarchy with serif headings
- Responsive grid system adapting to screen size

### MediaSection Component
A comprehensive media hub presenting Frankie's broadcasting and press recognition through organized cards and lists. Features:
- Scroll-triggered media item animations
- Two-column show cards with type indicators
- Press recognition list with hover interactions
- Aqua and gold color scheme reflecting media themes
- Responsive grid layouts with mobile adaptations

### TimelineSection Component
An interactive timeline component showcasing key moments from Act VI (Still Becoming). Features:
- Animated timeline nodes with staggered entrance effects
- Vertical timeline with golden line and decorative dots
- Hover effects with enhanced visual feedback
- Responsive design with adjusted spacing for mobile
- Sophisticated typography for dates and descriptions

**Section sources**
- [src/components/who/WhoIsFrankie.jsx:1-77](file://src/components/who/WhoIsFrankie.jsx#L1-L77)
- [src/components/who/WhoIsFrankie.module.css:1-245](file://src/components/who/WhoIsFrankie.module.css#L1-L245)
- [src/components/impact/Impact.jsx:1-93](file://src/components/impact/Impact.jsx#L1-L93)
- [src/components/impact/Impact.module.css:1-185](file://src/components/impact/Impact.module.css#L1-L185)
- [src/components/art/Art.jsx:1-75](file://src/components/art/Art.jsx#L1-L75)
- [src/components/art/Art.module.css:1-213](file://src/components/art/Art.module.css#L1-L213)
- [src/components/media/MediaSection.jsx:1-71](file://src/components/media/MediaSection.jsx#L1-L71)
- [src/components/media/MediaSection.module.css:1-210](file://src/components/media/MediaSection.module.css#L1-L210)
- [src/components/timeline/TimelineSection.jsx:1-57](file://src/components/timeline/TimelineSection.jsx#L1-L57)
- [src/components/timeline/TimelineSection.module.css:1-148](file://src/components/timeline/TimelineSection.module.css#L1-L148)

## Shared Utilities
The application leverages several shared utility components and hooks to maintain consistency and reduce code duplication within the six-act framework.

### Scroll Reveal Hook (useScrollReveal.js)
Enhanced custom hook that provides sophisticated reveal animations:
- Fade-up animations for section headers
- Fade-in animations for transition elements
- Integration with Intersection Observer API
- Performance-optimized animation triggers
- Accessibility-compliant animation controls

### Section Indicator Component (SectionIndicator.jsx)
A floating navigation component that provides quick access to different sections of the page. Features a vertical list of clickable dots that correspond to each major section, with automatic highlighting of the currently active section. Includes smooth scrolling functionality and responsive visibility control based on scroll position.

### Section Heading (SectionHeading.jsx)
Reusable component for consistent heading presentation across all content sections. The component has been refactored to remove the decorative numbering system, simplifying the design to focus purely on title and subtitle presentation. Supports light/dark theme variants for different background contexts.

### SiteLoader Component (SiteLoader.jsx)
A sophisticated loading component that provides an elegant transition experience for first-time visitors. Features a fixed-position loader with fade-out animation, brand logo display, and gradient wordmark with decorative divider elements. Implements session storage to track visitor status and ensures optimal loading experience across visits.

**Section sources**
- [src/hooks/useScrollReveal.js:1-40](file://src/hooks/useScrollReveal.js#L1-L40)
- [src/components/common/SectionIndicator.jsx:1-43](file://src/components/common/SectionIndicator.jsx#L1-L43)
- [src/components/common/SectionIndicator.module.css:1-60](file://src/components/common/SectionIndicator.module.css#L1-L60)
- [src/components/common/SectionHeading.jsx:1-12](file://src/components/common/SectionHeading.jsx#L1-L12)
- [src/components/common/SectionHeading.module.css:1-32](file://src/components/common/SectionHeading.module.css#L1-L32)
- [src/components/common/SiteLoader.jsx:1-45](file://src/components/common/SiteLoader.jsx#L1-L45)
- [src/components/common/SiteLoader.module.css:1-86](file://src/components/common/SiteLoader.module.css#L1-L86)

## State Management and Hooks
The application implements a sophisticated state management approach using React hooks and custom hooks for enhanced functionality within the six-act framework.

### Custom Hooks
- **useGsap**: Centralized GSAP configuration with ScrollTrigger support
- **useActiveSection**: Tracks active navigation section using Intersection Observer technology
- **useParallax**: Implements parallax scrolling effects
- **useScrollReveal**: Enhanced scroll-triggered reveal animations with act-specific timing

### State Patterns
Components utilize useState for UI state management (mobile menu, scroll awareness), useEffect for side effects and cleanup, and useRef for DOM manipulation and animation references. The enhanced useScrollReveal hook provides sophisticated animation orchestration for the six-act narrative.

**Section sources**
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)
- [src/hooks/useActiveSection.js:1-36](file://src/hooks/useActiveSection.js#L1-L36)
- [src/hooks/useScrollReveal.js:1-40](file://src/hooks/useScrollReveal.js#L1-L40)
- [src/components/layout/Nav.jsx:1-154](file://src/components/layout/Nav.jsx#L1-L154)
- [src/components/common/SectionIndicator.jsx:1-43](file://src/components/common/SectionIndicator.jsx#L1-L43)

## CSS Modules and Styling
The application employs CSS Modules for scoped styling with a revolutionary six-act theming system that provides consistent visual identity across all narrative chapters.

### Enhanced Theming System
The six-act framework introduces sophisticated theming through CSS custom properties:
- Act-specific color variables (`--act-becoming`, `--act-building`, etc.)
- Dynamic accent color assignment based on act identity
- Responsive watermark system with act-number display
- Container-based layout with proper spacing and alignment

### Act-Specific Styling Architecture
Each act maintains its own visual identity while maintaining consistency:
- Watermark system with large, semi-transparent act numbers
- Themed accent colors for headers, borders, and decorative elements
- Responsive typography with act-appropriate font weights and sizes
- Content-specific layout adaptations for different narrative themes

### Enhanced Scroll Reveal Animations
The scroll reveal system provides sophisticated entrance animations:
- Fade-up animations for section headers with staggered timing
- Fade-in animations for transition elements and content blocks
- Performance-optimized animation triggers using Intersection Observer
- Accessibility compliance with reduced motion preferences

### Responsive Design Enhancements
The six-act framework maintains responsive design excellence:
- Fluid typography scaling using clamp functions
- Flexible grid layouts adapting to screen size
- Mobile-first approach with progressive enhancement
- Touch-friendly interaction patterns for all components

### Z-Index Hierarchy Management
The application implements a comprehensive z-index hierarchy for proper stacking context:
- **--z-nav: 1000** - Navigation bar with backdrop blur and shadow effects
- **--z-overlay: 1100** - Enhanced overlay stacking context for mobile menus and modals
- **--z-content: 1** - Default content layer for standard page elements

### Advanced Interactive Component Styling
The new interactive components implement sophisticated styling patterns:
- **WhoIsFrankie**: Elegant serif typography with gold accents and decorative borders
- **Impact**: Sophisticated grid layouts with hover animations and gradient backgrounds
- **Art**: Card-based design with animated entrances and cinematic hover effects
- **MediaSection**: Color-coded sections with themed accent colors and hover interactions
- **TimelineSection**: Vertical timeline with animated nodes and interactive hover states

**Updated** The z-index hierarchy has been enhanced with --z-overlay set to 1100, providing better overlay stacking context and improved mobile menu positioning. This ensures that the mobile navigation overlay appears above all other content layers while maintaining proper visual hierarchy.

**Section sources**
- [src/App.module.css:1-23](file://src/App.module.css#L1-L23)
- [src/components/acts/ActSection.module.css:1-91](file://src/components/acts/ActSection.module.css#L1-L91)
- [src/components/acts/Heartbeat.module.css:1-50](file://src/components/acts/Heartbeat.module.css#L1-L50)
- [src/components/acts/RecognitionBadges.module.css:1-94](file://src/components/acts/RecognitionBadges.module.css#L1-L94)
- [src/components/acts/TimelineStrip.module.css:1-103](file://src/components/acts/TimelineStrip.module.css#L1-L103)
- [src/components/closing/ClosingSection.module.css:1-87](file://src/components/closing/ClosingSection.module.css#L1-L87)
- [src/components/who/WhoIsFrankie.module.css:1-245](file://src/components/who/WhoIsFrankie.module.css#L1-L245)
- [src/components/impact/Impact.module.css:1-185](file://src/components/impact/Impact.module.css#L1-L185)
- [src/components/art/Art.module.css:1-213](file://src/components/art/Art.module.css#L1-L213)
- [src/components/media/MediaSection.module.css:1-210](file://src/components/media/MediaSection.module.css#L1-L210)
- [src/components/timeline/TimelineSection.module.css:1-148](file://src/components/timeline/TimelineSection.module.css#L1-L148)
- [src/styles/_variables.css:61-65](file://src/styles/_variables.css#L61-L65)

## Typography System
The application features a refined typography system with two distinct font families and advanced responsive scaling using clamp functions, perfectly suited for the six-act narrative framework.

### Font Families
- **Serif Font**: Cormorant Garamond - Used for headings (h1-h3), quotes, and emphasized text
- **Sans-serif Font**: Inter - Used for body text, navigation, and interface elements

### Responsive Typography with Clamp Functions
The typography system implements fluid scaling using CSS clamp functions for optimal responsiveness across all six acts:

```css
--fs-display: clamp(3rem, 6vw, 6rem);
--fs-h1: clamp(2.25rem, 4vw, 4rem);
--fs-h2: clamp(1.75rem, 3vw, 2.75rem);
--fs-h3: clamp(1.25rem, 2vw, 1.75rem);
```

These clamp functions provide:
- **Minimum size**: Prevents text from becoming too small on mobile devices
- **Fluid scaling**: Uses viewport-relative units for smooth scaling across devices
- **Maximum size**: Ensures text remains readable on larger screens

### Act-Specific Typography
Each act maintains its own typographic identity:
- Headers use serif fonts with act-appropriate sizing and weights
- Body text uses sans-serif fonts for excellent readability
- Quotes and emphasized text use the serif font for visual distinction
- Navigation and interface elements use the sans-serif font for clarity

### Interactive Component Typography
The new interactive components implement sophisticated typography systems:
- **WhoIsFrankie**: Large serif headings with decorative borders and elegant body text
- **Impact**: Stat numbers in large serif font with supporting sans-serif labels
- **Art**: Medium titles in serif font with style indicators in sans-serif
- **MediaSection**: Show types in uppercase sans-serif with descriptive serif titles
- **TimelineSection**: Year labels in uppercase sans-serif with serif event titles

**Section sources**
- [src/styles/_variables.css:13-25](file://src/styles/_variables.css#L13-L25)
- [src/styles/_global.css:10-19](file://src/styles/_global.css#L10-L19)
- [src/styles/_typography.css:1-41](file://src/styles/_typography.css#L1-L41)

## Data Management
The application uses a centralized content management system through a dedicated data module with comprehensive six-act narrative structure and enhanced biographical storytelling.

### Enhanced Content Structure
The content.js file organizes all application data into a sophisticated six-act framework:
- Hero content with "A Life in Six Acts" headline and tagline
- **Comprehensive Act Data**: Six detailed acts with unique identities, themes, and color schemes
- **Enhanced Biography**: Expanded personal story with four-decade timeline covering all six acts
- **Detailed Venture Information**: Comprehensive lists of businesses, media platforms, and initiatives
- **Creative Portfolio**: Extensive showcase of books, art, writing, and media contributions
- **Recognition System**: Structured awards and recognition data with featured and regular entries
- **Legacy Timeline**: Chronological events spanning Frankie's entire career and impact
- **Current Projects**: Ongoing initiatives and future vision statements
- **Closing Content**: Reflective conclusion with call-to-action and inspirational messaging
- **Interactive Content**: New data structures for WhoIsFrankie, Impact, Art, MediaSection, and TimelineSection components

### Act-Based Organization
Each act contains rich, interconnected data:
- **Identity Metadata**: Unique ID, number, title, tagline, and color scheme
- **Narrative Content**: Introductory paragraphs, philosophical insights, and heartbeat lines
- **Timeline Events**: Chronological milestones with year, title, and description
- **Achievement Data**: Ventures, shows, initiatives, and recognition details
- **Legacy Events**: Significant moments that define each act's impact

### Interactive Component Data Structures
The new interactive components utilize specialized data structures:
- **WhoIsFrankie**: Personal beliefs, values with labels and reasons, built lists, and closing thoughts
- **Impact**: Statistics with numbers and labels, pillar data with icons and descriptions
- **Art**: Mediums with titles, styles, and descriptions, gallery items with titles and descriptions
- **MediaSection**: Shows with types, titles, descriptions, and years, press recognition with outlets
- **TimelineSection**: Legacy events specifically from Act VI with chronological data

### Navigation and Section Management
Enhanced navigation system with six-act support:
- **Section IDs**: Comprehensive list including all six acts plus additional sections
- **Navigation Links**: Act-specific labels with appropriate section targeting
- **Color Mapping**: Direct correlation between acts and their visual themes
- **Accessibility Support**: Proper ARIA labels and semantic structure

**Section sources**
- [src/data/content.js:1-239](file://src/data/content.js#L1-L239)

## Vite Integration
The project leverages Vite for modern development workflow with optimized build processes and enhanced hot module replacement capabilities.

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
The development environment supports rapid iteration and efficient debugging within the six-act framework.

### Fast Refresh
- Instant component updates without full page reload
- Preserves component state during development
- Seamless integration with React DevTools

### Animation Development
- GSAP timeline testing and debugging
- Scroll-triggered animations for six-act transitions
- Responsive design testing across act-specific breakpoints
- Accessibility testing integration with reduced motion support

### Component Development
- Modular component creation and testing within act framework
- CSS Modules hot reloading with theming system
- Data-driven content updates with six-act organization
- Accessibility testing integration across all narrative acts

### Interactive Component Development
- GSAP animation testing and refinement
- ScrollTrigger configuration and debugging
- Responsive breakpoint testing for all interactive components
- Cross-browser compatibility verification

**Section sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/hooks/useGsap.js:1-14](file://src/hooks/useGsap.js#L1-L14)

## Performance Considerations
The application implements several performance optimization strategies within the six-act framework.

### Enhanced Animation Optimization
- Reduced motion preference detection for all six acts
- Scroll-triggered animations for performance efficiency
- Efficient GSAP usage patterns with act-specific timing
- Cleanup of event listeners and observers on component unmount

### Intersection Observer Usage
Efficient active section tracking using Intersection Observer API:
- Low overhead compared to scroll event listeners
- Automatic cleanup of observers on component unmount
- Improved performance on mobile devices across all six acts

### Loading Strategy Optimization
Session storage-based visitor tracking reduces unnecessary loading animations:
- Optimized loader timing with minimum display duration
- Efficient fade-out animations using CSS transitions
- Minimal JavaScript overhead for loading experience

### Bundle Optimization
- Tree shaking for unused imports across six-act components
- Component splitting for large sections
- Minimal dependency footprint
- Efficient CSS Modules compilation with theming system

### Six-Act Performance Benefits
The six-act framework provides several performance advantages:
- **Modular Architecture**: Each act as a self-contained unit reduces render complexity
- **Theme Isolation**: CSS custom properties prevent cascade conflicts between acts
- **Lazy Loading Opportunities**: Act-specific components can be optimized individually
- **Animation Efficiency**: Scroll-triggered animations minimize unnecessary computations

### Enhanced Mobile Menu Performance
The React fragment wrapper in the Nav component improves rendering performance by:
- Eliminating unnecessary wrapper divs in the DOM
- Improving accessibility tree structure for screen readers
- Reducing DOM traversal complexity for navigation elements
- Maintaining proper semantic structure without extra nodes

### Interactive Component Performance
The new interactive components implement performance optimizations:
- **GSAP Animation Optimization**: Efficient ScrollTrigger usage with proper cleanup
- **CSS Grid Performance**: Optimized grid layouts with minimal reflow
- **Responsive Image Handling**: Efficient image loading and lazy loading strategies
- **Memory Management**: Proper cleanup of animation references and event listeners

**Section sources**
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/hooks/useGsap.js:6](file://src/hooks/useGsap.js#L6)
- [src/hooks/useActiveSection.js:6-32](file://src/hooks/useActiveSection.js#L6-L32)
- [src/hooks/useScrollReveal.js:6-35](file://src/hooks/useScrollReveal.js#L6-L35)
- [vite.config.js:7-8](file://vite.config.js#L7-L8)

## Troubleshooting Guide
Common development and runtime issues with solutions within the six-act framework.

### Component Rendering Issues
- **Blank screen on startup**: Verify DOM element existence and React version compatibility
- **Animation not working**: Check GSAP plugin registration and ScrollTrigger initialization
- **Navigation not responding**: Ensure section IDs match between content and navigation
- **Section indicator not appearing**: Verify mobile breakpoint conditions and scroll position detection
- **SiteLoader not displaying**: Check session storage availability and loader div presence
- **Act sections not rendering**: Verify act data structure and component prop passing
- **Heartbeat transitions not animating**: Check scroll reveal hook integration and intersection observer setup
- **Mobile menu not appearing**: Verify z-index hierarchy and fragment wrapper structure
- **Interactive components not animating**: Check GSAP initialization and ScrollTrigger configuration
- **Scroll-triggered animations not firing**: Verify trigger elements and scroll positions

### Styling Problems
- **Styles not applying**: Verify CSS Modules import syntax and class name matching
- **Animation conflicts**: Check for conflicting CSS properties and z-index stacking
- **Responsive issues**: Review media query breakpoints and viewport meta tags
- **Floating indicator positioning**: Check fixed positioning and z-index values
- **SiteLoader overlay issues**: Verify z-index stacking and transform properties
- **Act theming not working**: Check CSS custom property definitions and variable scope
- **Watermark positioning**: Verify absolute positioning and z-index layering
- **Timeline strip scrolling**: Check overflow properties and scroll snap configuration
- **Mobile menu overlay not covering content**: Verify --z-overlay value and fragment wrapper structure
- **Interactive component styling issues**: Check CSS Module imports and class name consistency

### Typography Issues
- **Font not loading**: Verify Google Fonts import and network connectivity
- **Font fallback not working**: Check CSS font stack ordering
- **Typography inconsistencies**: Ensure CSS custom properties are properly defined
- **Act-specific font variations**: Verify font family assignments for each narrative act
- **Responsive font scaling**: Check clamp function implementations and viewport units

### Data Management Issues
- **Act data not loading**: Verify content.js structure and export format
- **Missing act information**: Check act array indexing and property access
- **Navigation data mismatch**: Ensure section IDs match act IDs and navigation links
- **Award data not displaying**: Verify nested data structure and array mapping
- **Interactive component data issues**: Check content.js structure for new component data

### Six-Act Framework Issues
- **Act sections not displaying**: Verify ActSection component integration and props
- **Heartbeat transitions not working**: Check Heartbeat component implementation and timing
- **Recognition badges not rendering**: Verify award data structure and grid layout
- **Timeline strip not scrolling**: Check scroll container properties and snap alignment
- **Closing section not interactive**: Verify scroll-to functionality and event handlers

### Z-Index and Overlay Issues
- **Mobile menu behind content**: Verify --z-overlay is set to 1100 and fragment wrapper structure
- **Overlay not appearing above navigation**: Check z-index hierarchy and stacking context
- **Fragment wrapper causing rendering issues**: Ensure proper React fragment syntax and accessibility attributes

### Interactive Component Issues
- **GSAP animations not triggering**: Check ScrollTrigger configuration and trigger element visibility
- **Staggered animations not working**: Verify animation delay calculations and element selection
- **Hover effects not responding**: Check CSS hover states and z-index layering
- **Responsive layout breaks**: Verify grid template columns and media query breakpoints
- **SVG icons not displaying**: Check viewBox attributes and CSS icon styling

**Section sources**
- [src/main.jsx:6-10](file://src/main.jsx#L6-L10)
- [src/hooks/useGsap.js:6](file://src/hooks/useGsap.js#L6)
- [src/hooks/useActiveSection.js:6-32](file://src/hooks/useActiveSection.js#L6-L32)
- [src/hooks/useScrollReveal.js:6-35](file://src/hooks/useScrollReveal.js#L6-L35)
- [vite.config.js:7-8](file://vite.config.js#L7-L8)

## Conclusion
The React frontend components demonstrate a revolutionary six-act narrative framework that transforms traditional multi-section layouts into an immersive storytelling experience. The application showcases sophisticated animation integration, modular component design, and robust development tooling within a comprehensive six-act architecture. The enhanced mobile-first navigation system with GSAP animations, improved desktop layout for the hero section, redesigned awards recognition with laurel decorations, comprehensive brand-focused footer, and enhanced global styling system with improved CSS variables and responsive typography represent significant improvements in user experience and visual appeal.

**Updated** The addition of five new interactive components (WhoIsFrankie, Impact, Art, MediaSection, TimelineSection) significantly enhances the application's capabilities by integrating sophisticated GSAP animations, scroll-triggered effects, and advanced responsive design patterns. These components leverage the six-act framework while introducing innovative user interaction patterns that create a more engaging and dynamic storytelling experience.

The six-act framework provides a sophisticated organizational structure that tells Frankie Picasso's life story as a cohesive narrative, with each act representing a distinct chapter of her journey. The ActSection component system with dynamic theming, Heartbeat transition components with animated storytelling, RecognitionBadges display for award recognition, TimelineStrip presentation for legacy events, and ClosingSection with interactive call-to-action create a seamless and engaging user experience.

The implementation of CSS custom properties for act-specific theming, scroll-triggered animations, and responsive design patterns ensures optimal performance across all devices and screen sizes. The enhanced data management system with comprehensive six-act organization and specialized content structures for interactive components provides a solid foundation for content management and future expansion.

The revolutionary six-act narrative framework with integrated interactive components represents a significant advancement in digital storytelling, demonstrating how modern web technologies can be used to create meaningful, engaging, and technically sophisticated user experiences. The combination of innovative component architecture, thoughtful theming system, seamless transitions, and advanced animation capabilities creates a truly memorable and impactful digital portfolio experience.

The recent improvements to the Nav component with React fragment wrapper and the updated z-index hierarchy with --z-overlay at 1100 demonstrate the project's commitment to accessibility, performance, and modern React best practices. These enhancements ensure proper semantic structure, improved screen reader support, and better overlay stacking context for mobile navigation, contributing to a more robust and user-friendly application architecture.

The five new interactive components showcase the evolution of the application from a static six-act narrative into a dynamic, animated storytelling platform that leverages cutting-edge web technologies to create an immersive user experience. This transformation represents the future of digital portfolios and personal storytelling websites.