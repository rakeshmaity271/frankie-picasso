# Getting Started

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [vite.config.js](file://vite.config.js)
- [src/main.jsx](file://src/main.jsx)
- [src/App.jsx](file://src/App.jsx)
- [index.html](file://index.html)
- [scripts/deploy.sh](file://scripts/deploy.sh)
- [.github/workflows/deploy.yml](file://.github/workflows/deploy.yml)
- [.gitignore](file://.gitignore)
</cite>

## Update Summary
**Changes Made**
- Complete rewrite of setup instructions for React/Vite development environment
- Removed Node.js server setup, Express installation, and backend configuration steps
- Updated to document React development setup, Vite installation, and modern frontend development workflow
- Added new deployment instructions for the React SPA and GitHub Actions CI/CD pipeline
- Updated prerequisites to focus on modern JavaScript and React ecosystem requirements

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [First Run](#first-run)
5. [Expected Startup Behavior](#expected-startup-behavior)
6. [Verification Steps](#verification-steps)
7. [Troubleshooting Guide](#troubleshooting-guide)
8. [Environment Setup Notes](#environment-setup-notes)
9. [Deployment Guide](#deployment-guide)
10. [Conclusion](#conclusion)

## Introduction
This guide helps you set up and run the Frankie Picasso project locally. It covers prerequisites, installation, first-run steps, and verification. The project is a modern React Single Page Application (SPA) built with Vite, designed for frontend development and deployment.

**Updated** The project has been completely rewritten to use a pure React/Vite frontend stack without any backend server requirements.

## Prerequisites
- Node.js: The project requires Node.js 18 or higher for optimal compatibility with modern JavaScript features and Vite.
- npm: The project uses npm 9 or higher for package management and script execution.
- Modern web browser: Chrome, Firefox, Safari, or Edge for development and testing.

Key indicators in the repository:
- The project uses ES modules (`"type": "module"` in package.json)
- React 18.3.1 and React DOM 18.3.1 are declared as dependencies
- Vite 6.0.0 is used as the development server and build tool
- The React plugin for Vite is configured in the build system

**Section sources**
- [package.json:1-23](file://package.json#L1-L23)
- [vite.config.js:1-11](file://vite.config.js#L1-L11)

## Installation
Follow these steps to install the project locally:

1. Open a terminal in the project root directory.
2. Install dependencies using npm:
   - Command: `npm install`
   - Purpose: Installs production and development dependencies defined in package.json.

What gets installed:
- Production dependencies include React, React DOM, GSAP, @gsap/react, normalize.css, and other frontend libraries
- Development dependencies include Vite, @vitejs/plugin-react, and build tools

**Section sources**
- [package.json:11-21](file://package.json#L11-L21)

## First Run
After installing dependencies, start the development server:

- Command: `npm run dev`
- Purpose: Starts the Vite development server configured to serve the React app

Port configuration:
- The Vite server listens on port 3000 by default
- The configuration explicitly sets the port to 3000 and opens the browser automatically
- The development server provides hot module replacement (HMR) for instant feedback

**Section sources**
- [package.json:6-10](file://package.json#L6-L10)
- [vite.config.js:6-9](file://vite.config.js#L6-L9)

## Expected Startup Behavior
When you run the development server, you should observe the following:

- Vite starts and opens the browser to http://localhost:3000
- The React app loads with a beautiful loading animation
- The homepage displays the hero section with animated typography
- Navigation controls are fully functional
- All interactive components respond to user input
- Console shows no errors or warnings

The application architecture:
- Single-page application built with React 18
- Component-based architecture with modular CSS
- GSAP integration for advanced animations
- Responsive design optimized for all devices

**Section sources**
- [index.html:55-59](file://index.html#L55-L59)
- [src/App.jsx:28-48](file://src/App.jsx#L28-L48)
- [src/main.jsx:1-11](file://src/main.jsx#L1-L11)

## Verification Steps
Confirm the setup is working by performing these checks:

- Browser: Visit http://localhost:3000 and verify the React app renders correctly
- Animation: Check that the hero animation plays and GSAP effects work
- Navigation: Test all navigation links and smooth scrolling functionality
- Components: Verify all sections load (Hero, Story, Ventures, Creativity, etc.)
- Responsiveness: Test on different screen sizes and orientations
- Console: Open browser developer tools and ensure no JavaScript errors

**Section sources**
- [src/App.jsx:17-48](file://src/App.jsx#L17-L48)
- [index.html:25-53](file://index.html#L25-L53)

## Troubleshooting Guide
Common issues and resolutions:

- Port 3000 in use
  - Symptom: The development server fails to start or reports a port conflict
  - Resolution: Stop the conflicting process or configure a different port in the Vite configuration
  - Reference: The Vite server port is set to 3000 in the configuration
  
  **Section sources**
  - [vite.config.js:7](file://vite.config.js#L7)

- Node.js version mismatch
  - Symptom: Errors during installation or runtime related to unsupported syntax
  - Resolution: Update Node.js to version 18 or higher, preferably the latest LTS
  - Reference: The project uses modern ES modules and React features
  
  **Section sources**
  - [package.json:5](file://package.json#L5)
  - [package.json:11-17](file://package.json#L11-L17)

- Missing dependencies
  - Symptom: Errors indicating missing modules after cloning or clearing node_modules
  - Resolution: Reinstall dependencies using `npm install`
  
  **Section sources**
  - [package.json:11-21](file://package.json#L11-L21)

- Build errors
  - Symptom: Errors during `npm run build` or development server startup
  - Resolution: Clear node_modules and reinstall, ensure Node.js version compatibility
  - Reference: The project requires modern JavaScript features
  
  **Section sources**
  - [package.json:18-21](file://package.json#L18-L21)

- Animation issues
  - Symptom: GSAP animations not working or performance issues
  - Resolution: Check browser console for GSAP errors, ensure proper internet connection
  - Reference: GSAP is integrated for advanced scroll animations
  
  **Section sources**
  - [package.json:12-13](file://package.json#L12-L13)

## Environment Setup Notes
- Environment variables: The project does not require custom environment variables for basic operation
- Git ignore: The repository includes a .gitignore that excludes node_modules, logs, IDE folders, and build artifacts
- Development tools: Recommended VS Code extensions include ES7+ React/Redux/React-Native snippets, Prettier, and ESLint

**Section sources**
- [.gitignore:1-25](file://.gitignore#L1-L25)

## Deployment Guide
The project supports multiple deployment methods for production:

### Manual Deployment
1. Build the production bundle: `npm run build`
2. Deploy the contents of the `dist` folder to any static hosting service
3. Configure your web server to serve `index.html` for all routes (SPA routing)

### GitHub Actions CI/CD Pipeline
The repository includes a complete automated deployment pipeline:

- Trigger: Push to the `dev` branch
- Node.js version: 20.x (configured in workflow)
- Process: Install dependencies → Build → Deploy via SSH
- Target: Remote server with automatic verification

### Deployment Script
The repository includes a manual deployment script (`scripts/deploy.sh`) that:
- Validates Node.js, npm, and SSH availability
- Installs dependencies using `npm ci`
- Builds the production bundle
- Deploys to a remote server via rsync
- Verifies deployment completion

**Section sources**
- [.github/workflows/deploy.yml:1-94](file://.github/workflows/deploy.yml#L1-L94)
- [scripts/deploy.sh:1-81](file://scripts/deploy.sh#L1-L81)

## Conclusion
You now have the essentials to install, run, and deploy the Frankie Picasso React/Vite project. Use `npm install` to fetch dependencies, `npm run dev` to start the development server, and verify the React UI renders correctly. The project is designed as a modern single-page application with no backend requirements, making it easy to deploy to any static hosting service or automate with GitHub Actions.