const express = require('express');
const router = express.Router();
const { getDependentes, createDependentes, updateDependentes, deleteDependentes, getDependentesById } = require('../controllers/dependentesController');

router.get('/', getDependentes);
router.get('/:id', getDependentesById);
router.post('/', createDependentes);
router.put('/:id', updateDependentes);
router.delete('/:id', deleteDependentes);

module.exports = router;
