# 🚀 Production Deployment Guide

## Current Status
- ✅ Frontend: Deployed on Vercel
- ⚠️ Backend: Running locally (needs deployment)
- ⚠️ API URL: Hardcoded to localhost (needs update)

---

## 🎯 Deployment Options

You have **3 options** for deploying the backend:

### **Option 1: Deploy Backend to Vercel (Recommended - Easiest)**
### **Option 2: Deploy Backend to Heroku (Free tier available)**
### **Option 3: Deploy Backend to Railway (Modern alternative)**

---

## 📦 Option 1: Deploy Backend to Vercel (RECOMMENDED)

### Step 1: Prepare Backend for Vercel

Create `vercel.json` in the backend folder:

```bash
cd backend
```

Create file: `backend/vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Step 2: Deploy Backend to Vercel

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy backend
cd backend
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **rscadgroup-backend**
- Directory? **./backend** (or just press Enter if already in backend folder)
- Override settings? **N**

### Step 3: Add Environment Variables to Vercel

After deployment, go to:
1. https://vercel.com/dashboard
2. Select your backend project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Contact@rscadgroup.com
SMTP_PASS=yvgqsguejroqnwpe
RECIPIENT_EMAIL=Hr@rscadgroup.com
PORT=5001
```

### Step 4: Redeploy Backend

```bash
vercel --prod
```

You'll get a URL like: `https://rscadgroup-backend.vercel.app`

### Step 5: Update Frontend API URL

Update `/src/pages/CareerApplication.jsx` line 121:

**Change FROM:**
```javascript
const response = await fetch('http://localhost:5001/api/career/apply', {
```

**Change TO:**
```javascript
const response = await fetch('https://rscadgroup-backend.vercel.app/api/career/apply', {
```

### Step 6: Redeploy Frontend

```bash
# In main project folder
git add .
git commit -m "Update API URL for production"
git push
```

Vercel will automatically redeploy your frontend.

---

## 📦 Option 2: Deploy Backend to Heroku

### Step 1: Install Heroku CLI

```bash
# macOS
brew tap heroku/brew && brew install heroku

# Or download from: https://devcenter.heroku.com/articles/heroku-cli
```

### Step 2: Login and Create App

```bash
heroku login
cd backend
heroku create rscadgroup-backend
```

### Step 3: Add Environment Variables

```bash
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_SECURE=false
heroku config:set SMTP_USER=Contact@rscadgroup.com
heroku config:set SMTP_PASS=yvgqsguejroqnwpe
heroku config:set RECIPIENT_EMAIL=Hr@rscadgroup.com
heroku config:set PORT=5001
```

### Step 4: Create Procfile

Create `backend/Procfile`:
```
web: node server.js
```

### Step 5: Deploy

```bash
cd backend
git init
git add .
git commit -m "Initial backend deployment"
heroku git:remote -a rscadgroup-backend
git push heroku main
```

Your backend will be at: `https://rscadgroup-backend.herokuapp.com`

### Step 6: Update Frontend

Update API URL in `CareerApplication.jsx`:
```javascript
const response = await fetch('https://rscadgroup-backend.herokuapp.com/api/career/apply', {
```

---

## 📦 Option 3: Deploy Backend to Railway

### Step 1: Sign Up & Install CLI

1. Go to https://railway.app
2. Sign up with GitHub
3. Install Railway CLI:

```bash
npm install -g @railway/cli
```

### Step 2: Login and Deploy

```bash
railway login
cd backend
railway init
railway up
```

### Step 3: Add Environment Variables

Go to Railway dashboard → Your project → Variables

Add:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Contact@rscadgroup.com
SMTP_PASS=yvgqsguejroqnwpe
RECIPIENT_EMAIL=Hr@rscadgroup.com
```

### Step 4: Get Your URL

Railway will provide a URL like: `https://rscadgroup-backend.up.railway.app`

### Step 5: Update Frontend

Update API URL in `CareerApplication.jsx`

---

