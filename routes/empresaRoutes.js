const express = require('express');
const router = express.Router();
const { getEmpresa, createEmpresa, updateEmpresa, deleteEmpresa, getEmpresaById } = require('../controllers/empresaController');

router.get('/', getEmpresa);
router.get('/:id', getEmpresaById);
router.post('/', createEmpresa);
router.put('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);

module.exports = router;
