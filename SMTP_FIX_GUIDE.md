# 🔧 SMTP Configuration Issue - Quick Fix Guide

## ❌ Current Problem

The career application form is failing with error:
```
Error: Invalid login: Username and Password not accepted
```

This means the SMTP email credentials are not properly configured.

## ✅ Solution

You have **TWO OPTIONS**:

---

### **Option 1: Configure SMTP (Recommended for Production)**

1. **Open the file:** `/backend/.env`

2. **Update with your email provider's settings:**

#### For Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Hr@rscadgroup.com
SMTP_PASS=your_16_character_app_password_here
RECIPIENT_EMAIL=Hr@rscadgroup.com
PORT=5001
```

**Important for Gmail:**
- You MUST use an **App Password**, not your regular password
- Generate one at: https://myaccount.google.com/apppasswords
- Enable 2-Factor Authentication first
- Copy the 16-character password (no spaces)

#### For Other Email Providers:
See `CUSTOM_SMTP_SETUP.md` for detailed instructions for:
- Outlook/Office 365
- Yahoo
- Custom domain email
- Other providers

3. **Save the `.env` file**

4. **Restart the backend server:**
   - Stop the current backend (Ctrl+C in the backend terminal)
   - Run: `cd backend && npm run dev`

5. **Test the form again** - it should now send emails automatically!

---

### **Option 2: Use Mailto Fallback (Quick Test)**

The form will automatically fall back to opening your email client if SMTP fails.

**How it works:**
1. Fill out the career application form
2. Click "Submit Application"
3. When it fails, it will show an alert
4. Your default email client will open with the application pre-filled
5. Just click Send in your email client

**This is good for:**
- Quick testing
- When you don't want to configure SMTP
- Temporary solution

---

## 🧪 Testing After Configuration

1. Go to: `http://localhost:3001/career`
2. Click "Apply Now" on any position
3. Fill out the form
4. Click "Submit Application"
5. Check for success message
6. Check `Hr@rscadgroup.com` inbox for the email

---

## 🔍 Troubleshooting

### Still getting errors?

**Check backend logs:**
```bash
# Look at the terminal where backend is running
# You should see either:
✅ Email sent successfully: <message-id>
# OR
❌ Error sending email: <error details>
```

**Common issues:**

1. **"Invalid login"** → Wrong password or need App Password
2. **"Connection timeout"** → Wrong SMTP host or port
3. **"Self-signed certificate"** → Already handled in code
4. **"EAUTH"** → Authentication failed, check credentials

### Need more help?

See the comprehensive guide: `CUSTOM_SMTP_SETUP.md`

---

## 📊 Current System Status

- ✅ Backend server: Running on port 5001
- ✅ Frontend: Running on port 3001
- ✅ Form: Working and accessible
- ⚠️ SMTP: **Needs configuration**
- ✅ Fallback: mailto working

---

## 🎯 Quick Commands

```bash
# Check if backend is running
curl http://localhost:5001/api/health

# Restart backend after .env changes
cd backend
npm run dev

# View backend logs
# Just look at the terminal where backend is running
```

---

**Choose Option 1 for production use, or Option 2 for quick testing!**
