// routes/escalaRoutes.js
const express = require('express');
const router = express.Router();
const { getEscala, createEscala, updateEscala, deleteEscala } = require('../controllers/escalaController');

router.get('/', getEscala);
router.post('/', createEscala);
router.put('/:id', updateEscala);
router.delete('/:id', deleteEscala);

module.exports = router;
