#!/bin/bash

echo "🚀 RS Solar CAD Group - Backend Deployment Script"
echo ""
echo "This script will help you deploy the backend to Vercel"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📦 Deploying backend to Vercel..."
echo ""

cd backend

# Deploy to Vercel
vercel --prod

echo ""
echo "✅ Backend deployed!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Select your backend project"
echo "3. Go to Settings → Environment Variables"
echo "4. Add the variables from backend/.env.production.template"
echo "5. Redeploy: vercel --prod"
echo "6. Copy your backend URL"
echo "7. Update .env.production with your backend URL"
echo "8. Push frontend changes to trigger Vercel deployment"
echo ""
echo "🎉 Done!"
