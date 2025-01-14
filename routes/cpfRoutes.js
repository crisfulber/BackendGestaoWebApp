const express = require('express');
const router = express.Router();
const { getCPF, createCPF, updateCPF, deleteCPF, getCPFById } = require('../controllers/cpfController');

router.get('/', getCPF);
router.get('/:id', getCPFById);
router.post('/', createCPF);
router.put('/:id', updateCPF);
router.delete('/:id', deleteCPF);

module.exports = router;
