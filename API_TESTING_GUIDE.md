# API Testing Guide - Postman & cURL Commands

## 📋 Backend API Endpoints

Base URL: `http://localhost:5001`

---

## 1️⃣ Health Check Endpoint

### Description
Check if the backend server is running properly.

### cURL Command
```bash
curl --location 'http://localhost:5001/api/health'
```

### Expected Response
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Postman Setup
- **Method:** GET
- **URL:** `http://localhost:5001/api/health`
- **Headers:** None required
- **Body:** None

---

## 2️⃣ Submit Career Application (Without File)

### Description
Submit a career application without resume attachment.

### cURL Command
```bash
curl --location 'http://localhost:5001/api/career/apply' \
--form 'fullName="John Smith"' \
--form 'email="john.smith@example.com"' \
--form 'phone="+91 98765 43210"' \
--form 'currentLocation="Bangalore, Karnataka, India"' \
--form 'experience="2-3 years"' \
--form 'currentCompany="Solar Design Inc"' \
--form 'noticePeriod="30 days"' \
--form 'expectedSalary="₹6-8 LPA"' \
--form 'linkedinProfile="https://linkedin.com/in/johnsmith"' \
--form 'portfolioLink="https://drive.google.com/myportfolio"' \
--form 'coverLetter="I am excited to apply for the Permit Designer position at RS Solar CAD Group. With 2+ years of experience in solar permit design and proficiency in AutoCAD and Aurora Solar, I am confident I can contribute to your team'\''s success."' \
--form 'position="Permit Designer"' \
--form 'department="Permitting & Compliance"'
```

### Expected Response (Success)
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "messageId": "some-message-id"
}
```

### Expected Response (SMTP Not Configured)
```json
{
  "success": false,
  "message": "SMTP authentication failed. Please configure your email credentials in the backend .env file.",
  "error": "SMTP_NOT_CONFIGURED",
  "details": "The email server rejected the login credentials. Please check SMTP_USER and SMTP_PASS in backend/.env file.",
  "helpUrl": "See CUSTOM_SMTP_SETUP.md for configuration instructions"
}
```

### Postman Setup
- **Method:** POST
- **URL:** `http://localhost:5001/api/career/apply`
- **Headers:** 
  - Content-Type: `multipart/form-data` (auto-set by Postman)
- **Body:** 
  - Select `form-data`
  - Add the following key-value pairs:

| Key | Value | Type |
|-----|-------|------|
| fullName | John Smith | Text |
| email | john.smith@example.com | Text |
| phone | +91 98765 43210 | Text |
| currentLocation | Bangalore, Karnataka, India | Text |
| experience | 2-3 years | Text |
| currentCompany | Solar Design Inc | Text |
| noticePeriod | 30 days | Text |
| expectedSalary | ₹6-8 LPA | Text |
| linkedinProfile | https://linkedin.com/in/johnsmith | Text |
| portfolioLink | https://drive.google.com/myportfolio | Text |
| coverLetter | I am excited to apply for the Permit Designer position... | Text |
| position | Permit Designer | Text |
| department | Permitting & Compliance | Text |

---

## 3️⃣ Submit Career Application (With Resume File)

### Description
Submit a career application with resume attachment.

### cURL Command
```bash
curl --location 'http://localhost:5001/api/career/apply' \
--form 'fullName="John Smith"' \
--form 'email="john.smith@example.com"' \
--form 'phone="+91 98765 43210"' \
--form 'currentLocation="Bangalore, Karnataka, India"' \
--form 'experience="2-3 years"' \
--form 'currentCompany="Solar Design Inc"' \
--form 'noticePeriod="30 days"' \
--form 'expectedSalary="₹6-8 LPA"' \
--form 'linkedinProfile="https://linkedin.com/in/johnsmith"' \
--form 'portfolioLink="https://drive.google.com/myportfolio"' \
--form 'coverLetter="I am excited to apply for the Permit Designer position at RS Solar CAD Group."' \
--form 'position="Permit Designer"' \
--form 'department="Permitting & Compliance"' \
--form 'resume=@"/path/to/your/resume.pdf"'
```

**Note:** Replace `/path/to/your/resume.pdf` with the actual path to a PDF file on your system.

### Postman Setup
- **Method:** POST
- **URL:** `http://localhost:5001/api/career/apply`
- **Body:** 
  - Select `form-data`
  - Add all fields from previous example
  - For `resume` field:
    - Change type from "Text" to "File"
    - Click "Select Files" and choose a PDF/DOC/DOCX file

---

## 4️⃣ Test Fresher CAD Designer Position

### cURL Command
```bash
curl --location 'http://localhost:5001/api/career/apply' \
--form 'fullName="Jane Doe"' \
--form 'email="jane.doe@example.com"' \
--form 'phone="+91 87654 32109"' \
--form 'currentLocation="Mumbai, Maharashtra, India"' \
--form 'experience="0-1 years"' \
--form 'currentCompany="N/A"' \
--form 'noticePeriod="Immediate"' \
--form 'expectedSalary="₹3-4 LPA"' \
--form 'linkedinProfile="https://linkedin.com/in/janedoe"' \
--form 'portfolioLink=""' \
--form 'coverLetter="As a fresh graduate with a passion for CAD design and renewable energy, I am eager to start my career with RS Solar CAD Group."' \
--form 'position="Fresher CAD Designer"' \
--form 'department="Design & Engineering"'
```

