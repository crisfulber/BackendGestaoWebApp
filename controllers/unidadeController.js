// controllers/unidadeController.js
const Unidade = require('../models/Unidade');

const getUnidade = async (req, res) => {
  try {
    const unidade = await Unidade.findAll();
    res.json(unidade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUnidade = async (req, res) => {
  try {
    const unidade = await Unidade.create(req.body);
    res.status(201).json(unidade);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUnidade = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Unidade.update(req.body, {
      where: { idunidade: id }
    });
    if (updated) {
      const updatedUnidade = await Unidade.findOne({ where: { idunidade: id } });
      res.status(200).json(updatedUnidade);
    } else {
      res.status(404).send('Unidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUnidade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Unidade.destroy({
      where: { idunidade: id }
    });
    if (deleted) {
      res.status(204).send('Unidade deletada');
    } else {
      res.status(404).send('Unidade não encontrada');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUnidade,
  createUnidade,
  updateUnidade,
  deleteUnidade
};
