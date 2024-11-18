// routes/horasFaltasRoutes.js
const express = require('express');
const router = express.Router();
const { getHorasFaltas, createHorasFaltas, updateHorasFaltas, deleteHorasFaltas } = require('../controllers/horasFaltasController');

router.get('/', getHorasFaltas);
router.post('/', createHorasFaltas);
router.put('/:id', updateHorasFaltas);
router.delete('/:id', deleteHorasFaltas);

module.exports = router;
