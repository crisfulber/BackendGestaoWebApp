const express = require('express');
const router = express.Router();
const { getRegistro, createRegistro, updateRegistro, deleteRegistro, getRegistroById } = require('../controllers/registroController');

router.get('/', getRegistro);
router.get('/:id', getRegistroById);
router.post('/', createRegistro);
router.put('/:id', updateRegistro);
router.delete('/:id', deleteRegistro);

module.exports = router;
