const Consultation = require('../models/Consultation');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all consultations (Admin)
// @route   GET /api/consultations
// @access  Private/Admin
const getConsultations = async (req, res) => {
    try {
        const consultations = await Consultation.find().sort({ createdAt: -1 });
        res.status(200).json(consultations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Request consultation (Public)
// @route   POST /api/consultations
// @access  Public
const createConsultation = async (req, res) => {
    try {
        const consultation = await Consultation.create(req.body);

        const emailHTML = `
            <h1>New Consultation Request</h1>
            <p><strong>Name:</strong> ${consultation.name}</p>
            <p><strong>Email:</strong> ${consultation.email}</p>
            <p><strong>Phone:</strong> ${consultation.phone}</p>
            <p><strong>Details:</strong> ${consultation.message || 'No details provided'}</p>
        `;

        try {
            await sendEmail({
                email: process.env.RECIPIENT_EMAIL || 'contact@rscadgroup.com',
                replyTo: consultation.email,
                subject: `Consultation Request from ${consultation.name}`,
                html: emailHTML
            });
        } catch (emailError) {
            console.error('Email send failed:', emailError);
        }

        res.status(201).json(consultation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createSolarInquiry = async (req, res) => {
    try {
        // Map frontend fields (fullName, whatsappNumber) to Model fields (name, phone)
        const { fullName, whatsappNumber, monthlyBill, pincode, city, email, agreeToTerms } = req.body;

        const consultation = await Consultation.create({
            name: fullName,
            email: email,
            phone: whatsappNumber,
            city: city,
            pincode: pincode,
            monthlyBill: monthlyBill,
            serviceType: 'Solar Installation Inquiry',
            message: `Monthly Bill: ${monthlyBill}, City: ${city}, Pincode: ${pincode}`,
            details: { agreeToTerms }
        });

        const emailHTML = `
            <h1>New Solar Installation Inquiry</h1>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${whatsappNumber}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Pincode:</strong> ${pincode}</p>
            <p><strong>Monthly Bill:</strong> ₹${monthlyBill}</p>
        `;

        try {
            await sendEmail({
                email: process.env.RECIPIENT_EMAIL || 'contact@rscadgroup.com',
                replyTo: email,
                subject: `Solar Inquiry: ${city} - ₹${monthlyBill}`,
                html: emailHTML
            });
        } catch (emailError) {
            console.error('Email send failed:', emailError);
        }

        res.status(201).json({ success: true, message: 'Inquiry submitted successfully', id: consultation._id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    getConsultations,
    createConsultation,
    createSolarInquiry
};
