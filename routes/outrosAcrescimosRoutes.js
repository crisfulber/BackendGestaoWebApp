// routes/outrosAcrescimosRoutes.js
const express = require('express');
const router = express.Router();
const { getOutrosAcrescimos, createOutrosAcrescimos, updateOutrosAcrescimos, deleteOutrosAcrescimos } = require('../controllers/outrosAcrescimosController');

router.get('/', getOutrosAcrescimos);
router.post('/', createOutrosAcrescimos);
router.put('/:id', updateOutrosAcrescimos);
router.delete('/:id', deleteOutrosAcrescimos);

module.exports = router;
