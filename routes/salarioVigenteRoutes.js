// routes/salarioVigenteRoutes.js
const express = require('express');
const router = express.Router();
const { getSalarioVigente, createSalarioVigente, updateSalarioVigente, deleteSalarioVigente } = require('../controllers/salarioVigenteController');

router.get('/', getSalarioVigente);
router.post('/', createSalarioVigente);
router.put('/:id', updateSalarioVigente);
router.delete('/:id', deleteSalarioVigente);

module.exports = router;
