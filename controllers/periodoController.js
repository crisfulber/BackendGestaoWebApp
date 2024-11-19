// controllers/periodoController.js
const Periodo = require('../models/Periodo');

const getPeriodo = async (req, res) => {
  try {
    const periodo = await Periodo.findAll();
    res.json(periodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPeriodo = async (req, res) => {
  try {
    const periodo = await Periodo.create(req.body);
    res.status(201).json(periodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatePeriodo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Periodo.update(req.body, {
      where: { idperiodo: id }
    });
    if (updated) {
      const updatedPeriodo = await Periodo.findOne({ where: { idperiodo: id } });
      res.status(200).json(updatedPeriodo);
    } else {
      res.status(404).send('Periodo não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletePeriodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Periodo.destroy({
      where: { idperiodo: id }
    });
    if (deleted) {
      res.status(204).send('Periodo deletado');
    } else {
      res.status(404).send('Periodo não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getPeriodo,
  createPeriodo,
  updatePeriodo,
  deletePeriodo
};
