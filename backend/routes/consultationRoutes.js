const express = require('express');
const router = express.Router();
const { getConsultations, createConsultation, createSolarInquiry } = require('../controllers/consultationController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getConsultations).post(createConsultation);
router.post('/solar-installation', createSolarInquiry);

module.exports = router;
