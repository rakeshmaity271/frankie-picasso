#!/bin/bash

# Frankie Picasso - Manual Deployment Script
# This script builds the project locally and deploys to production server

set -e  # Exit on any error

# Configuration
SERVER_HOST="194.163.151.182"
SERVER_USER="root"
SERVER_PATH="/home/kodeclouds-frankie-picasso/htdocs/frankie-picasso.kodeclouds.com"
LOCAL_DIST="./dist"

echo "=========================================="
echo "Frankie Picasso - Deployment Script"
echo "=========================================="
echo ""

# Step 1: Clean build
echo " Step 1: Building project..."
rm -rf dist/
npm run build

if [ ! -d "$LOCAL_DIST" ]; then
    echo "❌ Build failed: dist/ directory not created"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Step 2: Verify build output
echo "📦 Step 2: Verifying build output..."
if [ ! -f "$LOCAL_DIST/index.html" ]; then
    echo "❌ index.html not found in dist/"
    exit 1
fi

if [ ! -d "$LOCAL_DIST/assets" ]; then
    echo "❌ assets/ directory not found in dist/"
    exit 1
fi

echo "✅ Build output verified"
echo ""

# Step 3: Deploy to server
echo "🚀 Step 3: Deploying to server..."
echo "   Server: $SERVER_USER@$SERVER_HOST"
echo "   Path: $SERVER_PATH"
echo ""

# Clear remote dist contents first
ssh $SERVER_USER@$SERVER_HOST "rm -rf $SERVER_PATH/assets/* $SERVER_PATH/index.html"

# Copy new files
scp -r $LOCAL_DIST/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

echo "✅ Files deployed"
echo ""

# Step 4: Verify deployment
echo "🔍 Step 4: Verifying deployment..."
ssh $SERVER_USER@$SERVER_HOST "ls -lah $SERVER_PATH/index.html $SERVER_PATH/assets/index-*.js"

echo ""
echo "=========================================="
echo "✅ Deployment Complete!"
echo "=========================================="
echo ""
echo "🌐 Visit: https://frankie-picasso.kodeclouds.com/"
echo ""
echo "💡 Remember to do a hard refresh (Ctrl+Shift+R) in your browser"
echo ""
