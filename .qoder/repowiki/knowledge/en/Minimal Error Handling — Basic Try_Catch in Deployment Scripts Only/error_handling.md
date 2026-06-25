## Overview

This React-based single-page portfolio application has **no formal error handling system**. The codebase lacks error boundaries, custom error types, centralized error logging, or structured error propagation patterns. Error handling is limited to basic try/catch blocks in Python deployment scripts and shell script exit codes.

## What Exists

### 1. Deployment Scripts (Python)
Three Python scripts in `scripts/` use a single, generic try/catch pattern:
- `scripts/check_server.py`
- `scripts/fix_server.py`
- `scripts/setup_server.py`

Each wraps the entire SSH connection logic in:
```python
try:
    # SSH operations
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
```

This is a catch-all pattern that prints the exception message to stderr and exits with code 1. No differentiation between error types, no retry logic, no structured logging.

### 2. Shell Script Error Handling (`scripts/deploy.sh`)
The deployment bash script uses:
- `set -euo pipefail` at the top — causes the script to exit immediately on any command failure, treats unset variables as errors, and propagates failures through pipes.
- A custom `error()` function that prints a colored error message and exits with code 1.
- Manual pre-flight checks using `command -v` to verify tool availability before proceeding.
- Post-build verification checking if the `dist/` directory exists.
- Remote verification via SSH to confirm `index.html` was deployed.

### 3. CI/CD Workflow (`.github/workflows/deploy.yml`)
The GitHub Actions workflow relies on:
- Step-level failure detection (GitHub Actions automatically marks steps as failed on non-zero exit codes).
- Conditional reporting using `if: success()` and `if: failure()` for final status messages.
- Verification step that exits with code 1 if `index.html` is not found after deployment.

## What Is Missing

### React Application (Frontend)
- **No Error Boundaries**: The React app (`src/App.jsx`, `src/main.jsx`) has zero error boundary components. Any runtime error in a component will crash the entire application with no graceful fallback UI.
- **No try/catch anywhere**: None of the React components, hooks (`useGsap.js`, `useScrollReveal.js`, etc.), or data files contain any try/catch blocks, `.catch()` handlers, or Promise error handling.
- **No async error handling**: The application is entirely synchronous/static — it loads content from `src/data/content.js` (a static JS object). There are no API calls, no dynamic imports, no asynchronous operations that could fail.
- **No error state management**: No Redux, Context, or local state for tracking and displaying errors to users.
- **No image error handling**: Components like `PlaceholderImage.jsx` render static SVG placeholders but do not handle actual image loading failures (no `onError` handlers on `<img>` tags).

### General Patterns Not Present
- No custom error classes or error type definitions.
- No error code system.
- No centralized error logging or monitoring (e.g., Sentry, LogRocket).
- No panic/recover mechanism (not applicable to JavaScript, but no equivalent graceful degradation).
- No middleware error handling (no Express/server-side code exists).
- No validation error patterns.

## Developer Conventions (Implicit)

Given the absence of any formal error handling infrastructure, developers working on this codebase should be aware:

1. **The app is static**: Since all content is hardcoded in `src/data/content.js`, there are no runtime data-fetching errors to handle. This simplifies the error surface significantly.

2. **Any new async operations need explicit error handling**: If future development adds API calls, dynamic imports, or other async operations, developers must add try/catch blocks or `.catch()` handlers manually — there is no existing pattern to follow.

3. **Add Error Boundaries for production readiness**: Before adding dynamic features, wrap the app in React Error Boundaries to prevent full-page crashes from component-level errors.

4. **Deployment scripts use bare-minimum error handling**: The Python scripts' catch-all pattern is functional but provides no diagnostic detail beyond the raw exception message. Consider adding more specific exception handling if these scripts grow in complexity.

5. **Shell scripts rely on `set -e`**: The `deploy.sh` script's error handling depends entirely on `set -euo pipefail`. Any command failure halts execution immediately. This is effective for simple scripts but provides no recovery or partial-success handling.

## Key Files

- `scripts/check_server.py` — Generic try/catch for SSH diagnostics
- `scripts/fix_server.py` — Generic try/catch for SSH remediation
- `scripts/setup_server.py` — Generic try/catch for SSH setup
- `scripts/deploy.sh` — Shell script with `set -euo pipefail` and custom `error()` function
- `.github/workflows/deploy.yml` — CI/CD with step-level failure detection
- `src/main.jsx` — No error handling at app entry point
- `src/App.jsx` — No error boundaries or error state
