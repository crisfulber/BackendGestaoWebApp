const express = require('express');
const router = express.Router();
const { getHorasExtras, createHorasExtras, updateHorasExtras, deleteHorasExtras, getHorasExtrasById } = require('../controllers/horasExtrasController');

router.get('/', getHorasExtras);
router.get('/:id', getHorasExtrasById);
router.post('/', createHorasExtras);
router.put('/:id', updateHorasExtras);
router.delete('/:id', deleteHorasExtras);

module.exports = router;
