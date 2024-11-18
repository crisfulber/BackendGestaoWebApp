// routes/setorUsuarioRoutes.js
const express = require('express');
const router = express.Router();
const { getSetorUsuario, createSetorUsuario, updateSetorUsuario, deleteSetorUsuario } = require('../controllers/setorUsuarioController');

router.get('/', getSetorUsuario);
router.post('/', createSetorUsuario);
router.put('/:id', updateSetorUsuario);
router.delete('/:id', deleteSetorUsuario);

module.exports = router;