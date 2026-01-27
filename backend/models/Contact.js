const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
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
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    service: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['new', 'read', 'archived'],
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