## 🔧 Quick Fix for Production

### Create Environment Variable in Frontend

Instead of hardcoding the API URL, use environment variables:

**1. Create `.env.production` in your main project folder:**

```env
REACT_APP_API_URL=https://rsgroupcad-backend.vercel.app
```

**2. Update `CareerApplication.jsx`:**

```javascript
// At the top of the file
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// In handleSubmit function
const response = await fetch(`${API_URL}/api/career/apply`, {
    method: 'POST',
    body: formDataToSend
});
```

**3. Create `.env.development` for local development:**

```env
REACT_APP_API_URL=http://localhost:5001
```

This way:
- **Local development**: Uses `http://localhost:5001`
- **Production**: Uses your deployed backend URL

---

## ✅ Recommended Deployment Plan

**For Your Setup (Frontend on Vercel):**

1. **Deploy Backend to Vercel** (easiest, same platform)
2. **Add environment variables** to Vercel backend
3. **Update frontend** with backend URL
4. **Push to GitHub** (Vercel auto-deploys)
5. **Test live site**

---

## 🧪 Testing Production Deployment

### Test Backend Health

```bash
curl https://rsgroupcad-backend.vercel.app/api/health
```

Should return:
```json
{"status":"OK","message":"Server is running"}
```

### Test Career Application

```bash
curl -X POST https://rsgroupcad-backend.vercel.app/api/career/apply \
  -F "fullName=Production Test" \
  -F "email=test@example.com" \
  -F "phone=+91 1234567890" \
  -F "currentLocation=Test" \
  -F "experience=1-2 years" \
  -F "position=Test" \
  -F "department=Test"
```

Should return success and send email to Hr@rscadgroup.com

---

## 🔒 Security Checklist

Before going live:

- [ ] ✅ SMTP credentials in environment variables (not in code)
- [ ] ✅ `.env` file in `.gitignore`
- [ ] ✅ CORS configured properly in backend
- [ ] ✅ Rate limiting added (optional but recommended)
- [ ] ✅ Input validation in place
- [ ] ✅ HTTPS enabled (automatic on Vercel/Heroku)

---

## 🚨 Important Notes

### CORS Configuration

Your backend already has CORS enabled:
```javascript
app.use(cors());
```

For production, you might want to restrict it:
```javascript
app.use(cors({
    origin: 'https://your-frontend-domain.vercel.app'
}));
```

### Environment Variables

**NEVER commit these to Git:**
- SMTP_PASS
- Any API keys
- Database credentials

Always use environment variables on the hosting platform.

---

## 📋 Deployment Checklist

### Backend Deployment:
- [ ] Choose hosting platform (Vercel/Heroku/Railway)
- [ ] Deploy backend code
- [ ] Add all environment variables
- [ ] Test health endpoint
- [ ] Test career application endpoint
- [ ] Verify email delivery

### Frontend Update:
- [ ] Update API URL in code or env file
- [ ] Test locally with production backend
- [ ] Commit and push to GitHub
- [ ] Verify Vercel auto-deployment
- [ ] Test live website

### Final Testing:
- [ ] Submit test application from live site
- [ ] Check email received at Hr@rscadgroup.com
- [ ] Test all form fields
- [ ] Test file upload
- [ ] Test shareable links
- [ ] Test on mobile devices

---

## 🎯 Quick Start (Recommended Path)

```bash
# 1. Deploy backend to Vercel
cd backend
npm install -g vercel
vercel login
vercel

# 2. Add environment variables in Vercel dashboard
# (Go to vercel.com → project → settings → environment variables)

# 3. Deploy to production
vercel --prod

# 4. Update frontend API URL
# Edit src/pages/CareerApplication.jsx
# Change localhost:5001 to your-backend.vercel.app

# 5. Push frontend changes
git add .
git commit -m "Update API URL for production"
git push

# 6. Test!
# Visit your Vercel frontend URL and submit a test application
```

---

**Need help with deployment? Let me know which option you choose!** 🚀
