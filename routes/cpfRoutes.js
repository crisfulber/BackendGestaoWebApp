// routes/cpfRoutes.js
const express = require('express');
const router = express.Router();
const { getCPF, createCPF, updateCPF, deleteCPF } = require('../controllers/cpfController');

router.get('/', getCPF);
router.post('/', createCPF);
router.put('/:id', updateCPF);
router.delete('/:id', deleteCPF);

module.exports = router;
