// routes/outrosAcrescimosRoutes.js
const express = require('express');
const router = express.Router();
const { getOutrosAcrescimos, createOutrosAcrescimos, updateOutrosAcrescimos, deleteOutrosAcrescimos, getOutrosAcrescimosById } = require('../controllers/outrosAcrescimosController');

router.get('/', getOutrosAcrescimos);
router.get('/:id', getOutrosAcrescimosById);
router.post('/', createOutrosAcrescimos);
router.put('/:id', updateOutrosAcrescimos);
router.delete('/:id', deleteOutrosAcrescimos);

module.exports = router;
