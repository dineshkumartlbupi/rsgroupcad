# ⚠️ SMTP Authentication Troubleshooting

## Current Issue
Gmail is rejecting the login credentials with error:
```
535-5.7.8 Username and Password not accepted
```

## Possible Causes & Solutions

### 1. App Password Account Mismatch ⚠️

**Problem:** The app password was generated for **connectionrscadgroup.com** but we need to send from **Hr@rscadgroup.com**

**Solution Options:**

#### Option A: Generate App Password for Hr@rscadgroup.com (Recommended)
1. Sign out from current Google account
2. Sign in to **Hr@rscadgroup.com**
3. Go to: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (without spaces)
6. Update `/backend/.env`:
   ```env
   SMTP_USER=Hr@rscadgroup.com
   SMTP_PASS=new_app_password_here
   ```

#### Option B: Use connection@rscadgroup.com to Send
If you want to send FROM connection@rscadgroup.com:
1. Update `/backend/.env`:
   ```env
   SMTP_USER=connection@rscadgroup.com
   SMTP_PASS=yvgqsguejroqnwpe
   RECIPIENT_EMAIL=Hr@rscadgroup.com
   ```
2. Update `/backend/server.js` line 260:
   ```javascript
   from: `"RS Solar CAD Career Portal" <connection@rscadgroup.com>`,
   ```

---

### 2. App Password Not Enabled

**Check:**
- Is 2-Factor Authentication enabled on the account?
- Was the app password generated successfully?

**Fix:**
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification if not enabled
3. Then go to: https://myaccount.google.com/apppasswords
4. Generate new app password

---

### 3. Workspace Account Restrictions

**If using Google Workspace (rscadgroup.com domain):**

Your admin might have disabled "Less secure app access" or "App passwords"

**Fix:**
1. Contact your Google Workspace admin
2. Ask them to enable "App passwords" for your account
3. Or ask them to enable "Less secure app access"

**Admin Settings:**
- Go to: https://admin.google.com
- Security → API Controls → App access control
- Enable "Allow users to manage their access to less secure apps"

---

### 4. Try Different SMTP Settings

**For Google Workspace accounts, try:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=Hr@rscadgroup.com
SMTP_PASS=your_app_password
```

Or:

```env
SMTP_HOST=smtp-relay.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

---

## Quick Test Commands

### Test Current Configuration
```bash
curl -X POST http://localhost:5001/api/career/apply \
  -F "fullName=Test" \
  -F "email=test@test.com" \
  -F "phone=123" \
  -F "currentLocation=Test" \
  -F "experience=1-2 years" \
  -F "position=Test" \
  -F "department=Test"
```

### Check Backend Logs
Look at the terminal where backend is running for detailed error messages.

---

## Alternative: Use Mailto Fallback

If SMTP continues to fail, the system will automatically fall back to opening the user's email client.

**This works without any SMTP configuration!**

The form will:
1. Collect all data
2. Show an error message
3. Open email client with pre-filled data
4. User clicks "Send"

---

## Recommended Next Steps

1. **Verify which email account the app password belongs to**
   - Check the Google account page screenshot
   - The account shown is: connectionrscadgroup.com

2. **Generate app password for the CORRECT account**
   - If sending from Hr@rscadgroup.com → generate password for that account
   - If sending from connection@rscadgroup.com → use existing password

3. **Update .env file with correct credentials**

4. **Test again**

---

## Current Configuration

Based on your screenshot, you're logged in as:
- **Email:** connectionrscadgroup.com (managed by rscadgroup.com)
- **App Password:** yvgqsguejroqnwpe

**We're trying to send FROM:** Hr@rscadgroup.com  
**We're trying to send TO:** Hr@rscadgroup.com

**This is the mismatch!** ⚠️

---

## Quick Fix

**Choose ONE:**

### Option 1: Send from connection@rscadgroup.com
Update `/backend/.env`:
```env
SMTP_USER=connection@rscadgroup.com
SMTP_PASS=yvgqsguejroqnwpe
RECIPIENT_EMAIL=Hr@rscadgroup.com
```

### Option 2: Generate new password for Hr@rscadgroup.com
1. Sign in to Hr@rscadgroup.com
2. Generate app password
3. Update .env with new password

---

**Need Help?** Check the backend terminal logs for specific error messages.
