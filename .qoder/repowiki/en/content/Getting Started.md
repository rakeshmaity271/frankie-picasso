# Getting Started

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [README.md](file://README.md)
- [vite.config.js](file://vite.config.js)
- [src/index.js](file://src/index.js)
- [.mcp.json](file://.mcp.json)
- [.gitignore](file://.gitignore)
- [public/index.html](file://public/index.html)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [First Run](#first-run)
5. [Expected Startup Behavior](#expected-startup-behavior)
6. [Verification Steps](#verification-steps)
7. [Troubleshooting Guide](#troubleshooting-guide)
8. [Environment Setup Notes](#environment-setup-notes)
9. [Conclusion](#conclusion)

## Introduction
This guide helps you set up and run the Frankie Picasso project locally. It covers prerequisites, installation, first-run steps, and verification. The project is a Node.js application that serves a React frontend via Vite and exposes a small Express API.

## Prerequisites
- Node.js: The project uses modern JavaScript features and requires a recent LTS or current Node.js version compatible with the specified dependencies. Ensure your local Node.js version meets the requirements declared by the project’s dependencies.
- npm: The project uses npm scripts and packages managed via npm.

Key indicators in the repository:
- The project declares a module type and uses ES modules, which are supported by modern Node.js versions.
- The package.json lists React and Vite as dependencies and devDependencies, indicating a React + Vite stack.

**Section sources**
- [package.json:11-18](file://package.json#L11-L18)
- [package.json:5](file://package.json#L5)

## Installation
Follow these steps to install the project locally:

1. Open a terminal in the project root directory.
2. Install dependencies using npm:
   - Command: npm install
   - Purpose: Installs production and development dependencies defined in package.json.

What gets installed:
- Production dependencies include React and React DOM.
- Development dependencies include Vite and the React plugin for Vite.

**Section sources**
- [package.json:11-18](file://package.json#L11-L18)
- [README.md:7-10](file://README.md#L7-L10)

## First Run
After installing dependencies, start the development server:

- Command: npm run dev
- Purpose: Starts the Vite development server configured to serve the React app and proxy API requests if needed.

Port configuration:
- The Vite server listens on port 3000 by default.
- The configuration explicitly sets the port to 3000 and opens the browser automatically.

**Section sources**
- [package.json:6-10](file://package.json#L6-L10)
- [vite.config.js:6-9](file://vite.config.js#L6-L9)

## Expected Startup Behavior
When you run the development server, you should observe the following:

- Vite starts and opens the browser to http://localhost:3000.
- The React app loads and displays the landing page defined in the public HTML file.
- The Express backend is ready to handle API routes (e.g., health checks).

The Express server:
- Initializes middleware for JSON and URL-encoded bodies.
- Serves static assets from the public directory.
- Exposes two routes: a root route returning a welcome message and a health endpoint returning status information.
- Listens on the configured port (default 3000).

**Section sources**
- [vite.config.js:6-9](file://vite.config.js#L6-L9)
- [src/index.js:11-28](file://src/index.js#L11-L28)
- [public/index.html:1-21](file://public/index.html#L1-L21)

## Verification Steps
Confirm the setup is working by performing these checks:

- Browser: Visit http://localhost:3000 and verify the React app renders.
- API Health: Call the health endpoint to confirm the backend is reachable.
  - Endpoint: GET /api/health
  - Expected response: A JSON object containing a status field and a timestamp.
- Root Route: Call the root endpoint to confirm basic routing.
  - Endpoint: GET /
  - Expected response: A JSON object with a welcome message and a running status.

These endpoints are defined in the Express server.

**Section sources**
- [src/index.js:17-23](file://src/index.js#L17-L23)

## Troubleshooting Guide
Common issues and resolutions:

- Port 3000 in use
  - Symptom: The development server fails to start or reports a port conflict.
  - Resolution: Stop the conflicting process or configure a different port in the Vite configuration.
  - Reference: The Vite server port is set to 3000 in the configuration.
  
  **Section sources**
  - [vite.config.js:7](file://vite.config.js#L7)

- Node.js version mismatch
  - Symptom: Errors during installation or runtime related to unsupported syntax.
  - Resolution: Update Node.js to a version compatible with the project’s dependencies.
  - Reference: The project uses ES modules and modern React/Vite features.

  **Section sources**
  - [package.json:5](file://package.json#L5)
  - [package.json:11-18](file://package.json#L11-L18)

- Missing dependencies
  - Symptom: Errors indicating missing modules after cloning or clearing node_modules.
  - Resolution: Reinstall dependencies using npm install.

  **Section sources**
  - [package.json:11-18](file://package.json#L11-L18)

- Static assets not loading
  - Symptom: Blank page or missing styles on the homepage.
  - Resolution: Confirm the public directory is served and the HTML file exists.
  - Reference: Express serves static files from the public directory.

  **Section sources**
  - [src/index.js:14](file://src/index.js#L14)
  - [public/index.html:1-21](file://public/index.html#L1-L21)

- MCP-related configuration warnings
  - Symptom: Warnings about MCP server configuration or GitHub token.
  - Resolution: Review the MCP configuration file if you intend to use Model Context Protocol features. Otherwise, ignore or remove the configuration if not needed.
  - Reference: The MCP configuration defines a GitHub server command and environment variable.

  **Section sources**
  - [.mcp.json:1-12](file://.mcp.json#L1-L12)

## Environment Setup Notes
- Environment variables: The project does not require custom environment variables for basic operation. The Express server reads the PORT from the environment with a fallback to 3000.
- Git ignore: The repository includes a .gitignore that excludes node_modules, logs, IDE folders, and build artifacts. It also excludes .mcp.json to protect sensitive tokens.

**Section sources**
- [src/index.js:9](file://src/index.js#L9)
- [.gitignore:1-25](file://.gitignore#L1-L25)

## Conclusion
You now have the essentials to install, run, and verify the Frankie Picasso project. Use npm install to fetch dependencies, npm run dev to start the development server, and verify both the React UI and API endpoints. If you encounter issues, consult the troubleshooting section and ensure your Node.js version and ports meet the requirements.