// routes/decimoTerceiroRoutes.js
const express = require('express');
const router = express.Router();
const { getDecimoTerceiro, createDecimoTerceiro, updateDecimoTerceiro, deleteDecimoTerceiro, getDecimoTerceiroById } = require('../controllers/decimoTerceiroController');

router.get('/', getDecimoTerceiro);
router.get('/:id', getDecimoTerceiroById);
router.post('/', createDecimoTerceiro);
router.put('/:id', updateDecimoTerceiro);
router.delete('/:id', deleteDecimoTerceiro);

module.exports = router;
