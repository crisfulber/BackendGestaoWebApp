// routes/municipioRoutes.js
const express = require('express');
const router = express.Router();
const { getMunicipio, createMunicipio, updateMunicipio, deleteMunicipio } = require('../controllers/municipioController');

router.get('/', getMunicipio);
router.post('/', createMunicipio);
router.put('/:id', updateMunicipio);
router.delete('/:id', deleteMunicipio);

module.exports = router;
