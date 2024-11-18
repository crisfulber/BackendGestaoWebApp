// routes/dependentesRoutes.js
const express = require('express');
const router = express.Router();
const { getDependentes, createDependentes, updateDependentes, deleteDependentes } = require('../controllers/dependentesController');

router.get('/', getDependentes);
router.post('/', createDependentes);
router.put('/:id', updateDependentes);
router.delete('/:id', deleteDependentes);

module.exports = router;
