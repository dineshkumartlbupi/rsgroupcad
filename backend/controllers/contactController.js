const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

// @desc    Get all contacts (Admin)
// @route   GET /api/contacts
// @access  Private/Admin
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new contact message (Public)
// @route   POST /api/contacts
// @access  Public
const createContact = async (req, res) => {
    try {
        console.log('createContact Payload:', req.body);

        // Map fullName to name if needed
        const contactData = {
            ...req.body,
            name: req.body.name || req.body.fullName
        };

        // 1. Save to Database
        const contact = await Contact.create(contactData);

        // 2. Send Email
        const emailHTML = `
            <h1>New Contact Message</h1>
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${contact.subject || 'General Inquiry'}</p>
            <p><strong>Message:</strong><br>${contact.message}</p>
        `;

        try {
            await sendEmail({
                email: process.env.RECIPIENT_EMAIL || 'contact@rscadgroup.com',
                replyTo: contact.email,
                subject: `New Contact: ${contact.subject || 'General Inquiry'}`,
                html: emailHTML
            });
        } catch (emailError) {
            console.error('Email send failed:', emailError);
            // We don't fail the request if email fails, but we log it
        }

        res.status(201).json({
            success: true,
            data: contact,
            message: 'Message sent successfully'
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a contact (Admin)
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            res.status(404);
            throw new Error('Contact not found');
        }

        await contact.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getContacts,
    createContact,
    deleteContact
};
