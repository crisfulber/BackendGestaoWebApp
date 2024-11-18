// routes/setoresRoutes.js
const express = require('express');
const router = express.Router();
const { getSetores, createSetores, updateSetores, deleteSetores } = require('../controllers/setoresController');

router.get('/', getSetores);
router.post('/', createSetores);
router.put('/:id', updateSetores);
router.delete('/:id', deleteSetores);

module.exports = router;
