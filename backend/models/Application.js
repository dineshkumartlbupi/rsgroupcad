const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    careerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Career',
        required: false // Optional in case general application
    },
    jobTitle: { // Snapshot of job title at time of application
        type: String,
        required: false
    },
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
    currentLocation: String,
    experience: String,
    currentCompany: String,
    noticePeriod: String,
    expectedSalary: String,
    linkedinProfile: String,
    portfolioLink: String,
    resumeUrl: {
        type: String,
        required: false // Made optional as we might only have email attachment
    },
    coverLetter: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['new', 'reviewed', 'interviewed', 'rejected', 'hired'],
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
