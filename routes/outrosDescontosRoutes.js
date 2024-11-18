// routes/outrosDescontosRoutes.js
const express = require('express');
const router = express.Router();
const { getOutrosDescontos, createOutrosDescontos, updateOutrosDescontos, deleteOutrosDescontos } = require('../controllers/outrosDescontosController');

router.get('/', getOutrosDescontos);
router.post('/', createOutrosDescontos);
router.put('/:id', updateOutrosDescontos);
router.delete('/:id', deleteOutrosDescontos);

module.exports = router;
