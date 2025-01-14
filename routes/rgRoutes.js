const express = require('express');
const router = express.Router();
const { getRG, createRG, updateRG, deleteRG, getRGById } = require('../controllers/rgController');

router.get('/', getRG);
router.get('/:id', getRGById);
router.post('/', createRG);
router.put('/:id', updateRG);
router.delete('/:id', deleteRG);

module.exports = router;
