// routes/funcaoEmpresaRoutes.js
const express = require('express');
const router = express.Router();
const { getFuncaoEmpresa, createFuncaoEmpresa, updateFuncaoEmpresa, deleteFuncaoEmpresa, getFuncaoEmpresaById } = require('../controllers/funcaoEmpresaController');

router.get('/', getFuncaoEmpresa);
router.get('/:id', getFuncaoEmpresaById);
router.post('/', createFuncaoEmpresa);
router.put('/:id', updateFuncaoEmpresa);
router.delete('/:id', deleteFuncaoEmpresa);

module.exports = router;
