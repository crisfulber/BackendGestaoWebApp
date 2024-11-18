// routes/horasExtrasRoutes.js
const express = require('express');
const router = express.Router();
const { getHorasExtras, createHorasExtras, updateHorasExtras, deleteHorasExtras } = require('../controllers/horasExtrasController');

router.get('/', getHorasExtras);
router.post('/', createHorasExtras);
router.put('/:id', updateHorasExtras);
router.delete('/:id', deleteHorasExtras);

module.exports = router;
