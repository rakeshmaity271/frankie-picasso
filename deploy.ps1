# Frankie Picasso - Manual Deployment Script (PowerShell)
# This script builds the project locally and deploys to production server

$ErrorActionPreference = "Stop"

# Configuration
$SERVER_HOST = "194.163.151.182"
$SERVER_USER = "root"
$SERVER_PATH = "/home/kodeclouds-frankie-picasso/htdocs/frankie-picasso.kodeclouds.com"
$LOCAL_DIST = "./dist"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Frankie Picasso - Deployment Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean build
Write-Host " Step 1: Building project..." -ForegroundColor Yellow
if (Test-Path $LOCAL_DIST) {
    Remove-Item -Recurse -Force $LOCAL_DIST
}
npm run build

if (-not (Test-Path $LOCAL_DIST)) {
    Write-Host "❌ Build failed: dist/ directory not created" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Step 2: Verify build output
Write-Host "📦 Step 2: Verifying build output..." -ForegroundColor Yellow
if (-not (Test-Path "$LOCAL_DIST/index.html")) {
    Write-Host "❌ index.html not found in dist/" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "$LOCAL_DIST/assets")) {
    Write-Host "❌ assets/ directory not found in dist/" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build output verified" -ForegroundColor Green
Write-Host ""

# Step 3: Deploy to server
Write-Host "🚀 Step 3: Deploying to server..." -ForegroundColor Yellow
Write-Host "   Server: ${SERVER_USER}@${SERVER_HOST}" -ForegroundColor Gray
Write-Host "   Path: $SERVER_PATH" -ForegroundColor Gray
Write-Host ""

# Clear remote files first
Write-Host "   Clearing old files..." -ForegroundColor Gray
ssh ${SERVER_USER}@${SERVER_HOST} "rm -rf ${SERVER_PATH}/assets/* ${SERVER_PATH}/index.html"

# Copy new files using scp
Write-Host "   Copying new files..." -ForegroundColor Gray
scp -r ${LOCAL_DIST}/* ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

Write-Host "✅ Files deployed" -ForegroundColor Green
Write-Host ""

# Step 4: Verify deployment
Write-Host "🔍 Step 4: Verifying deployment..." -ForegroundColor Yellow
ssh ${SERVER_USER}@${SERVER_HOST} "ls -lah ${SERVER_PATH}/index.html ${SERVER_PATH}/assets/index-*.js"

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Visit: https://frankie-picasso.kodeclouds.com/" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 Remember to do a hard refresh (Ctrl+Shift+R) in your browser" -ForegroundColor Yellow
Write-Host ""
