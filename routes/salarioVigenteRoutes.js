// routes/salarioVigenteRoutes.js
const express = require('express');
const router = express.Router();
const { getSalarioVigente, createSalarioVigente, updateSalarioVigente, deleteSalarioVigente, getSalarioVigenteById } = require('../controllers/salarioVigenteController');

router.get('/', getSalarioVigente);
router.get('/:id', getSalarioVigenteById);
router.post('/', createSalarioVigente);
router.put('/:id', updateSalarioVigente);
router.delete('/:id', deleteSalarioVigente);

module.exports = router;
