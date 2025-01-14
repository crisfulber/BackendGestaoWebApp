const express = require('express');
const router = express.Router();
const { getTipoDescAcres, createTipoDescAcres, updateTipoDescAcres, deleteTipoDescAcres, getTipoDescAcresById } = require('../controllers/tipoDescAcresController');

router.get('/', getTipoDescAcres);
router.get('/:id', getTipoDescAcresById);
router.post('/', createTipoDescAcres);
router.put('/:id', updateTipoDescAcres);
router.delete('/:id', deleteTipoDescAcres);

module.exports = router;
