const express = require('express');
const router = express.Router();
const { getEscala, createEscala, updateEscala, deleteEscala, getEscalaById } = require('../controllers/escalaController');

router.get('/', getEscala);
router.get('/:id', getEscalaById);
router.post('/', createEscala);
router.put('/:id', updateEscala);
router.delete('/:id', deleteEscala);

module.exports = router;
