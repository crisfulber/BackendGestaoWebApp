const express = require('express');
const router = express.Router();
const { getFuncaoRegistro, createFuncaoRegistro, updateFuncaoRegistro, deleteFuncaoRegistro, getFuncaoRegistroById } = require('../controllers/funcaoRegistroController');

router.get('/', getFuncaoRegistro);
router.get('/:id', getFuncaoRegistroById);
router.post('/', createFuncaoRegistro);
router.put('/:id', updateFuncaoRegistro);
router.delete('/:id', deleteFuncaoRegistro);

module.exports = router;
