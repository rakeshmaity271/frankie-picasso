#!/usr/bin/env bash
#
# Manual deployment script for Frankie Picasso
# Usage: bash scripts/deploy.sh
#
# Prerequisites:
#   - SSH key configured for server access
#   - npm and Node.js installed locally
#
set -euo pipefail

# ── Configuration ───────────────────────────────────────────────
SERVER_HOST="194.163.151.182"
SERVER_USER="root"
SERVER_PORT="22"
PROJECT_PATH="/home/kodeclouds-frankie-picasso/htdocs/frankie-picasso.kodeclouds.com"

# ── Colors ──────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ── Pre-flight checks ──────────────────────────────────────────
info "Running pre-flight checks..."

command -v node >/dev/null 2>&1 || error "Node.js is not installed"
command -v npm  >/dev/null 2>&1 || error "npm is not installed"
command -v ssh  >/dev/null 2>&1 || error "SSH is not available"

info "Node $(node --version) | npm $(npm --version)"

# ── Build ───────────────────────────────────────────────────────
info "Installing dependencies..."
npm ci

info "Building production bundle..."
npm run build

if [ ! -d "dist" ]; then
  error "Build failed: dist/ directory not found"
fi

info "Build output: $(du -sh dist | cut -f1)"

# ── Deploy ──────────────────────────────────────────────────────
info "Deploying to ${SERVER_USER}@${SERVER_HOST}:${PROJECT_PATH}"

# Create target directory if it doesn't exist
ssh -p "$SERVER_PORT" "${SERVER_USER}@${SERVER_HOST}" \
  "mkdir -p ${PROJECT_PATH}"

# Sync dist/ contents to server (preserves existing files outside dist)
rsync -avz --delete \
  --exclude='.env' \
  --exclude='storage/' \
  -e "ssh -p ${SERVER_PORT}" \
  dist/ \
  "${SERVER_USER}@${SERVER_HOST}:${PROJECT_PATH}/"

# ── Verify ──────────────────────────────────────────────────────
info "Verifying deployment..."

ssh -p "$SERVER_PORT" "${SERVER_USER}@${SERVER_HOST}" bash <<'REMOTE'
  PROJECT_PATH="${PROJECT_PATH:-/home/kodeclouds-frankie-picasso/htdocs/frankie-picasso.kodeclouds.com}"
  if [ -f "$PROJECT_PATH/index.html" ]; then
    echo "✓ index.html found"
    echo "✓ Files: $(ls -1 $PROJECT_PATH | wc -l) items"
    echo "✓ Deployed at: $(date)"
  else
    echo "✗ index.html NOT found — deployment may have failed"
    exit 1
  fi
REMOTE

info "Deployment complete! → https://frankie-picasso.kodeclouds.com"
