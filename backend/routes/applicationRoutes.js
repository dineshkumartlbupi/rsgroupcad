const express = require('express');
const router = express.Router();
const { getApplications, createApplication } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

router.route('/').get(protect, getApplications).post(upload.single('resume'), createApplication);

module.exports = router;
