// routes/funcaoRegistroRoutes.js
const express = require('express');
const router = express.Router();
const { getFuncaoRegistro, createFuncaoRegistro, updateFuncaoRegistro, deleteFuncaoRegistro } = require('../controllers/funcaoRegistroController');

router.get('/', getFuncaoRegistro);
router.post('/', createFuncaoRegistro);
router.put('/:id', updateFuncaoRegistro);
router.delete('/:id', deleteFuncaoRegistro);

module.exports = router;
