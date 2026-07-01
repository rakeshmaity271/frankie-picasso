The repository utilizes **npm** as its primary package manager for dependency management, orchestrated through a standard Node.js project structure. The build system is powered by **Vite**, which handles both development server operations and production bundling.

### Dependency Declaration
Dependencies are declared in `package.json`, strictly separated into two categories:
- **`dependencies`**: Runtime libraries required for the application to function in production. This includes core React libraries (`react`, `react-dom`), animation tools (`gsap`, `@gsap/react`), and CSS resets (`normalize.css`).
- **`devDependencies`**: Tools used only during development and build processes. This includes the build tool itself (`vite`) and the React plugin for Vite (`@vitejs/plugin-react`).

### Versioning and Locking
- **Lockfile Strategy**: The project uses `package-lock.json` (lockfileVersion 3) to ensure deterministic installs. This file locks the exact versions of all direct and transitive dependencies, ensuring that every developer and deployment environment installs identical package trees.
- **Version Constraints**: Direct dependencies in `package.json` use caret (`^`) versioning (e.g., `^18.3.1`), allowing npm to automatically update to minor and patch releases that are backward-compatible, while preventing major version jumps that might introduce breaking changes.

### Installation and Scripts
- **Installation**: Dependencies are installed via `npm install`, which reads `package.json` and resolves versions against `package-lock.json`.
- **Scripts**: The `package.json` `scripts` section defines standardized commands:
  - `npm run dev`: Starts the Vite development server.
  - `npm run build`: Compiles the application for production using Vite.
  - `npm run preview`: Locally serves the production build for verification.

### Vendor Strategy
- **No Vendoring**: The project does not vendor dependencies (i.e., there is no `vendor/` directory). All third-party code is stored in `node_modules/`, which is excluded from version control via `.gitignore`.
- **Private Registries**: There is no configuration for private registries (such as `.npmrc` or `GOPRIVATE`). All dependencies are resolved from the public npm registry (`registry.npmjs.org`).

### Developer Conventions
1. **Commit Lockfiles**: Always commit `package-lock.json` to maintain consistency across environments.
2. **Ignore node_modules**: Never commit `node_modules/`; rely on `package.json` and `package-lock.json` for reconstruction.
3. **Use NPM Scripts**: Prefer `npm run dev` and `npm run build` over invoking Vite directly to ensure consistent environment variable loading and configuration usage.