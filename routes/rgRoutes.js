// routes/rgRoutes.js
const express = require('express');
const router = express.Router();
const { getRG, createRG, updateRG, deleteRG } = require('../controllers/rgController');

router.get('/', getRG);
router.post('/', createRG);
router.put('/:id', updateRG);
router.delete('/:id', deleteRG);

module.exports = router;
