// routes/empresaRoutes.js
const express = require('express');
const router = express.Router();
const { getEmpresa, createEmpresa, updateEmpresa, deleteEmpresa } = require('../controllers/empresaController');

router.get('/', getEmpresa);
router.post('/', createEmpresa);
router.put('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);

module.exports = router;
