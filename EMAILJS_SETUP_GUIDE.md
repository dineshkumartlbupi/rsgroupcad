# EmailJS Setup Guide for Career Application Form

## Overview
This guide will help you set up EmailJS to send career application emails directly to Hr@rscadgroup.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Office365**
   - **Custom SMTP** (for your domain email)

### For Gmail:
1. Select **Gmail**
2. Click **Connect Account**
3. Sign in with your Gmail account (use Hr@rscadgroup.com if it's a Gmail account)
4. Grant permissions
5. Give your service a name (e.g., "RS CAD Career Applications")
6. Note down the **Service ID** (e.g., `service_rscadgroup`)

### For Custom SMTP (Recommended for professional email):
1. Select **Custom SMTP**
2. Enter your SMTP settings:
   - **SMTP Server**: Your email provider's SMTP server
   - **Port**: Usually 587 (TLS) or 465 (SSL)
   - **Username**: Hr@rscadgroup.com
   - **Password**: Your email password
   - **Secure**: Enable TLS/SSL
3. Test the connection
4. Save and note down the **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Give it a name: "Career Application Template"
4. Use this template structure:

### Template Content:

**Subject:**
```
New Job Application - {{position}}
```

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #001528, #0033A0); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 25px; border-left: 4px solid #0033A0; padding-left: 15px; }
        .section-title { font-size: 18px; font-weight: bold; color: #0033A0; margin-bottom: 10px; }
        .info-row { margin: 8px 0; }
        .label { font-weight: bold; color: #555; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Career Application</h1>
        <p>RS Solar CAD Group - Career Portal</p>
    </div>
    
    <div class="content">
        <div class="section">
            <div class="section-title">Position Applied For</div>
            <div class="info-row"><span class="label">Position:</span> {{position}}</div>
            <div class="info-row"><span class="label">Department:</span> {{department}}</div>
            <div class="info-row"><span class="label">Application Date:</span> {{application_date}}</div>
        </div>

        <div class="section">
            <div class="section-title">Personal Information</div>
            <div class="info-row"><span class="label">Full Name:</span> {{from_name}}</div>
            <div class="info-row"><span class="label">Email:</span> {{from_email}}</div>
            <div class="info-row"><span class="label">Phone:</span> {{phone}}</div>
            <div class="info-row"><span class="label">Location:</span> {{location}}</div>
        </div>

        <div class="section">
            <div class="section-title">Professional Information</div>
            <div class="info-row"><span class="label">Total Experience:</span> {{experience}}</div>
            <div class="info-row"><span class="label">Current Company:</span> {{current_company}}</div>
            <div class="info-row"><span class="label">Notice Period:</span> {{notice_period}}</div>
            <div class="info-row"><span class="label">Expected Salary:</span> {{expected_salary}}</div>
        </div>

        <div class="section">
            <div class="section-title">Additional Information</div>
            <div class="info-row"><span class="label">LinkedIn:</span> {{linkedin}}</div>
            <div class="info-row"><span class="label">Portfolio:</span> {{portfolio}}</div>
            <div class="info-row"><span class="label">Resume:</span> {{resume_name}}</div>
        </div>

        <div class="section">
            <div class="section-title">Cover Letter</div>
            <p style="white-space: pre-wrap;">{{cover_letter}}</p>
        </div>
    </div>

    <div class="footer">
        <p>This application was submitted through the RS Solar CAD Group Career Portal</p>
        <p>Please contact the candidate at {{from_email}} or {{phone}}</p>
    </div>
</body>
</html>
```

4. Save the template and note down the **Template ID** (e.g., `template_career`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key (e.g., `abc123XYZ`)

## Step 5: Update Your Code

Open `/src/pages/CareerApplication.jsx` and update these lines (around line 102-104):

```javascript
const SERVICE_ID = 'service_rscadgroup'; // Replace with your actual Service ID
const TEMPLATE_ID = 'template_career';   // Replace with your actual Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // Replace with your actual Public Key
```

Replace with your actual values:
```javascript
const SERVICE_ID = 'service_xxxxxxx';    // From Step 2
const TEMPLATE_ID = 'template_xxxxxxx';  // From Step 3
const PUBLIC_KEY = 'your_public_key';    // From Step 4
```

## Step 6: Test the Integration

1. Save your changes
2. Go to your career application form
3. Fill out the form with test data
4. Submit the application
5. Check Hr@rscadgroup.com inbox for the email

## Troubleshooting

### Email not received?
1. Check EmailJS dashboard → **Email Log** to see if the email was sent
2. Check spam folder in Hr@rscadgroup.com
3. Verify all credentials are correct
4. Make sure your email service is properly connected

### Error messages?
1. Open browser console (F12) to see detailed error messages
2. Check if all three IDs (Service, Template, Public Key) are correct
3. Ensure EmailJS service is active and not suspended

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month**
- **2 email services**
- **Unlimited templates**

For higher volume, consider upgrading to a paid plan.

## Alternative: Using Your Own SMTP Server

If you prefer to use your own SMTP server directly (without EmailJS), you'll need to create a backend API. This requires:
1. A Node.js/Express backend
2. Nodemailer package
3. Hosting for the backend

Let me know if you need help setting up a custom backend solution!

## Security Notes

⚠️ **Important**: Never commit your EmailJS credentials to public repositories. Consider using environment variables for production.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Need Help?** Contact your development team or refer to the EmailJS documentation for detailed setup instructions.
