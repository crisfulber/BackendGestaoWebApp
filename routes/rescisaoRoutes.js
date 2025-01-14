const express = require('express');
const router = express.Router();
const { getRescisao, createRescisao, updateRescisao, deleteRescisao, getRescisaoById } = require('../controllers/rescisaoController');

router.get('/', getRescisao);
router.get('/:id', getRescisaoById);
router.post('/', createRescisao);
router.put('/:id', updateRescisao);
router.delete('/:id', deleteRescisao);

module.exports = router;
