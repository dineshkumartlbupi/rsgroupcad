const Application = require('../models/Application');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all applications (Admin)
// @route   GET /api/applications
// @access  Private/Admin
const getApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Submit application (Public)
// @route   POST /api/applications
// @access  Public
const createApplication = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            jobTitle,
            position, // Frontend sends 'position' sometimes
            department,
            currentLocation,
            experience,
            currentCompany,
            noticePeriod,
            expectedSalary,
            linkedinProfile,
            portfolioLink,
            coverLetter
        } = req.body;

        // 1. Save to Database
        const application = await Application.create({
            name: fullName, // Map fullName to name
            email,
            phone,
            jobTitle: jobTitle || position, // Fallback
            department,
            currentLocation,
            experience,
            currentCompany,
            noticePeriod,
            expectedSalary,
            linkedinProfile,
            portfolioLink,
            coverLetter,
            resumeUrl: req.file ? 'Attached in Email' : 'Not provided' // Placeholder
        });

        // 2. Send Email
        const emailHTML = `
            <h1>New Job Application</h1>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Position:</strong> ${jobTitle || position}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Current Location:</strong> ${currentLocation}</p>
            <br/>
            <h3>Additional Info:</h3>
            <p><strong>LinkedIn:</strong> <a href="${linkedinProfile}">${linkedinProfile}</a></p>
            <p><strong>Portfolio:</strong> <a href="${portfolioLink}">${portfolioLink}</a></p>
        `;

        try {
            await sendEmail({
                email: process.env.RECIPIENT_EMAIL || 'hr@rscadgroup.com',
                replyTo: email,
                subject: `New Application: ${fullName} for ${jobTitle || position}`,
                html: emailHTML,
                attachments: req.file ? [{
                    filename: req.file.originalname,
                    content: req.file.buffer
                }] : []
            });
        } catch (emailError) {
            console.error('Email send failed:', emailError);
        }

        res.status(201).json({ success: true, data: application });
    } catch (error) {
        console.error("Application Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    getApplications,
    createApplication
};
