// routes/ctpsRoutes.js
const express = require('express');
const router = express.Router();
const { getCTPS, createCTPS, updateCTPS, deleteCTPS, getCTPSById } = require('../controllers/ctpsController');

router.get('/', getCTPS);
router.get('/:id', getCTPSById);
router.post('/', createCTPS);
router.put('/:id', updateCTPS);
router.delete('/:id', deleteCTPS);

module.exports = router;
