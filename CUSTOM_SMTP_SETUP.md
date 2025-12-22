# Custom SMTP Setup Guide for RS Solar CAD Group

## 🎯 Overview
This guide will help you set up a custom SMTP server to send career application emails directly to **Hr@rscadgroup.com** using your own email server.

---

## 📋 Prerequisites
- Node.js installed (v14 or higher)
- Access to your email account's SMTP settings
- Email password or app-specific password

---

## 🚀 Quick Start

### Step 1: Configure SMTP Settings

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create a `.env` file by copying the example:
   ```bash
   cp .env.example .env
   ```

3. Open `.env` and configure your SMTP settings:

---

## 📧 SMTP Configuration Options

### Option 1: Gmail (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Hr@rscadgroup.com
SMTP_PASS=your_app_password_here
RECIPIENT_EMAIL=Hr@rscadgroup.com
PORT=5000
```

**Important for Gmail:**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this password in `SMTP_PASS`

### Option 2: Microsoft Outlook/Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Hr@rscadgroup.com
SMTP_PASS=your_password_here
RECIPIENT_EMAIL=Hr@rscadgroup.com
PORT=5000
```

### Option 3: Custom Domain Email (cPanel/Plesk)

```env
SMTP_HOST=mail.rscadgroup.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Hr@rscadgroup.com
SMTP_PASS=your_email_password
RECIPIENT_EMAIL=Hr@rscadgroup.com
PORT=5000
```

**To find your SMTP settings:**
- Check your hosting provider's documentation
- Common hosts: cPanel, Plesk, Hostinger, GoDaddy, etc.
- Usually found in Email Settings or Email Accounts section

### Option 4: Other Email Providers

| Provider | SMTP Host | Port | Secure |
|----------|-----------|------|--------|
| Yahoo | smtp.mail.yahoo.com | 587 | false |
| Zoho | smtp.zoho.com | 587 | false |
| SendGrid | smtp.sendgrid.net | 587 | false |
| Mailgun | smtp.mailgun.org | 587 | false |

---

## 🔧 Installation & Running

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Start the Backend Server

**For Development (with auto-reload):**
```bash
npm run dev
```

**For Production:**
```bash
npm start
```

You should see:
```
✅ Server is running on port 5000
📧 SMTP configured for: Hr@rscadgroup.com
```

### 3. Keep Backend Running

The backend server must be running for emails to work. You have two options:

**Option A: Run in Terminal (Development)**
```bash
cd backend
npm run dev
```

**Option B: Run as Background Service (Production)**

Using PM2 (recommended for production):
```bash
# Install PM2 globally
npm install -g pm2

# Start the server
cd backend
pm2 start server.js --name "rscad-backend"

# View logs
pm2 logs rscad-backend

# Stop the server
pm2 stop rscad-backend

# Restart the server
pm2 restart rscad-backend
```

---

## 🧪 Testing the Setup

### 1. Test Backend Health

Open your browser and go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### 2. Test Email Sending

1. Make sure both servers are running:
   - Frontend: `npm run dev` (in main folder)
   - Backend: `npm run dev` (in backend folder)

2. Go to your career page: `http://localhost:5173/career`

3. Click "Apply Now" on any position

4. Fill out the form and submit

5. Check your email inbox at **Hr@rscadgroup.com**

---

## 📁 Project Structure

```
rsgroupcad/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies
│   ├── .env              # Your SMTP credentials (DO NOT COMMIT)
│   └── .env.example      # Template for .env
├── src/
│   └── pages/
│       └── CareerApplication.jsx  # Frontend form
└── package.json
```

---

## 🔒 Security Best Practices

### 1. Protect Your .env File

Add to `.gitignore`:
```
backend/.env
```

### 2. Use App Passwords

- Never use your main email password
- Always use app-specific passwords when available

### 3. Environment Variables for Production

For deployment, use environment variables instead of .env file:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- Heroku: Settings → Config Vars

---

## 🌐 Production Deployment

### Option 1: Deploy Backend to Heroku

1. Create a Heroku account
2. Install Heroku CLI
3. Deploy:
   ```bash
   cd backend
   heroku create rscad-backend
   heroku config:set SMTP_HOST=your_smtp_host
   heroku config:set SMTP_PORT=587
   heroku config:set SMTP_USER=Hr@rscadgroup.com
   heroku config:set SMTP_PASS=your_password
   git push heroku main
   ```

4. Update frontend API URL in `CareerApplication.jsx`:
   ```javascript
   const response = await fetch('https://rscad-backend.herokuapp.com/api/career/apply', {
   ```

### Option 2: Deploy Backend to Vercel

1. Create `vercel.json` in backend folder:
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
     ]
   }
   ```

2. Deploy:
   ```bash
   cd backend
   vercel
   ```

3. Add environment variables in Vercel dashboard

---

## 🐛 Troubleshooting

### Email Not Sending?

**Check 1: Backend Running?**
```bash
curl http://localhost:5000/api/health
```

**Check 2: SMTP Credentials Correct?**
- Verify SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- Check for typos in .env file

**Check 3: Firewall/Port Issues?**
- Port 587 should be open
- Try port 465 with SMTP_SECURE=true

**Check 4: Check Backend Logs**
```bash
# In backend folder
npm run dev
# Watch for error messages
```

### Common Errors

**"Invalid login"**
- Wrong email/password
- Need to use app password (Gmail)
- 2FA enabled but no app password

**"Connection timeout"**
- Firewall blocking port 587/465
- Wrong SMTP host
- Network issues

**"Self-signed certificate"**
- Add to server.js (already included):
  ```javascript
  tls: {
    rejectUnauthorized: false
  }
  ```

### CORS Errors?

If you see CORS errors in browser console:
1. Backend already has CORS enabled
2. Make sure backend is running on port 5000
3. Frontend should call `http://localhost:5000/api/career/apply`

---

## 📊 Email Features

Your custom SMTP setup includes:

✅ Professional HTML email templates  
✅ Resume file attachments (up to 5MB)  
✅ All form data included  
✅ Automatic timestamps  
✅ Clickable links (email, phone, LinkedIn, portfolio)  
✅ Beautiful formatting with company branding  
✅ Fallback to mailto if backend fails  

---

## 💡 Tips

1. **For Development**: Use Gmail with app password
2. **For Production**: Use your domain email (mail.rscadgroup.com)
3. **Keep Backend Running**: Use PM2 or similar process manager
4. **Monitor Emails**: Check backend logs regularly
5. **Test Regularly**: Send test applications to verify setup

---

## 📞 Support

### Need Help?

1. Check backend logs for error messages
2. Verify all SMTP settings are correct
3. Test with Gmail first (easier to set up)
4. Check spam folder in recipient email

### Resources

- Nodemailer Documentation: https://nodemailer.com/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
- PM2 Documentation: https://pm2.keymetrics.io/

---

## ✅ Checklist

Before going live, ensure:

- [ ] Backend .env file configured with correct SMTP settings
- [ ] Backend server starts without errors
- [ ] Health check endpoint returns OK
- [ ] Test email sent successfully
- [ ] Email received in Hr@rscadgroup.com inbox
- [ ] Resume attachment works
- [ ] .env file added to .gitignore
- [ ] Production backend deployed (if needed)
- [ ] Frontend API URL updated for production

---

**🎉 You're all set! Your custom SMTP email system is ready to receive job applications!**
