const mongoose = require('mongoose');

const careerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String, // Full-time, Part-time, Contract, etc.
        required: true
    },
    location: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: [String], // Array of requirement strings
        required: false
    },
    responsibilities: {
        type: [String],
        required: false
    },
    status: {
        type: String,
        enum: ['active', 'closed'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Career', careerSchema);
