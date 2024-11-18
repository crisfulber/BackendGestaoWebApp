// routes/registroRoutes.js
const express = require('express');
const router = express.Router();
const { getRegistro, createRegistro, updateRegistro, deleteRegistro } = require('../controllers/registroController');

router.get('/', getRegistro);
router.post('/', createRegistro);
router.put('/:id', updateRegistro);
router.delete('/:id', deleteRegistro);

module.exports = router;
