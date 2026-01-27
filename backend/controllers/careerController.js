const Career = require('../models/Career');

// @desc    Get all careers (Public)
// @route   GET /api/careers
// @access  Public
const getCareers = async (req, res) => {
    try {
        const careers = await Career.find({ status: 'active' }).sort({ createdAt: -1 });
        res.status(200).json(careers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all careers (Admin)
// @route   GET /api/careers/admin
// @access  Private/Admin
const getAdminCareers = async (req, res) => {
    try {
        const careers = await Career.find().sort({ createdAt: -1 });
        res.status(200).json(careers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single career
// @route   GET /api/careers/:id
// @access  Public
const getCareerById = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) {
            res.status(404).json({ message: 'Career not found' });
            return;
        }
        res.status(200).json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a career (Admin)
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = async (req, res) => {
    if (!req.body.title || !req.body.description) {
        res.status(400).json({ message: 'Please add title and description' });
        return;
    }

    try {
        const career = await Career.create(req.body);
        res.status(201).json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a career (Admin)
// @route   PUT /api/careers/:id
// @access  Private/Admin
const updateCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);

        if (!career) {
            res.status(404).json({ message: 'Career not found' });
            return;
        }

        const updatedCareer = await Career.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json(updatedCareer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a career (Admin)
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);

        if (!career) {
            res.status(404);
            throw new Error('Career not found');
        }

        await career.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCareers,
    getCareerById,
    getAdminCareers,
    createCareer,
    updateCareer,
    deleteCareer
};