---

## 📦 Postman Collection JSON

Save this as `RS_CAD_Career_API.postman_collection.json`:

```json
{
  "info": {
    "name": "RS Solar CAD Group - Career API",
    "description": "API endpoints for career application submission",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:5001/api/health",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5001",
          "path": ["api", "health"]
        }
      }
    },
    {
      "name": "Submit Application - Permit Designer",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": [
            {"key": "fullName", "value": "John Smith", "type": "text"},
            {"key": "email", "value": "john.smith@example.com", "type": "text"},
            {"key": "phone", "value": "+91 98765 43210", "type": "text"},
            {"key": "currentLocation", "value": "Bangalore, Karnataka, India", "type": "text"},
            {"key": "experience", "value": "2-3 years", "type": "text"},
            {"key": "currentCompany", "value": "Solar Design Inc", "type": "text"},
            {"key": "noticePeriod", "value": "30 days", "type": "text"},
            {"key": "expectedSalary", "value": "₹6-8 LPA", "type": "text"},
            {"key": "linkedinProfile", "value": "https://linkedin.com/in/johnsmith", "type": "text"},
            {"key": "portfolioLink", "value": "https://drive.google.com/myportfolio", "type": "text"},
            {"key": "coverLetter", "value": "I am excited to apply for the Permit Designer position at RS Solar CAD Group. With 2+ years of experience in solar permit design and proficiency in AutoCAD and Aurora Solar, I am confident I can contribute to your team's success.", "type": "text"},
            {"key": "position", "value": "Permit Designer", "type": "text"},
            {"key": "department", "value": "Permitting & Compliance", "type": "text"}
          ]
        },
        "url": {
          "raw": "http://localhost:5001/api/career/apply",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5001",
          "path": ["api", "career", "apply"]
        }
      }
    },
    {
      "name": "Submit Application - Fresher CAD Designer",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": [
            {"key": "fullName", "value": "Jane Doe", "type": "text"},
            {"key": "email", "value": "jane.doe@example.com", "type": "text"},
            {"key": "phone", "value": "+91 87654 32109", "type": "text"},
            {"key": "currentLocation", "value": "Mumbai, Maharashtra, India", "type": "text"},
            {"key": "experience", "value": "0-1 years", "type": "text"},
            {"key": "currentCompany", "value": "N/A", "type": "text"},
            {"key": "noticePeriod", "value": "Immediate", "type": "text"},
            {"key": "expectedSalary", "value": "₹3-4 LPA", "type": "text"},
            {"key": "linkedinProfile", "value": "https://linkedin.com/in/janedoe", "type": "text"},
            {"key": "portfolioLink", "value": "", "type": "text"},
            {"key": "coverLetter", "value": "As a fresh graduate with a passion for CAD design and renewable energy, I am eager to start my career with RS Solar CAD Group.", "type": "text"},
            {"key": "position", "value": "Fresher CAD Designer", "type": "text"},
            {"key": "department", "value": "Design & Engineering", "type": "text"}
          ]
        },
        "url": {
          "raw": "http://localhost:5001/api/career/apply",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5001",
          "path": ["api", "career", "apply"]
        }
      }
    }
  ]
}
```

---

## 🧪 Testing Workflow

### 1. Test Health Check
```bash
curl http://localhost:5001/api/health
```
✅ Should return: `{"status":"OK","message":"Server is running"}`

### 2. Test Application Submission (No SMTP)
```bash
curl --location 'http://localhost:5001/api/career/apply' \
--form 'fullName="Test User"' \
--form 'email="test@example.com"' \
--form 'phone="+91 1234567890"' \
--form 'currentLocation="Test City"' \
--form 'experience="1-2 years"' \
--form 'position="Test Position"' \
--form 'department="Test Department"'
```
⚠️ Will return SMTP error if not configured

### 3. Test Application Submission (With SMTP Configured)
- Configure SMTP in `/backend/.env`
- Run the same command
- ✅ Should return success and send email

---

## 📊 Response Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | Success | Application submitted and email sent |
| 500 | Server Error | SMTP not configured or other error |

---

## 🔍 Debugging Tips

### Check Backend Logs
Watch the terminal where backend is running to see:
- Request received
- Email sending attempt
- Success or error messages

### Common Errors

1. **Connection Refused**
   - Backend not running
   - Wrong port number
   - Run: `cd backend && npm run dev`

2. **SMTP Authentication Failed**
   - SMTP credentials not configured
   - Wrong password
   - See `SMTP_FIX_GUIDE.md`

3. **File Too Large**
   - Resume file > 5MB
   - Compress or use smaller file

---

## 💡 Quick Test Commands

### Minimal Test (Required Fields Only)
```bash
curl -X POST http://localhost:5001/api/career/apply \
  -F "fullName=Test User" \
  -F "email=test@example.com" \
  -F "phone=+91 1234567890" \
  -F "currentLocation=Test City" \
  -F "experience=1-2 years" \
  -F "position=Test Position" \
  -F "department=Test Dept"
```

### Full Test (All Fields)
Use the complete cURL commands provided above.

---

## 📥 Import to Postman

1. Open Postman
2. Click "Import"
3. Select "Raw text"
4. Paste the JSON collection above
5. Click "Import"
6. Collection will appear in your workspace

---

**Happy Testing! 🚀**
