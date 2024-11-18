// routes/ctpsRoutes.js
const express = require('express');
const router = express.Router();
const { getCTPS, createCTPS, updateCTPS, deleteCTPS } = require('../controllers/ctpsController');

router.get('/', getCTPS);
router.post('/', createCTPS);
router.put('/:id', updateCTPS);
router.delete('/:id', deleteCTPS);

module.exports = router;
