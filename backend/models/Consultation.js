const mongoose = require('mongoose');

const consultationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: false
    },
    serviceType: {
        type: String, // Solar Design, EV Charging, etc.
        required: false
    },
    message: {
        type: String,
        required: false
    },
    // Solar Installation Specific Fields
    city: { type: String },
    pincode: { type: String },
    monthlyBill: { type: String },
    details: { type: Object }, // Store any extra JSON data
    status: {
        type: String,
        enum: ['new', 'contacted', 'completed'],
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Consultation', consultationSchema);
