// routes/tipoDescAcresRoutes.js
const express = require('express');
const router = express.Router();
const { getTipoDescAcres, createTipoDescAcres, updateTipoDescAcres, deleteTipoDescAcres } = require('../controllers/tipoDescAcresController');

router.get('/', getTipoDescAcres);
router.post('/', createTipoDescAcres);
router.put('/:id', updateTipoDescAcres);
router.delete('/:id', deleteTipoDescAcres);

module.exports = router;
