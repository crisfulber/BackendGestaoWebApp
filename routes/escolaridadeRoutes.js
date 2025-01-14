const express = require('express');
const router = express.Router();
const { getEscolaridade, createEscolaridade, updateEscolaridade, deleteEscolaridade, getEscolaridadeById } = require('../controllers/escolaridadeController');

router.get('/', getEscolaridade);
router.get('/:id', getEscolaridadeById);
router.post('/', createEscolaridade);
router.put('/:id', updateEscolaridade);
router.delete('/:id', deleteEscolaridade);

module.exports = router;
