# ✅ Production Deployment Checklist

## 🎉 Backend Deployment - COMPLETE!

✅ **Backend URL:** https://rsgroupcad-backend.vercel.app  
✅ **Health Check:** Working  
✅ **Code Pushed:** Yes  
✅ **Frontend Updated:** Yes  

---

## ⚠️ IMPORTANT: Add Environment Variables to Vercel

### You MUST do this for emails to work in production:

1. **Go to Vercel Dashboard:**
   https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend/settings/environment-variables

2. **Click "Add New" and add these variables ONE BY ONE:**

| Name | Value |
|------|-------|
| SMTP_HOST | smtp.gmail.com |
| SMTP_PORT | 587 |
| SMTP_SECURE | false |
| SMTP_USER | Contact@rscadgroup.com |
| SMTP_PASS | yvgqsguejroqnwpe |
| RECIPIENT_EMAIL | Hr@rscadgroup.com |
| PORT | 5001 |

3. **After adding all variables, click "Redeploy":**
   - Go to: https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend
   - Click the three dots (⋯) on the latest deployment
   - Click "Redeploy"
   - Wait for deployment to complete

---

## 🧪 Testing Production

### Test 1: Health Check
```bash
curl https://rsgroupcad-backend.vercel.app/api/health
```

**Expected:** `{"status":"OK","message":"Server is running"}`  
**Status:** ✅ WORKING

### Test 2: Career Application (After adding env vars)
```bash
curl -X POST https://rsgroupcad-backend.vercel.app/api/career/apply \
  -F "fullName=Production Test" \
  -F "email=test@example.com" \
  -F "phone=+91 9876543210" \
  -F "currentLocation=Test City" \
  -F "experience=1-2 years" \
  -F "position=Permit Designer" \
  -F "department=Test"
```

**Expected:** `{"success":true,"message":"Application submitted successfully",...}`  
**Status:** ⏳ PENDING (needs env vars)

### Test 3: Live Website
1. Go to your Vercel frontend URL
2. Navigate to `/career` page
3. Click "Apply Now" on any position
4. Fill and submit the form
5. Check **Hr@rscadgroup.com** for email

**Status:** ⏳ PENDING (needs env vars)

---

## 📊 Deployment Status

### Backend:
- ✅ Deployed to Vercel
- ✅ Health endpoint working
- ⚠️ Environment variables needed
- ⏳ SMTP pending env vars

### Frontend:
- ✅ Deployed to Vercel
- ✅ API URL updated
- ✅ Code pushed
- ✅ Auto-deployed by Vercel

---

## 🔗 Important URLs

**Backend:**
- Production: https://rsgroupcad-backend.vercel.app
- Dashboard: https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend
- Settings: https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend/settings/environment-variables

**Frontend:**
- Production: (Your Vercel frontend URL)
- Dashboard: https://vercel.com/dineshappdevelopers-projects/rsgroupcad

**Email:**
- Recipient: Hr@rscadgroup.com
- Sender: Contact@rscadgroup.com

---

## 🎯 Next Steps (IN ORDER)

1. ✅ ~~Deploy backend to Vercel~~ **DONE**
2. ✅ ~~Update frontend .env.production~~ **DONE**
3. ✅ ~~Push code to GitHub~~ **DONE**
4. ⚠️ **ADD ENVIRONMENT VARIABLES TO VERCEL** ← **DO THIS NOW**
5. ⏳ Redeploy backend after adding env vars
6. ⏳ Test production career form
7. ⏳ Verify email delivery

---

## 🚨 Critical: Environment Variables

**WITHOUT environment variables, the backend will:**
- ❌ NOT send emails
- ❌ Return SMTP authentication errors
- ✅ Still accept form submissions
- ✅ Fall back to mailto (opens email client)

**WITH environment variables, the backend will:**
- ✅ Send professional HTML emails
- ✅ Include all form data
- ✅ Attach resume files
- ✅ Deliver to Hr@rscadgroup.com

---

## 📝 Quick Commands

### Check backend status:
```bash
curl https://rsgroupcad-backend.vercel.app/api/health
```

### Test email (after env vars):
```bash
curl -X POST https://rsgroupcad-backend.vercel.app/api/career/apply \
  -F "fullName=Test" \
  -F "email=test@test.com" \
  -F "phone=123" \
  -F "currentLocation=Test" \
  -F "experience=1-2 years" \
  -F "position=Test" \
  -F "department=Test"
```

### View backend logs:
Go to: https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend
Click on latest deployment → "Logs" tab

---

## ✅ Success Criteria

Your deployment is complete when:
- [ ] Backend health check returns OK
- [ ] Environment variables added to Vercel
- [ ] Backend redeployed after env vars
- [ ] Test email sent successfully
- [ ] Email received at Hr@rscadgroup.com
- [ ] Live website form works
- [ ] No errors in Vercel logs

---

## 🎉 You're Almost There!

**Just add the environment variables and you're done!**

1. Go to: https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend/settings/environment-variables
2. Add all 7 variables listed above
3. Click "Redeploy"
4. Test the form!

---

**Need help? Check the logs at:**
https://vercel.com/dineshappdevelopers-projects/rsgroupcad-backend
