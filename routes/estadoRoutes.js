// routes/estadoRoutes.js
const express = require('express');
const router = express.Router();
const { getEstado, createEstado, updateEstado, deleteEstado } = require('../controllers/estadoController');

router.get('/', getEstado);
router.post('/', createEstado);
router.put('/:id', updateEstado);
router.delete('/:id', deleteEstado);

module.exports = router;
