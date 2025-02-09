const express = require('express');
const router = express.Router();
const { getSetores, createSetores, updateSetores, deleteSetores, getSetoresById } = require('../controllers/setoresController');

router.get('/', getSetores);
router.get('/:id', getSetoresById);
router.post('/', createSetores);
router.put('/:id', updateSetores);
router.delete('/:id', deleteSetores);

module.exports = router;
