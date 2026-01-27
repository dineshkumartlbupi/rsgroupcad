const express = require('express');
const router = express.Router();
const { getCareers, getAdminCareers, createCareer, deleteCareer, getCareerById, updateCareer } = require('../controllers/careerController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getCareers).post(protect, createCareer);
router.route('/admin').get(protect, getAdminCareers);
router.route('/:id').get(getCareerById).delete(protect, deleteCareer).put(protect, updateCareer);

module.exports = router;
