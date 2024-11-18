// routes/rescisaoRoutes.js
const express = require('express');
const router = express.Router();
const { getRescisao, createRescisao, updateRescisao, deleteRescisao } = require('../controllers/rescisaoController');

router.get('/', getRescisao);
router.post('/', createRescisao);
router.put('/:id', updateRescisao);
router.delete('/:id', deleteRescisao);

module.exports = router;
