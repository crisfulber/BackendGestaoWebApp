const express = require('express');
const router = express.Router();
const { getSetorUsuario, createSetorUsuario, updateSetorUsuario, deleteSetorUsuario, getSetorUsuarioById } = require('../controllers/setorUsuarioController');

router.get('/', getSetorUsuario);
router.get('/:id', getSetorUsuarioById);
router.post('/', createSetorUsuario);
router.put('/:id', updateSetorUsuario);
router.delete('/:id', deleteSetorUsuario);

module.exports = router;