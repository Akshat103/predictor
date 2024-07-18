const express = require('express');
const router = express.Router();
const collegesController = require('../controllers/collegesController');

router.get('/institute-types', collegesController.getUniqueInstituteTypes);
router.get('/institute-names', collegesController.getUniqueInstituteNames);
router.get('/branches', collegesController.getUniqueBranches);
router.get('/classes', collegesController.getUniqueClasses);
router.get('/genders', collegesController.getUniqueGenders);
router.get('/categories', collegesController.getUniqueCategories);
router.get('/mp-domiciles', collegesController.getUniqueMPDomiciles);
router.post('/predict', collegesController.getInstituteDetails);

module.exports = router;
