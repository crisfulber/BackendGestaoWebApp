// routes/nacionalidadeRoutes.js
const express = require('express');
const router = express.Router();
const { getNacionalidade, createNacionalidade, updateNacionalidade, deleteNacionalidade } = require('../controllers/nacionalidadeController');

router.get('/', getNacionalidade);
router.post('/', createNacionalidade);
router.put('/:id', updateNacionalidade);
router.delete('/:id', deleteNacionalidade);

module.exports = router;
