// routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuariosById } = require('../controllers/usuariosController');

router.get('/', getUsuarios);
router.get('/:id', getUsuariosById);
router.post('/', createUsuarios);
router.put('/:id', updateUsuarios);
router.delete('/:id', deleteUsuarios);

module.exports = router;
