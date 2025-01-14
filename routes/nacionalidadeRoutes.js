const express = require('express');
const router = express.Router();
const { getNacionalidade, createNacionalidade, updateNacionalidade, deleteNacionalidade, getNacionalidadeById } = require('../controllers/nacionalidadeController');

router.get('/', getNacionalidade);
router.get('/:id', getNacionalidadeById);
router.post('/', createNacionalidade);
router.put('/:id', updateNacionalidade);
router.delete('/:id', deleteNacionalidade);

module.exports = router;
