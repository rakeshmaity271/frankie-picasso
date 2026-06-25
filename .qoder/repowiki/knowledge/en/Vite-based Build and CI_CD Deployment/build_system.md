The Frankie Picasso Personal Brand Platform uses a modern, lightweight build system centered around **Vite** for local development and production bundling, with a **GitHub Actions** CI/CD pipeline for automated deployment.

### Build System & Tools
- **Bundler**: Vite v6 is used as the primary build tool, leveraging `@vitejs/plugin-react` for React support.
- **Package Manager**: npm is used for dependency management (`package-lock.json` present).
- **Runtime**: Node.js 20 is the specified runtime environment in CI.

### Key Build Commands
Defined in `package.json`:
- `npm run dev`: Starts the local development server on port 3000 with auto-open.
- `npm run build`: Compiles the application into static assets in the `dist/` directory.
- `npm run preview`: Locally previews the production build.

### CI/CD Pipeline
The project employs a GitHub Actions workflow (`.github/workflows/deploy.yml`) triggered on pushes to the `dev` branch:
1. **Checkout & Setup**: Checks out code and sets up Node.js 20 with npm caching.
2. **Install & Build**: Runs `npm ci` for clean installs and `npm run build` to generate static assets.
3. **Verification**: Checks for the existence of the `dist/` directory.
4. **Deployment**: Uses `appleboy/scp-action` to securely copy the `dist/` contents to a remote server via SSH.
5. **Post-Deploy Verification**: Uses `appleboy/ssh-action` to verify that `index.html` exists on the remote server.

### Local Deployment Script
A manual deployment script (`scripts/deploy.sh`) is provided for local execution, mirroring the CI steps:
- Performs pre-flight checks for Node, npm, and SSH.
- Builds the project using `npm ci` and `npm run build`.
- Uses `rsync` over SSH to sync the `dist/` folder to the remote server, ensuring efficient updates.
- Verifies the remote deployment by checking for `index.html`.

### Architecture & Conventions
- **Static Site Generation**: The build process produces a static single-page application (SPA) hosted on a traditional web server (Apache/Nginx implied by `htdocs` path).
- **Environment Secrets**: Server credentials (host, user, SSH key) are managed via GitHub Secrets for CI and hardcoded (with warnings for local use) in the deploy script.
- **Concurrency Control**: The CI pipeline uses concurrency groups to prevent simultaneous deployments to production.
- **Output Directory**: All build artifacts are consolidated into the `dist/` directory, which is ignored by git (implied by standard Vite behavior and `.gitignore` patterns).

### Developer Rules
- **Branching Strategy**: Pushes to the `dev` branch trigger automatic production deployments. Developers should ensure code is production-ready before pushing to `dev`.
- **Local Testing**: Always run `npm run build` and `npm run preview` locally to verify build integrity before pushing.
- **Secrets Management**: Never commit server credentials or SSH keys. Use GitHub Secrets for CI and ensure local `deploy.sh` is not shared with sensitive data if modified.