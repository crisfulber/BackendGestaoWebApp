// controllers/historicoSalarioController.js
const HistoricoSalario = require('../models/HistoricoSalario');

const getHistoricoSalario = async (req, res) => {
  try {
    const historicoSalario = await HistoricoSalario.findAll();
    res.json(historicoSalario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createHistoricoSalario = async (req, res) => {
  try {
    const historicoSalario = await HistoricoSalario.create(req.body);
    res.status(201).json(historicoSalario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateHistoricoSalario = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await HistoricoSalario.update(req.body, {
      where: { idhistorico_salario: id }
    });
    if (updated) {
      const updatedHistoricoSalario = await HistoricoSalario.findOne({ where: { idhistorico_salario: id } });
      res.status(200).json(updatedHistoricoSalario);
    } else {
      res.status(404).send('Historico de Salario não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteHistoricoSalario = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HistoricoSalario.destroy({
      where: { idhistorico_salario: id }
    });
    if (deleted) {
      res.status(204).send('Historico de Salario deletado');
    } else {
      res.status(404).send('Historico de Salario não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getHistoricoSalario,
  createHistoricoSalario,
  updateHistoricoSalario,
  deleteHistoricoSalario
};
