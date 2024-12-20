// routes/feriasRoutes.js
const express = require('express');
const router = express.Router();
const { getFerias, createFerias, updateFerias, deleteFerias, getFeriasById } = require('../controllers/feriasController');

router.get('/', getFerias);
router.get('/:id', getFeriasById);
router.post('/', createFerias);
router.put('/:id', updateFerias);
router.delete('/:id', deleteFerias);

module.exports = router;
