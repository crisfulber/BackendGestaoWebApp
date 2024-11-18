// routes/funcaoEmpresaRoutes.js
const express = require('express');
const router = express.Router();
const { getFuncaoEmpresa, createFuncaoEmpresa, updateFuncaoEmpresa, deleteFuncaoEmpresa } = require('../controllers/funcaoEmpresaController');

router.get('/', getFuncaoEmpresa);
router.post('/', createFuncaoEmpresa);
router.put('/:id', updateFuncaoEmpresa);
router.delete('/:id', deleteFuncaoEmpresa);

module.exports = router;
