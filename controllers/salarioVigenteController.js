// controllers/salarioVigenteController.js
const SalarioVigente = require('../models/SalarioVigente');

const getSalarioVigente = async (req, res) => {
  try {
    const salarioVigente = await SalarioVigente.findAll();
    res.json(salarioVigente);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createSalarioVigente = async (req, res) => {
  try {
    const salarioVigente = await SalarioVigente.create(req.body);
    res.status(201).json(salarioVigente);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateSalarioVigente = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await SalarioVigente.update(req.body, {
      where: { idsalario_vigente: id }
    });
    if (updated) {
      const updatedSalarioVigente = await SalarioVigente.findOne({ where: { idsalario_vigente: id } });
      res.status(200).json(updatedSalarioVigente);
    } else {
      res.status(404).send('Salário Vigente não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteSalarioVigente = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SalarioVigente.destroy({
      where: { idsalario_vigente: id }
    });
    if (deleted) {
      res.status(204).send('Salário Vigente deletado');
    } else {
      res.status(404).send('Salário Vigente não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getSalarioVigente,
  createSalarioVigente,
  updateSalarioVigente,
  deleteSalarioVigente
};
